"use client";

import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import ScalPiont from "./ScalPiont";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <ScalPiont reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-white text-2xl sm:text-xl xs:text-lg ">
          {position}&nbsp;
        </h3>
        <h3 className="capitalize font-bold text-white text-2xl sm:text-xl xs:text-lg ">
          {company}
        </h3>
        <span className=" capitalize font-medium text-white/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className=" text-white font-medium w-full md:text-sm">{work} </p>
      </motion.div>
    </li>
  );
};

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="  my-64 ">
      <h2 className=" font-bold text-8xl mb-32 w-full text-center text-white md:text-6xl xs:text-4xl md:mb-16 ">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9 top-0 w-[4px] h-full bg-white origin-top 
            md:w-[2px] md:left-[30px] xs:left-[20px]
            "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Front-End Developer"
            company="TB International "
            time="2022-2023"
            address="Dubai , UAE"
            work="As a Front End Developer,
             I specialize in designing and implementing single-page applications using React. 
             Proficient in crafting visually appealing user interfaces, 
             I leverage CSS and Ant Design to ensure a polished and intuitive user experience.
              My role involves close collaboration with backend developers to maintain seamless
               API integrations through Axios. Additionally,
             I bring expertise in optimizing page performance. Beyond React,
              I contribute to Vue.js projects, employing TypeScript and Axios to enhance the
               functionality and maintain the integrity of APIs."
          />
          <Details
            position="Front-End Developer"
            company="United Group"
            time="2022-2023"
            address="Damascus , Syria"
            work="Developed and maintained web applications using React JS, ensuring optimal performance, scalability, and usability.
                Collaborated with designers and backend developers to implement pixel-perfect and responsive UI/UX designs.
                Integrated third-party APIs and optimized website performance for enhanced user experience.
                Implemented state management using Redux, improving code maintainability and reducing bugs.."
          />
          <Details
            position="Websites Developer"
            company="Common Group"
            time="2021-2022"
            address="Damascus ,Syria"
            work="Built custom WordPress themes and plugins, tailored to clients' specific requirements.
                Developed e-commerce websites on the Shopify platform,  payment gateway integration.
                Collaborated with clients to understand their business needs and deliver high-quality web solutions.
                Implemented responsive designs, optimized website performance, and ensured cross-browser compatibility.
                Provided ongoing maintenance and support for clients' websites, addressing any issues or updates."
          />
          <Details
            position="IT Support Technician"
            company="Al-Malle institute"
            time="2019-2020"
            address="Damascus ,Syria"
            work="Provided technical support and assistance to end-users regarding hardware, software, and network-related issues.
                Assisted in the installation, configuration, and maintenance of computer systems, printers, and software applications .
                Documented troubleshooting procedures, known issues, and resolutions to build a knowledge base for efficient issue resolution.
                Assisted in troubleshooting network connectivity issues and resolved LAN and WLAN-related problems.
                Conducted system updates and applied patches to ensure software applications and systems were up to date."
          />
          <Details
            position="IT Help Desk"
            company="Al-Omar Industry"
            time="2018-2019"
            address="Damascus ,Syria"
            work="Managed and prioritized help desk tickets using a ticketing system, accurately documenting issues, resolutions, and follow-up actions.
                Installed, configured, and maintained hardware and software, including operating systems, applications, and peripherals.
                Participated in on-call rotations to provide after-hours support for critical issues.
                Assisted with network connectivity and troubleshooting, including LAN, WAN, and wireless networks."
          />
          <Details
            position="Volonteer"
            company="Syrian Family Planning Association"
            time="2016-2020"
            address="Damascus ,Syria"
            work="An association shall be established in Damascus under the name of “The Family Planning Association” that deals with society's activities throughout the Syrian Arab Republic.
                It has a non-profit body corporate with a full membership in the International Planned Parenthood Federation (IPPF)."
          />
        </ul>
      </div>
    </div>
  );
}
