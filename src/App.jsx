import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyMatters from './components/WhyMatters';
import Schemes from './components/Schemes';
import HowToApply from './components/HowToApply';
import StatsAndImpact from './components/StatsAndImpact';
import Contact from './components/Contact';
import MultiStepApplyForm from './pages/MultiStepApplyForm';
import './index.css';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Hero />
        <WhyMatters />
        <Schemes />
        <HowToApply />
        <StatsAndImpact />
        <Contact />
      </main>
      
      <footer style={{ background: '#1e293b', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2>HealthProtect.</h2>
          <p style={{ color: '#94a3b8', margin: '1rem 0 2rem 0' }}>
            Empowering rural communities with accessible healthcare.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <strong>Helpline:</strong> 1800-111-111
            </div>
            <div>
              <strong>Email:</strong> support@healthprotect.gov
            </div>
          </div>
          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #334155', fontSize: '0.875rem', color: '#64748b' }}>
            © 2026 Health Insurance Awareness Initiative. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<MultiStepApplyForm />} />
      </Routes>
    </div>
  );
}

export default App;
