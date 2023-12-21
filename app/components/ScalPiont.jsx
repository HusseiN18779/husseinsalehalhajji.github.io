"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

export default function ScalPiont({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,

    offset: ["center end", "center center"],
  });

  return (
    <figure className=" absolute left-0 stroke-white">
      <svg
        className=" -rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px] "
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className=" stroke-blue-400 stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className=" fill-gray-800 stroke-[5px]"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className=" animate-pulse stroke-1 fill-blue-400"
        />
      </svg>
    </figure>
  );
}
