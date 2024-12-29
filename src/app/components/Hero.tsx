'use client'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div 
    className="
      w-full h-screen 
      bg-[url('/picture/glob.jpg')]
      bg-center bg-cover bg-no-repeat
    "
  >
  
  {/* End of Nav */}
  <div className="[&>*:last-child]:hover:top-0 md:[&>*:last-child]:hover:left-[15rem] lg:[&>*:last-child]:hover:left-[18rem] sm:[&>*:last-child]:hover:left-[13rem] xs:[&>*:last-child]:hover:left-[7rem] group absolute top-[30%] md:left-[30%] sm:left-[25%] xs:left-[15%]">
    <div className="[transition:all_400ms_ease] group-hover:rotate-0 lg:w-[18rem] lg:h-[22rem] md:w-[14rem] md:h-[18rem] sm:w-[12rem] sm:h-[16rem] xs:w-[10rem] xs:h-[12rem] border-[0.4rem] border-transparent shadow-xl absolute -rotate-[10deg] origin-bottom-left">
      <Image
        src="/picture/green.png"
        className="w-full h-full rounded-sm"
        alt="Frame Two"
        fill
        // width={1080}
        // height={900}
      />
    </div>
    <div className="[transition:all_400ms_ease] absolute -rotate-[10deg] last:rotate-[20deg] -top-[2rem] left-[2rem] group-hover:rotate-0 lg:w-[18rem] lg:h-[22rem] md:w-[14rem] md:h-[18rem] sm:w-[12rem] sm:h-[16rem] xs:w-[10rem] xs:h-[12rem] border-[0.4rem] border-transparent shadow-xl origin-bottom-left">
      <Image
        src="/picture/pink.png"
        className="w-full h-full rounded-sm"
        alt="Frame One"
        fill
      />
    </div>
  </div>
  <div className="flex sm:justify-center sm:items-center absolute bg-black/20 py-2 md:top-[75%] sm:top-[70%] xs:top-[60%]">
    <h1 className="w-full md:px-4 xs:px-2 xl:text-5xl lg:text-4xl sm:text-3xl xs:text-2xl text-white text-center font-serif font-semibold">
    Discover how AI is transforming industries like farming, technology, and education, driving innovation and shaping a smarter future.
    </h1>
  </div>
</div>


  )
}

export default Hero
