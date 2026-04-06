import { Card, CardContent } from '@/components/ui/card'

const cupcakeFlavors = [
  {
    name: 'Wedding Cake White',
    description: 'This traditional white cake is flavored with a hint of real almond. The perfect wedding flavor! Sprinkles or glitter are a nice touch to perfect this simple but flawless flavor!',
  },
  {
    name: 'Chocolate Fudge',
    description: "We start with a triple chocolate fudge cupcake then top it off with a chocolate buttercream frosting and chocolate sprinkles. If this doesn't sound chocolaty enough we can also add chocolate filling.",
  },
  {
    name: 'Maple Bacon',
    description: "Who says cupcakes can't be manly? This butter yellow cupcake is topped with maple buttercream frosting then piled with candied bacon! It is honestly too good for words!",
  },
  {
    name: 'Cookies and Cream',
    description: "Let's start from the top: A small chocolate cookie sits on cookies and cream buttercream frosting that is piled high on a cream filled triple chocolate fudge cupcake. Now that's a mouthful!",
  },
  {
    name: 'Key Lime',
    description: 'We start with a key lime cupcake and top it with key lime buttercream. Sounds simple but is a perfect combination of tangy and refreshing!',
  },
  {
    name: 'Mint Fudge',
    description: "Who doesn't love this combo? Our take on it is a triple chocolate fudge cupcake filled with mint buttercream and topped with chocolate buttercream and an Andes mint.",
  },
  {
    name: 'Peanut Butter Cup',
    description: 'A favorite flavor combo for many. Chocolate and peanut butter! We start with our triple chocolate fudge cupcake and fill it with a mini peanut butter cup. Top that off with peanut butter buttercream and another mini peanut butter cup. Perfect!',
  },
  {
    name: 'Caramel Butterfinger',
    description: 'Caramel fills our triple chocolate fudge cupcake and frosted with Butterfinger buttercream, then topped off with a mini Butterfinger candy. This is our version of better than anything cake!',
  },
  {
    name: 'Fresh Strawberry',
    description: "Start with best ingredients and you get the best cupcake! Our strawberry cupcake with strawberry buttercream is made with just that – STRAWBERRIES! No artificial colors or flavors!",
  },
  {
    name: 'Raspberry Lemonade',
    description: 'A super moist lemon cupcake is filled with lemon curd and topped with our raspberry buttercream. A perfect combination!',
  },
  {
    name: "S'mores",
    description: "We stuff a marshmallow into our triple chocolate fudge cupcake, frost it with graham cracker buttercream and top with a Hershey square. Makes you feel like you're sitting by the campfire!",
  },
  {
    name: 'Lemon',
    description: "If you like lemon, you'll love these! Lemon cupcakes filled with lemon curd and topped with lemon buttercream.",
  },
  {
    name: 'Berry Blue',
    description: 'A blueberry inspired taste. This sweet blueberry cupcake is topped with blueberry buttercream frosting. A very berry blue dessert!',
  },
  {
    name: 'Pumpkin',
    description: 'This moist pumpkin cupcake is topped with a vanilla cinnamon buttercream. Perfect for fall!',
  },
  {
    name: 'Chocolate Chip Cookie Dough',
    description: 'Chocolate chips are baked into a butter yellow cupcake. This cookie flavored cupcake is topped with chocolate chip cookie dough buttercream! Yep, I said cookie dough buttercream, tastes like cookie dough but with no raw eggs! So, so, so good!!!',
  },
  {
    name: 'Cinnamon Roll',
    description: 'Vanilla cupcakes are layered with cinnamon sugar swirl then topped with a vanilla cinnamon buttercream. Do you like cinnamon rolls? Then you will LOVE these!',
  },
  {
    name: 'Salted Caramel',
    description: 'We start with our triple chocolate fudge cupcake and then top it with a caramel buttercream and sprinkled with coarse sea salt. The perfect mix of sweet and salty!',
  },
  {
    name: 'Birthday Cake',
    description: 'Vanilla cupcakes with sprinkles baked inside and topped with vanilla buttercream and more sprinkles. A perfect cupcake for kids! Can be tailored to any party theme!',
  },
]

export function CupcakeFlavors() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">Cupcake Flavors</h2>
        <p className="text-muted-foreground">Handcrafted with love, baked fresh to order</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cupcakeFlavors.map((flavor) => (
          <Card key={flavor.name} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <h3 className="font-serif font-bold text-primary mb-2">{flavor.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{flavor.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-accent/30 border-primary/20">
        <CardContent className="pt-6 text-center">
          <p className="text-lg font-serif text-foreground mb-2">Custom Flavors Available!</p>
          <p className="text-muted-foreground">{"Have a flavor in mind that's not on our list? Let us know and we'll create something special just for you."}</p>
        </CardContent>
      </Card>
    </div>
  )
}
