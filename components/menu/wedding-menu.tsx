import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const weddingServices = [
  {
    title: 'Wedding Cake',
    description: 'All wedding cakes are custom priced based on size, flavor and details. (Base prices listed on our price list)',
  },
  {
    title: 'Cupcakes',
    description: 'Cupcakes purchased along with a wedding cake are $16 dozen with a maximum of 4 different flavors. We also have 2 beautiful cupcake stands available to display your cupcakes on. Included with our "Set Up Fee"',
  },
  {
    title: 'Other Desserts',
    description: 'Want something unique? We make all sorts of beautiful desserts including mini pies, individual fruit pizzas, sugar cookies and much more. We would love to brainstorm with you to make your dessert even more special!',
  },
]

const pricingDetails = [
  {
    title: 'Deposit',
    description: 'A non-refundable deposit of $100 is required to hold your wedding date. This deposit will be taken off of the final payment.',
  },
  {
    title: 'Payment',
    description: 'Final numbers on your order are due 2 weeks before the wedding. Final payment is due 1 week before the wedding.',
  },
  {
    title: 'Set-Up Fee',
    description: 'Includes delivery, set-up of cake and dessert, use of one of our beautiful cupcake stands, cake stand, and pack up after the wedding (usually around 9:30pm) $150 + 1 trip of mileage',
  },
  {
    title: 'Delivery',
    description: '$50 + mileage',
  },
]

export function WeddingMenu() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">Wedding Services</h2>
        <p className="text-muted-foreground">Make your special day even sweeter</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Services */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif font-bold text-primary">Our Services</h3>
          
          {weddingServices.map((service, index) => (
            <Card key={service.title}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing & Terms */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif font-bold text-primary">Pricing & Terms</h3>
          
          {pricingDetails.map((detail) => (
            <Card key={detail.title}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-foreground">{detail.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{detail.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <Card className="bg-primary/10 border-primary/20">
        <CardContent className="pt-6 text-center">
          <h3 className="text-xl font-serif font-bold text-foreground mb-3">Ready to Start Planning?</h3>
          <p className="text-muted-foreground mb-4">
            {"We'd love to be a part of your special day! Contact us to schedule a consultation and tasting."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:515-899-2155"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Call Us: 515-899-2155
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-md border border-primary bg-background px-6 py-3 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-accent"
            >
              Send a Message
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
