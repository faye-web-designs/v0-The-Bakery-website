"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Button } from '@/components/ui/button'

const products = [
  {
    id: 1,
    name: 'Cinnamon Rolls',
    description: 'Our famous homemade cinnamon rolls with cream cheese frosting',
    image: '/images/cinnamon-rolls.jpg',
    category: 'Bakery',
  },
  {
    id: 2,
    name: 'Gourmet Cupcakes',
    description: 'Over 18 flavors of handcrafted cupcakes',
    image: '/images/cupcakes.jpg',
    category: 'Desserts',
  },
  {
    id: 3,
    name: 'Pizza Night',
    description: 'Deep dish and thin crust pizzas - Friday & Sunday nights',
    image: '/images/pizza.jpg',
    category: 'Pizza',
  },
  {
    id: 4,
    name: "Ashby's Ice Cream",
    description: 'Premium ice cream in cups, cones, and sundaes',
    image: '/images/ice-cream.jpg',
    category: 'Ice Cream',
  },
  {
    id: 5,
    name: 'Breakfast',
    description: 'All-you-can-eat biscuits & gravy and daily specials',
    image: '/images/breakfast.jpg',
    category: 'Breakfast',
  },
  {
    id: 6,
    name: 'Wedding Cakes',
    description: 'Custom wedding cakes and cupcake displays',
    image: '/images/wedding-cake.jpg',
    category: 'Special Orders',
  },
]

export function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof products[0] | null>(null)

  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our Delicious Offerings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From fresh-baked treats to savory meals, see what we have to offer at The Bakery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-xl bg-background shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(product)}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-2">
                  {product.category}
                </span>
                <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
                <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link href="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden" aria-describedby={undefined}>
          {selectedImage && (
            <>
              <VisuallyHidden>
                <DialogTitle>{selectedImage.name}</DialogTitle>
                <DialogDescription>{selectedImage.description}</DialogDescription>
              </VisuallyHidden>
              <div>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-3">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                    {selectedImage.name}
                  </h3>
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
