import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { CertificatesPage } from './pages/CertificatesPage';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { StarField } from './components/StarField';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        <StarField />
        <Navigation />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;