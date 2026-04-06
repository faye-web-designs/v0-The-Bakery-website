import { Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Radcliffe, Iowa
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight text-balance mb-6">
            Homemade Goodness & Small Town Charm in the Heart of Radcliffe
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty mb-8 max-w-2xl mx-auto">
            From our famous oversized cinnamon rolls to savory deep-dish pizzas and hand-scooped ice cream, we serve up fresh flavors and friendly smiles at The Bakery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#services">View Our Menu</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="tel:515-899-2155" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Call to Order: 515-899-2155</span>
              </a>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>213 Isabella St, Radcliffe, IA 50230</span>
          </div>
        </div>
      </div>
    </section>
  )
}
