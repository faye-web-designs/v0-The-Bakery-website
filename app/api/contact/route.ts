import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

// Simple in-memory rate limiting (use Redis in production)
const rateLimit = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 5

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimit.get(ip)
  
  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { count: 1, timestamp: now })
    return true
  }
  
  if (record.count >= MAX_REQUESTS) {
    return false
  }
  
  record.count++
  return true
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim()
    .slice(0, 5000) // Limit length
}

export async function POST(req: Request) {
  try {
    // Get client IP for rate limiting
    const headersList = await headers()
    const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown'
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await req.json()
    const { name, email, phone, message, honeypot, consent } = body

    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      // Silently accept but don't process
      return NextResponse.json(
        { success: true, message: 'Thank you for your message! We will get back to you soon.' },
        { status: 200 }
      )
    }

    // Check GDPR consent
    if (!consent) {
      return NextResponse.json(
        { error: 'Please agree to our privacy policy to submit the form.' },
        { status: 400 }
      )
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Sanitize all inputs
    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = sanitizeInput(email)
    const sanitizedPhone = sanitizeInput(phone || '')
    const sanitizedMessage = sanitizeInput(message)

    // Validate name length
    if (sanitizedName.length < 2 || sanitizedName.length > 100) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      )
    }

    // Email validation with stricter regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if (!emailRegex.test(sanitizedEmail) || sanitizedEmail.length > 254) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Validate message length
    if (sanitizedMessage.length < 10 || sanitizedMessage.length > 2000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 2000 characters' },
        { status: 400 }
      )
    }

    // Phone validation (optional field)
    if (sanitizedPhone) {
      const phoneRegex = /^[\d\s\-\(\)\+\.]{7,20}$/
      if (!phoneRegex.test(sanitizedPhone)) {
        return NextResponse.json(
          { error: 'Please provide a valid phone number' },
          { status: 400 }
        )
      }
    }

    // Log sanitized submission (in production, send email or save to database)
    console.log('Contact form submission:', { 
      name: sanitizedName, 
      email: sanitizedEmail, 
      phone: sanitizedPhone, 
      message: sanitizedMessage,
      timestamp: new Date().toISOString(),
      ip: ip.split(',')[0] // First IP in chain
    })

    return NextResponse.json(
      { success: true, message: 'Thank you for your message! We will get back to you soon.' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
