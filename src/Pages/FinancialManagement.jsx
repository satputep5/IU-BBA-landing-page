import React from 'react'
import FinanceManagementHero from '../Components/FinancialManagement/FinanceManagementHero'
import FinanceManagementPointers from '../Components/FinancialManagement/FinanceManagementPointers'
import FinanceManagementOverview from '../Components/FinancialManagement/FinanceManagementOverview'
import FinanceManagementOfferings from '../Components/FinancialManagement/FinanceManagementOfferings'
import FinanceManagementStudying from '../Components/FinancialManagement/FinanceManagementStudying'
import FinanceManagementCreative from '../Components/FinancialManagement/FinanceManagementCreative'
// import FinanceManagementNumbers from '../Components/FinancialManagement/FinanceManagementNumbers'
import FinanceManagementHighlights from '../Components/FinancialManagement/FinanceManagementHighlights'
import FinanceManagementJoin from '../Components/FinancialManagement/FinanceManagementJoin'
import FinanceManagementPlacement from '../Components/FinancialManagement/FinanceManagementPlacement'
import FinanceManagementTestimonials from '../Components/FinancialManagement/FinanceManagementTestimonials'
const FinancialManagement = () => {
  return (
    <div>
      <FinanceManagementHero/>
      <FinanceManagementPointers/>
      <FinanceManagementOverview/>
      <FinanceManagementOfferings/>
      <FinanceManagementStudying/>
      <FinanceManagementCreative/>
      {/* <FinanceManagementNumbers/> */}
      {/* <FinanceManagementHighlights/> */}
      <FinanceManagementJoin/>
      <FinanceManagementPlacement/>
      <FinanceManagementTestimonials/>
    </div>
  )
}

export default FinancialManagement