import React from "react";
import { FaGraduationCap } from "react-icons/fa"; // Importing an icon from react-icons

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology, Computer Science Engineering",
      institution: "Vellore Institute of Technology",
      location: "Bhopal",
      year: "2021 - 2025",
      cgpa: "8.4/10",
      coursework: "OS, CN, DBMS, Cloud Computing, Data Structures",
      extracurricular: "Google Crowdsource, Chess Club, Coding Clubs",
    },
    {
      id: 2,
      degree: "Class 12",
      institution: "Kameshwar Vidhyavihar",
      location: "Ahmedabad",
      year: "2020 - 2021",
      cgpa: "8.1/10",
      coursework: "Physics, Chemistry, Mathematics,",
      extracurricular: "Chemistry Club, MATHS TEAM",
    },
    {
      id: 3,
      degree: "Class 10",
      institution: "Saraswati Shishukunj",
      location: "Borsad",
      year: "2018 - 2019",
      cgpa: "8.9/10",
      coursework: "Subjective Learning of Board Exams",
      extracurricular: "Among top 10 in the school, Football team leader",
    },
  ];

  return (
    <div id="work-experience" className="w-full py-15">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl tracking-wider uppercase text-blue-500 font-bold">
          Education
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full border border-blue-300 transform -translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-20">
            {educationData.map(
              ({
                id,
                degree,
                institution,
                location,
                year,
                cgpa,
                coursework,
                extracurricular,
              }) => (
                <div
                  key={id}
                  className="relative bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 shadow-lg rounded-lg flex items-center space-x-6 mx-auto w-full md:w-2/3 transform hover:scale-105 transition-transform duration-300"
                >
                  {/* Timeline marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-white w-8 h-8 rounded-full flex items-center justify-center text-white -mt-4 border-4 border-gray-100">
                    <FaGraduationCap size={20} className="text-gray-700" />
                  </div>
                  {/* Timeline content */}
                  <div className="w-full">
                    <h3 className="text-xl font-semibold text-white">
                      {degree}
                    </h3>
                    <p className="text-white">
                      <span className="font-medium">{institution}</span>,{" "}
                      {location}
                    </p>
                    <p className="text-white mt-1">
                      <span className="block text-sm font-medium">{year}</span>
                    </p>
                    <p className="mt-2 text-white">
                      <strong>CGPA:</strong> {cgpa}
                    </p>
                    <p className="mt-2 text-white">
                      <strong>Relevant Coursework:</strong> {coursework}
                    </p>
                    <p className="mt-1 text-white">
                      <strong>Extracurricular Activities:</strong>{" "}
                      {extracurricular}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
