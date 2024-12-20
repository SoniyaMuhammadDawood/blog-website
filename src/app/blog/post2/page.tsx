'use client'
import React from 'react'
import Image from 'next/image'
import CommentSection from '@/app/components/Comment'


const page = () => {
  return (
    <div>
      
      <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
 
<Image className="bg-cover  text-center items-center overflow-hidden mx-auto shadow-lg  rounded-lg"
src={"/picture/education.png"}
alt='Post Image'
height={700}
width={700}
>

</Image>

<div className="max-w-2xl mx-auto">
  <div className="mt-12 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
    <div className="">
      <a href="#" className="text-gray-900 font-bold text-3xl mb-2">
        AI in Education: Revolutionizing Education
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
        <span className="text-indigo-500 font-bold text-xl">AI in Education</span> is transforming the way students learn and teachers instruct by integrating cutting-edge technology into classrooms. From personalized learning experiences to intelligent tutoring systems, AI is creating more inclusive and effective education environments, preparing students for a tech-driven future.
      </p>

      <h3 className="text-2xl font-bold my-5">Personalized Learning Experiences</h3>

      <p className="text-base leading-8 my-5">
        AI enables personalized learning by analyzing individual student data to tailor educational content and pacing. Adaptive learning platforms adjust lessons based on the learners strengths and weaknesses, ensuring that every student receives the support they need to succeed.
      </p>

      <h3 className="text-2xl font-bold my-5">AI-Powered Tutoring Systems</h3>

      <p className="text-base leading-8 my-5">
        Intelligent tutoring systems use natural language processing and machine learning to provide one-on-one assistance to students. These systems can answer questions, explain concepts, and offer feedback, making education accessible even outside traditional classroom settings.
      </p>

      <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
        AI is not just enhancing education—it is redefining it. By integrating AI, schools can offer more equitable and engaging learning experiences for all students.
      </blockquote>

      <p className="text-base leading-8 my-5">
        From AI-driven administrative tools to virtual classrooms, the adoption of artificial intelligence in education is enhancing efficiency and accessibility. However, challenges such as data privacy, digital divides, and teacher training need to be addressed to fully realize its potential. Collaborative efforts will be crucial in shaping the future of AI-powered education.
      </p>

      <a
        href="#"
        className="text-sm text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out mr-2"
      >
        #AIinEducation
      </a>
      ,
      <a
        href="#"
        className="text-sm text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out mr-2"
      >
        #FutureOfLearning
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
