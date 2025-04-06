"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import spotify from "../public/assets/portfolio/spotify.jpeg";
import portfolio from "../public/assets/portfolio/portfolio.jpeg";
import foodies from "../public/assets/portfolio/foodies.jpeg";
import reactWeather from "../public/assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const projects = [
    {
      id: 1,
      title: "React Weather App",
      image: reactWeather,
      description:
        "A weather forecasting app using OpenWeather API and React hooks.",
      tech: "React, Tailwind CSS, Axios",
      demo: "#",
    },
    {
      id: 2,
      title: "Spotify-Web API",
      image: spotify,
      description:
        "Integrated with Spotify’s API to fetch playlists and songs.",
      tech: "React, REST API, OAuth",
      demo: "#",
    },
    {
      id: 3,
      title: "Personal Portfolio",
      image: portfolio,
      description:
        "My developer portfolio showcasing skills, projects, and resume.",
      tech: "Next.js, Tailwind, Vercel",
      demo: "#",
    },
    {
      id: 4,
      title: "Foodies App",
      image: foodies,
      description: "A food recipe app to search and save delicious dishes.",
      tech: "React, Spoonacular API, Styled Components",
      demo: "#",
    },
  ];

  return (
    <div id="portfolio" className="w-full py-16 bg-white text-black">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold uppercase text-blue-600 mb-4">
          My Projects
        </h2>
        <p className="mb-10 text-gray-600 max-w-2xl mx-auto">
          Explore some of my featured projects. Click to expand and read more!
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => handleClick(proj.id)}
              className="cursor-pointer border rounded-xl shadow-lg overflow-hidden transition hover:shadow-xl"
            >
              <Image
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-blue-500">
                  {proj.title}
                </h3>
              </div>

              {activeId === proj.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 text-sm text-gray-600"
                >
                  <p className="mb-2">{proj.description}</p>
                  <p className="text-blue-500 font-medium">Tech: {proj.tech}</p>
                  <a
                    href={proj.demo}
                    className="inline-block mt-3 underline text-blue-600 hover:text-blue-800"
                    target="_blank"
                  >
                    View Live
                  </a>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
