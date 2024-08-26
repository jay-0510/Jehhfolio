import React from "react";
import { TypeAnimation } from "react-type-animation";
import heroImage from "../public/assets/heroImage.png";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div id="home" className="h-screen w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className="w-64 h-64 mx-auto overflow-hidden rounded-xl">
          <Image src={heroImage} alt="me" />
        </div>

        <h1 className="uppercase font-bold text-black-700 text-5xl">
          Jay Patel
        </h1>

        <h3 className="uppercase font-bold text-red-700 text-3xl">
          <TypeAnimation
            sequence={[
              "Passionate Engineer",
              1000,
              "MERN Stack Developer",
              1000,
              "Python Enthusiastic",
              1000,
              "Cloud Learner",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h3>

        <p className="text-gray-600 text-xl max-w-sm mx-auto">
          Driven Software Engineer specializing in web development, committed to
          continuous learning and seeking opportunities to make meaningful
          contributions to groundbreaking projects.
        </p>

        <Link href="/#me">
          <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
            know more
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
