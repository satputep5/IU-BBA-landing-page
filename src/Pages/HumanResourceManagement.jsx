import React from 'react'
import HumanResourceHero from '../Components/Human Resource Management/HumanResourceHero'
import HumanResourcePointers from '../Components/Human Resource Management/HumanResourcePointers'
import HumanResourceOverview from '../Components/Human Resource Management/HumanResourceOverview'
import HumanResourceWhy from '../Components/Human Resource Management/HumanResourceWhy'
import HumanResourceStudying from '../Components/Human Resource Management/HumanResourceStudying'
// import HumanResourceNumbers from '../Components/Human Resource Management/HumanResourceNumbers'
import HumanResourceHighlights from '../Components/Human Resource Management/HumanResourceHighlights'
import HumanResourceJoin from '../Components/Human Resource Management/HumanResourceJoin'
import HumanResourcePlacement from '../Components/Human Resource Management/HumanResourcePlacement'
import HumanResourceTestimonials from '../Components/Human Resource Management/HumanResourceTestimonials'
import HumanResourceJobs from '../Components/Human Resource Management/HumanResourceJobs'
import Recruiter from '../Pages/Recruiter'

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
      <Recruiter/>
      <HumanResourceOverview/>
      <HumanResourceWhy/>
      <HumanResourceStudying/>
      <HumanResourceJobs/>
      {/* <HumanResourceNumbers/> */}
      {/* <HumanResourceHighlights/> */}
      <HumanResourceJoin/>
      <HumanResourcePlacement/>
      <HumanResourceTestimonials/>
    </div>
  )
}

export default HumanResourceManagement