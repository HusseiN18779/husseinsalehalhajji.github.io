"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const MotionLink = motion(Link);
function Logo() {
  return (
    <div className="flex items-center justify-center ">
      <MotionLink
        href="/"
        className=" w-16 h-16 bg-black text-white flex items-center justify-center
       rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: ["#121212", "rgb(131,58,180,1)", "#121212"],
          transition: { duration: 2, repeat: Infinity },
        }}
      >
        HU
      </MotionLink>
    </div>
  );
}

export default Logo;
