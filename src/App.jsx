import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Bio from './routes/bio.jsx';
import Contact from './routes/contact.jsx';
import AnalyticsTracker from './components/AnalyticsTracker.jsx';
import TestimonialsPage from './routes/testimonialsPage.jsx';
import PrivacyPolicy from './routes/privacy-policy.jsx';
import TermsOfService from './routes/terms-of-service.jsx';
import Apartments from './routes/apartments.jsx';

function App() {
  return (
<Router>
  <div>
  <AnalyticsTracker />
    {/* <MetaPixel /> */}
    <Navbar />
    <Routes>
      <Route path="/" element={<Apartments />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/contact" element={<Contact />} />
      {/*<Route path="/testimonials" element={<TestimonialsPage />} />*/}
      <Route path="/apartments" element={<Apartments />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
    </Routes>
    <Footer />
  </div>
</Router>
  );
}

export default App;
