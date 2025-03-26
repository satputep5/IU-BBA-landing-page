import React from 'react'
import InternationalBusinessHero from '../Components/InternationalBusiness/InternationalBusinessHero'
import InternationalBusinessPointers from '../Components/InternationalBusiness/InternationalBusinessPointers'
import InternationalBusinessOverview from '../Components/InternationalBusiness/InternationalBusinessOverview'
import InternationalBusinessOfferings from '../Components/InternationalBusiness/InternationalBusinessOfferings'
import InternationalBusinessStudying from '../Components/InternationalBusiness/InternationalBusinessStudying'
import InternationalBusinessNumbers from '../Components/InternationalBusiness/InternationalBusinessNumbers'
import InternationalBusinessHighlights from '../Components/InternationalBusiness/InternationalBusinessHighlights'
import InternationalBusinessJoin from '../Components/InternationalBusiness/InternationalBusinessJoin'
import InternationalBusinessTestimonials from '../Components/InternationalBusiness/InternationalBusinessTestimonials'
import InternationalBusinessPlacement from '../Components/InternationalBusiness/InternationalBusinessPlacement'
import InternationalBusinessCreative from '../Components/InternationalBusiness/InternationalBusinessCreative'
import Recruiter from '../Pages/Recruiter'

function InternationalBusiness() {
  return (
    <div>
      <InternationalBusinessHero />
      <InternationalBusinessPointers />
      <Recruiter />
      <InternationalBusinessOverview />
      <InternationalBusinessOfferings />
      <InternationalBusinessStudying />
      <InternationalBusinessCreative  />
      {/* <InternationalBusinessNumbers />
      <InternationalBusinessHighlights /> */}
      <InternationalBusinessJoin />
      <InternationalBusinessPlacement />
      <InternationalBusinessTestimonials />


    </div>
  )
}

export default InternationalBusiness