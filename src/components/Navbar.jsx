import React from 'react';
// import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black">
          <div>
              <h1 className="text-3xl font-nameHeaderFont ml-2">Bernard Nicolas Brillanti</h1>
          </div>

        <ul className='flex'>
          <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
            <Link to='/sculpture-gallery'>Sculpture Gallery</Link>
          </li>
          <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
            <Link to='/my-work'>My Work</Link>
          </li>
          <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
            <Link to='/about-me'>About Me</Link>
          </li>
          <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        

      </div>
    </div>
  );
}

// const Navbar_link = () => {
//   return (
//     <div>
      
//     </div>
//   );
// }

export default Navbar

