import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const breadsAndStarters = [
  { name: 'Roll', description: 'Our homemade Hawaiian roll. Soft, buttery and slightly sweet.' },
  { name: 'Italian Bread', description: 'Made from scratch Italian bread. Crispy outside with soft and chewy center.' },
  { name: 'Garlic Bread', description: 'Homemade garlic butter melted into warm Italian bread.' },
  { name: 'Buttermilk Biscuits', description: 'Flakey made from scratch buttermilk biscuits. Need we say more?' },
  { name: 'Chicken Wings', description: 'Honey BBQ, Buffalo, Garlic Parmesan or Jamaican Jerk.' },
  { name: 'Vegetable Platter', description: 'A mix of seasonal fresh veggies and relish. Served with homemade dill dip.' },
  { name: 'Fresh Fruit', description: 'Beautiful assortment of fresh fruit. Served on a platter or cut and mixed.' },
]

const mainCourses = [
  { name: 'Smoked Meat', description: 'Choose from one of our in house smoked meats: Pork Loin, Beef Brisket, or Chicken.' },
  { name: 'Smoked Mac & Cheese', description: 'Our famous smoked Mac & Cheese. Loaded with sausage and bacon. Three cheese or Jalapeño Popper.' },
  { name: 'Hamballs', description: "The Bakery's famous hamballs. Made from scratch with the best sauce." },
  { name: 'BBQ Meatballs', description: 'Family recipe of all beef meatballs with a homemade bbq sauce.' },
  { name: 'Tuscan Chicken', description: 'Pan seared chicken breast made with a creamy sun dried tomato sauce.' },
  { name: 'Roast', description: 'Beef arm roast cooked low and slow with the perfect amount of seasoning.' },
  { name: 'Lasagna', description: 'Regular made from scratch or Spinach and Herb.' },
  { name: 'Chicken Alfredo', description: 'Grilled chicken breast and penne pasta in our homemade Alfredo sauce.' },
  { name: 'Chicken Enchiladas', description: 'Sour cream based enchiladas. Perfect amount of flavor not spice.' },
]

const sides = [
  'Hashbrown Casserole',
  'Cheesy Mashed Potatoes',
  'Green Bean Casserole',
  'Bacon Green Beans',
  'Corn Casserole',
  'Creamed Corn',
  'House Salad',
  'Harvest Apple Salad',
  'Italian Chop Salad',
  'Coleslaw or Mexican Coleslaw',
  'Pasta Salad',
  'Homemade Applesauce',
  'Potato Salad',
  'Twice Baked Potato Salad',
]

const desserts = [
  'Made from Scratch Pie',
  'Cheesecake',
  'Cupcakes',
  'Mini Fruit Pizza',
  'Mini Bundt Cakes',
  'Italian Love Cake',
  'Lemon Cream Cake',
  'Butter Cake',
  'Cream Puff Dessert',
  "Ashby's Ice Cream",
]

const beverages = [
  'Homemade Lemonade',
  'Iced Tea',
  'Punch',
  'Coffee',
]

export function CateringMenu() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">Catering Menu</h2>
        <p className="text-muted-foreground">Perfect for any event, big or small</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Breads & Starters */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="font-serif text-lg text-primary">Breads & Starters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {breadsAndStarters.map((item) => (
              <div key={item.name}>
                <span className="font-medium text-foreground">{item.name}</span>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Main Course */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="font-serif text-lg text-primary">Main Course</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mainCourses.map((item) => (
              <div key={item.name}>
                <span className="font-medium text-foreground">{item.name}</span>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Sides */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="font-serif text-lg text-primary">Sides</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {sides.map((item) => (
                <li key={item} className="text-foreground">{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Desserts */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="font-serif text-lg text-primary">Desserts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-2">
              {desserts.map((item) => (
                <li key={item} className="text-foreground">{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Beverages */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="font-serif text-lg text-primary">Beverages</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-2">
              {beverages.map((item) => (
                <li key={item} className="text-foreground">{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Special Note */}
      <Card className="bg-accent/30 border-primary/20">
        <CardContent className="pt-6 text-center">
          <p className="text-lg font-serif text-foreground mb-2">Looking for Something Not on Our Menu?</p>
          <p className="text-muted-foreground">Just Ask! We love creating custom menus for your special event.</p>
        </CardContent>
      </Card>
    </div>
  )
}
