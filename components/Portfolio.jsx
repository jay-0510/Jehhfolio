import React from "react";

import { MdExpandMore } from "react-icons/md";

import spotify from "../public/assets/portfolio/spotify.jpeg";
import portfolio from "../public/assets/portfolio/portfolio.jpeg";
import foodies from "../public/assets/portfolio/foodies.jpeg";
//import usestate from "../public/assets/portfolio/usestate.jpg";
import reactWeather from "../public/assets/portfolio/reactWeather.jpg";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "React Weather App",
      imageSrc: reactWeather,
      url: "react-weather",
    },
    {
      id: 2,
      title: "Spotify-Web API",
      imageSrc: spotify,
      url: "spotify-web",
    },
    {
      id: 3,
      title: "Portfolio",
      imageSrc: portfolio,
      url: "portfolio",
    },
    {
      id: 4,
      title: "Food App",
      imageSrc: foodies,
      url: "food-app",
    },
  ];

  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl tracking-wider uppercase text-blue-500 font-bold">
          Projects
        </h2>
        <p className="py-4 max-w-lg">
          Experience a showcase of full-stack projects leveraging a diverse
          array of technologies, seamlessly integrating front-end interfaces
          with powerful back-end functionalities to deliver robust and dynamic
          web solutions.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
                  hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              All Projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
