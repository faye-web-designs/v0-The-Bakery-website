import {
  consumeStream,
  convertToModelMessages,
  streamText,
  UIMessage,
} from 'ai'
import { headers } from 'next/headers'

export const maxDuration = 30

// Simple in-memory rate limiting for chat
const chatRateLimit = new Map<string, { count: number; timestamp: number }>()
const CHAT_RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_CHAT_REQUESTS = 20 // More generous for chat

function checkChatRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = chatRateLimit.get(ip)
  
  if (!record || now - record.timestamp > CHAT_RATE_LIMIT_WINDOW) {
    chatRateLimit.set(ip, { count: 1, timestamp: now })
    return true
  }
  
  if (record.count >= MAX_CHAT_REQUESTS) {
    return false
  }
  
  record.count++
  return true
}

// Sanitize user input
function sanitizeMessage(message: string): string {
  return message
    .trim()
    .slice(0, 1000) // Limit message length
}

const BAKERY_SYSTEM_PROMPT = `You are a friendly and helpful assistant for The Bakery, a beloved local bakery and community hub in Radcliffe, Iowa.

About The Bakery:
- Location: 213 Isabella St, Radcliffe, IA 50230
- Phone: 515-899-2155
- Known for: Giant homemade cinnamon rolls, deep-dish pizzas, hand-scooped ice cream, and unique local gifts

Hours:
- Wednesday - Thursday: 10:00 AM - 4:00 PM (Lunch & Bakery)
- Friday: 6:00 AM - 9:00 PM (Breakfast, Lunch & Pizza Night)
- Sunday: 5:00 PM - 9:00 PM (Pizza Night)
- Closed: Monday, Tuesday, and Saturday

Services:
1. Artisan Bakery & Breakfast - Famous giant cinnamon rolls and fresh pastries
2. Hearty Lunch & Pizza Nights - Generous lunch specials and Friday/Sunday pizza nights
3. Ice Cream Parlor - Hand-scooped ice cream
4. Gifts & Local Crafts - Unique handmade items and local products

Guidelines:
- Be warm, friendly, and welcoming like a small-town neighbor
- Provide accurate information about hours, location, and services
- If asked about menu items you're not certain about, encourage them to call for the current menu
- Highlight the community-focused, family-friendly atmosphere
- If asked about reservations or large orders, suggest calling ahead
- Keep responses concise but helpful
- Never provide any information unrelated to The Bakery
- If asked about topics outside the bakery, politely redirect to bakery-related topics`

export async function POST(req: Request) {
  try {
    // Get client IP for rate limiting
    const headersList = await headers()
    const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown'
    
    // Check rate limit
    if (!checkChatRateLimit(ip)) {
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const { messages }: { messages: UIMessage[] } = await req.json()

    // Validate messages array
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Invalid request' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Limit conversation length to prevent abuse
    const recentMessages = messages.slice(-10)

    const result = streamText({
      model: 'openai/gpt-4o-mini',
      system: BAKERY_SYSTEM_PROMPT,
      messages: await convertToModelMessages(recentMessages),
      abortSignal: req.signal,
      maxOutputTokens: 500, // Limit response length
    })

    return result.toUIMessageStreamResponse({
      originalMessages: recentMessages,
      consumeSseStream: consumeStream,
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return new Response(
      JSON.stringify({ error: 'Something went wrong' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
