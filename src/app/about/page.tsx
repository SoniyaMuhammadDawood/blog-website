import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
<div className="relative overflow-hidden pt-16 pb-32 space-y-24 ">

<div className=' text-center w-full'>
    <h1 className="capitalize text-4xl font-bold ">About us</h1>
    <p className="text-xl mt-4 px-32 tracking-wider xsm:px-8 sm:px-10 lg:px-52 ">Welcome to our AI blog, your gateway to the world of artificial intelligence! Here, we explore how AI is revolutionizing industries like technology, farming, and education. From cutting-edge innovations to real-world applications, our goal is to keep you informed and inspired by the limitless possibilities of AI.</p>
  </div>

  {/* 1st div */}
  <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 md:grid md:grid-cols-2 ">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
        <div>
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#efc070]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                ></path>
              </svg>
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold md:tracking-tighter md:text-[1.6rem] tracking-tight text-black">
              Revolutionizing Communication
            </h2>
            <p className="mt-4 text-lg text-black md:tracking-tighter">
             AI is redefining the way we connect by bridging the gap between human
             language and technology. With smarter interactions and meaningful 
             insights, its paving the way for a more connected future.
            </p>
            <div className="mt-6">
              <a
                className="inline-flex rounded-lg bg-[#efc070] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-white
                 hover:bg-[#D39D55] hover:ring-white"
                href="/login"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0 md:mt-0">
        <div className="-mr-48 pl-6 lg:relative lg:m-0 lg:h-full lg:px-0  md:m-0 md:mt-14 md:h-full  ">
          <Image
            alt='image'
            loading="eager"
            width={647}
            height={486}
            className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-[98%] lg:max-w-none"
            style={{ color: "transparent" }}
            src="/picture/about.png"
          />
        </div>
      </div>
    </div>
  </div>

   {/* 2nd div */}
  <div className="relative">
    <div className="mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 md:grid md:max-w-7xl  md:grid-cols-2 md:px-2">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
        <div>
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#efc070]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                ></path>
              </svg>
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-3xl md:tracking-tighter  font-bold tracking-tight text-black">
              Transforming Everyday Life
            </h2>
            <p className="mt-4 text-lg text-black md:tracking-tighter">
            From revolutionizing farming techniques to enhancing educational 
            experiences, AI is driving innovation across industries. Its ability
            to solve real-world challenges makes it an essential part of our
            daily lives.
            </p>
            <div className="mt-6">
              <a
                className="inline-flex rounded-lg bg-[#efc070] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-white 
                hover:bg-[#D39D55] hover:ring-white"
                href="/login"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-ml-48 pr-6 md:relative lg:relative lg:m-0 lg:h-full lg:px-0 md:m-0 md:h-full md:px-0">
          <Image
            alt="Inbox user interface"
            loading="eager"
            width={647}
            height={486}
            className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-[90=5%] lg:max-w-none "
            style={{ color: "transparent" }}
            src="/picture/about1.png"
          />
        </div>
      </div>
    </div>
  </div>

   {/* 3rd div */}
  <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 md:grid md:grid-cols-2 md:px-2">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
        <div>
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#efc070]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                ></path>
              </svg>
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-black">
             Unlocking the Future
            </h2>
            <p className="mt-4 text-lg text-black md:tracking-tighter">
             The possibilities of AI are limitless, shaping industries and opening
             doors to a smarter, more efficient world. Explore how this groundbreaking technology is redefining whats possible.
            </p>
            <div className="mt-6">
              <a
                className="inline-flex rounded-lg bg-[#efc070] px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-white
                 hover:bg-[#D39D55] hover:ring-white"
                href="/login"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 lg:relative lg:m-0 lg:h-full lg:px-0 md:relative md:m-0 md:h-full ">
          <Image
            alt='image'
            loading="eager"
            width={646}
            height={485}
            
            className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-[98%] lg:max-w-none"
            style={{ color: "transparent" }}
            src="/picture/about2.png"
          />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default page
