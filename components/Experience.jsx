import React from "react";

import html from "../public/assets/experience/html.png";
import css from "../public/assets/experience/css.png";
import javascript from "../public/assets/experience/javascript.png";
import reactImage from "../public/assets/experience/react.png";
import nextjs from "../public/assets/experience/nextjs.png";
import tailwind from "../public/assets/experience/tailwind.png";
import typescript from "../public/assets/experience/typescript.png";
import node from "../public/assets/experience/node.png";
import python from "../public/assets/experience/python.png";
import java from "../public/assets/experience/java.png";
import mongodb from "../public/assets/experience/mongodb.png";
import mysql from "../public/assets/experience/mysql.png";
import aws from "../public/assets/experience/aws.png";
import GitHub from "../public/assets/experience/GitHub.png";
import Git from "../public/assets/experience/Git.png";
import Image from "next/image";

const Experience = () => {
  const experiences = [
    { id: 1, title: "HTML", src: html },
    { id: 2, title: "CSS", src: css },
    { id: 3, title: "JavaScript", src: javascript },
    { id: 4, title: "React", src: reactImage },
    { id: 5, title: "Next JS", src: nextjs },
    { id: 6, title: "Tailwind", src: tailwind },
    { id: 7, title: "Typescript", src: typescript },
    { id: 8, title: "Node JS", src: node },
    { id: 9, title: "Python", src: python },
    { id: 10, title: "Java", src: java },
    { id: 11, title: "MongoDB", src: mongodb },
    { id: 12, title: "MySQL", src: mysql },
    { id: 13, title: "AWS", src: aws },
    { id: 14, title: "GitHub", src: GitHub },
    { id: 15, title: "Git", src: Git },
  ];

  return (
    <div id="experience" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl tracking-wider uppercase text-blue-500 font-bold">
          Technical Skills
        </h2>
        <p className="py-4 max-w-lg">
          Skilled full stack developer with expertise in both front-end &
          back-end technologies such as MERN Stack, Next.JS, MySQL, continually
          expanding my knowledge base with emerging technologies.
        </p>

        <div className="grid lg:grid-cols-4 gap-8">
          {experiences.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
              {/* Set a max width and height for the images to make them smaller */}
              <Image
                src={src}
                alt={title}
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
              <h3 className="font-light">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
