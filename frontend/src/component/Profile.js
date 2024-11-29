import React, { useEffect, useReducer, useState } from 'react';
import { Collapse, Ripple, initTWE } from "tw-elements";
import { MdDownloadForOffline } from "react-icons/md";
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import { IoMdAddCircleOutline } from "react-icons/io";
// import { TiDeleteOutline } from "react-icons/ti";
import { addPersonalDetail, getUser } from "../api/userApi";
import { addEmploymentnDetail, updateEmploymentDetail } from "../api/employmentApi"
import { addEducationDetail, updateEducationDetail } from "../api/educationApi"
import PersonalDetail from "./common/PersonalDetail";
import AboutMe from './common/AboutMe';
import Contact from './common/Contact';
import EducationDetails from './common/EducationDetails';
import EmployeDetails from './common/EmployeDetails';
import Skills from './common/Skills';
import { getUserSkill } from '../api/skillApi';

function Profile() {
  const [expandedSection, setExpandedSection] = useState(null);
  // const [isFormVisible, setIsFormVisible] = useState(false);
  // const [skills, setSkills] = useState([]);
  // const [currentSkill, setCurrentSkill] = useState('');
  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    country: "",
    discription: "",
    email: "",
    phoneNumber: "",
    linkedin: "",
    github: "",
    isEdit: false
  })

  const [companyDetail, setCompanyDetail] = useState({
    companyName: "",
    position: "",
    startDate: "",
    endDate: "",
    location: ""
  })
  const [companies, setCompanies] = useState([])
  const [educationDetails, setEducationDetails] = useState({
    instituteName: "",
    university: "",
    stream: "",
    startDate: "",
    endDate: "",
    location: ""
  })

  const [educations, setEducations] = useState([])
  const [skills, setSkills] = useState([]);


  useEffect(() => {
    initTWE({ Collapse, Ripple });
    getuserData()
    // getUserSkill()
  }, []);

  const getuserData = async () => {
    const getUserdata = await getUser()
    
    // console.log(getUserdata.education.map((edu) => console.log(edu)))
    console.log(getUserdata)
    setPersonalData({
      ...getUserdata?.user, ...getUserdata?.persnalDetail, isEdit: true,
    })

    if (getUserdata.education) {
      setEducations(getUserdata.education)
    }
    
    if (getUserdata.employement) {
      setCompanies(getUserdata.employement)
    }
    
    // if (getUserdata.UserSkill) {
    //   setSkills(getUserdata.UserSkill)
    // }
  }
  const getData = async () => {
    const getskill = await getUserSkill()
    if (!getskill) {
      console.warn("No skills found or an error occurred.");
      return;
    }
    setSkills(getskill.getSkill)
    console.log("getskil", getskill.getSkill);
    
  }
  
  useEffect(() => {
    getData()
  },[])
  
  const toggleSection = (section) => {
    setExpandedSection(prevSection => (prevSection === section ? null : section));
  };

  
  const handleChange = (e) => {
    const value = e.target.value
    setPersonalData((prev) => {
      return { ...prev, [e.target.name]: value }
    })
  }
  
  const handleEducationChange = (e) => {
    const value = e.target.value
    setEducationDetails((prev) => {
      return { ...prev, [e.target.name]: value }
    })
  }

  const handleEmployementChange = (e) => {
    const value = e.target.value
    setCompanyDetail((prev) => {
      return { ...prev, [e.target.name]: value }
    })
  }
  
  const handleSubmitForm = async (slug) => {
    if (slug === 'PERSONAL_DETAIL') {
      await addPersonalDetail(personalData)
      setPersonalData((prev) => ({ ...prev, ...personalData, isEdit: true }))
    }
    else if (slug === "EDUCATION-INFORMATION") {
      await addEducationDetail(educationDetails)
      setEducations((prev) => ({ ...prev, educationDetails: educations, isEdit: true }))
    }
    else if (slug === "COMPANY_INFORMATION") {
      await addEmploymentnDetail(companyDetail)
      setCompanyDetail((prev) => ({ ...prev, companyDetail: companies, isEdit: true }))
    }
    // else if (slug === "SKILL_INFORMATION") {
      // await addUserSkill()
    // }
  }
  
  // const handleUpdateForm = async (action, id) => {
  //   if (action === "UPDATE_EDUCATION") {
  //       try {
  //           const response = await addEducationDetail(educationDetails); // Update API call
  //           if (response.success) {
  //               const updatedEducations = educations.map((edu) =>
  //                   edu._id === id ? { ...edu, ...educationDetails } : edu
  //               );
  //               setEducationDetails({});
  //               setEducationDetails(updatedEducations);
  //           }
  //       } catch (error) {
  //           console.error("Failed to update education:", error);
  //       }
  //   }
  // };
