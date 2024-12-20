import React from 'react'
import { IoMdContacts } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
import { FaMoneyBills } from "react-icons/fa6";
import { FaAdversal } from "react-icons/fa";

const page = () => {
  return (
    <div>
 {/* <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 w-full h-[120vh] bg-[url('/picture/girl.png')] bg-center bg-cover bg-no-repeat">
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
      <div className="text-center pb-6">
        <h1 className="text-3xl">Contact Us!</h1>
        <p className="text-gray-300">
          Fill up the form below to send us a message.
        </p>
      </div>
      <form>
        <input
          className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Subject"
          name="_subject"
        />
        <textarea
          className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Type your message here..."
          name="message"
          style={{ height: 121 }}
          defaultValue={""}
        />
        <div className="flex justify-between">
          <input
            className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            defaultValue="Send ➤"
          />
          <input
            className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="reset"
          />
        </div>
      </form>
    </div>
  </div>
</div> */}
<section className="w-full h-screen bg-[url('/picture/girl.png')] bg-center bg-cover bg-no-repeat">
<div className="container py-12 mx-auto px-2 md:px-4 ">
  <section className="mb-32"> 
    <div className="flex justify-center">
      <div className="text-center md:max-w-xl lg:max-w-3xl">
        <h2 className="mb-12 px-6 text-3xl font-bold">Contact us</h2>
      </div>
    </div>
    <div className="flex flex-wrap bg-[#37aee163] py-6">
      <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6 ">
        <div className="mb-3 w-full">
          <label
            className="block font-medium mb-[2px] text-white"
            htmlFor="exampleInput90"
          >
            Name
          </label>
          <input
            type="text"
            className="px-2 py-2 border w-full outline-none rounded-md"
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
            className="px-2 py-2 border w-full outline-none rounded-md"
            id="exampleInput90"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-3 w-full">
          <label
            className="block font-medium mb-[2px] text-white"
            htmlFor="exampleInput90"
          >
            Message
          </label>
          <textarea
            className="px-2 py-2 border rounded-[5px] w-full outline-none"
            name=""
            id=""
            defaultValue={""}
          />
        </div>
        <button
          type="button"
          className="mb-6 inline-block w-full rounded bg-purple-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-purple-500"
        >
          Send
        </button>
      </form>


      <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 ">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-teal-400-100 p-4 text-white">
                  <IoMdContacts className='text-4xl'/>
                </div>
              </div>
              <div className="ml-6 grow bg-[#37aee163] p-3">
                <p className="mb-2 font-bold text-lg">General Inquiries</p>
                <p className="text-lg ">info@example.com</p>
                <p className="text-lg ">+1 234-567-89</p>
              </div>
            </div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-teal-400-100 p-4 text-white">
                <FaMoneyBills className='text-4xl'/>
                </div>
              </div>
              <div className="ml-6 grow text-lg bg-[#37aee163] p-3">
                <p className="mb-2 font-bold ">Collaborations and Guest Posts</p>
                <p className="text-lg "> collabs@example.com</p>
                <p className="text-lg ">+1 234-567-89</p>
              </div>
            </div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="align-start flex">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-teal-400-100 p-4 text-white">
                <VscFeedback className='text-4xl'/>
                </div>
              </div>
              <div className="ml-6 grow text-lg bg-[#37aee163] p-3">
                <p className="mb-2 font-bold ">Feedback and Suggestions</p>
                <p className="text-lg ">feedback@example.com</p>
                <p className="text-lg ">+1 234-567-89</p>
              </div>
            </div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="align-start flex">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-teal-400-100 p-4 text-white">
                <FaAdversal className='text-3xl'/>
                </div>
              </div>
              <div className="ml-6 grow text-lg bg-[#37aee163] p-3">
                <p className="mb-2 font-bold">Advertising Opportunities</p>
                <p className="text-lg "> ads@example.com</p>
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
