import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import LocationSlider from './LocationSlider'

const LocationProperties = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className="w-[80%] mx-auto">
            <SectionHeading heading="explore location of every properties" />
            <div className="mt-10 md:mt-16">
              {/* slider direa */}
              <LocationSlider />
            </div>
        </div>
    </div>
  )
}

export default LocationProperties
