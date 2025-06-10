import React from 'react'
import { FaGraduationCap } from "react-icons/fa6";
import { SiFuturelearn } from "react-icons/si";
import { MdOutlineWork } from "react-icons/md";

const Education = () => {
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className=' justify-center flex items-center'>
                    <img src="./6.png" width={400} className='' alt="" /></div>
                <div className='px-10 py-10 flex justify-center items-center'>
                    <div>
                        <div data-aos="fade-in" data-aos-duration="1000" className='flex items-center text-blue-500 mb-10 text-3xl' >
                            <FaGraduationCap className='mr-2' />
                            <h1 className='  font-semibold '>Education</h1>
                        </div>
                        <div data-aos="fade-down" data-as-duration="1500" class="flex  relative pb-12">
                            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div class="flex-shrink-0 w-10 h-10 rounded-full shadow bg-gradient-to-r from-primary to-primary-second inline-flex items-center justify-center text-white bg-blue-500 relative ">
                                <SiFuturelearn />
                            </div>
                            <div class="flex-grow pl-4">
                                <h2 class="font-medium title-font text-md text-primary  mb-1 tracking-wider">Master Of Computer Applications</h2>
                                <h2 class="font-thin title-font text-sm mb-1 tracking-wider">CHARUSAT, Anand</h2>
                                <h2 class="font-thin title-font text-sm mb-1 tracking-wider">2024-Present</h2>
                                <p class="leading-relaxed">In this program, I am delving into advanced topics such as computer architecture, artificial intelligence, cybersecurity, and software development methodologies.</p>
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="2000" class="flex relative pb-12">

                            <div class="flex-shrink-0 w-10 h-10 rounded-full shadow bg-gradient-to-r from-primary to-primary-second inline-flex items-center justify-center bg-blue-500 text-white relative ">
                                <FaGraduationCap />
                            </div>
                            <div class="flex-grow pl-4">
                                <h2 class="font-medium title-font  text-md text-primary mb-1 tracking-wider">Bachelor of Computer Applications</h2>
                                <h2 class="font-thin title-font text-sm mb-1 tracking-wider">CHARUSAT, Anand</h2>
                                <h2 class="font-thin title-font text-sm mb-1 tracking-wider">2021-2024</h2>
                                <p class="leading-relaxed">I gained foundational knowledge in computer application, programming languages, and software engineering principles. This program equipped me with practical skills in hardware and software systems, networking, and database management.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-10 mb-14'>
                <div className='flex items-center text-blue-500 mb-10 text-3xl' >
                    <MdOutlineWork className='mr-2' />
                    <h1 className='  font-semibold '>Experience</h1>
                </div>
                <div className='bg-blue-50 rounded-xl  p-10'>
                    <div class="py-10 flex flex-wrap md:flex-nowrap">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span class="font-semibold title-font text-gray-700">INTERNSHIP</span>
                        <span class="mt-1 text-gray-500 text-sm"> 01/12/2024 - 31/03/2025 </span>
                    </div>
                    <div class="md:flex-grow">
                        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Programmer at MNP COMPUTING - USA</h2>
                        {/* <p class="leading-relaxed">Developed Quiz Portal for Students and Faculty to Create and Manage Quizzes for Students and Students to Attempt Quizzes and Evaluate their Performance.</p> */}
                    </div>
                </div>

                </div>
                <br />
                <hr />
                <br></br>
                <div className='bg-blue-50 rounded-xl  p-10'>
                    <div class="py-10 flex flex-wrap md:flex-nowrap">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span class="font-semibold title-font text-gray-700">Email Marketing</span>
                        <span class="mt-1 text-gray-500 text-sm">01/07/2024 - 30/04/2025 </span>
                    </div>
                    <div class="md:flex-grow">
                        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Developer at <a href='https://www.charusat.ac.in/' target='_blank' class="text-blue-500 underline ">CHARUSAT University</a></h2>
                        {/* <p class="leading-relaxed">Developed Quiz Portal for Students and Faculty to Create and Manage Quizzes for Students and Students to Attempt Quizzes and Evaluate their Performance.</p> */}
                    </div>
                </div>

                </div>
                  <br />
                <hr />
                <br></br>
                <div className='bg-blue-50 rounded-xl  p-10'>
                     <div class="py-10 flex flex-wrap md:flex-nowrap">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span class="font-semibold title-font text-gray-700">INTERNSHIP</span>
                        <span class="mt-1 text-gray-500 text-sm">01/03/2024 - 30/6/2024 </span>
                    </div>
                    <div class="md:flex-grow">
                        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Admission Executive at <a href='https://www.charusat.ac.in/' target='_blank' class="text-blue-500 underline ">CHARUSAT University</a></h2>
                        {/* <p class="leading-relaxed">Developed Quiz Portal for Students and Faculty to Create and Manage Quizzes for Students and Students to Attempt Quizzes and Evaluate their Performance.</p> */}
                    </div>
                </div>

                </div>
                  <br />
                <hr />
                <br></br>
                <div className='bg-blue-50 rounded-xl  p-10'>
                     <div class="py-10 flex flex-wrap md:flex-nowrap">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span class="font-semibold title-font text-gray-700">CHIEF TECHNOLOGY OFFICER</span>
                        <span class="mt-1 text-gray-500 text-sm">01/12/2023 - 31/03/2024 </span>
                    </div>
                    <div class="md:flex-grow">
                        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">CTO at <a href='https://teamelementals.in/' target='_blank' class="text-blue-500 underline ">Team Elementals LLP</a></h2>
                        {/* <p class="leading-relaxed">Developed Quiz Portal for Students and Faculty to Create and Manage Quizzes for Students and Students to Attempt Quizzes and Evaluate their Performance.</p> */}
                    </div>
                </div>

                </div>
                  <br />
                <hr />
                <br></br>
                <div className='bg-blue-50 rounded-xl  p-10'>
                     <div class="py-10 flex flex-wrap md:flex-nowrap">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span class="font-semibold title-font text-gray-700">Developer</span>
                        <span class="mt-1 text-gray-500 text-sm">01/09/2023 - 01/12/2023 </span>
                    </div>
                    <div class="md:flex-grow">
                        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Developer at <a href='https://teamelementals.in/' target='_blank' class="text-blue-500 underline ">Team Elementals LLP</a></h2>
                        {/* <p class="leading-relaxed">Developed Quiz Portal for Students and Faculty to Create and Manage Quizzes for Students and Students to Attempt Quizzes and Evaluate their Performance.</p> */}
                    </div>
                </div>

                </div>
                  <br />
                <hr />
                <br></br>
            </div>
        </>
    )
}

export default Education