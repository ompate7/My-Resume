import React from 'react'
import { Link } from 'react-router-dom';
import { FaFolder, FaFileAlt } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";

const About = () => {

  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2 text-md p-5'>
        <div className='flex flex-col justify-center items-center'>
          <div>
            <div  className='flex items-center text-blue-500 mb-5 text-3xl' >
              <IoInformationCircle className='mr-2'/>
              <h1  className='  font-semibold '>About</h1>
            </div>
           <p data-aos="fade-down" data-aos-duration="1500" className='text-justify'>
  I am a passionate and experienced playground equipment specialist with over 2 years of hands-on expertise in designing, setting up, and maintaining safe and exciting outdoor play spaces for children. I have a deep understanding of age-appropriate play structures, safety standards, and high-quality materials suited for various climates and environments.
  <br />
  <br />From small backyard playgrounds to large community and school play zones, I have successfully managed a wide range of projects. My focus is always on creating engaging, durable, and safe environments where kids can explore, imagine, and grow.
  <br />
  <br />I am dedicated, detail-oriented, and always excited to take on new playground challenges—whether it’s a custom build or a full playground makeover. I’m available for both short-term consultations and long-term projects.
</p>


            <div className='mt-7 flex gap-10 items-center'>
              <Link  className='px-5 py-2 text-center rounded-full' to={"/education"}><FaFolder className='text-7xl text-yellow-500' />Education</Link>
              <Link  className='px-5 py-2 text-center rounded-full' to={"/skills"}><FaFolder className='text-7xl text-yellow-500' />Skills</Link>

            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img  src="./5.png" width={400} alt="" />


        </div>
      </div>
    </>
  );
}

export default About