import Image from "next/image"
import AnimatedText from "./components/AnimatedText"
import Link from "next/link"
import Arrow from './components/icons/Arrow'
import Lightt from '../public/images/svg/Lightt.svg'
import HomePic from '../public/homepic.png'

export default function Home() {
  return (
    <div className="w-full h-full inline-block z-0 bg-gradient-to-b from-gray-700 to-gray-900 p-32 pt-0 xl:p-24 lg:p-16 md:p-12 sm:p-8 ">

    <main className="flex items-center text-white w-full min-h-screen lg:flex-col">
      <div className="w-1/2 md:w-full " >
        <Image src={HomePic} alt='Hussein' className="w-[75%] h-auto lg:hidden md:inline-block md:w-full  "/>
      </div>
      <div className="w-1/2 flex flex-col items-center self-center lg:w-full ">
        <AnimatedText text='Change your ideais and expand more futeres .' className=" !text-6xl !text-left
          xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl"/>
        <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
        As a skilled Ftont-end developer , I am dedicated to turning thoghts into createve  web applications. 
        Explore my latest projects and articles, showcasing my expertise in React js and Next js and responsev design .
        </p>
        <div className="flex items-center self-start mt-2 lg:self-center">
          <Link href='/HusseinSalehalhajji.pdf' target={'-blank'}
          className="flex items-center bg-white text-black p-2.5 px-6
           rounded-lg text-lg font-semibold hover:bg-gradient-to-b from-gray-700 to-gray-900 hover:text-white
          border-2 border-solid border-transparent hover:border-black md:p-2 md:px-4 md:text-base"
          download={true}>Resume<Arrow className={'w-6 ml-1'}/>
          </Link>
          <Link href='mailto:husseinsalehalhajji@gmail.com' target={'-blank'}
          className="ml-4 text-lg font-medium capitalize text-white underline hover:text-gray-600 md:text-base"
          >Contact By Email</Link>
        </div>
      </div>
      
      <div className=" absolute right-8 bottom-8 inline-block w-24 md:hidden ">
        <Image src={Lightt} alt="Hussein" className="w-full h-auto" />
      </div>
    </main>
    
    </div>
  )
}
