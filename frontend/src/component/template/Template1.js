import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { Mail } from 'lucide-react';

function Template1 ({personalData, educations, companies, skills}) {
    // const [localPersonalData, setLocalPersonalData] = useState(personalData || {});
    // const [localEducations, setLocalEducations] = useState(educations || []);
    // const [localExperience, setLocalExperience] = useState(companies || []);
    // const [localSkills, setLocalSkills] = useState(skills || [])
    // console.log(localSkills.map(skill => console.log(skill)));
//     console.log("Skills IDs", localSkills.map((skill) => skill._id));
// console.log("Experience IDs", localExperience.map((exp) => exp._id));
// console.log("Education IDs", localEducations.map((edu) => edu._id));

    // // Sync props to local state when props change
    // useEffect(() => {
    //   setLocalPersonalData(personalData);
    //   setLocalEducations(educations);
    //   setLocalExperience(companies);
    //   setLocalSkills(skills)
    // }, [personalData, educations, companies, skills]);
  
  
  return (
  <>
    <div className="relative bg-white mx-auto p-6 border border-gray-300  font-sans " style={{width:'794px'}}>
        <header className="space-y-2">
          <h1 className="text-2xl font-bold">{personalData?.firstName}</h1>
          <p className="text-sm flex gap-3 items-center">📞 {personalData?.phoneNumber} | <Mail size={14}/> {personalData?.email}</p>
          <p className="text-sm">
            <Link to={"#"} className="hover:underline">{personalData?.linkedin}</Link> |
            <Link to={"#"} className="hover:underline"> GitHub</Link> |
            <Link to={"#"} className="hover:underline"> LeetCode</Link> |
            <Link to={"#"} className="hover:underline"> GeeksforGeeks</Link>
          </p>
        </header>
        
        {/* Profile */}
        <section className="mt-4">
          <h2 className="text-lg font-semibold border-b-2 border-gray-300pb-1">Profile</h2>
          <p className="text-sm">
            Skilled in C++, Data Structures and Algorithms, and web development with a Bachelor of Engineering
            focused on Computer Science from Radharaman Engineering College. I am eager to start my professional
            journey in a dynamic work environment. With a strong academic background and a willingness to learn,
            I am confident in my ability to contribute positively to any team.
          </p>
        </section>
        
        {/* Technical Skills */}
        <section className="mt-4">
          <h2 className="text-lg font-semibold border-b pb-1">Technical Skills</h2>
          {skills && skills.length > 0 ? (
            skills?.map((skill, index) => (
              <div key={index} className="pl-5">
                <li>{skill.title}</li>
              </div>
          ))
          ) : (
            <p>No skills available</p>
          )}
        </section>
          
        {/* Work Experience */}
        <section className='mt-4'>
          <h2 className="text-lg font-semibold border-b pb-1">Work Experience</h2>
            <div className="text-sm space-y-1 pl-5">
              {companies?.map((experience, index) => (
                <div key={index}>
                  <div className='flex justify-between items-center'>
                    <h3 className="text-base font-semibold">{experience.companyName}</h3>
                    <p>{experience.startDate} - {experience.endDate}</p>
                  </div>
                    <div className='flex justify-between'>
                    <p className="">{experience.position}</p>
                    <p className="">{experience.location}</p>
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
                  <b className='text-base'>{edu?.instituteName}</b>
                  <span>{edu?.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>{edu?.stream}</span>
                  <span>{edu?.startDate} - {edu?.endDate}</span>
                </div>
              </div>
            ))} 
          </div>
        </section>

    </div>
  </>
  );
};

export default Template1