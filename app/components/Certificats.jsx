"use client";

import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import ScalPiont from "./ScalPiont";
import Arrow from "./icons/Arrow";

const Details = ({ name, time, place, link }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between  md:w-[80%]"
    >
      <ScalPiont reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-white text-2xl sm:text-xl xs:text-lg ">
          {name}
        </h3>
        <span className=" capitalize font-medium text-white/75 xs:text-sm">
          {time} | {place}
        </span>
        <a
          href={link}
          target="-blank"
          className=" text-white font-bold underline capitalize hover:text-blue-600 block"
        >
          Veiw Certifeacte <Arrow className=" inline-block" />{" "}
        </a>
      </motion.div>
    </li>
  );
};

export default function Certificates() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className=" font-bold text-8xl mb-32 w-full text-center text-white md:text-6xl xs:text-4xl md:mb-16 ">
        Certificates
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9 top-0 w-[4px] h-full bg-white origin-top 
            md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            name="Meta Front-End Developer Specialization "
            time="August 2023 "
            place="Coursera"
            link="https://www.coursera.org/account/accomplishments/specialization/certificate/3X83M22DKEPX"
          />
          <Details
            name="Version Control "
            time="July 2023 "
            place="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/RPQUDJ86ABUP"
          />
          <Details
            name="Advanced React "
            time="August 2023 "
            place="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/CU6DG2KKGRR5"
          />
          <Details
            name="Principles of UX/UI Design"
            time="June 2023 "
            place="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/PT6VBB746DLW"
          />
          <Details
            name="React Basics "
            time="April 2023 "
            place="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/76H8LC5G6LXZ"
          />
          <Details
            name="HTML and CSS in depth "
            time="July 2023 "
            place="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/VE565E6H7ND3"
          />
          <Details
            name="Coding Interview Preparation "
            time="August 2023 "
            place="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/EU4SXL3NRNW5"
          />
          <Details
            name="Front-End Developer Capstone"
            time="August 2023 "
            place="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/Q4FMJZHNCUUN"
          />
          <Details
            name="Technical Support Fundamentals"
            time="September 2023 "
            place="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/6EG4VMMNALTY"
          />
          <Details
            name="Create your e-commerce store with Shopify"
            time="June 2023 "
            place="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/V4VGJEBSSUB9"
          />
          <Details
            name="Introduction to Mobile Development "
            time="July 2023 "
            place="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/LQDLAY8FMXMR"
          />
          <Details
            name="Programming with JavaScript "
            time="March 2023 "
            place="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/A4QXNWA5KQKJ"
          />
          <Details
            name=" Advanced Styling with Responsive Design"
            time="March 2023 "
            place="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/RXN6MRV2AKXC"
          />
          <Details
            name="Introduction to Front-End Development "
            time=" March 2023"
            place="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/V6JEWNQ3WKMW"
          />
          <Details
            name="Introduction to CSS3 "
            time=" January 2023"
            place="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/2VSZVCMB8BJN"
          />
          <Details
            name="Interactivity with JavaScript "
            time=" January 2023"
            place="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/6DDJ5XMHYZX6"
          />
          <Details
            name=" Introduction to HTML5"
            time="December 2022 "
            place="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/4K5HSYNN3WRL"
          />
        </ul>
      </div>
    </div>
  );
}
