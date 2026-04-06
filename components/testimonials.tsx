import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    content: 'A true hidden gem! We love stopping here on our road trips for the incredible food and the warmest service. The cinnamon rolls are out of this world!',
    author: 'Sarah M.',
    role: 'Frequent Visitor',
  },
  {
    content: 'The best hub for our community. Whether it\'s the delicious lunch specials or the amazing pizza, the portions are always generous and the quality is top-notch.',
    author: 'Mike T.',
    role: 'Local Resident',
  },
  {
    content: 'Such a fantastic spot for a family treat. The ice cream is wonderful, and we always find something beautiful in the gift and craft section.',
    author: 'Jennifer L.',
    role: 'Family of 4',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
            What Our Neighbors Say
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-balance">
            Loved by Our Community
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary border-border/50">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
