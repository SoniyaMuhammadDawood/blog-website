import React from "react";
import Image from "next/image";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import Link from "next/link";
import { FcExport } from "react-icons/fc";
import Example from "./EncryptButton";

type Blog = {
  image: string;
  title: string;
  date: string;
  time: string;
  description: string;
  link: string;
};

type BlogCardProps = Blog;

const BlogCard: React.FC<BlogCardProps> = ({ image, title, date, time, description, link }) => (
  <div className="lg:p-4 sm:p-1 xs:p-0 w-full  sm:w-11/12 md:w-full mx-auto xs:mx-1 sm:mx-2">
    <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden cursor-pointer transition hover:scale-105 duration-300 shadow-xl">
      <Image
        className="lg:h-56 md:h-36 sm:h-48 h-48 object-cover object-center w-full"
        src={image}
        alt={title}
        width={500}
        height={300}
      />
      <div className="p-6 sm:px-3 xs:px-4">
        <h2 className="tracking-widest text-sm font-medium text-gray-800 flex items-center gap-2 mb-4">
          <IoCalendarNumberOutline className="text-xl " />
          <span>{date}</span>
          <MdAccessTime className="text-xl ml-4 lg:ml-20 md:ml-12 sm:ml-16" />
          <span>{time}</span>
        </h2>
        <h1 className="text-lg font-medium text-gray-900 mb-3">{title}</h1>
        <p className="leading-relaxed mb-3 line-clamp-3">{description}</p>
        <div className="flex items-center flex-wrap">
          <Link href={link}>
            <Example />
          </Link>
          <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-6 md:ml-0 ml-auto leading-none text-sm font-semibold pr-3 py-1 border-r-2 border-gray-200 cursor-pointer hover:text-teal-600">
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
);

const Card: React.FC = () => {
  const blogs: Blog[] = [
    {
      image: "/picture/agri1.jpg",
      title: "Transforming Farming Practices",
      date: "12/01/2024",
      time: "10 Min",
      description:
        "AI in Agriculture is revolutionizing the farming industry by introducing smart and efficient technologies...",
      link: "../blog/post1",
    },
    {
      image: "/picture/edu.png",
      title: "Revolutionizing Education",
      date: "11/01/2024",
      time: "15 Min",
      description:
        "AI in Education is transforming the way students learn and teachers instruct by integrating cutting-edge technology...",
      link: "../blog/post2",
    },
    {
      image: "/picture/medical.png",
      title: "Revolutionizing Medical Practices",
      date: "11/15/2024",
      time: "15 Min",
      description:
        "AI in Health Care is transforming the medical field by enhancing diagnostic accuracy, streamlining operations...",
      link: "../blog/post3",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container lg:px-5 sm:px-0 xs:px-0 py-16 mx-auto ">
        <div className="flex flex-col text-center w-full mb-16">
          <h2 className="text-2xl text-[#efc070]  font-serif font-bold italic tracking-widest title-font mb-2 uppercase">
            AI Spectrum
          </h2>
          <h1 className="sm:text-3xl text-2xl font-semibold font-serif italic tracking-wide mb-4 text-gray-900">
            Unlocking the Power of Artificial Intelligence
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg font-medium text-gray-700">
            Explore the endless possibilities of AI with AI Spectrum. Dive into insightful articles, latest trends, and real-world applications that showcase how AI is revolutionizing industries and improving lives. Join us on this journey to uncover the vibrant and ever-expanding spectrum of artificial intelligence.
          </p>
        </div>
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
        <div className="flex justify-center w-full mt-14">
          <Link href="/blog" className="relative px-4 py-3 font-bold text-black group">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#efc070] group-hover:translate-x-0 group-hover:translate-y-0" />
            <span className="absolute inset-0 w-full h-full border-4 border-black" />
            <span className="relative">
              View More <FcExport className="inline-block ml-2" />
            </span> 
          </Link>   
        </div>
      </div>
    </section>
  );
};

export default Card;

