"use client";

import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full 
        font-semibold bg-white text-black py-3 px-6 shadow-black  cursor-pointer absolute 
          lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:font-bold xs:text-white xs:text-xs
       "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

{
  /*viewport={{once:true}}    make the emotion do it one  */
}

const Skillis = () => {
  return (
    <>
      <h2 className=" font-bold text-8xl mt-64 w-full text-center text-white mb-16 md:text-6xl md:mt-32 ">
        {" "}
        skills
      </h2>
      <div
        className="w-full h-screen relative rounded-full flex items-center justify-center  bg-circularLight 
       lg:h-[60vh] sm:h-[50vh] xs:h-[40vh]
        lg:bg-circularLightLg "
      >
        <motion.div
          className="flex items-center justify-center rounded-full 
         font-semibold bg-white text-black p-8 shadow-black cursor-pointer
         lg:p-6 md:p-4 xs:text-xs xs:p-2
        "
          whileHover={{ scale: 1.05 }}
        >
          HU
        </motion.div>
        <Skill name="CSS" x="-7.5vw" y="-5.5vw" />
        <Skill name="HTML" x="7.5vw" y="5.5vw" />
        <Skill name="ES7" x="7.5vw" y="-11vw" />
        <Skill name="JSON" x="-7.5vw" y="11vw" />
        <Skill name="FIGMA" x="-23vw" y="-6vw" />
        <Skill name="BOOTSTRSB" x="23vw" y="-6vw" />
        <Skill name="REACT JS" x="-4vw" y="-17.5vw" />
        <Skill name="NEXT JS" x="4vw" y="17.5vw" />
        <Skill name="TAILWAIN" x="-18vw" y="2vw" />
        <Skill name="WORDPRESS" x="23vw" y="6.6vw" />
        <Skill name="Shopify" x="-23vw" y="8vw" />
        <Skill name="Ant Design Pro " x="-22vw" y="16vw" />
      </div>
    </>
  );
};

export default Skillis;
