import React from 'react'
import { IoMdContacts } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
import { FaMoneyBills } from "react-icons/fa6";
import { FaAdversal } from "react-icons/fa";

const page = () => {
  return (
    <div>
<section className="w-full min-h-screen">
<div className="container py-8  mx-auto px-2 md:px-4 lg:px-2">
  <section className="mb-32"> 

    <div className="flex justify-center">
      <div className="text-center md:max-w-2xl lg:max-w-3xl">
        <h2 className="mb-12 px-6 text-3xl font-bold ">Contact us</h2>
      </div>
    </div>

    {/* Main border */}
    <div className="flex flex-wrap outline-double outline-[#37AFE1]  outline-4 py-6 ">

      {/* form  */}
      <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 
       xsm:px-4 sm:px-8 lg:px-6 ">
        <div className="mb-3 w-full">
          <label
            className="block font-medium mb-[2px] text-white"
            htmlFor="exampleInput90"
          >
            Name
          </label>
          <input
            type="text"
            className="px-2 py-2 border w-full outline-none rounded-md focus:border-[#efc070] focus:border-2"
            id="exampleInput90"
            placeholder="Name"
          />
        </div>
        <div className="mb-3 w-full">
          <label
            className="block font-medium mb-[2px] text-white"
            htmlFor="exampleInput90"
          >
            Email
          </label>
          <input
            type="email"
            className="px-2 py-2 border w-full outline-none rounded-md focus:border-[#efc070] focus:border-2"
            id="exampleInput90"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-3 w-full">
          <label
            className="block font-medium mb-[2px] text-white  "
            htmlFor="exampleInput90"
          >
            Message
          </label>
          <textarea
            className="px-2 py-2 border rounded-[5px] w-full outline-none focus:border-[#efc070] focus:border-2"
            name=""
            id=""
            defaultValue={""}
            placeholder="Type your message"
          />
        </div>
        <button
          type="button"
          className="mb-6 inline-block w-full rounded bg-[#efc070] px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-[#D39D55] tracking-wider"
        >
          Send
        </button>
      </form>


      <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 ">
        <div className="flex flex-wrap">


          {/* 1st  */}
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 xsm:px-4 sm:px-8 md:px-3 lg:px-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-[#efc070] p-1 text-white">
                  <IoMdContacts className='text-4xl'/>
                </div>
              </div>
              <div className="ml-6 grow text-lg ">
                <p className="mb-2 font-bold ">General Inquiries</p>
                <p className="text-lg ">Spectrum@example.com</p>
                <p className="text-lg ">+1 234-567-89</p>
              </div>
            </div>
          </div>
         
         {/* 2nd */}
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 xsm:px-4 sm:px-8 md:px-3 lg:px-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-[#efc070] p-1 text-white">
                <FaMoneyBills className='text-4xl'/>
                </div>
              </div>
              <div className="ml-6 grow text-lg">
                <p className="mb-2 font-bold ">Collaborations and Guest Posts</p>
                <p className="text-lg "> Spectrum@example.com</p>
                <p className="text-lg ">+1 234-567-89</p>
              </div>
            </div>
          </div>

          {/* 3rd */}
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 xsm:px-4 sm:px-8 md:px-3 lg:px-6">
            <div className="align-start flex">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-[#efc070] p-1 text-white">
                <VscFeedback className='text-4xl'/>
                </div>
              </div>
              <div className="ml-6 grow text-lg ">
                <p className="mb-2 font-bold ">Feedback and Suggestions</p>
                <p className="text-lg ">Spectrum@example.com</p>
                <p className="text-lg ">+1 234-567-89</p>
              </div>
            </div>
          </div>

        {/* 4th */}
          <div className=" w-full shrink-0 grow-0 basis-auto md:w-6/12 xsm:px-4 sm:px-8 md:px-3 lg:px-6">
            <div className="align-start flex">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-[#efc070] p-1 text-white">
                <FaAdversal className='text-3xl'/>
                </div>
              </div>
              <div className="ml-6 grow text-lg ">
                <p className="mb-2 font-bold">Advertising Opportunities</p>
                <p className="text-lg "> Spectrum@example.com</p>
                <p className="text-lg">+1 234-567-89</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</div>
</section>
    </div>
    
  )
}

export default page
