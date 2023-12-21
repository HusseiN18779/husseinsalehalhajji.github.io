import AnimatedText from "../components/AnimatedText";
import Image from "next/image";
import HusseinPic from "../../public/HusseinPic.jpeg";
import Skillis from "../components/Skillis";
import Experience from "../components/Experience";
import Educations from "../components/Education";
import Certificats from "../components/Certificats";

export const metadata = {
  title: "About",
  description: "Generated by create next app",
};

export default function About() {
  return (
    <main className="flex w-full flex-col items-center justify-center pt-5">
      <div className="w-full h-full inline-block z-0 bg-gradient-to-b from-gray-700 to-gray-900 p-32 pt-0 lg:px-11 xs:px-7 ">
        <AnimatedText
          text="Follow Your Dreams ! "
          className="text-center pt-5 mb-16 lg:!text-7xl sm:!twxt-6xl xs:!text-4xl sm:mb-8"
        />
        <div className="grid w-full grid-cols-8  gap-16 sm:gap-8  ">
          <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
            <h2 className="mb-4 text-lg font-bold uppercase text-white">
              Piografy
            </h2>
            <p className=" font-medium text-white ">
              I am Hussein Salehalhajji, a passionate and versatile professional
              with a strong background in front-end development , website
              development, and IT support. With a deep love for technology and a
              commitment to delivering exceptional results, I thrive in the
              dynamic and ever-evolving world of web development.
            </p>
            <p className=" my-4 font-medium text-white">
              My journey in the tech industry began when I discovered my
              fascination for creating visually appealing and functional
              websites. Over the years, I have honed my skills, transforming my
              passion into a successful career.
            </p>
            <p className=" font-medium text-white">
              The tech industry is characterized by rapid innovation, and I am
              dedicated to staying at the forefront of these changes. I am an
              avid learner, continuously expanding my skill set and exploring
              emerging technologies to provide my clients with the best
              solutions.
            </p>
          </div>
          <div
            className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-white
           bg-gray-900 p-8 xl:col-span-4 md:order-1 md:col-span-8"
          >
            <Image
              src={HusseinPic}
              alt="hussein"
              className="w-full h-auto rounded-2xl "
            />
          </div>
          <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:!flex-row xl:items-center md:order-3 ">
            <div className="flex flex-col items-end justify-center xl:items-center    ">
              <span className=" inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl text-white">
                +2Y
              </span>

              <h2 className=" text-xl font-medium capitalize text-white  xl:text-center  md:text-lg sm:text-base xs:text-sm  ">
                Front-End Developer
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center    ">
              <span className=" inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl text-white">
                +1Y
              </span>

              <h2 className=" text-xl font-medium capitalize text-white  xl:text-center  md:text-lg sm:text-base xs:text-sm  ">
                websites Developer
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center  xl:items-center ">
              <span className=" inline-block text-7xl font-bold text-white md:text-6xl sm:text-5xl xs:text-4xl ">
                +2Y
              </span>
              <h2 className=" text-xl font-medium capitalize text-white  xl:text-center  md:text-lg sm:text-base xs:text-sm ">
                IT support{" "}
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center ">
              <span className="  inline-block text-7xl font-bold text-white md:text-6xl sm:text-5xl xs:text-4xl ">
                +5Y
              </span>
              <h2 className=" text-xl font-medium capitalize text-white  xl:text-center  md:text-lg sm:text-base xs:text-sm ">
                experience
              </h2>
            </div>
          </div>
        </div>
        <Skillis />
        <Experience />
        <Educations />
        <Certificats />
      </div>
    </main>
  );
}
