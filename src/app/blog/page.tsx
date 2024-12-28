'use client';

import React from 'react';
import Image from 'next/image';
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import Link from 'next/link';
import Example from '../components/EncryptButton';

const blogs = [
  {
    id: 1,
    title: "Transforming Farming Practices",
    date: "12/01/2024",
    readTime: "10 Min",
    description: "AI in Agriculture is revolutionizing the farming industry by introducing smart and efficient technologies. From precision farming and crop monitoring to predictive analytics, AI-powered systems are enabling farmers to optimize their processes, reduce waste, and improve yields.",
    image: "/picture/agri1.jpg",
    link: "../blog/post1",
  },
  {
    id: 2,
    title: "Revolutionizing Education",
    date: "11/01/2024",
    readTime: "15 Min",
    description: "AI in Education is transforming the way students learn and teachers instruct by integrating cutting-edge technology into classrooms. From personalized learning experiences to intelligent insights.",
    image: "/picture/edu.png",
    link: "../blog/post2",
  },
  {
    id: 3,
    title: "Revolutionizing Medical Practices",
    date: "11/15/2024",
    readTime: "15 Min",
    description: "AI in Health Care is transforming the medical field by enhancing diagnostic accuracy, streamlining operations, and personalizing treatment plans. These advancements are paving the way for improved healthcare systems.",
    image: "/picture/medical.png",
    link: "../blog/post3",
  },
  {
    id: 4,
    title: " AI in architecture",
    date: "12/01/2024",
    readTime: "10 Min",
    description: "Generative AI, powered by advanced machine learning models, has become one of the most groundbreaking innovations in recent years. Tools like ChatGPT, DALL·E, and others are reshaping industries.",
    image: "/picture/build1.png",
    link: "../blog/post4",
  },
  {
    id: 5,
    title: "AI in Technology",
    date: "12/05/2024",
    readTime: "8 Min",
    description: "Discover how AI is reshaping technology by automating processes, enhancing user experiences, and driving innovation across various domains such as cloud computing and IoT.",
    image: "/picture/tech.png",
    link: "../blog/post5",
  },
  {
    id: 6,
    title: "AI in Housework",
    date: "12/07/2024",
    readTime: "12 Min",
    description: "AI in Housework is revolutionizing how we manage daily chores, offering smart solutions for cleaning, organizing, and maintaining homes. With intelligent devices and automation, AI is making housework more efficient ",
    image: "/picture/house.png",
    link: "../blog/post6",
  },
];

const Page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -m-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="p-4 w-full">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden cursor-pointer transition hover:scale-105 duration-300 shadow-xl">
                  <Image
                    className="w-full object-cover object-center h-48 sm:h-64 md:h-72 lg:h-56"
                    src={blog.image}
                    alt="blog"
                    width={600}
                    height={400}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-md title-font font-md text-gray-800 flex items-center gap-3 mb-4">
                      <IoCalendarNumberOutline className="text-2xl font-bold text-gray-800" />
                      <span>{blog.date}</span>
                      <MdAccessTime className="text-2xl font-bold text-gray-800 ml-10" />
                      <span>{blog.readTime}</span>
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {blog.title}
                    </h1>
                    <p className="leading-relaxed mb-3 line-clamp-3">
                      {blog.description}
                    </p>
                    <div className="flex items-center flex-wrap">
                      <Link href={blog.link}>
                        <Example />
                      </Link>
                      <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm font-semibold pr-3 py-1 border-r-2 border-gray-200 cursor-pointer hover:text-teal-600">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx={12} cy={12} r={3} />
                        </svg>
                        1.2K
                      </span>
                      <span className="text-gray-500 inline-flex items-center leading-none font-bold hover:text-teal-600 cursor-pointer">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;

