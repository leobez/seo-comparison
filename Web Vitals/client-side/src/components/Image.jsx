import React from 'react'

import IMG1 from '../assets/img1.png'
import IMG2 from '../assets/img2.png'
import IMG3 from '../assets/img3.png'
import IMG4 from '../assets/img4.png'
import IMG5 from '../assets/img5.png'
import IMG6 from '../assets/img6.png'
import IMG7 from '../assets/img7.png'
import IMG8 from '../assets/img8.png'
import IMG9 from '../assets/img9.png'
import IMG10 from '../assets/img10.png'
import IMG11 from '../assets/img11.png'
import IMG12 from '../assets/img12.png'

const Image = () => {
  return (
    <div className='flex flex-col gap-4'>
        <p className='font-bold'>Imagens</p>
        <div class="flex flex-wrap w-full ">
            <div class="max-h-[400px] w-1/6 bg-white shadow border-2 border-white"><img src={IMG1} alt="img1" className='w-full h-full object-cover'/></div>
            <div class="max-h-[400px] w-4/6 bg-white shadow border-2 border-white"><img src={IMG2} alt="img2" className='w-full h-full object-cover'/></div>
            <div class="max-h-[400px] w-1/6 bg-white shadow border-2 border-white"><img src={IMG3} alt="img3" className='w-full h-full object-cover'/></div>

            <div class="max-h-[400px] w-3/6 bg-white shadow border-2 border-white"><img src={IMG5} alt="img4" className='w-full h-full object-cover'/></div>
            <div class="max-h-[400px] w-1/6 bg-white shadow border-2 border-white"><img src={IMG4} alt="img5" className='w-full h-full object-cover'/></div>
            <div class="max-h-[400px] w-2/6 bg-white shadow border-2 border-white"><img src={IMG6} alt="img6" className='w-full h-full object-cover'/></div>

            <div class="max-h-[400px] w-1/6 bg-white shadow border-2 border-white"><img src={IMG7} alt="img7" className='w-full h-full object-cover'/></div>
            <div class="max-h-[400px] w-4/6 bg-white shadow border-2 border-white"><img src={IMG8} alt="img8" className='w-full h-full object-cover'/></div>
            <div class="max-h-[400px] w-1/6 bg-white shadow border-2 border-white"><img src={IMG9} alt="img9" className='w-full h-full object-cover'/></div>
            
            <div class="max-h-[400px] w-3/6 bg-white shadow border-2 border-white"><img src={IMG10} alt="img10" className='w-full h-full object-cover'/></div>
            <div class="max-h-[400px] w-1/6 bg-white shadow border-2 border-white"><img src={IMG11} alt="img11" className='w-full h-full object-cover'/></div>
            <div class="max-h-[400px] w-2/6 bg-white shadow border-2 border-white"><img src={IMG12} alt="img12" className='w-full h-full object-cover'/></div>
        </div>
    </div>
  )
}

export default Image