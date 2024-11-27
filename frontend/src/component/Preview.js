// import React, { useState } from 'react'
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// function EmployeDetails({ toggleSection, expandedSection, handleEmployementChange, setCompanyDetail, companyDetail, handleSubmitForm, companies,handleUpdateForm }) {

//     const [editIndex, setEditIndex] = useState("")
//     return (

//         <div className='Experience'>
//             <a
//                 className="mx-auto bg-gray-100 border-t border-r border-l rounded px-6 pb-5 pt-5 text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out flex items-center justify-between gap-5"
//                 onClick={() => toggleSection('experience')}
//                 data-twe-collapse-init
//                 data-twe-ripple-init
//                 data-twe-ripple-color="light"
//                 href="#experience"
//                 role="button"
//                 aria-expanded={expandedSection === 'experience'}
//                 aria-controls="experience"
//             >
//                 <p className='font-semibold'>Experience</p>
//                 {expandedSection === 'experience' ? <FaChevronUp className='ml-2' /> : <FaChevronDown className='ml-2' />}
//             </a>
//             {expandedSection === 'experience' && (
//                 <div
//                     className="visible p-6 border-b border-r border-l bg-gray-100 flex flex-col gap-4"
//                     data-twe-collapse-item
//                     id="experience" >
//                     <div className="visible p-6 border-b border-r border-l bg-gray-100 flex flex-col gap-4" data-twe-collapse-item>

//                         {companies.map((company, key) => {
//                             const companyKey = `company_${key}`
//                             return <div key={key}>
//                                 {
//                                     editIndex !== companyKey ?
//                                         <>
//                                             <label className="flex items-center gap-5">
//                                                 <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Company</span>
//                                                 {companyDetail.companyName}
//                                             </label>
//                                             <label className="flex items-center gap-5">
//                                                 <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Position</span>
//                                                 {companyDetail.position}
//                                             </label>
//                                             <label className="flex items-center gap-5">
//                                                 <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Start Date</span>
//                                                 {companyDetail.startDate}
//                                             </label>
//                                             <label className="flex items-center gap-5">
//                                                 <span className="font-extralight text-[0.8vw] pl-5 w-1/4">End Date</span>
//                                                 {companyDetail.lastName}
//                                             </label>
//                                             <label className="flex items-center gap-5">
//                                                 <span className="font-extralight text-[0.8vw] pl-5 w-1/4">location</span>
//                                                 {company.location}
//                                             </label>
//                                             <button className='bg-slate-600 w-32 text-white font-bold py-2  rounded-full text-lg' onClick={() => {
//                                                 setEditIndex(companyKey)
//                                                 setCompanyDetail(company)
//                                             }} >Edit</button>
//                                         </> :
//                                         <>
//                                             <label className="flex flex-col gap-5">
//                                                 <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Company</span>
//                                                 <input
//                                                     type="text"
//                                                     className="w-3/4 py-2 px-5 rounded-2xl"
//                                                     placeholder="Enter Your Company Name"
//                                                     name='companyName'
//                                                     onChange={handleEmployementChange}
//                                                     value={companyDetail.companyName}
//                                                 />
//                                             </label>
//                                             <label className="flex flex-col gap-5">
//                                                 <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Position</span>
//                                                 <input
//                                                     type="text"
//                                                     className="w-3/4 py-2 px-5 rounded-2xl"
//                                                     placeholder="Enter Your Position"
//                                                     name='position'
//                                                     onChange={handleEmployementChange}
//                                                     value={companyDetail.position}
//                                                 />
//                                             </label>
//                                             <label className="flex flex-col gap-5">
//                                                 <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Start Date</span>
//                                                 <input
//                                                     type="date"
//                                                     className="w-3/4 py-2 px-5 rounded-2xl"
//                                                     placeholder="Enter Your Start Date"
//                                                     name='startDate'
//                                                     onChange={handleEmployementChange}
//                                                     value={companyDetail.startDate}
//                                                 />
//                                             </label>
//                                             <label className="flex flex-col gap-5">
//                                                 <span className="font-extralight text-[0.8vw] pl-5 w-1/4">End Date</span>
//                                                 <input
//                                                     type="date"
//                                                     className="w-3/4 py-2 px-5 rounded-2xl"
//                                                     placeholder="Enter Your End Date"
//                                                     name='endDate'
//                                                     onChange={handleEmployementChange}
//                                                     value={companyDetail.endDate}
//                                                 />
//                                             </label>
//                                             <label className="flex flex-col gap-5">
//                                                 <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Location</span>
//                                                 <input
//                                                     type="text"
//                                                     className="w-3/4 py-2 px-5 rounded-2xl"
//                                                     placeholder="Enter Your End Date"
//                                                     name='location'
//                                                     onChange={handleEmployementChange}
//                                                     value={companyDetail.location}
//                                                 />
//                                             </label>
//                                             <button className='bg-slate-600 w-32 text-white font-bold py-2  rounded-full text-lg' onClick={() =>{
//                                                 handleUpdateForm("COMPANY_INFORMATION",company._id)
//                                                 setEditIndex("")
//                                             }} >Save</button>
//                                         </>
//                                 }
//                             </div>
//                         })}
//                     </div>
//                 </div>
//             )}
//         </div>




//     )
// }

// export default EmployeDetails
