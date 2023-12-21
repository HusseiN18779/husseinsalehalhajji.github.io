"use client";

import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import ScalPiont from "./ScalPiont";

const Details = ({ type, time, place, info, link }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between  md:w-[80%]"
    >
      <ScalPiont reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-white text-2xl sm:text-xl xs:text-lg ">
          {type}
        </h3>
        <span className=" capitalize font-medium text-white/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className=" font-medium text-white w-full md:text-sm">{info} </p>
        <a
          href={link}
          target="-blank"
          className=" text-white font-bold underline capitalize hover:text-blue-600"
        >
          Website Of :{place}
        </a>
      </motion.div>
    </li>
  );
};

export default function Educations() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className=" font-bold text-8xl mb-32 w-full text-center text-white md:text-6xl xs:text-4xl md:mb-16 ">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9 top-0 w-[4px] h-full bg-white origin-top 
            md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor's Dgree in Software Ingineering and Informations Systems "
            time="2014-2022 "
            place="Syrian Private University (SPU)"
            link="https://www.spu.edu.sy/"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence. "
          />
        </ul>
      </div>
    </div>
  );
}
