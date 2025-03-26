import React from 'react'
import MarketingManagementHero from '../Components/Marketing Management/MarketingManagementHero'
import MarketingManagementPointers from '../Components/Marketing Management/MarketingManagementPointers'
import MarketingManagementOverview from '../Components/Marketing Management/MarketingManagementOverview'
import MarketingManagementWhy from '../Components/Marketing Management/MarketingManagementWhy'
import MarketingManagementStudying from '../Components/Marketing Management/MarketingManagementStudying'
import MarketingManagementCreative from '../Components/Marketing Management/MarketingManagementCreative'
import MarketingManagementHighlights from '../Components/Marketing Management/MarketingManagementHighlights'
import MarketingManagementJoin from '../Components/Marketing Management/MarketingManagementJoin'
import MarketingManagementTestimonials from '../Components/Marketing Management/MarketingManagementTestimonials'
import MarketingManagementPlacement from '../Components/Marketing Management/MarketingManagementPlacement'
import MarketingManagementPersona from '../Components/Marketing Management/MarketingManagementPersona'
import Recruiter from '../Pages/Recruiter'

function MarketingManagement() {
  return (
    <div>
      <MarketingManagementHero />
      <MarketingManagementPointers />
      <Recruiter />
      <MarketingManagementOverview />
      <MarketingManagementWhy />
      <MarketingManagementStudying />
      <MarketingManagementCreative />
      {/* <MarketingManagementPersona /> */}
      {/* <MarketingManagementHighlights /> */}
      <MarketingManagementJoin />
      <MarketingManagementPlacement />
      <MarketingManagementTestimonials />


    </div>
  )
}

export default MarketingManagement