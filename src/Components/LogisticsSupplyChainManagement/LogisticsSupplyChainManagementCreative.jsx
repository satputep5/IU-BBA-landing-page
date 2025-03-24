import React from 'react';
import { FaBox, FaIndustry, FaTruckLoading, FaCheckCircle, FaWarehouse, FaTools, FaShippingFast, FaGlobe, FaMapMarkedAlt, FaHandshake } from 'react-icons/fa';

function SupplyChainPillars() {
  return (
    <div className="px-8 md:px-16 py-4 bg-gradient-to-r from-[#F9F7F2] to-[#FFFFFF] poppins-regular">
      <h1 className="text-5xl font-bold text-center text-[#1D3557] mb-12 leading-tight">
        Supply & Chain: <span className="text-[#F26F08]">The Two Pillars</span> of Global Business
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Supply Section */}
        <div className="bg-white shadow-xl rounded-2xl p-10 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <div className="flex items-center gap-4 mb-6">
            <FaIndustry size={48} className="text-[#F26F08]" />
            <h2 className="text-3xl font-semibold text-[#1D3557]">SUPPLY</h2>
          </div>
          <p className="text-lg text-gray-600 mb-4">The Lifeline of Production</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3"><FaTruckLoading size={28} className="text-[#F26F08]" /> Sourcing the right materials at the right time.</li>
            <li className="flex items-start gap-3"><FaTools size={28} className="text-[#4C8BF5]" /> Ensuring efficient manufacturing & inventory management.</li>
            <li className="flex items-start gap-3"><FaBox size={28} className="text-green-500" /> Optimizing procurement costs & reducing waste.</li>
          </ul>
        </div>

        {/* Chain Section */}
        <div className="bg-white shadow-xl rounded-2xl p-10 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <div className="flex items-center gap-4 mb-6">
            <FaShippingFast size={48} className="text-[#F26F08]" />
            <h2 className="text-3xl font-semibold text-[#1D3557]">CHAIN</h2>
          </div>
          <p className="text-lg text-gray-600 mb-4">The Backbone of Distribution</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3"><FaGlobe size={28} className="text-[#4C8BF5]" /> Seamless transportation & warehouse management.</li>
            <li className="flex items-start gap-3"><FaMapMarkedAlt size={28} className="text-[#F26F08]" /> Delivering goods at the right place, time, and condition.</li>
            <li className="flex items-start gap-3"><FaHandshake size={28} className="text-green-500" /> Building strong networks for global trade success.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SupplyChainPillars;
