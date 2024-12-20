'use client'
import React from 'react'
import Image from 'next/image'
import CommentSection from '@/app/components/Comment'


const page = () => {
  return (
    <div>
      
      <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
 
<Image className="bg-cover  text-center items-center overflow-hidden mx-auto shadow-lg  rounded-lg"
src={"/picture/house.png"}
alt='Post Image'
height={700}
width={700}
>

</Image>

<div className="max-w-2xl mx-auto">
  <div className="mt-12 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
    <div className="">
      <a href="#" className="text-gray-900 font-bold text-3xl mb-2">
        AI in Housework: Transforming Daily Chores
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
        <span className="text-indigo-500 font-bold text-xl">AI in Housework</span> is revolutionizing how we manage daily chores, offering smart solutions for cleaning, organizing, and maintaining homes. With intelligent devices and automation, AI is making housework more efficient and less time-consuming.
      </p>

      <h3 className="text-2xl font-bold my-5">Smart Cleaning Devices</h3>

      <p className="text-base leading-8 my-5">
        AI-powered cleaning devices, such as robotic vacuum cleaners and mops, can navigate through rooms, detect dirt, and clean efficiently. These devices save time and effort, adapting to different floor types and layouts to provide optimal cleaning performance.
      </p>

      <h3 className="text-2xl font-bold my-5">Home Organization and Maintenance</h3>

      <p className="text-base leading-8 my-5">
        AI-driven systems help homeowners organize their spaces by suggesting storage solutions, tracking inventory, and even managing household tasks. Predictive maintenance tools can monitor appliances, alerting users to potential issues before they become costly repairs.
      </p>

      <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
        AI is not just about convenience—it is about transforming housework into a seamless experience. With intelligent systems, managing a home has never been easier.
      </blockquote>

      <p className="text-base leading-8 my-5">
        From AI-enabled kitchen appliances to personalized home assistants, artificial intelligence is bringing innovation to every corner of the home. Addressing concerns such as data privacy and affordability will be crucial to ensuring widespread adoption of these technologies.
      </p>

      <a
        href="#"
        className="text-sm text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out mr-2"
      >
        #AIinHousework
      </a>
      ,
      <a
        href="#"
        className="text-sm text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out mr-2"
      >
        #SmartHomes
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
