'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaHome, FaBook, FaInfoCircle, FaEnvelope, FaQuestionCircle } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/blog", label: "Blog", icon: FaBook },
    { href: "/about", label: "About", icon: FaInfoCircle },
    { href: "/contact", label: "Contact", icon: FaEnvelope },
    { href: "/FAQ", label: "FAQ", icon: FaQuestionCircle },
  ]

  return (
    <header className="text-gray-600 body-font bg-[#37AFE1] relative">
      <div className="container mx-auto flex flex-wrap p-2 items-center justify-between">
        <h2 className="py-2 px-4 bg-sky-300/20 border-2 border-dashed rounded-full text-2xl md:text-4xl font-serif font-semibold text-gray-100 italic tracking-wide">
          AI Spectrum
        </h2>
        
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-white z-20"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <nav className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } lg:flex flex-col lg:flex-row lg:items-center text-lg justify-center text-white gap-4
        absolute lg:relative top-full right-0 lg:right-auto
        bg-[#37AFE1] lg:bg-transparent
        w-52 lg:w-auto h-[35vh] lg:h-auto
        pt-4 lg:pt-0 px-6 lg:px-0
        z-10 lg:z-auto
        transition-all duration-300 ease-in-out
        `}>
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="flex items-center gap-4 w-full lg:w-auto py-1 lg:py-0 lg:ml-8"
              onClick={() => setIsMenuOpen(false)}
            >
              <item.icon className="lg:hidden" size={20} />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header

