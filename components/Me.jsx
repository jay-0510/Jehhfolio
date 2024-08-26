import Link from "next/link";
import React from "react";
import { FaEnvelope } from "react-icons/fa"; // Importing necessary icons
import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl tracking-wider uppercase text-blue-500 font-bold">
          About me
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-8">
          <p className="py-4 max-w-2xl mx-auto">
            Jay Patel, a driven Computer Science student at Vellore Institute of
            Technology, BHOPAL embodies a relentless pursuit of excellence in
            academia and beyond. With a fervent passion for innovation and a
            keen intellect, constantly seeks to push the boundaries of knowledge
            and contribute meaningfully to the ever-evolving landscape of
            technology.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            A Python enthusiast and avid learner in Cloud Computing, is a
            dynamic Full Stack developer with proficiency in the MERN stack,
            MySQL, and Next.js. With an insatiable appetite for innovation and a
            relentless drive for mastery,leverages cutting-edge technologies to
            architect robust and scalable solutions, poised at the intersection
            of creativity and functionality.
          </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/Jay.pdf" download={true}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          {/* Gmail Button */}
          <a href="mailto:pateljay51003@gmail.com">
            <div className="group flex items-center justify-center my-8 bg-red-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              <FaEnvelope className="mr-2" size={20} />
              Gmail
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Me;
