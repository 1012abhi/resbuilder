import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail } from "lucide-react";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

function Template1() {
  const location = useLocation();
  const { personalData, educations, companies, skills } = location.state || {};

  // console.log("Data in Preview:", {
  //   personalData,
  //   educations,
  //   companies,
  //   skills,
  // });
  const [scale, setScale] = useState(1);
  const resumeRef = useRef()

  const downloadPDF = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("template1.pdf");
  };

  // const generatePDF = async () => {
  //   // Access the dom element using useRef hook
  //   const element = resumeRef.current;
  //   // if (!element) {
  //   //   toast.info("Unable to capture the content at a moment");
  //   //   return;
  //   // }
  //   html2canvas
  //     .toPng(element)
  //     .then((dataUrl) => {
  //       const a4Width = 210;
  //       const a4Height = 297;
        
  //       var pdf = new jsPDF({
  //         orientation: "p",
  //         unit: "mm",
  //         format: [a4Width, a4Height],
  //       });
        
  //       const aspectRatio = a4Width / a4Height;
  //       const imgWidth = a4Width;
  //       const imgHeight = a4Width / aspectRatio;
        
  //       const verticalMargin = (a4Height, imgHeight) / 2;
        
  //       pdf.addImage(dataUrl, "PNG", 0, verticalMargin, imgWidth, imgHeight);
  //       pdf.save("resume.pdf");
  //     })
  //     .catch((err) => {
  //       console.error(`Error : ${err.message}`);
  //     });
  // };

  // Keyboard and Mouse Event Handlers
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey) {
        if (event.key === "+") {
          setScale((prev) => Math.min(prev + 0.1, 2)); // Zoom In
        } else if (event.key === "-") {
          setScale((prev) => Math.max(prev - 0.1, 0.5)); // Zoom Out
        } else if (event.key === "0") {
          setScale(1); // Reset Zoom
        }
      }
    };

    const handleWheel = (event) => {
      if (event.ctrlKey) {
        if (event.deltaY < 0) {
          setScale((prev) => Math.min(prev + 0.1, 2)); // Zoom In
        } else {
          setScale((prev) => Math.max(prev - 0.1, 0.5)); // Zoom Out
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="relative bg-yellow-100 min-h-screen grid grid-cols-2 items-center p-4">
      {/* Template Content */}
      <div>
      <button 
      onClick={downloadPDF}
      className="bg-black text-white text-lg rounded-lg px-3 py-2 mb-2">
            Download
      </button>
      </div>
      <div
        ref={resumeRef}
        className="bg-white p-14 border border-gray-300 shadow-lg font-sans w-[794px] h-[1123px] "
        style={{
          transform: `scale(${scale})`, // Apply scaling
          transformOrigin: "top center", // Scaling origin
          // width: "595.276px",
          // height: "841.89px",
          fontSize: `${scale * 16}px`, // Adjust font size dynamically
          lineHeight: `${scale * 1.5}rem`, // Adjust line height for readability
        }}
      >
        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-2xl font-bold">
            {personalData?.firstName || "Your Name"}
          </h1>
          <p className="text-sm flex gap-3 items-center">
            📞 {personalData?.phoneNumber || "N/A"} | <Mail size={14} />{" "}
            {personalData?.email || "N/A"}
          </p>
          <p className="text-sm">
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
        <section className="mt-4">
          <h2 className="text-lg font-semibold border-b-2 pb-1">Profile</h2>
          <p className="text-sm">
            Skilled in C++, Data Structures and Algorithms, and web development
            with a Bachelor of Engineering focused on Computer Science from
            Radharaman Engineering College. I am eager to start my professional
            journey in a dynamic work environment. With a strong academic
            background and a willingness to learn, I am confident in my ability
            to contribute positively to any team.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mt-4">
          <h2 className="text-lg font-semibold border-b pb-1">
            Technical Skills
          </h2>
          {skills && skills.length > 0 ? (
            skills.map((skill, index) => (
              <div key={index} className="pl-5">
                <li>{skill.title}</li>
              </div>
            ))
          ) : (
            <p>No skills available</p>
          )}
        </section>

        {/* Work Experience */}
        <section className="mt-4">
          <h2 className="text-lg font-semibold border-b pb-1">
            Work Experience
          </h2>
          <div className="text-sm space-y-1 pl-5">
            {companies?.map((experience, index) => (
              <div key={index}>
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-semibold">
                    {experience.companyName}
                  </h3>
                  <p>
                    {experience.startDate} - {experience.endDate}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>{experience.position}</p>
                  <p>{experience.location}</p>
                </div>
                <ul className="list-disc pl-5">
                  <li>{experience.description}</li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-4">
          <h2 className="text-lg font-semibold border-b pb-1">Education</h2>
          <div className="text-sm space-y-1 pl-5">
            {educations?.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between items-center">
                  <b className="text-base">{edu?.instituteName}</b>
                  <span>{edu?.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>{edu?.stream}</span>
                  <span>
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
