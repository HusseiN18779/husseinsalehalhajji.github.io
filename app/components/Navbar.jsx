"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import TwitterIcon from "./icons/Twitter";
import { GithubIcon } from "./icons/github";
import { LinkedInIcon } from "./icons/linkedin";
import { Instagram } from "./icons/instagram";
import { motion } from "framer-motion";
import { FaceBookk } from "./icons/FaceBookk";
import { usePathname, useRouter } from "next/navigation";

const CustomLink = ({ href, title, className = "" }) => {
  const Path = usePathname();

  return (
    <Link href={href} className={`${className} relative group `}>
      {title}
      <span
        className={`h-[1px] inline-block bg-white
      absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
      ${Path === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const Router = useRouter();
  const Path = usePathname();

  const handelClickBut = () => {
    toggle();
    Router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-white my-2`}
      onClick={handelClickBut}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-white
      absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
      ${Path === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handelClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between relative
     z-10 lg:px-16 md:px-12 sm:px-8
    "
    >
      <button
        className="  flex-col justify-center items-center hidden lg:flex"
        onClick={handelClick}
      >
        <span
          className={`bg-black block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm  ${
            isOpen ? " rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={` bg-black block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm  ${
            isOpen ? " -rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className=" w-full flex justify-between items-center text-white lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/About" title="About" className="mx-4" />
          <CustomLink href="/Art" title="Articles" className="mx-4" />
          <CustomLink href="/Projects" title="Projects" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com/HusseinAlHajji"
            target={"-blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/HusseiN18779"
            target={"-blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/hussein-salehalhajji-243091258/"
            target={"-blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/hussein._.alhajji/"
            target={"-blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <Instagram />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/"
            target={"-blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <FaceBookk />
          </motion.a>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className=" min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
  bg-black/90 rounded-lg backdrop-blur-md py-32 "
        >
          <nav className=" flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=" "
              toggle={handelClick}
            />
            <CustomMobileLink
              href="/About"
              title="About"
              className=" "
              toggle={handelClick}
            />
            <CustomMobileLink
              href="/Art"
              title="Articles"
              className=" "
              toggle={handelClick}
            />
            <CustomMobileLink
              href="/Projects"
              title="Projects"
              className=" "
              toggle={handelClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://twitter.com"
              target={"-blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com/HusseiN18779"
              target={"-blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1 bg-white rounded-full"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/hussein-salehalhajji-243091258/"
              target={"-blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/"
              target={"-blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1 bg-white rounded"
            >
              <Instagram />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/"
              target={"-blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 sm:mx-1"
            >
              <FaceBookk />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}

      <div className=" absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
