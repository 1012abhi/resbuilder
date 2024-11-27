// import React from 'react';

// function Skills() {
//   return (
//     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//       <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
//         <div>
//         </div>
//         <label htmlFor="table-search" className="sr-only">
//           Search
//         </label>
//         <div className="relative">
//           <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
//             <svg
//               className="w-5 h-5 text-gray-500 dark:text-gray-400"
//               aria-hidden="true"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </div>
//           <input
//             type="text"
//             id="table-search"
//             className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Search for items"
//           />
//         </div>
//       </div>
//       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//           <tr>
//             <th scope="col" className="px-6 py-3">
//               Title
//             </th>

//             <th scope="col" className="px-6 py-3">
//               <span className="sr-only">Edit</span>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//             <td className="w-4 p-4">
//             </td>
//             <th
//               scope="row"
//               className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
//             >
//               <div className="pl-3">
//                 <div className="text-base font-semibold">Html</div>

//               </div>
//             </th>
//             <td className="px-6 py-4 text-right">
//               <a
//                 href="#"
//                 className="font-medium text-slate-600 dark:text-blue-500 hover:underline"  >
//                 Edit
//               </a>
//             </td>
//             <td className="px-6 py-4 text-right">
//               <a
//                 href="#"
//                 className="font-medium text-slate-600 dark:text-blue-500 hover:underline"
//               >
//                 Delete
//               </a>

//             </td>
//           </tr>
//           <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//             <td className="w-4 p-4">
//             </td>
//             <th
//               scope="row"
//               className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
//             >

//               <div className="pl-3">
//                 <div className="text-base font-semibold">Css</div>
//               </div>
//             </th>

//             <td className="px-6 py-4 text-right">
//               <a
//                 href="#"
//                 className="font-medium text-slate-600 dark:text-blue-500 hover:underline"
//               >
//                 Edit
//               </a>

//             </td>
//             <td className="px-6 py-4 text-right">
//               <a
//                 href="#"
//                 className="font-medium text-slate-600 dark:text-blue-500 hover:underline"
//               >
//                 Delete
//               </a>

//             </td>
//           </tr>
//           <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
//             <td className="w-4 p-4">
             
//             </td>
//             <th
//               scope="row"
//               className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
//             >

//               <div className="pl-3">
//                 <div className="text-base font-semibold">Javascript</div>
//               </div>
//             </th>

//             <td className="px-6 py-4 text-right">
//               <a
//                 href="#"
//                 className="font-medium text-slate-600 dark:text-blue-500 hover:underline"
//               >  Edit
//               </a>
//             </td>
//             <td className="px-6 py-4 text-right">
//               <a
//                 href="#"
//                 className="font-medium text-slate-600 dark:text-blue-500 hover:underline"
//               >
//                 Delete
//               </a>

//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Skills;

import React, { useState } from 'react';
import { Plus, X, Save } from 'lucide-react';

const SkillsSection = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [skillCategory, setSkillCategory] = useState('technical');

  const categories = {
    technical: 'Technical Skills',
    soft: 'Soft Skills',
    languages: 'Languages',
    tools: 'Tools & Platforms'
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, {
        id: Date.now(),
        name: newSkill.trim(),
        category: skillCategory
      }]);
      setNewSkill('');
    }
  };

  const handleDeleteSkill = (skillId) => {
    setSkills(skills.filter(skill => skill.id !== skillId));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddSkill();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
        
        {/* Add new skill section */}
        <div className="flex space-x-2">
          <select
            className="px-3 py-2 border rounded-md w-1/3"
            value={skillCategory}
            onChange={(e) => setSkillCategory(e.target.value)}
          >
            {Object.entries(categories).map(([key, value]) => (
              <option key={key} value={key}>{value}</option>
            ))}
          </select>
          
          <div className="flex-1 flex space-x-2">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add a new skill..."
              className="flex-1 px-3 py-2 border rounded-md"
            />
            <button
              onClick={handleAddSkill}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
            >
              <Plus size={18} className="mr-1" />
              Add
            </button>
          </div>
        </div>

        {/* Skills display section */}
        {Object.entries(categories).map(([categoryKey, categoryName]) => {
          const categorySkills = skills.filter(skill => skill.category === categoryKey);
          
          if (categorySkills.length === 0) return null;
          
          return (
            <div key={categoryKey} className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">{categoryName}</h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map(skill => (
                  <div
                    key={skill.id}
                    className="flex items-center bg-gray-100 px-3 py-1 rounded-full"
                  >
                    <span className="text-gray-800">{skill.name}</span>
                    <button
                      onClick={() => handleDeleteSkill(skill.id)}
                      className="ml-2 text-gray-500 hover:text-red-500"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;