import Image from 'next/image'
import { Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bakery.jpg"
          alt="The Bakery interior with fresh pastries and warm atmosphere"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container mx-auto px-4 relative py-24 md:py-36 lg:py-44">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Radcliffe, Iowa
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight text-balance mb-6">
            Homemade Goodness & Small Town Charm
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty mb-8">
            From our famous oversized cinnamon rolls to savory deep-dish pizzas and hand-scooped ice cream, we serve up fresh flavors and friendly smiles at The Bakery.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button asChild size="lg">
              <a href="/menu">View Our Menu</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-background/80 backdrop-blur-sm">
              <a href="tel:515-899-2155" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Call to Order</span>
              </a>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>213 Isabella St, Radcliffe, IA 50230</span>
          </div>
        </div>
      </div>
    </section>
  )
}
