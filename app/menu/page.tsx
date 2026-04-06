import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MenuTabs } from '@/components/menu-tabs'

export const metadata = {
  title: 'Menu | The Bakery - Radcliffe, Iowa',
  description: 'Browse our full menu including breakfast, lunch, pizza nights, ice cream, catering options, cupcake flavors, and wedding services.',
}

export default function MenuPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/menu-hero.jpg"
              alt="Assorted fresh baked goods"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-background/85" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
              Our Menu
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              From fresh-baked goods to homestyle meals, discover everything we have to offer at The Bakery.
            </p>
          </div>
        </section>

        {/* Menu Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <MenuTabs />
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Looking for Something Special?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {"Don't see what you're looking for? We love custom orders! Give us a call to discuss your needs."}
            </p>
            <a
              href="tel:515-899-2155"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Call Us: 515-899-2155
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
