import React from 'react'

import IMG1 from '../assets/img1.png'
import IMG2 from '../assets/img2.png'
import IMG3 from '../assets/img3.png'
import IMG4 from '../assets/img4.png'
import IMG5 from '../assets/img5.png'
import IMG6 from '../assets/img6.png'

const Image = () => {
  return (
    <div className='flex flex-col gap-4'>
        <p className='font-bold'>Images</p>

        <div class="flex flex-wrap w-full ">
            <div class="max-h-[400px] w-1/6 bg-white shadow border-2 border-white"><img src={IMG1} alt="" className='w-full h-full object-cover'/></div>
            <div class="max-h-[400px] w-4/6 bg-white shadow border-2 border-white"><img src={IMG2} alt="" className='w-full h-full object-cover'/></div>
            <div class="max-h-[400px] w-1/6 bg-white shadow border-2 border-white"><img src={IMG3} alt="" className='w-full h-full object-cover'/></div>
            <div class="max-h-[400px] w-3/6 bg-white shadow border-2 border-white"><img src={IMG5} alt="" className='w-full h-full object-cover'/></div>
            <div class="max-h-[400px] w-1/6 bg-white shadow border-2 border-white"><img src={IMG4} alt="" className='w-full h-full object-cover'/></div>
            <div class="max-h-[400px] w-2/6 bg-white shadow border-2 border-white"><img src={IMG6} alt="" className='w-full h-full object-cover'/></div>
        </div>
    </div>
  )
}

export default Image