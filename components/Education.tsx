import React from "react";
import { FaGraduationCap, FaBook, FaUsers } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology, Computer Science Engineering",
      institution: "Vellore Institute of Technology",
      location: "Bhopal",
      year: "2021 - 2025",
      cgpa: 8.5,
      coursework: "OS, CN, DBMS, Cloud Computing, Data Structures",
      extracurricular: "Google Crowdsource, Chess Club, Coding Clubs",
    },
    {
      id: 2,
      degree: "Class 12",
      institution: "Kameshwar Vidhyavihar",
      location: "Ahmedabad",
      year: "2020 - 2021",
      cgpa: 8.1,
      coursework: "Physics, Chemistry, Mathematics",
      extracurricular: "Chemistry Club, MATHS TEAM",
    },
    {
      id: 3,
      degree: "Class 10",
      institution: "Saraswati Shishukunj",
      location: "Borsad",
      year: "2018 - 2019",
      cgpa: 8.9,
      coursework: "Subjective Learning of Board Exams",
      extracurricular: "Among top 10 in school, Football team leader",
    },
  ];

  return (
    <div
      id="education"
      className="w-full py-16 bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white"
    >
      <div className="max-w-screen-xl mx-auto px-8 text-center md:text-center">
        <h2 className="text-4xl md:text-5xl font-bold uppercase text-cyan-400 mb-12 tracking-wider">
          Education
        </h2>

        <div className="space-y-14">
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
                className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-cyan-500/40 transition-shadow duration-300 p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-cyan-600 text-white px-4 py-1 rounded-bl-2xl text-xs font-semibold tracking-wider">
                  {year}
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-cyan-400">
                    <FaGraduationCap size={30} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{degree}</h3>
                    <p className="text-sm text-gray-300 mb-2">
                      <BsPatchCheckFill className="inline mr-2 text-green-400" />
                      {institution}, {location}
                    </p>

                    {/* CGPA Progress Bar */}
                    <div className="mb-4">
                      <p className="text-sm mb-1 font-semibold text-white">
                        CGPA: <span className="text-cyan-300">{cgpa}/10</span>
                      </p>
                      <div className="w-full bg-gray-700 h-3 rounded-full">
                        <div
                          className="bg-cyan-400 h-3 rounded-full"
                          style={{ width: `${(cgpa / 10) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Coursework */}
                    <div className="mb-2 flex items-start gap-2">
                      <FaBook className="text-yellow-400 mt-1" />
                      <p>
                        <span className="font-semibold text-white">
                          Coursework:
                        </span>{" "}
                        <span className="text-gray-300">{coursework}</span>
                      </p>
                    </div>

                    {/* Extracurricular */}
                    <div className="flex items-start gap-2">
                      <FaUsers className="text-pink-400 mt-1" />
                      <p>
                        <span className="font-semibold text-white">
                          Extracurriculars:
                        </span>{" "}
                        <span className="text-gray-300">{extracurricular}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
