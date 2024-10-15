import React from 'react'
import SectionHeading from './../../Helper/SectionHeading';
import ReviewSlider from './ReviewSlider';

const Reviews = () => {
  return (
    <div className='pt-16 pb-16 bg-[#fef7f6]'>
      <div className="w-[80%] mx-auto">
        <SectionHeading heading="Users Review"/>
        <div className='mt-14'>
            {/* review slider */}
            <ReviewSlider />
        </div>
      </div>
    </div>
  )
}

export default Reviews
