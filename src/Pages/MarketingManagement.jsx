import React from 'react'
import MarketingManagementHero from '../Components/Marketing Management/MarketingManagementHero'
import MarketingManagementPointers from '../Components/Marketing Management/MarketingManagementPointers'
import MarketingManagementOverview from '../Components/Marketing Management/MarketingManagementOverview'
import MarketingManagementOfferings from '../Components/Marketing Management/MarketingManagementOfferings'
import MarketingManagementStudying from '../Components/Marketing Management/MarketingManagementStudying'
import MarketingManagementNumbers from '../Components/Marketing Management/MarketingManagementNumbers'
import MarketingManagementHighlights from '../Components/Marketing Management/MarketingManagementHighlights'
import MarketingManagementJoin from '../Components/Marketing Management/MarketingManagementJoin'
import MarketingManagementTestimonials from '../Components/Marketing Management/MarketingManagementTestimonials'
import Recruiter from '../Pages/Recruiter'

function MarketingManagement() {
  return (
    <div>
      <MarketingManagementHero />
      <MarketingManagementPointers />
      <MarketingManagementOverview />
      <MarketingManagementOfferings />
      <MarketingManagementStudying />
      <MarketingManagementNumbers />
      <MarketingManagementHighlights />
      <MarketingManagementJoin />
      <MarketingManagementTestimonials />
      <Recruiter />
    </div>
  )
}

export default MarketingManagement