import React from 'react'
import BankingAndFinancialServicesHero from '../Components/BankingAndFinancialServices/BankingAndFinancialServicesHero'
import BankingAndFinancialServicesPointers from '../Components/BankingAndFinancialServices/BankingAndFinancialServicesPointers'
import BankingAndFinancialServicesOverview from '../Components/BankingAndFinancialServices/BankingAndFinancialServicesOverview'
import BankingAndFinancialServicesOfferings from '../Components/BankingAndFinancialServices/BankingAndFinancialServicesOfferings'
import BankingAndFinancialServicesStudying from '../Components/BankingAndFinancialServices/BankingAndFinancialServicesStudying'
// import BankingAndFinancialServicesNumbers from '../Components/BankingAndFinancialServices/BankingAndFinancialServicesNumbers'
// import BankingAndFinancialServicesHighlights from '../Components/BankingAndFinancialServices/BankingAndFinancialServicesHighlights'
import BankingAndFinancialServicesJoin from '../Components/BankingAndFinancialServices/BankingAndFinancialServicesJoin'
import BankingAndFinancialServicesTestimonials from '../Components/BankingAndFinancialServices/BankingAndFinancialServicesTestimonials'
import BankingAndFinancialServicesPlacement from '../Components/BankingAndFinancialServices/BankingAndFinancialServicesPlacement'
import BankingAndFinancialServicesCareerPaths from '../Components/BankingAndFinancialServices/BankingAndFinancialServicesCareerPaths'

function BankingAndFinancialServices() {
  return (
    <div>
      <BankingAndFinancialServicesHero />
      <BankingAndFinancialServicesPointers />
      <BankingAndFinancialServicesOverview />
      <BankingAndFinancialServicesOfferings />
      <BankingAndFinancialServicesStudying />
      <BankingAndFinancialServicesCareerPaths />
      {/* <BankingAndFinancialServicesNumbers />
      <BankingAndFinancialServicesHighlights /> */}
      <BankingAndFinancialServicesJoin />
      <BankingAndFinancialServicesPlacement />
      <BankingAndFinancialServicesTestimonials />


    </div>
  )
}

export default BankingAndFinancialServices