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
// import React from 'react';

// const Resume = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-8 space-y-8 font-sans">
//       <header className="space-y-2">
//         <h1 className="text-4xl font-bold">Abhishek Maheshwari</h1>
//         <p className="text-lg">📞 +918103772321 | 📧 abhishek3110maheshwari@gmail.com</p>
//         <p className="text-lg">
//           <a href="#" className="text-blue-600 hover:underline">LinkedIn</a> | 
//           <a href="#" className="text-blue-600 hover:underline"> GitHub</a> | 
//           <a href="#" className="text-blue-600 hover:underline"> LeetCode</a> | 
//           <a href="#" className="text-blue-600 hover:underline"> GeeksforGeeks</a>
//         </p>
//       </header>

//       <section className="space-y-4">
//         <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">Profile</h2>
//         <p className="text-base leading-relaxed">
//           Skilled in C++, Data Structures and Algorithms, and web development with a Bachelor of Engineering
//           focused on Computer Science from Radharaman Engineering College. I am eager to start my professional
//           journey in a dynamic work environment. With a strong academic background and a willingness to learn,
//           I am confident in my ability to contribute positively to any team. My goal is to gain practical experience
//           and develop my skills further while making a meaningful impact on the organization's goals.
//         </p>
//       </section>

//       <section className="space-y-4">
//         <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">Technical Skills</h2>
//         <ul className="list-disc pl-5 text-base space-y-2">
//           <li><span className="font-semibold">Technical:</span> Data Structures and Algorithms</li>
//           <li><span className="font-semibold">Languages:</span> HTML, CSS, JavaScript, C++</li>
//           <li><span className="font-semibold">Frameworks:</span> React.js, Node.js, Express.js, Bootstrap, Tailwind CSS</li>
//           <li><span className="font-semibold">Databases:</span> MongoDB</li>
//           <li><span className="font-semibold">Developer Tools:</span> Visual Studio, GitHub</li>
//         </ul>
//       </section>

//       <section className="space-y-4">
//         <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">Projects</h2>
//         <div className="space-y-6">
//           <div className="space-y-2">
//             <h3 className="text-xl font-semibold">Employee Management System | React.js, Tailwind CSS</h3>
//             <p className="text-blue-600 hover:underline"><a href="#">GitHub</a></p>
//             <ul className="list-disc pl-5 text-base space-y-1">
//               <li>Admin Dashboard: Task assignment with priority levels (high, medium, low) and due dates.</li>
//               <li>Employee Dashboard: Allows employees to manage tasks by status (new, active, completed, failed) and access a complete list of tasks.</li>
//               <li>Task Status and Priority Management: Real-time updates on task status with priority sorting.</li>
//               <li>State and Data Management: Leveraged Context API for state management and LocalStorage for persistent data storage.</li>
//             </ul>
//           </div>
//           <div className="space-y-2">
//             <h3 className="text-xl font-semibold">YouTube Backend Clone | Node.js, Express.js, MongoDB, Postman</h3>
//             <p className="text-blue-600 hover:underline"><a href="#">GitHub</a></p>
//             <ul className="list-disc pl-5 text-base space-y-1">
//               <li>Built a scalable backend with JWT-based authentication for users and channels.</li>
//               <li>Integrated Cloudinary for efficient file uploads and MongoDB for robust data storage.</li>
//               <li>Enabled key features including channel subscriptions, video likes, comments, and custom playlists.</li>
//               <li>Added a unique tweet feature for user engagement and tested all API endpoints using Postman.</li>
//             </ul>
//           </div>
//           <div className="space-y-2">
//             <h3 className="text-xl font-semibold">AroundMe | HTML, CSS, JavaScript</h3>
//             <p className="text-base">Created a job portal frontend web page focusing on user experience and responsive design.</p>
//           </div>
//           <div className="space-y-2">
//             <h3 className="text-xl font-semibold">Portfolio | HTML, CSS, JavaScript</h3>
//             <p className="text-base">Designed and developed a personal portfolio with a JavaScript back-end and an HTML/CSS front-end.</p>
//           </div>
//         </div>
//       </section>

//       <section className="space-y-4">
//         <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">Education</h2>
//         <div className="space-y-2">
//           <h3 className="text-xl font-semibold">Radharaman Engineering College</h3>
//           <p className="text-base">Bhopal, Madhya Pradesh</p>
//           <p className="text-base">Bachelor of Technology in Computer Science</p>
//           <p className="text-base">Aug 2020 - Jun 2024</p>
//         </div>
//       </section>

//       <section className="space-y-4">
//         <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2">Accomplishments</h2>
//         <ul className="list-disc pl-5 text-base space-y-2">
//           <li>Data Structure and Algorithm Certificate - TheCodingAdda</li>
//           <li>Debugging - Bansal Group of Institutes</li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Resume;

