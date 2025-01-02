import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Preview() {
  const location = useLocation();
  const { personalData, educations, companies, skills } = location.state || {};

  console.log('Data in Preview:', { personalData, educations, companies, skills });

  return (
    <>
      <div className="relative bg-[#1e0f3d] w-full min-h-screen py-10">
        
        <div className='flex items-center justify-start ml-20 mb-5 mt-0'>
          <Link className=' bg-slate-600 text-white font-bold py-2 px-4 rounded-full flex items-center justify-between text-lg gap-2' to={'/profile'} >Go Back</Link>
          
        </div>

        {/* Container for Templates */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {/* Template 1 */}
          <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:bg-yellow-50 transition-transform duration-300 w-[300px] h-[400px]">
            <Link to="/profile/preview/template1"
            state={{ personalData, educations, companies, skills }}
            >
              <img src="/temp1.png" alt="Template 1" className="w-full h-[300px] object-cover rounded-lg" />
            </Link>
            <p className="text-gray-800 font-semibold text-center">Template 1</p>
          </div>

          {/* Add more templates as needed */}
        </div>
      </div>
    </>
  );
}

export default Preview;
