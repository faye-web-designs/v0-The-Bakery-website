import { Phone, MapPin, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ContactForm } from './contact-form'

const hours = [
  { day: 'Wednesday - Thursday', time: '10:00 AM - 4:00 PM', note: 'Lunch & Bakery' },
  { day: 'Friday', time: '6:00 AM - 9:00 PM', note: 'Breakfast, Lunch & Pizza Night' },
  { day: 'Sunday', time: '5:00 PM - 9:00 PM', note: 'Pizza Night' },
  { day: 'Monday, Tuesday, Saturday', time: 'Closed', note: null },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-balance">
            Visit Us or Get in Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info & Map */}
          <div className="space-y-6">
            <Card className="bg-secondary border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-serif">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium">The Bakery</p>
                <p className="text-muted-foreground">213 Isabella St</p>
                <p className="text-muted-foreground">Radcliffe, IA 50230</p>
                <a
                  href="tel:515-899-2155"
                  className="flex items-center gap-2 mt-3 text-primary hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  515-899-2155
                </a>
              </CardContent>
            </Card>

            <Card className="bg-secondary border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-serif">
                  <Clock className="h-5 w-5 text-primary" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {hours.map((item) => (
                    <li key={item.day} className="flex justify-between items-start gap-4">
                      <div>
                        <p className="font-medium text-foreground">{item.day}</p>
                        {item.note && (
                          <p className="text-sm text-muted-foreground">{item.note}</p>
                        )}
                      </div>
                      <p className={`text-sm ${item.time === 'Closed' ? 'text-muted-foreground' : 'text-foreground'}`}>
                        {item.time}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden border border-border h-[200px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.5651376977047!2d-93.4704667!3d42.2315611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87edefbe6a5a5a5f%3A0x1234567890abcdef!2s213%20Isabella%20St%2C%20Radcliffe%2C%20IA%2050230!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Bakery location on Google Maps"
              />
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="font-serif">Send Us a Message</CardTitle>
              <p className="text-muted-foreground text-sm">
                Have a question or want to place a large order? We&apos;d love to hear from you!
              </p>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
