import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AppointmentForm from '@/components/AppointmentForm';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import WhatsappFloat from '@/components/WhatsappFloat';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AppointmentForm />
        <Faq />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}