import React from 'react'
import HumanResourceHero from '../Components/Human Resource Management/HumanResourceHero'
import HumanResourcePointers from '../Components/Human Resource Management/HumanResourcePointers'
import HumanResourceOverview from '../Components/Human Resource Management/HumanResourceOverview'
import HumanResourceOfferings from '../Components/Human Resource Management/HumanResourceOfferings'
import HumanResourceStudying from '../Components/Human Resource Management/HumanResourceStudying'
import HumanResourceNumbers from '../Components/Human Resource Management/HumanResourceNumbers'
import HumanResourceHighlights from '../Components/Human Resource Management/HumanResourceHighlights'
import HumanResourceJoin from '../Components/Human Resource Management/HumanResourceJoin'
import HumanResourcePlacement from '../Components/Human Resource Management/HumanResourcePlacement'
import HumanResourceTestimonials from '../Components/Human Resource Management/HumanResourceTestimonials'

const HumanResourceManagement = () => {
  return (
    <div>
      {/* < />
      < />
      < />
      < />
      < />
      < />
      < />
      < />
      <MarketingManagementTestimonials /> */} 
      <HumanResourceHero/>
      <HumanResourcePointers/>
      <HumanResourceOverview/>
      <HumanResourceOfferings/>
      <HumanResourceStudying/>
      <HumanResourceNumbers/>
      <HumanResourceHighlights/>
      <HumanResourceJoin/>
      <HumanResourcePlacement/>
      <HumanResourceTestimonials/>
    </div>
  )
}

export default HumanResourceManagement