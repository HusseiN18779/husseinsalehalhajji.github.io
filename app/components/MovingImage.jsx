"use client";
import Link from "next/link";
import { useMotionValue } from "framer-motion";
import { useRef } from "react";
import { FramImage } from "./FrameImage";

export const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handelMouseIN(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handelMouseOut(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="-blank"
      onMouseMove={handelMouseIN}
      onMouseLeave={handelMouseOut}
    >
      <h2 className=" capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className=" z-10 w-[250px] h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};
