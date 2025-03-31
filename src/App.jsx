import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing pages
import MarketingManagement from "./Pages/MarketingManagement";
import FinancialManagement from "./Pages/FinancialManagement";
import HumanResourceManagement from "./Pages/HumanResourceManagement";
import LogisticsSupplyChainManagement from "./Pages/LogisticsSupplyChainManagement";
import InternationalBusiness from "./Pages/InternationalBusiness";
import BankingFinancialServices from "./Pages/BankingFinancialServices";
import DigitalMarketing from "./Pages/DigitalMarketing";
import InnovationEntrepreneurship from "./Pages/InnovationAndEntrepreneurship";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Brochure from "./Pages/Brochure";
import BbaAdmission from "./Pages/BbaAdmission";
import ApplyButtonRight from "./Components/ApplyButtonRight";
import BbaExam from "./Pages/BbaExam";

// Importing the 404 Page
import NotFoundPage from "./Components/NotFoundPage"; // Make sure this is the correct path to your 404 page

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Helvetica Neue Black, sans-serif" }}>
        <ApplyButtonRight />
        <main>
          <Navbar />
          <Brochure />
          <Routes>
            {/* Define routes for all the pages */}
            <Route path="/" element={<BbaAdmission />} />
            <Route path="/bba-exam" element={<BbaExam />} />
            <Route path="/marketing-management" element={<MarketingManagement />} />
            <Route path="/financial-management" element={<FinancialManagement />} />
            <Route path="/human-resource-management" element={<HumanResourceManagement />} />
            <Route path="/logistics-supply-chain-management" element={<LogisticsSupplyChainManagement />} />
            <Route path="/international-business" element={<InternationalBusiness />} />
            <Route path="/banking-financial-services" element={<BankingFinancialServices />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/innovation-entrepreneurship" element={<InnovationEntrepreneurship />} />

            {/* Catch-all route for 404 page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
