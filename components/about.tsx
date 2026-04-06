import { Heart, Users, Coffee } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every batch of dough and every scoop of ice cream is made with care.',
  },
  {
    icon: Users,
    title: 'Community Hub',
    description: 'A beloved destination for locals and travelers alike.',
  },
  {
    icon: Coffee,
    title: 'Fresh Daily',
    description: 'Fresh pastries, hot coffee, and warm hospitality every day.',
  },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-balance">
            A Local Hub for Food, Family, and Fun
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            At The Bakery, we believe the best memories are made around a table. Located at 213 Isabella St, 
            we&apos;ve become a beloved destination for both Radcliffe locals and travelers passing through. 
            We aren&apos;t just a bakery; we&apos;re a community hub where you can enjoy a hearty lunch, 
            grab a celebratory pizza, or find a unique handmade gift.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/50"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <p className="max-w-2xl mx-auto text-center text-muted-foreground mt-12 leading-relaxed">
          Every batch of dough and every scoop of ice cream is served with a commitment to quality 
          and a passion for our small-town roots. Whether you&apos;re here for a morning treat or a 
          Sunday evening pizza, you&apos;re always part of the family.
        </p>
      </div>
    </section>
  )
}
