import React from 'react'

import IMG13 from '../assets/img13.png'
import IMG14 from '../assets/img14.png'
import IMG15 from '../assets/img15.png'
import IMG16 from '../assets/img16.png'
import IMG17 from '../assets/img17.png'
import IMG18 from '../assets/img18.png'

const Image2 = () => {
  return (
    <div className='flex flex-col gap-4'>
        <p className='font-bold'>Imagens</p>
        <div class="flex flex-wrap w-full ">
            <div class="max-h-[400px] w-1/6 bg-white shadow border-2 border-white"><img src={IMG13} alt="img13" className='w-full h-full object-cover'/></div>
            <div class="max-h-[400px] w-4/6 bg-white shadow border-2 border-white"><img src={IMG14} alt="img14" className='w-full h-full object-cover'/></div>
            <div class="max-h-[400px] w-1/6 bg-white shadow border-2 border-white"><img src={IMG15} alt="img15" className='w-full h-full object-cover'/></div>
            <div class="max-h-[400px] w-3/6 bg-white shadow border-2 border-white"><img src={IMG16} alt="img16" className='w-full h-full object-cover'/></div>
            <div class="max-h-[400px] w-1/6 bg-white shadow border-2 border-white"><img src={IMG17} alt="img17" className='w-full h-full object-cover'/></div>
            <div class="max-h-[400px] w-2/6 bg-white shadow border-2 border-white"><img src={IMG18} alt="img18" className='w-full h-full object-cover'/></div>
        </div>
    </div>
  )
}

export default Image2