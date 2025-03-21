// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Importing pages
import MarketingManagement from './Pages/MarketingManagement';
import FinancialManagement from './Pages/FinancialManagement';
import HumanResourceManagement from './Pages/HumanResourceManagement';
import LogisticsSupplyChainManagement from './Pages/LogisticsSupplyChainManagement';
import InternationalBusiness from './Pages/InternationalBusiness';
import BankingFinancialServices from './Pages/BankingFinancialServices';
import DigitalMarketing from './Pages/DigitalMarketing';
import InnovationEntrepreneurship from './Pages/InnovationEntrepreneurship';
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
