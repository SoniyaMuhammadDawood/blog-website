'use client'
import React from 'react'
import Image from 'next/image'
import CommentSection from '@/app/components/CommentSection'


const page = () => {
  return (
    <div>
      
      <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
 
<Image className="bg-cover  text-center items-center overflow-hidden mx-auto shadow-lg  rounded-lg w-[700px] h-[400px]"
src={"/picture/tech.png"}
alt='Post Image'
height={700}
width={700}
>

</Image>

<div className="max-w-2xl mx-auto">
  <div className="mt-12 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
    <div className="">
      <a href="#" className="text-gray-900 font-bold text-3xl mb-2">
        AI in Transport: Revolutionizing Mobility
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
        <span className="text-indigo-500 font-bold text-xl">AI in Transport</span> is transforming the way we move by introducing smart, efficient, and sustainable solutions. From autonomous vehicles and traffic management to predictive maintenance, AI is paving the way for safer and more reliable transportation systems.
      </p>

      <h3 className="text-2xl font-bold my-5">Autonomous Vehicles</h3>

      <p className="text-base leading-8 my-5">
        AI powers self-driving cars by enabling them to navigate roads, interpret traffic signs, and make real-time decisions to ensure safety. These vehicles use sensors, cameras, and machine learning algorithms to reduce human error and improve road safety.
      </p>

      <h3 className="text-2xl font-bold my-5">Smart Traffic Management</h3>

      <p className="text-base leading-8 my-5">
        AI-driven traffic systems analyze real-time data to optimize traffic flow, reduce congestion, and minimize travel times. By predicting traffic patterns and adjusting signals dynamically, these systems contribute to more efficient urban mobility.
      </p>

      <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
        AI is not just enhancing transportation—it is redefining mobility. With smarter systems and autonomous solutions, we are building a future where travel is safer, faster, and more sustainable.
      </blockquote>

      <p className="text-base leading-8 my-5">
        From ride-sharing platforms to AI-powered logistics, artificial intelligence is driving innovation in transport. Addressing challenges such as data security, regulatory compliance, and accessibility will be essential to realizing AIs full potential in this sector.
      </p>

      <a
        href="#"
        className="text-sm text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out mr-2"
      >
        #AIinTransport
      </a>
      ,
      <a
        href="#"
        className="text-sm text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out mr-2"
      >
        #SmartMobility
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
