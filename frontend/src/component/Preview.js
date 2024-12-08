import React from 'react'
import { Link } from 'react-router-dom'
import Template1 from './template/Template1'

function Preview({personalData, educations, companies, skills}) {
  // const [isButtonClick, setisButtonClick] = useState(false)
  // console.log(personalData,educations,companies, skills);
  
  return (
    <>
      <div className='flex items-center mt-[10%] justify-center'>
        This is the Preview page
        <Link className=' bg-blue-600 px-3 py-3 rounded-xl ml-8 text-zinc-50 text-md' to={'/profile'} >go Back</Link>
        
      </div>
  
        <Template1
          personalData={personalData}
          educations={educations}
          companies={companies}
          skills={skills}
        />

    </>
  )
}

export default Preview



// import React from "react";
// // import detail from "./detail";
// const Preview = () => {
//     const personalInfo = {
//         name: "John Doe",
//         email: "john.doe@example.com",
//         phone: "123-456-7890",
//         address: "123 Main Street, City, Country",
//       };
    
//       const aboutMe = "A highly motivated software engineer with a passion for developing innovative solutions to real-world problems.";
    
//       const education = [
//         {
//           instituteName: "XYZ University",
//           degree: "B.Tech",
//           fieldOfStudy: "Computer Science",
//           startDate: "2018",
//           endDate: "2022",
//           location: "City, Country",
//         },
//       ];
    
//       const experience = [
//         {
//           companyName: "ABC Corporation",
//           position: "Software Engineer",
//           startDate: "2022",
//           endDate: "Present",
//           location: "City, Country",
//         },
//       ];
    
//       const skills = ["JavaScript", "React", "Node.js", "MongoDB"];
  
  
//     return (
//     <div className="bg-gray-200 p-8 min-h-screen flex justify-center">
//       <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg">
//         {/* Header Section */}
//         <header className="bg-gray-800 text-white p-6 rounded-t-lg">
//           <h1 className="text-3xl font-bold">{personalInfo?.name || "Your Name"}</h1>
//           <p className="text-gray-300">{personalInfo?.email || "example@example.com"} | {personalInfo?.phone || "123-456-7890"}</p>
//           <p className="text-gray-300">{personalInfo?.address || "Your Address"}</p>
//         </header>

//         {/* About Me Section */}
//         <section className="p-6 border-b">
//           <h2 className="text-xl font-bold text-gray-800 mb-3">About Me</h2>
//           <p className="text-gray-700">{aboutMe || "A brief description about yourself goes here."}</p>
//         </section>

//         {/* Education Section */}
//         <section className="p-6 border-b">
//           <h2 className="text-xl font-bold text-gray-800 mb-3">Education</h2>
//           {education?.length > 0 ? (
//             education.map((edu, index) => (
//               <div key={index} className="mb-4">
//                 <p className="text-lg font-semibold">{edu.instituteName}</p>
//                 <p className="text-gray-600">{edu.degree} in {edu.fieldOfStudy}</p>
//                 <p className="text-gray-500">{edu.startDate} - {edu.endDate}</p>
//                 <p className="text-gray-500">{edu.location}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-600">No education details added.</p>
//           )}
//         </section>

//         {/* Experience Section */}
//         <section className="p-6 border-b">
//           <h2 className="text-xl font-bold text-gray-800 mb-3">Experience</h2>
//           {experience?.length > 0 ? (
//             experience.map((exp, index) => (
//               <div key={index} className="mb-4">
//                 <p className="text-lg font-semibold">{exp.companyName}</p>
//                 <p className="text-gray-600">{exp.position}</p>
//                 <p className="text-gray-500">{exp.startDate} - {exp.endDate}</p>
//                 <p className="text-gray-500">{exp.location}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-600">No experience details added.</p>
//           )}
//         </section>

//         {/* Skills Section */}
//         <section className="p-6">
//           <h2 className="text-xl font-bold text-gray-800 mb-3">Skills</h2>
//           {skills?.length > 0 ? (
//             <ul className="list-disc list-inside text-gray-700">
//               {skills.map((skill, index) => (
//                 <li key={index}>{skill}</li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-600">No skills added.</p>
//           )}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Preview;



