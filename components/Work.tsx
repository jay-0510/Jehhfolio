import React from "react";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const WorkExperience = () => {
  const workExperienceData = [
    {
      id: 1,
      position: "Software Engineer Intern",
      company: "Ascendion Pvt. Ltd.",
      year: "2024",
      description:
        "Contributed to developing full-stack web applications using React and Node.js. Collaborated with senior engineers on various projects.",
    },
    {
      id: 2,
      position: "Web Developer Intern",
      company: "XYZ Solutions",
      year: "2023",
      description:
        "Focused on building and maintaining client-side applications using Next.js and Tailwind CSS. Implemented responsive design and optimized performance.",
    },
  ];

  return (
    <div id="work-experience" className="w-full py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-left text-blue-500 mb-12">
          Work Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {workExperienceData.map(
            ({ id, position, company, year, description }) => (
              <div
                key={id}
                className="relative p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105"
              >
                {/* Icon and Position */}
                <div className="flex items-center space-x-4 mb-4">
                  <FaBriefcase
                    size={40}
                    className="text-white bg-blue-700 p-2 rounded-full"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold">{position}</h3>
                    <p className="text-lg font-light">{company}</p>
                  </div>
                </div>

                {/* Year */}
                <div className="flex items-center mb-4">
                  <FaCalendarAlt size={20} className="mr-2" />
                  <span className="text-sm">{year}</span>
                </div>

                {/* Description */}
                <p className="text-base font-light">{description}</p>

                {/* Card Border Effect */}
                <div className="absolute inset-0 bg-white opacity-5 rounded-lg pointer-events-none"></div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
