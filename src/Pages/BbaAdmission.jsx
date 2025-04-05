import React from 'react'
import BbaAdmissionHero from '../Components/BbaAdmission/BbaAdmissionHero'
import BbaAdmissionPointers from '../Components/BbaAdmission/BbaAdmissionPointers'
import BbaAdmissionOverview from '../Components/BbaAdmission/BbaAdmissionOverview'
import BbaAdmissionOfferings from '../Components/BbaAdmission/BbaAdmissionOfferings'
import BbaAdmissionCourses from '../Components/BbaAdmission/BbaAdmissionCourses'
import BbaAdmissionJoin from '../Components/BbaAdmission/BbaAdmissionJoin'
import BbaAdmissionPlacement from '../Components/BbaAdmission/BbaAdmissionPlacement'
import BbaAdmissionInfra from '../Components/BbaAdmission/BbaAdmissionInfra'
import BbaAdmissionTestimonials from '../Components/BbaAdmission/BbaAdmissionTestimonials'
import BbaAdmissionFaculty from '../Components/BbaAdmission/BbaAdmissionFaculty'
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
        <BbaAdmissionInfra />
        <BbaAdmissionFaculty />
        {/* <BbaAdmissionPlacement /> */}
        <BbaAdmissionTestimonials />
    </div>
  )
}

export default BbaAdmission