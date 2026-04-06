import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const breakfastItems = [
  { name: 'Biscuits & Gravy', price: '$9.00', description: 'All you can eat. Sausage gravy served on hot made from scratch biscuits.' },
  { name: 'Daily Special', price: '$8.00', description: "This morning's daily breakfast special served with your choice of side." },
  { name: 'Breakfast on the Go', price: '$6.50', description: 'Daily Breakfast Sandwich served with your choice of side.' },
  { name: 'Breakfast Sides', price: '$2.50', description: 'Fruit & Yogurt Parfait, Muffin, Applesauce, or Breakfast Tots.' },
]

const lunchItems = [
  { name: 'Soup of the Day', price: '$6.00', description: 'A hearty bowl of soup served with fresh bread.' },
  { name: 'Soup & Sandwich', price: '$8.50', description: 'Soup of the Day, Sandwich & Pickle.' },
  { name: 'Sandwich & Side', price: '$8.00', description: 'Daily Lunch Sandwich served with a side of your choice.' },
  { name: 'Lunch Sides', price: '$2.50', description: 'Homemade Potato Salad, Pasta Salad, Side Salad, Cottage Cheese, or Applesauce.' },
]

const pizzaItems = [
  { name: "Angela's Deep Dish", price: 'Starting at $20.00', description: 'Our signature deep dish pizza.' },
  { name: "It's All Good Thin Crust", price: 'Starting at $16.00', description: 'Classic thin crust pizza.' },
]

const drinkItems = [
  { name: 'Hot Coffee', price: '$1.50' },
  { name: 'Hot Chocolate', price: '$1.50' },
  { name: 'Real Lemonade', price: '$2.00' },
  { name: 'Peach Iced Tea', price: '$2.00' },
  { name: 'Drink from Cooler', price: 'As Marked' },
]

const iceCreamItems = [
  { name: '1 Scoop (Cup or Cone)', price: '$2.00' },
  { name: '1 Scoop (Waffle Cone)', price: '$3.00' },
  { name: '2 Scoops (Cup or Cone)', price: '$3.00' },
  { name: '2 Scoops (Waffle Cone)', price: '$4.00' },
  { name: 'Banana Split', price: '$4.50' },
  { name: 'Pie-A-La-Mode', price: '$4.00' },
  { name: 'Sundae', price: '$4.00' },
  { name: 'Root Beer Float', price: '$4.00' },
]

export function DailyMenu() {
  return (
    <div className="space-y-8">
      {/* Pizza Night Banner */}
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
        <Badge className="mb-2 bg-primary text-primary-foreground">Pizza Nights</Badge>
        <p className="font-medium text-foreground">Friday & Sunday from 5PM - 9PM</p>
        <p className="text-sm text-muted-foreground">Dine-In, Carry-Out or Delivery</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Breakfast */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="font-serif text-xl text-primary">Breakfast</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {breakfastItems.map((item) => (
              <div key={item.name} className="flex justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-medium text-foreground">{item.name}</span>
                    <span className="text-primary font-semibold whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Lunch */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="font-serif text-xl text-primary">Lunch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {lunchItems.map((item) => (
              <div key={item.name} className="flex justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-medium text-foreground">{item.name}</span>
                    <span className="text-primary font-semibold whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Pizza */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="font-serif text-xl text-primary">Pizza</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pizzaItems.map((item) => (
              <div key={item.name} className="flex justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-medium text-foreground">{item.name}</span>
                    <span className="text-primary font-semibold whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
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
            {drinkItems.map((item) => (
              <div key={item.name} className="flex items-baseline justify-between gap-2">
                <span className="font-medium text-foreground">{item.name}</span>
                <span className="text-primary font-semibold">{item.price}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Ice Cream - Full Width */}
        <Card className="md:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="font-serif text-xl text-primary">Ice Cream</CardTitle>
            <p className="text-sm text-muted-foreground">{"Ashby's Ice Cream"}</p>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {iceCreamItems.map((item) => (
                <div key={item.name} className="flex items-baseline justify-between gap-2 p-2 rounded-md bg-muted/50">
                  <span className="text-sm font-medium text-foreground">{item.name}</span>
                  <span className="text-primary font-semibold">{item.price}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fresh Baked */}
        <Card className="md:col-span-2 bg-accent/30">
          <CardHeader className="pb-3">
            <CardTitle className="font-serif text-xl text-primary">Fresh Baked</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Check out the bakery displays to see what goodies we have fresh baked today! 
              <span className="font-medium text-foreground"> (Priced as marked)</span>
            </p>
            <p className="mt-2 text-muted-foreground">Ask about placing a custom order!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
