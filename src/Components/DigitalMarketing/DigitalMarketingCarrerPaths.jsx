import React from "react";

const DigitalMarketingCareerPaths = () => {
  return (
    <div className="bg-white py-4 px-8">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-5xl font-semibold text-[#000000] mb-12">
          Career Paths – The Digital Power Pyramid
        </h2>

        {/* Career Paths */}
        <div className="relative">
          {/* Entry-Level */}
          <div className="mb-12">
            <div className="text-2xl font-semibold text-[#00A8D8]">Entry-Level</div>
            <div className="mt-4 text-3xl font-bold text-[#0099C1]">₹6-8 LPA</div>
            <div className="text-sm text-gray-500 mt-2">Digital Marketing Executive, SEO Analyst, Social Media Coordinator</div>
            <div className="h-1 bg-[#00A8D8] my-6 mx-auto w-1/3"></div> {/* Small divider for Entry Level */}
          </div>

          {/* Mid-Level */}
          <div className="mb-12">
            <div className="text-3xl font-semibold text-[#0099C1]">Mid-Level</div>
            <div className="mt-4 text-4xl font-bold text-[#008FB1]">₹15-30 LPA</div>
            <div className="text-lg text-gray-500 mt-2">Performance Marketer, Content Strategist, Brand Manager</div>
            <div className="h-2 bg-[#0099C1] my-6 mx-auto w-2/3"></div> {/* Medium divider for Mid-Level */}
          </div>

          {/* Elite Tier */}
          <div>
            <div className="text-4xl font-semibold text-[#008FB1]">Elite Tier</div>
            <div className="mt-4 text-5xl font-bold text-[#007A99]">₹50+ LPA</div>
            <div className="text-xl text-gray-500 mt-2">Chief Marketing Officer (CMO), Growth Hacker, Digital Director</div>
            <div className="h-3 bg-[#008FB1] my-6 mx-auto w-3/4"></div> {/* Large divider for Elite Tier */}
          </div>
        </div>

        {/* Dream Big Section */}
        <div className="mt-12">
          <p className="text-xl text-[#00A8D8]">
            🔹 Dream Big? <br /> - Digital Marketers at top firms like Google & Amazon earn ₹30+ LPA!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingCareerPaths;
