import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactAndFooter from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-brand antialiased selection:bg-accent selection:text-brand">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
      </main>
      
      <ContactAndFooter />
    </div>
  );
}
