import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import EmptyStatePage from './pages/EmptyStatePage';
import PricingPage from './pages/PricingPage';
import BetaPage from './pages/BetaPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-gray-800">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/empty" element={<EmptyStatePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/beta" element={<BetaPage />} />
      </Routes>
    </div>
  );
}

export default App;