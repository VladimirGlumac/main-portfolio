"use client";
import React, { useRef } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "@/variants";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bups2cl", "template_e1rjz18", form.current, {
        publicKey: "0r5OJ-xS4PhIbXPVI",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="grid md:grid-cols-2 my-12  md:my-12 py-24 gap-6">
      <div className="flex flex-col gap-4">
        <motion.h2
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-amber-600"
        >
          Let&#39;s Connect
        </motion.h2>
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-[#ADB7BE] mb-4 "
        >
          {" "}
          I am available for freelance or full-time positions. Contact me and
          let&#39;s talk.
        </motion.p>
        <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex glex-row gap-4"
        >
          <Link href="https://github.com/VladimirGlumac">
            <FaGithub
              size={40}
              color="white"
              className="hover:scale-110 duration-500 ease-in-out"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/vladimir-glumac-6a89701ba/">
            <FaLinkedinIn
              size={40}
              color="white"
              className="hover:scale-110 duration-500 ease-in-out"
            />
          </Link>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label className="text-white block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input
              name="user_email"
              type="email"
              id="email"
              required
              className="bg-[#121212] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="yourmail@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              type="text"
              name="user_name"
              className="text-white block mb-2  text-sm font-medium"
            >
              Name
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#121212] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#121212] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            value="Send"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default EmailSection;

