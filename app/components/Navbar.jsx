"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/Logo.png";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  });

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav
      className={
        shadow
          ? "fixed w-full h-24  z-[100] bg-[#191919] duration-150"
          : "fixed w-full h-24 z-[100]"
      }
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link
          to="home"
          className="text-5xl text-white font-semibold cursor-pointer"
        >
          <Image src={logo} width={60} height={60} alt="logo" />
        </Link>
        <div className="menu">
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase border-b border-transparent text-white group transition duration-300">
              <Link to="home" activeClass="active" spy={true}>
                HOME
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-400"></span>
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase border-b border-transparent text-white group transition duration-300">
              <Link to="about" activeClass="active" spy={true}>
                ABOUT
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-400"></span>
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase border-b border-transparent text-white group transition duration-300">
              <Link to="projects" activeClass="active" spy={true}>
                PROJECTS
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-400"></span>
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase border-b border-transparent text-white group transition duration-300">
              <Link to="contact" activeClass="active" spy={true}>
                CONTACT
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-400"></span>
              </Link>
            </li>
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} className="text-white" />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#1c1c1c] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link to="home" className="text-5xl text-white font-semibold">
                <Image src={logo} width={60} height={60} alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-600 bg-white p-3 cursor-pointer"
              >
                <AiOutlineClose
                  size={25}
                  className="text-[#1c1c1c] cursor-pointer"
                />
              </div>
            </div>
            <div className="border-b vorder-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-white">
                Let&#39;s build something together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
              <li className="py-4 text-sm uppercase border-b border-transparent text-white">
                <Link
                  to="home"
                  activeClass="active"
                  spy={true}
                  onClick={() => setNav(false)}
                >
                  HOME
                </Link>
              </li>
              <li className="py-4 text-sm uppercase border-b border-transparent text-white ">
                <Link
                  to="about"
                  activeClass="active"
                  spy={true}
                  onClick={() => setNav(false)}
                >
                  ABOUT
                </Link>
              </li>
              <li className="py-4 text-sm uppercase border-b border-transparent text-white ">
                <Link
                  to="projects"
                  activeClass="active"
                  spy={true}
                  onClick={() => setNav(false)}
                >
                  PROJECTS
                </Link>
              </li>
              <li className="py-4 text-sm uppercase border-b border-transparent text-white ">
                <Link
                  to="contact"
                  activeClass="active"
                  spy={true}
                  onClick={() => setNav(false)}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
            <div className="pt-36">
              <p className="uppercase tracking-widest text-white">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-start gap-4 my-4 w-full sm:w-[80%]">
                <div className="rounded-full   p-3 cursor-pointer hover:scale-105 ease-in duration-500 bg-white">
                  <FaLinkedinIn />
                </div>
                <a href="https://github.com/VladimirGlumac" target="_blank" rel="noopener noreferrer" className="rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-500 bg-white">
  <FaGithub />
</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
