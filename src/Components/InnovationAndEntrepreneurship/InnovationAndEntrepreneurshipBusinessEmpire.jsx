import { FaRegClipboard, FaHandshake, FaDollarSign, FaChartLine } from 'react-icons/fa';

function BusinessEmpire() {
  return (
    <div className="my-6 text-center">
      <h2 className="text-2xl font-bold text-[#1f2937] mb-4">
        Your Own Business Empire!
      </h2>
      <div className="flex gap-6 justify-center">
        <div className="bg-[#3B82F6] p-4 shadow-xl flex flex-col items-center justify-start text-center relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0">
          <FaRegClipboard size={50} className="text-white mb-4" />
          <p className="text-lg font-semibold text-white">Startup Founder</p>
          <p className="text-sm text-white mt-2">Build your own business with cutting-edge innovation.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>
        <div className="bg-[#EC4899] p-4 shadow-xl flex flex-col items-center justify-start text-center relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0">
          <FaHandshake size={50} className="text-white mb-4" />
          <p className="text-lg font-semibold text-white">Business Consultant</p>
          <p className="text-sm text-white mt-2">Guide startups and businesses with expert insights.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>
        <div className="bg-[#9333EA] p-4 shadow-xl flex flex-col items-center justify-start text-center relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0">
          <FaDollarSign size={50} className="text-white mb-4" />
          <p className="text-lg font-semibold text-white">Venture Capital Analyst</p>
          <p className="text-sm text-white mt-2">Identify and fund the next unicorn startup.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>
        <div className="bg-[#10B981] p-4 shadow-xl flex flex-col items-center justify-start text-center relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0">
          <FaChartLine size={50} className="text-white mb-4" />
          <p className="text-lg font-semibold text-white">Product Manager</p>
          <p className="text-sm text-white mt-2">Innovate and launch disruptive products in top companies.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>
      </div>
      <p className="text-xl font-semibold text-[#000000] mt-6">
        Salary after BBA in Entrepreneurship? <span className="text-green-600">Sky’s the limit—startup founders can make millions!</span>
      </p>
    </div>
  );
}

export default BusinessEmpire;
