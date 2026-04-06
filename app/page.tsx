import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Testimonials } from '@/components/testimonials'
import { WhyChooseUs } from '@/components/why-choose-us'
import { FAQ } from '@/components/faq'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { ChatBot } from '@/components/chat-bot'
import { ProductGallery } from '@/components/product-gallery'
import { Toaster } from '@/components/ui/sonner'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ProductGallery />
        <Services />
        <Testimonials />
        <WhyChooseUs />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <ChatBot />
      <Toaster />
    </>
  )
}
