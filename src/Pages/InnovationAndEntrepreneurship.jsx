import React from 'react'
import InnovationAndEntrepreneurshipHero from '../Components/InnovationAndEntrepreneurship/InnovationAndEntrepreneurshipHero'
import InnovationAndEntrepreneurshipPointers from '../Components/InnovationAndEntrepreneurship/InnovationAndEntrepreneurshipPointers'
import InnovationAndEntrepreneurshipOverview from '../Components/InnovationAndEntrepreneurship/InnovationAndEntrepreneurshipOverview'
import InnovationAndEntrepreneurshipOfferings from '../Components/InnovationAndEntrepreneurship/InnovationAndEntrepreneurshipOfferings'
import InnovationAndEntrepreneurshipStudying from '../Components/InnovationAndEntrepreneurship/InnovationAndEntrepreneurshipStudying'
import InnovationAndEntrepreneurshipNumbers from '../Components/InnovationAndEntrepreneurship/InnovationAndEntrepreneurshipNumbers'
import InnovationAndEntrepreneurshipHighlights from '../Components/InnovationAndEntrepreneurship/InnovationAndEntrepreneurshipHighlights'
import InnovationAndEntrepreneurshipJoin from '../Components/InnovationAndEntrepreneurship/InnovationAndEntrepreneurshipJoin'
import InnovationAndEntrepreneurshipTestimonials from '../Components/InnovationAndEntrepreneurship/InnovationAndEntrepreneurshipTestimonials'
import InnovationAndEntrepreneurshipPlacement from '../Components/InnovationAndEntrepreneurship/InnovationAndEntrepreneurshipPlacement'
import InnovationAndEntrepreneurshipBusinessEmpire from '../Components/InnovationAndEntrepreneurship/InnovationAndEntrepreneurshipBusinessEmpire'
import Recruiter from '../Pages/Recruiter'

function InnovationAndEntrepreneurship() {
  return (
    <div>
      <InnovationAndEntrepreneurshipHero />
      <InnovationAndEntrepreneurshipPointers />
      <Recruiter />
      <InnovationAndEntrepreneurshipOverview />
      <InnovationAndEntrepreneurshipOfferings />
      <InnovationAndEntrepreneurshipStudying />
      <InnovationAndEntrepreneurshipBusinessEmpire />
      {/* <InnovationAndEntrepreneurshipNumbers />
      <InnovationAndEntrepreneurshipHighlights /> */}
      <InnovationAndEntrepreneurshipJoin />
      <InnovationAndEntrepreneurshipPlacement />
      <InnovationAndEntrepreneurshipTestimonials />


    </div>
  )
}

export default InnovationAndEntrepreneurship