import { Croissant, Pizza, IceCream, Gift } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    icon: Croissant,
    title: 'Artisan Bakery & Breakfast Staples',
    description: 'Indulge in our signature homemade baked goods. We are best known for our legendary, giant cinnamon rolls and a rotating selection of fresh pastries that make every morning feel like a special occasion.',
  },
  {
    icon: Pizza,
    title: 'Hearty Lunch & Pizza Nights',
    description: 'Join us for generous portions of tasty lunch specials during the week. On Friday and Sunday evenings, don\'t miss our famous deep-dish pizzas - crafted with fresh toppings and a perfect crust.',
  },
  {
    icon: IceCream,
    title: 'Ice Cream Parlor',
    description: 'Cool off with our selection of hand-scooped ice cream. Perfect for a road-trip pit stop or a sweet treat after a local game.',
  },
  {
    icon: Gift,
    title: 'Gifts & Local Crafts',
    description: 'Browse our curated gift shop featuring unique crafts and local items. It\'s the perfect place to find a thoughtful present while you wait for your order.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
            Our Menu
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-balance">
            Something Delicious for Everyone
          </h2>
          <p className="text-lg text-muted-foreground">
            From fresh-baked morning treats to savory pizza nights, we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="bg-card border-border/50">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
