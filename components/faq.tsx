import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Do you offer dine-in or takeout?',
    answer: 'Yes! We offer a cozy dine-in experience as well as quick takeout for those on the go.',
  },
  {
    question: 'When can I get pizza?',
    answer: 'Our popular pizza nights are currently held on Friday and Sunday evenings.',
  },
  {
    question: 'Is there parking available?',
    answer: 'Absolutely. We have free street parking and a dedicated lot for our customers.',
  },
  {
    question: 'Do you accept credit cards?',
    answer: 'Yes, we accept credit cards, debit cards, and NFC mobile payments for your convenience.',
  },
  {
    question: 'Can I place a large order for an event?',
    answer: 'Of course! Please call us at 515-899-2155 to discuss large orders or catering needs. We recommend placing orders at least 24 hours in advance.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-balance">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
