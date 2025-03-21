// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Importing pages
import MarketingManagement from './Pages/MarketingManagement';
import FinancialManagement from './pages/FinancialManagement';
import HumanResourceManagement from './pages/HumanResourceManagement';
import LogisticsSupplyChainManagement from './pages/LogisticsSupplyChainManagement';
import InternationalBusiness from './pages/InternationalBusiness';
import BankingFinancialServices from './pages/BankingFinancialServices';
import DigitalMarketing from './pages/DigitalMarketing';
import InnovationEntrepreneurship from './pages/InnovationEntrepreneurship';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import Brochure from './Pages/Brochure';

function App() {
  return (
    <Router>
      <div>
        <main>
        <Navbar />
        <Brochure />
          <Routes>
            <Route path="/marketing-management" element={<MarketingManagement />} />
            <Route path="/financial-management" element={<FinancialManagement />} />
            <Route path="/human-resource-management" element={<HumanResourceManagement />} />
            <Route path="/logistics-supply-chain-management" element={<LogisticsSupplyChainManagement />} />
            <Route path="/international-business" element={<InternationalBusiness />} />
            <Route path="/banking-financial-services" element={<BankingFinancialServices />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/innovation-entrepreneurship" element={<InnovationEntrepreneurship />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
