import React from "react";
import Link from "next/link";
import { HiCodeBracket } from "react-icons/hi2";
import { IoEyeSharp } from "react-icons/io5";
import Image from "next/image";

function ProjectCard({ imgUrl, title, description, gitUrl, previewUrl }) {
  return (
    <div className="">
      <div className="h-52 md:h-72  relative group  bg-center">
        <Image src={imgUrl} fill alt="project image" />
        <div
          className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818]  bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 z-10
        "
        >
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <HiCodeBracket className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <IoEyeSharp className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white mt-1  shadow-inner shadow-[#1c1c1c] bg-gradient-to-r from-neutral-800 to-orange-500 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;

