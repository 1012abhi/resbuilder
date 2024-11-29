import React, { useState } from 'react';
import { Plus, X, Save } from 'lucide-react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { addUserSkill } from '../../api/skillApi';

const SkillsSection = ({toggleSection, expandedSection, skills, setSkills}) => {
  const [newSkill, setNewSkill] = useState('');
  const [isAddButtonClicked, setIsAddButtonClicked] = useState(false);
  // console.log(newSkill);
  const [editIndex, setEditIndex] = useState("");
  
  const handleAddSkill = async () => {
    await addUserSkill({title:newSkill})
    if (newSkill.trim()) {
      setSkills([...skills, {
        // id: Date.now(),
        title: newSkill.trim(),
        // category: skillCategory
      }]);
      setNewSkill('');
    }
  };

  const handleDeleteSkill = (skillId) => {
    setSkills(skills.filter(skill => skill.id !== skillId));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // handleAddSkill();
      handleAddSkill()
    }
  };

  const handleEditSkill = () => {
    setNewSkill({title: newSkill.trim()});
  }
  const handleSaveEdit = () => {}

  return (
    <div className="Skill">
      <a
        className="mx-auto bg-gray-100 border-t border-r border-l rounded px-6 pb-5 pt-5 text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out flex items-center justify-between gap-5"
        onClick={() => toggleSection('skill')}
        href="#skill"
        role="button"
        aria-expanded={expandedSection === 'skill'}
        aria-controls="skill"
      >
        <p className="font-semibold">Skill</p>
        <div className="flex items-center gap-4">
          {expandedSection === 'skill' && (
            <button
              className="bg-slate-600 text-white font-bold py-2 px-5 rounded-full text-lg"
              // onClick={handleAddSkill}
              onClick={() => setIsAddButtonClicked(true)}
            >
              Add Skills
            </button>
          )}
          {expandedSection === 'skill' ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
        </div>
      </a>

      {expandedSection === 'skill' && (
        <div className="visible p-6 border-b border-r border-l bg-gray-100 flex flex-col gap-4">
          
          
          {skills.map((skill, index) => (
            
            <div key={index} className="skill-item flex gap-4 items-center">
              {editIndex !== index ? (
                <>
                  <span className="w-3/4">{skill.title}</span>
                  <button
                    className="bg-slate-600 text-white font-bold py-2 px-4 rounded"
                    // onClick={() => handleEditSkill(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 text-white font-bold py-2 px-4 rounded"
                    // onClick={() => handleDeleteSkill(skill.id)}
                  >
                    Delete
                  </button>
                </>
              ) : (
                <>
                  <input
                    className="w-3/4 py-2 px-4 rounded border"
                    value={skills[index].title}
                    onChange={(e) => {
                      const updatedSkills = [...skills];
                      updatedSkills[index].title = e.target.value;
                      setSkills(updatedSkills);
                    }}
                  />
                  <button
                    className="bg-green-600 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSaveEdit}
                  >
                    Save
                  </button>
                </>
              )}
            </div>
          ))}

          {isAddButtonClicked && (
            <div>
                <div className="flex-1 flex space-x-2 max-w-sm">
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
          )}

        </div>
        
      )}
    </div>
  );


//   return (
//     <div className='Skill'>
//             <a
//                 className="mx-auto bg-gray-100 border-t border-r border-l rounded px-6 pb-5 pt-5 text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out flex items-center justify-between gap-5"
//                 onClick={() => toggleSection('skill')}
//                 data-twe-collapse-init
//                 data-twe-ripple-init
//                 data-twe-ripple-color="light"
//                 href="#skill"
//                 role="button"
//                 aria-expanded={expandedSection === 'skill'}
//                 aria-controls="skill"
//             >
//                 <p className='font-semibold'>Skill</p>
//                 <div className="flex items-center gap-4">
//                     {expandedSection === 'skill' && (
//                         <button
//                             className='bg-slate-600 text-white font-bold py-2 px-5 rounded-full text-lg'
//                             onClick={() => setIsAddButtonClicked(true)}
//                         >
//                             Add Skills
//                         </button>
//                     )}
                    
//                 {expandedSection === 'skill' ? <FaChevronUp className='ml-2' /> : <FaChevronDown className='ml-2' />}
//                 </div>
//             </a>

//             {expandedSection === 'skill' && (
//               <div className="w-full max-w-2xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow">
//                 <div className="space-y-4">
//                   <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
                  
//                   {/* Add new skill section */}
//                   <div className="flex space-x-2">
//                     {/* <select
//                       className="px-3 py-2 border rounded-md w-1/3"
//                       value={skillCategory}
//                       onChange={(e) => setSkillCategory(e.target.value)}
//                     >
//                       {Object.entries(categories).map(([key, value]) => (
//                         <option key={key} value={key}>{value}</option>
//                       ))}
//                     </select>
//                      */}
//                     <div className="flex-1 flex space-x-2">
//                       <input
//                         type="text"
//                         value={newSkill}
//                         onChange={(e) => setNewSkill(e.target.value)}
//                         onKeyPress={handleKeyPress}
//                         placeholder="Add a new skill..."
//                         className="flex-1 px-3 py-2 border rounded-md"
//                       />
//                       <button
//                         onClick={handleAddSkill}
//                         className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
//                       >
//                         <Plus size={18} className="mr-1" />
//                         Add
//                       </button>
//                     </div>
//                   </div>
              
//                   {/* Skills display section */}
//                   {skills.map((skill) => (
//                       console.log('skill', skill)
                      
//                     // return (
//                     //   <div key={categoryKey} className="space-y-2">
//                     //     <h3 className="text-lg font-semibold text-gray-700">{categoryName}</h3>
//                     //     <div className="flex flex-wrap gap-2">
//                     //       {categorySkills.map(skill => (
//                     //         <div
//                     //           key={skill.id}
//                     //           className="flex items-center bg-gray-100 px-3 py-1 rounded-full"
//                     //         >
//                     //           <span className="text-gray-800">{skill.name}</span>
//                     //           <button
//                     //             onClick={() => handleDeleteSkill(skill.id)}
//                     //             className="ml-2 text-gray-500 hover:text-red-500"
//                     //           >
//                     //             <X size={14} />
//                     //           </button>
//                     //         </div>
//                     //       ))}
//                     //     </div>
//                     //   </div>
//                     // );
//                   ))} 
//                   {/* {Object.entries(categories).map(([categoryKey, categoryName]) => {
//                     const categorySkills = skills.filter(skill => skill.category === categoryKey);
                    
//                     if (categorySkills.length === 0) return null;
                    
//                     return (
//                       <div key={categoryKey} className="space-y-2">
//                         <h3 className="text-lg font-semibold text-gray-700">{categoryName}</h3>
//                         <div className="flex flex-wrap gap-2">
//                           {categorySkills.map(skill => (
//                             <div
//                               key={skill.id}
//                               className="flex items-center bg-gray-100 px-3 py-1 rounded-full"
//                             >
//                               <span className="text-gray-800">{skill.name}</span>
//                               <button
//                                 onClick={() => handleDeleteSkill(skill.id)}
//                                 className="ml-2 text-gray-500 hover:text-red-500"
//                               >
//                                 <X size={14} />
//                               </button>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     );
//                   })} */}
//                 </div>
//               </div>

//             )}
//     </div>


//   );
};

export default SkillsSection;