'use client'
import React from 'react'
import Image from 'next/image'
import CommentSection from '@/app/components/CommentSection'


const page = () => {
  return (
    <div>
      
      <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
 
<Image className="bg-cover  text-center items-center overflow-hidden mx-auto shadow-lg  rounded-lg"
src={"/picture/build1.png"}
alt='Post Image'
height={700}
width={700}
>

</Image>

<div className="max-w-2xl mx-auto">
  <div className="mt-12 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
    <div className="">
      <a href="#" className="text-gray-900 font-bold text-3xl mb-2">
        AI in Architecture: Shaping the Future of Design
      </a>
      <div className="underline underline-offset-2">
        <p className="text-gray-800 text-sm mt-2 font-bold">
          Written By:
          <a
            href="#"
            className="text-indigo-600 font-bold hover:text-gray-900 transition duration-500 ease-in-out"
          >
            Soniya Dawood
          </a>
        </p>
      </div>

      <p className="text-base leading-8 my-5">
        <span className="text-indigo-500 font-bold text-xl">AI in Architecture</span> is revolutionizing the design and construction industry by introducing innovative tools and techniques. From generating optimized layouts to enhancing sustainability, AI is empowering architects to create smarter, more efficient buildings.
      </p>

      <h3 className="text-2xl font-bold my-5">Optimized Design Solutions</h3>

      <p className="text-base leading-8 my-5">
        AI-driven tools analyze spatial requirements, environmental factors, and aesthetic preferences to generate design solutions. These systems assist architects in creating layouts that maximize functionality and minimize waste, ensuring efficient use of resources.
      </p>

      <h3 className="text-2xl font-bold my-5">Sustainability in Architecture</h3>

      <p className="text-base leading-8 my-5">
        AI helps architects incorporate sustainable practices by analyzing energy efficiency, material usage, and environmental impact. By leveraging these insights, architects can design buildings that are eco-friendly and cost-effective, contributing to a greener future.
      </p>

      <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
        AI is not just a tool for architects—it is a partner in innovation. By integrating AI into design processes, we can create spaces that are both beautiful and functional, tailored to the needs of the modern world.
      </blockquote>

      <p className="text-base leading-8 my-5">
        From generative design algorithms to construction robotics, artificial intelligence is transforming architecture. Addressing challenges such as data integrity, ethical considerations, and equitable access will be vital to unlocking AIs full potential in this field.
      </p>

      <a
        href="#"
        className="text-sm text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out mr-2"
      >
        #AIinArchitecture
      </a>
      ,
      <a
        href="#"
        className="text-sm text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out mr-2"
      >
        #SustainableDesign
      </a>
    </div>
  </div>

  <div><CommentSection/></div>
</div>


</div>

    </div>
  )
}

export default page
