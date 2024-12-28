'use client'
import React from 'react'
import Image from 'next/image'
import CommentSection from '@/app/components/CommentSection'


const page = () => {
  return (
    <div>
      
      <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
 
<Image className="bg-cover  text-center items-center overflow-hidden mx-auto shadow-lg  rounded-lg w-[700px] h-[400px]"
src={"/picture/medical.png"}
alt='Post Image'
height={700}
width={700}
>

</Image>

<div className="max-w-2xl mx-auto">
  <div className="mt-12 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
    <div className="">
      <a href="#" className="text-gray-900 font-bold text-3xl mb-2">
        AI in Health Care: Revolutionizing Medical Practices
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
        <span className="text-indigo-500 font-bold text-xl">AI in Health Care</span> is transforming the medical field by enhancing diagnostic accuracy, streamlining operations, and personalizing treatment plans. These advancements are paving the way for more efficient and effective health care delivery, ultimately improving patient outcomes.
      </p>

      <h3 className="text-2xl font-bold my-5">Enhancing Diagnostic Accuracy</h3>

      <p className="text-base leading-8 my-5">
        AI-powered diagnostic tools analyze medical data such as imaging scans and lab results to detect diseases with high precision. These systems assist doctors in identifying conditions at earlier stages, enabling timely interventions and reducing diagnostic errors.
      </p>

      <h3 className="text-2xl font-bold my-5">Personalized Treatment Plans</h3>

      <p className="text-base leading-8 my-5">
        By analyzing patient data, AI can recommend tailored treatment plans that consider individual genetic profiles, lifestyle factors, and medical history. This approach ensures that patients receive care optimized for their unique needs, improving recovery rates and overall satisfaction.
      </p>

      <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
        AI is not just a technological innovation—it is a lifesaving tool. By integrating AI into health care, we can ensure more accessible, accurate, and affordable medical services for everyone.
      </blockquote>

      <p className="text-base leading-8 my-5">
        From AI-assisted surgeries to virtual health assistants, artificial intelligence is reshaping the health care landscape. Addressing challenges such as data security, ethical concerns, and equitable access will be essential to harness the full potential of AI in health care.
      </p>

      <a
        href="#"
        className="text-sm text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out mr-2"
      >
        #AIinHealthCare
      </a>
      ,
      <a
        href="#"
        className="text-sm text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out mr-2"
      >
        #FutureOfMedicine
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
