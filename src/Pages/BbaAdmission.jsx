import React from 'react'
import BbaAdmissionHero from '../Components/BbaAdmission/BbaAdmissionHero'
import BbaAdmissionPointers from '../Components/BbaAdmission/BbaAdmissionPointers'
import BbaAdmissionOverview from '../Components/BbaAdmission/BbaAdmissionOverview'
import BbaAdmissionOfferings from '../Components/BbaAdmission/BbaAdmissionOfferings'
import BbaAdmissionCourses from '../Components/BbaAdmission/BbaAdmissionCourses'
import BbaAdmissionJoin from '../Components/BbaAdmission/BbaAdmissionJoin'
import BbaAdmissionPlacement from '../Components/BbaAdmission/BbaAdmissionPlacement'
import BbaAdmissionTestimonials from '../Components/BbaAdmission/BbaAdmissionTestimonials'
import Recruiter from '../Pages/Recruiter'


function BbaAdmission() {
  return (
    <div>
        <BbaAdmissionHero />
        <BbaAdmissionPointers />
        <Recruiter />
        <BbaAdmissionOverview />
        <BbaAdmissionCourses />
        <BbaAdmissionOfferings />
        <BbaAdmissionJoin />
        <BbaAdmissionPlacement />
        <BbaAdmissionTestimonials />

    </div>
  )
}

export default BbaAdmission