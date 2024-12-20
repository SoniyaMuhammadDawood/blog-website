import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
<header className="text-gray-600 body-font bg-[#37AFE1] ">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
  <h2 className="py-2 px-4 bg-sky-300/20 border-2 border-dashed rounded-full text-4xl font-serif font-semibold text-gray-100">
  AI Spectrum
      </h2>
    <nav className="md:ml-auto mr-8 gap-8 flex flex-wrap items-center text-lg justify-center text-white">
      <Link href={"/"} className="">Home</Link>
      <Link href={"/blog"} className="">Blog</Link>
      <Link href={"/about"} className="">About</Link>
      <Link href={"/contact"} className="">Contact</Link>
      <Link href={"/FAQ"} className="">FAQ</Link>
      
    </nav>
 
  </div>
</header>

 
  </div>
  )
}

export default Header
