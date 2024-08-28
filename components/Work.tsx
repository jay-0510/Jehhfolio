import React from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
} from "react-icons/fa";

const WorkExperience = () => {
  const workExperienceData = [
    {
      id: 1,
      position: "Software Engineer Intern",
      company: "Ascendion Pvt. Ltd.",
      location: "Vadodara, India",
      tenure: "June 2024 - Sept 2024",
      techStack: "Angular.js, Node.js, Express, SQL",
      description: [
        "Developed full-stack web applications using Angular.js and Node.js.",
        "Collaborated with senior engineers to design and implement new features.",
        "Worked on database management using SQL and implemented data migration scripts.",
      ],
    },
    {
      id: 2,
      position: "Web Developer Intern",
      company: "Solutions",
      location: "Bangalore, India",
      tenure: "Jan 2023 - April 2023",
      techStack: "Next.js, Tailwind CSS, JavaScript",
      description: [
        "Implemented responsive design using Next.js and Tailwind CSS.",
        "Integrated third-party APIs to enhance application functionality.",
      ],
    },
  ];

  return (
    <div id="work-experience" className="w-full py-16">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl tracking-wider uppercase text-blue-500 font-bold">
          Work Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {workExperienceData.map(
            ({
              id,
              position,
              company,
              location,
              tenure,
              techStack,
              description,
            }) => (
              <div
                key={id}
                className="relative p-8 bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
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

                {/* Location */}
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt size={20} className="mr-2" />
                  <span className="text-sm">{location}</span>
                </div>

                {/* Tenure */}
                <div className="flex items-center mb-2">
                  <FaCalendarAlt size={20} className="mr-2" />
                  <span className="text-sm">{tenure}</span>
                </div>

                {/* Tech Stack */}
                <div className="flex items-center mb-4">
                  <FaCode size={20} className="mr-2" />
                  <span className="text-sm">{techStack}</span>
                </div>

                {/* Description with Sub-points */}
                <div className="text-base font-light">
                  <ul className="list-disc list-inside space-y-1">
                    {description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                </div>

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
