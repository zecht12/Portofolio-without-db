import React from 'react'

export default function Page() {
  return (
    <div className='h-full bg-primary/30 py-32 text-center'>
      <div className='container mx-auto h-full flex justify-center flex-col'>
        <h2 className='h2 mb-8 xl:mb-0'>
          What client <span className='text-accent'>says.</span>
        </h2>
        <div>
          <TestimonialSlider/>
        </div>
      </div>
    </div>
  )
}
