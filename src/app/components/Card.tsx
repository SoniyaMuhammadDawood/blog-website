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
  date: string; // If using a Date object, use `Date` here
  time: string;
  description: string;
  link: string;
};

type BlogCardProps = Blog;

const BlogCard: React.FC<BlogCardProps> = ({ image, title, date, time, description, link }) => (
  <div className="p-4 ">
    <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden cursor-pointer transition hover:scale-105 duration-300 shadow-xl">
      <Image
        className="lg:h-56 md:h-36 w-full object-cover object-center"
        src={image}
        alt={title}
        width={500}
        height={300}
      />
      <div className="p-6">
        <h2 className="tracking-widest text-md font-medium text-gray-800 flex items-center gap-3 mb-4">
          <IoCalendarNumberOutline className="text-2xl" />
          <span>{date}</span>
          <MdAccessTime className="text-2xl ml-10" />
          <span>{time}</span>
        </h2>
        <h1 className="text-lg font-medium text-gray-900 mb-3">{title}</h1>
        <p className="leading-relaxed mb-3 line-clamp-3">{description}</p>
        <div className="flex items-center flex-wrap">
          <Link href={link}>
            <Example />
          </Link>
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
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h2 className="text-2xl text-[#efc070] tracking-widest font-bold title-font mb-2 uppercase">
            AI Spectrum
          </h2>
          <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
            Unlocking the Power of Artificial Intelligence
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg font-medium text-gray-700">
          Explore the endless possibilities of AI with AI Spectrum. Dive into insightful articles, latest trends, and real-world applications that showcase how AI is revolutionizing industries and improving lives. Join us on this journey to uncover the vibrant and ever-expanding spectrum of artificial intelligence.
          </p>
        </div>
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -m-4">
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
