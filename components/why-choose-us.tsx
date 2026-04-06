import { Check } from 'lucide-react'

const reasons = [
  {
    title: 'Homemade Quality',
    description: 'Everything we serve is made with care and the freshest ingredients.',
  },
  {
    title: 'Community Focused',
    description: 'Proudly serving as a gathering place for the Radcliffe community.',
  },
  {
    title: 'Family-Friendly Atmosphere',
    description: 'Comfortable seating, accessible facilities, and a warm welcome for all ages.',
  },
  {
    title: 'Something for Everyone',
    description: 'From savory pizzas and hot coffee to sweet treats and unique local gifts.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">
            Why Choose The Bakery?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Check className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{reason.title}</h3>
                <p className="text-primary-foreground/80">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