// const handleSaveNewEducation = async () => {
//   try {
//       const response = await addEducationDetail(educationDetails); // Save API call
//       if (response.success) {
//           setEducationDetails({});
//           // setIsAddButtonClicked(false);
//           // Fetch updated data
//           const updatedEducations = await getUser(); // Assuming it fetches educations
//           setEducationDetails(updatedEducations.education);
//       }
//   } catch (error) {
//       console.error("Failed to add education:", error);
//   }
// };

  // const handleUpdateForm = (slug, itemId) => {
  //   if (slug === "UPDATE_EDUCATION") {
  //     updateEducationDetail(educationDetails, itemId)
  //     getuserData()
  //   } else if (slug === "COMPANY_INFORMATION") {
  //     updateEmploymentDetail(companyDetail, itemId)
  //     getuserData()
  //   }
    
  // }
  
  // const toggleFormVisibility = () => {
  //   setIsFormVisible(!isFormVisible);
  // };
  // const handleAddSkill = () => {
  //   if (currentSkill && !skills.includes(currentSkill)) {
  //     setSkills([...skills, currentSkill]);
  //     setCurrentSkill('');
  //   }
  // };

  // const handleRemoveSkill = (skillToRemove) => {
  //   setSkills(skills.filter(skill => skill !== skillToRemove));
  // };
  
  return (
  <>
    <div className="bg-yellow-100 pt-28 pb-20 flex justify-center">
      <div className='container w-3/4 bg-white min-h-full rounded-2xl flex flex-col px-28 border border-slate-300'>
        <div className='py-5 flex items-center border-b'>
          <div className='flex items-center w-1/2'>
            <div className='w-24 h-24 bg-gray-100 rounded-full'>
              <label htmlFor="fileInput" className='cursor-pointer'>
                <svg viewBox="0 0 128 128" className="chakra-avatar__svg css-16ite8i" role="img" aria-label=" avatar">
                  <path fill="currentColor" d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"></path>
                  <path fill="currentColor" d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"></path></svg>
              </label>
              <input type="file" id="fileInput" className='hidden' />
            </div>
            <h1 className='text-2xl ms-5'>{personalData?.firstName}</h1>
          </div>
          <div className='items-center p-5 w-1/2 flex justify-end'>
            <button className='bg-slate-600 text-white font-bold py-2 px-4 rounded-full flex items-center justify-between text-lg'>
              <MdDownloadForOffline className='mr-2' />
              Download
            </button>
          </div>
           {/* Logout Button */}
          <div className='flex items-center ml-auto'>
            <button
              className='bg-slate-600 font-bold text-lg text-white px-5 py-2 w-24 rounded-3xl'
              onClick={() => {
                localStorage.removeItem('token');
                window.location.reload();
              }}
            >
              Logout
            </button>
          </div>
        </div>
      
        <div className='py-5 flex flex-col gap-5'>
          <PersonalDetail
            personalData={personalData}
            setPersonalData={setPersonalData}
            handleSubmitForm={handleSubmitForm}
            toggleSection={toggleSection}
            expandedSection={expandedSection}
            handleChange={handleChange}
          />
          <AboutMe
            personalData={personalData}
            handleSubmitForm={handleSubmitForm}
            setPersonalData={setPersonalData}
            toggleSection={toggleSection}
            expandedSection={expandedSection}
            handleChange={handleChange}
          />
          <Contact
            personalData={personalData}
            handleSubmitForm={handleSubmitForm}
            setPersonalData={setPersonalData}
            toggleSection={toggleSection}
            expandedSection={expandedSection}
            handleChange={handleChange} />

          <EducationDetails
            educations={educations}
            handleSubmitForm={handleSubmitForm}
            toggleSection={toggleSection}
            expandedSection={expandedSection}
            handleEducationChange={handleEducationChange}
            setEducations={setEducations}
            educationDetails={educationDetails}
            setEducationDetails={setEducationDetails}
            // handleUpdateForm={handleUpdateForm}
          />

          <EmployeDetails
            toggleSection={toggleSection}
            expandedSection={expandedSection}
            handleSubmitForm={handleSubmitForm}
            handleEmployementChange={handleEmployementChange}
            companyDetail={companyDetail}
            setCompanyDetail={setCompanyDetail}
            companies={companies}
            setCompanies={setCompanies}
            // handleUpdateForm={handleUpdateForm}
          />

          <Skills 
            toggleSection={toggleSection}
            expandedSection={expandedSection}
            skills={skills}
            setSkills={setSkills}

          />




          {/*      <div className='Skill'>
            <a
              className="mx-auto bg-gray-100 border-t border-r border-l rounded px-6 pb-5 pt-5 text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out flex items-center justify-between gap-5"
              onClick={() => toggleSection('skill')}
              data-twe-collapse-init
              data-twe-ripple-init
              data-twe-ripple-color="light"
              href="#skill"
              role="button"
              aria-expanded={expandedSection === 'skill'}
              aria-controls="skill"
            >
              <p className='font-semibold'>Skill</p>
              {expandedSection === 'skill' ? <FaChevronUp className='ml-2' /> : <FaChevronDown className='ml-2' />}
            </a>
            {expandedSection === 'skill' && (
              <div
                className="visible p-6 border-b border-r border-l bg-gray-100 flex flex-col gap-4"
                data-twe-collapse-item
                id="skill"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="w-3/4 py-2 px-5 rounded-2xl"
                    placeholder="Enter a skill"
                    value={currentSkill}
                    onChange={(e) => setCurrentSkill(e.target.value)}
                  />
                  <button
                    className='flex items-center gap-2 px-5 py-2 border rounded-full border-gray-300'
                    onClick={handleAddSkill}
                  >
                    Add <IoMdAddCircleOutline />
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full">
                      <span>{skill}</span>
                      <button onClick={() => handleRemoveSkill(skill)}>
                        <TiDeleteOutline className="text-red-500 cursor-pointer" />
                      </button>
                    </div>
                  ))}
                </div>
                <button className='bg-slate-600 w-32 text-white font-bold py-2  rounded-full text-lg' onClick={handleSubmitForm} >Edit</button>

              </div>
            )}
          </div>
          <div className='Company-information'>
            <a
              className="mx-auto bg-gray-100 border-t border-r border-l rounded px-6 pb-5 pt-5 text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out flex items-center justify-between gap-5"
              onClick={() => toggleSection('companyInfo')}
              data-twe-collapse-init
              data-twe-ripple-init
              data-twe-ripple-color="light"
              href="#companyInfo"
              role="button"
              aria-expanded={expandedSection === 'companyInfo'}
              aria-controls="companyInfo"
            >
              <p className='font-semibold'>Company Information</p>
              {expandedSection === 'companyInfo' ? <FaChevronUp className='ml-2' /> : <FaChevronDown className='ml-2' />}
            </a>
            {expandedSection === 'companyInfo' && (
              <div
                className="visible p-6 border-b border-r border-l bg-gray-100 flex flex-col gap-4"
                data-twe-collapse-item
                id="companyInfo"
              >
                <button
                  className='flex w-24 items-center gap-2 px-5 py-2 border rounded-full border-gray-300'
                  onClick={toggleFormVisibility}
                >
                  Add <IoMdAddCircleOutline />
                </button>

                {isFormVisible && (
                  <div className="visible p-6 border-b border-r border-l bg-gray-100 flex flex-col gap-4" data-twe-collapse-item>
                    <label className="flex flex-col gap-5">
                      <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Company</span>
                      <input
                        type="text"
                        className="w-3/4 py-2 px-5 rounded-2xl"
                        placeholder="Enter Your Company Name"
                        name='companyName'
                        onChange={handleChange}
                      />
                    </label>
                    <label className="flex flex-col gap-5">
                      <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Position</span>
                      <input
                        type="text"
                        className="w-3/4 py-2 px-5 rounded-2xl"
                        placeholder="Enter Your Position"
                        name='position'
                        onChange={handleChange}
                      />
                    </label>
                    <label className="flex flex-col gap-5">
                      <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Start Date</span>
                      <input
                        type="date"
                        className="w-3/4 py-2 px-5 rounded-2xl"
                        placeholder="Enter Your Start Date"
                        name='startDate'
                        onChange={handleChange}
                      />
                    </label>
                    <label className="flex flex-col gap-5">
                      <span className="font-extralight text-[0.8vw] pl-5 w-1/4">End Date</span>
                      <input
                        type="date"
                        className="w-3/4 py-2 px-5 rounded-2xl"
                        placeholder="Enter Your End Date"
                        name='endDate'
                        onChange={handleChange}
                      />
                    </label>
                    <label className="flex flex-col gap-5">
                      <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Location</span>
                      <input
                        type="text"
                        className="w-3/4 py-2 px-5 rounded-2xl"
                        placeholder="Enter Your Location"
                        name='location'
                        onChange={handleChange}
                      />
                    </label>
                    <button className='bg-slate-600 w-32 text-white font-bold py-2  rounded-full text-lg' onClick={() => { handleSubmitForm("COMPANY-INFORMATION") }} >Edit</button>

                  </div>
                )}
              </div>
            )}
          </div> */}

        </div>
      </div>
    </div>
    </>
  );
}

export default Profile;
