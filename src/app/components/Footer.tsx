import Link from 'next/link'
import React from 'react'
import { SiYoutubemusic } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
<footer className="bg-[#37AFE1]">
  <div className="max-w-screen-lg py-2 px-4 sm:px-6 text-white sm:flex justify-between
   mx-auto">


    <div className="p-5 sm:w-2/12 border-r  text-center">

      <div className="text-lg uppercase text-black font-bold ">Menu</div>
      <ul>
        <li className="my-2">
          <Link className="hover:text-indigo-600" href="/">
            Home
          </Link>
        </li>
        <li className="my-2">
          <Link className="hover:text-indigo-600" href="/blog">
            Blog
          </Link>
        </li>
        <li className="my-2">
          <Link className="hover:text-indigo-600" href="/about">
            About
          </Link>
        </li>
        <li className="my-2">
          <Link className="hover:text-indigo-600" href="/contact">
            Contact
          </Link>
        </li>
        <li className="my-2">
          <Link className="hover:text-indigo-600" href="/FAQ">
            FAQ
          </Link>
        </li>
      </ul>
    </div>
    

    <div className="p-5 sm:w-7/12 border-r  text-center">
      <h3 className="font-bold text-lg  text-black mb-4 uppercase">Explore Our Blog</h3>
      <p className="text-white text-lg mb-10 px-4">
      Dive into a world of insights, tips, and stories crafted to inform and inspire. From the latest trends to timeless ideas, our blog brings you content that matters. Stay curious and keep exploring!
      </p>
    </div>

    <div className="p-5 sm:w-3/12 text-center">
      <div className="text-lg uppercase text-black font-bold">
        Contact Us
      </div>
      <ul>
        <li className="my-2">
          <a className="hover:text-indigo-600" href="#">
            XXX XXXX, Floor 4 San Francisco, CA
          </a>
        </li>
        <li className="my-2">
          <a className="hover:text-indigo-600" href="#">
            contact@company.com
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/* bottom Links */}
  <div className="flex py-2 m-auto text-sm flex-col items-center border-t max-w-screen-xl">
    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex gap-4">

      <Link href={"/"}><FaSquareXTwitter className='text-3xl cursor-pointer text-black hover:text-gray-800'/></Link>
      <Link href={"/"}><FaFacebook className='text-3xl cursor-pointer text-blue-600 hover:text-blue-800'/></Link>
      <Link href={"/"}><SiYoutubemusic className='text-3xl cursor-pointer text-red-600  hover:text-red-700'/></Link>
      <Link href={"/"}><IoLogoLinkedin className='text-3xl cursor-pointer text-blue-700 hover:text-indigo-800'/></Link>
      
      
    </div>
    <div className="my-3 text-lg font-semibold">© Copyright 2023. All Rights Reserved.</div>
  </div>
</footer>

   
    </div>
  )
}

export default Footer




