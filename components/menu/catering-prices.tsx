import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const mealOptions = [
  { name: 'Base Meal', price: '$10.00', description: 'One entree (not including smoked entrees), one side, and a bread.' },
  { name: 'Smoked Meal', price: '$12.50', description: 'One smoked entree, side and bread.' },
  { name: 'Two Entrees', price: '$12.50', description: 'Order 3 of our regular entrees for guests to choose from, side & bread.' },
  { name: 'Best of Both Worlds', price: '$15.00', description: 'One Smoked Entree and one Regular Entree, side and bread.' },
  { name: 'Just the Best', price: '$17.50', description: 'Two Smoked Entrees, side & bread.' },
]

const desserts = [
  { name: 'Pie', price: '$3.00', description: 'Choose from any of our made from scratch pies. We make cream and fruit pies. Homemade fillings. Ask for a full list of options!' },
  { name: 'Cupcake', price: '$1.50', description: 'Triple stacked and sweet, connected on top perfectly! Choose from our full flavors Nutella Fudge, Oreo, Carrot, or 5 more at...' },
  { name: 'Cake or Dessert', price: '$2.00', description: 'Choose either our Italian Love Cake, Lemon Cream Cake, or Butter Cake - or one 2 puddings, Cream Puff Dessert.' },
  { name: 'Mini Bundt Cakes', price: '$3.00', description: 'Choose from White Chocolate Raspberry, Pumpkin, Cinnamon Lemon Blueberry or Apple. All served with a homemade sauce.' },
  { name: 'Individual Fruit Pizza', price: '$2.50', description: "The Bakery's famous sugar cookie topped with cream cheese frosting and fresh fruit." },
  { name: "Ashby's Ice Cream", price: '$3.00' },
]

const addOns = [
  { name: 'Side', price: '$2.50', description: 'Choose from any of our sides.' },
  { name: 'Starter', price: '$3.00', description: 'Veggie Platter, Fresh Fruit or Wings. Any of them make the perfect starter!' },
  { name: 'Bread', price: '$.50', description: 'Choose extra servings of bread or a second option.' },
]

const drinks = [
  { name: 'Homemade Lemonade', price: '$2.00' },
  { name: 'Iced Tea', price: '$2.00' },
  { name: 'Coffee', price: '$2.00' },
  { name: 'Water Bottle', price: '$1.00' },
]

export function CateringPrices() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">Catering Prices</h2>
        <p className="text-muted-foreground">Per Person Pricing</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Meal Options */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="font-serif text-xl text-primary">Meal Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mealOptions.map((item) => (
              <div key={item.name} className="border-b border-border pb-3 last:border-0 last:pb-0">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <span className="font-medium text-foreground">{item.name}</span>
                  <span className="text-primary font-bold">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Desserts */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="font-serif text-xl text-primary">Desserts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {desserts.map((item) => (
              <div key={item.name} className="border-b border-border pb-3 last:border-0 last:pb-0">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <span className="font-medium text-foreground">{item.name}</span>
                  <span className="text-primary font-bold">{item.price}</span>
                </div>
                {item.description && (
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Add-Ons */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="font-serif text-xl text-primary">Add-Ons</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {addOns.map((item) => (
              <div key={item.name} className="border-b border-border pb-3 last:border-0 last:pb-0">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <span className="font-medium text-foreground">{item.name}</span>
                  <span className="text-primary font-bold">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Drinks */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="font-serif text-xl text-primary">Drinks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {drinks.map((item) => (
              <div key={item.name} className="flex items-baseline justify-between gap-2">
                <span className="font-medium text-foreground">{item.name}</span>
                <span className="text-primary font-bold">{item.price}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Service Options */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <Badge variant="outline" className="text-base px-4 py-2">
                Delivery Only: $50
              </Badge>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Badge variant="outline" className="text-base px-4 py-2">
                Full Service: $1 per person
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
