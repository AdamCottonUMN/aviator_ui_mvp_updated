import { HelmetProvider } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WindBackground from '../components/WindBackground';

const LandingPage = () => {
  return (
    <HelmetProvider>
      <div className="relative min-h-screen">
        <WindBackground />
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>
    </HelmetProvider>
  );
};

export default LandingPage;