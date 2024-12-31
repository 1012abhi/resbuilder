import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail } from "lucide-react";
import { generatePDF } from "../../utils/pdfutils";

function Template1() {
  const location = useLocation();
  const { personalData, educations, companies, skills } = location.state || {};

  const resumeRef = useRef()

  const handleDownload = async () => {
    if (!resumeRef.current) return;
    try {
      await generatePDF(resumeRef.current);
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    }
  };

   return (
    <div className="relative bg-yellow-100 h-screen items-center p-4">
      {/* Template Content */}
      <div>
        <Link className='absolute left-10 mt-5 bg-slate-600 text-white font-bold py-2 px-4 rounded-full flex items-center justify-between text-lg gap-2' to={'/profile'} >Go Back</Link>
      </div>
      <div>
        <button 
        onClick={handleDownload}
        className="absolute right-10 mt-5 bg-slate-600 text-white font-bold py-2 px-4 rounded-full flex items-center justify-between text-lg gap-2">
              Download
        </button>
      </div>
      <div
        ref={resumeRef}
        className="absolute left-[450px] bg-white px-6 py-2 border border-gray-300 shadow-lg font-sans w-[550px] h-[650px]"
        
      >
        {/* Header */}
        <header className="">
          <h1 className="text-lg font-semibold">
            {personalData?.firstName || "Your Name"}
          </h1>
          <p className="text-xs flex gap-3 items-center">
            📞 {personalData?.phoneNumber || "N/A"} | <Mail size={14} />{" "}
            {personalData?.email || "N/A"}
          </p>
          <p className="text-xs">
            <Link to="#" className="hover:underline">
              {personalData?.linkedin || "LinkedIn"}
            </Link>{" "}
            |
            <Link to="#" className="hover:underline">
              {" "}
              GitHub
            </Link>{" "}
            |
            <Link to="#" className="hover:underline">
              {" "}
              LeetCode
            </Link>{" "}
            |
            <Link to="#" className="hover:underline">
              {" "}
              GeeksforGeeks
            </Link>
          </p>
        </header>

        {/* Profile */}
        <section className="">
          <h2 className="text-sm font-semibold border-b-2 py-1">Profile</h2>
          <p className="text-xs">
            Skilled in C++, Data Structures and Algorithms, and web development
            with a Bachelor of Engineering focused on Computer Science from
            Radharaman Engineering College. I am eager to start my professional
            journey in a dynamic work environment. With a strong academic
            background and a willingness to learn, I am confident in my ability
            to contribute positively to any team.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="">
          <h2 className="text-sm font-semibold border-b py-1">
            Technical Skills
          </h2>
          {skills && skills.length > 0 ? (
            skills.map((skill, index) => (
              <div key={index} className="pl-5 text-xs">
                <li>{skill.title}</li>
              </div>
            ))
          ) : (
            <p>No skills available</p>
          )}
        </section>

        {/* Work Experience */}
        <section className="">
          <h2 className="text-sm font-semibold border-b py-1">
            Work Experience
          </h2>
          <div className="text-xs pl-5">
            {companies?.map((experience, index) => (
              <div key={index}>
                <div className="flex justify-between items-center">
                  <h3 className="text-xs">
                    {experience.companyName}
                  </h3>
                  <p>
                    {experience.startDate} - {experience.endDate}
                  </p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-xs">{experience.position}</p>
                  <p className="text-xs">{experience.location}</p>
                </div>
                <ul className="list-disc pl-5">
                  <li>{experience.description}</li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="">
          <h2 className="text-sm font-semibold border-b py-1">Education</h2>
          <div className="text-sm pl-5">
            {educations?.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between items-center">
                  <b className="text-xs">{edu?.instituteName}</b>
                  <span className="text-xs">{edu?.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">{edu?.stream}</span>
                  <span className="text-xs">
                    {edu?.startDate} - {edu?.endDate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      
      </div>
    </div>
  );
}

export default Template1;
