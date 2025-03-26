import React from 'react'
import LogisticsSupplyChainManagementHero from '../Components/LogisticsSupplyChainManagement/LogisticsSupplyChainManagementHero'
import LogisticsSupplyChainManagementPointers from '../Components/LogisticsSupplyChainManagement/LogisticsSupplyChainManagementPointers'
import LogisticsSupplyChainManagementOverview from '../Components/LogisticsSupplyChainManagement/LogisticsSupplyChainManagementOverview'
import LogisticsSupplyChainManagementOfferings from '../Components/LogisticsSupplyChainManagement/LogisticsSupplyChainManagementOfferings'
import LogisticsSupplyChainManagementStudying from '../Components/LogisticsSupplyChainManagement/LogisticsSupplyChainManagementStudying'
// import LogisticsSupplyChainManagementNumbers from '../Components/LogisticsSupplyChainManagement/LogisticsSupplyChainManagementNumbers'
// import LogisticsSupplyChainManagementHighlights from '../Components/LogisticsSupplyChainManagement/LogisticsSupplyChainManagementHighlights'
import LogisticsSupplyChainManagementJoin from '../Components/LogisticsSupplyChainManagement/LogisticsSupplyChainManagementJoin'
import LogisticsSupplyChainManagementTestimonials from '../Components/LogisticsSupplyChainManagement/LogisticsSupplyChainManagementTestimonials'
import LogisticsSupplyChainManagementPlacement from '../Components/LogisticsSupplyChainManagement/LogisticsSupplyChainManagementPlacement'
import LogisticsSupplyChainManagementCreative from '../Components/LogisticsSupplyChainManagement/LogisticsSupplyChainManagementCreative'
import Recruiter from '../Pages/Recruiter'

function LogisticsSupplyChainManagement() {
  return (
    <div>
      <LogisticsSupplyChainManagementHero />
      <LogisticsSupplyChainManagementPointers />
      <Recruiter />
      <LogisticsSupplyChainManagementOverview />
      <LogisticsSupplyChainManagementOfferings />
      <LogisticsSupplyChainManagementStudying />
      <LogisticsSupplyChainManagementCreative />
      {/* <LogisticsSupplyChainManagementNumbers />
      <LogisticsSupplyChainManagementHighlights /> */}
      <LogisticsSupplyChainManagementJoin />
      <LogisticsSupplyChainManagementPlacement />
      <LogisticsSupplyChainManagementTestimonials />


    </div>
  )
}

export default LogisticsSupplyChainManagement