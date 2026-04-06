import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Privacy Policy | The Bakery - Radcliffe, Iowa',
  description: 'Privacy policy for The Bakery website. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-neutral max-w-none space-y-6 text-foreground">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold">Introduction</h2>
              <p>
                The Bakery (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you visit our website 
                or contact us through our online forms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold">Information We Collect</h2>
              <p>We may collect the following information when you use our contact form:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number (if provided)</li>
                <li>Message content</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold">How We Use Your Information</h2>
              <p>We use the information you provide solely to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries</li>
                <li>Process catering or special orders you request</li>
                <li>Communicate with you about our services</li>
              </ul>
              <p>
                We do not sell, trade, or share your personal information with third parties for marketing purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold">Data Retention</h2>
              <p>
                We retain your contact information only as long as necessary to respond to your inquiry or fulfill 
                your request. You may request deletion of your data at any time by contacting us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold">Cookies &amp; Analytics</h2>
              <p>
                We use Vercel Analytics to understand how visitors interact with our website. This service collects 
                anonymized data about page views and does not track individual users or store personal information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold">Contact Us</h2>
              <p>
                If you have questions about this privacy policy or wish to exercise your data rights, please contact us:
              </p>
              <address className="not-italic">
                <strong>The Bakery</strong><br />
                213 Isabella St<br />
                Radcliffe, IA 50230<br />
                Phone: <a href="tel:515-899-2155" className="text-primary hover:underline">515-899-2155</a>
              </address>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
