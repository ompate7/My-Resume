import React from 'react';
import { Link } from 'react-router-dom';
import { GrProjects } from "react-icons/gr";
import { FaFolder } from "react-icons/fa";
import { HiOutlineLink } from "react-icons/hi";
const projects = [
  {
    "name": "Url Shortener and SEO",
    "description": "A robust URL shortener and SEO tool built with PHP Laravel, featuring custom links, analytics tracking, and SEO optimization via Laravel routing and middleware.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Bhajan Tirsha",
    "description": "An Android app in Java offering a rich collection of devotional bhajans, with offline audio access and custom playlists for spiritual users.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Maths Learn",
    "description": "Educational Android app for grades 1–10, featuring interactive lessons, quizzes, and animations to teach arithmetic in a fun, engaging way.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "QR Restaurant Management System",
    "description": "Laravel-based QR code restaurant system: scan menus, place orders, pay digitally, plus inventory & sales management for staff.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Mailer & SMS Marketing SaaS",
    "description": "A Laravel and MySQL SaaS platform for bulk email and SMS campaigns, with segmentation, tracking, and analytics tools.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "2 Factor Authenticator Application",
    "description": "Android Java app that generates time-based one-time passwords (TOTP) with QR setup for enhanced account security.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Attendance Monitoring System",
    "description": "IoT and full-stack application for monitoring attendance using RFID, Spring Boot, React, Laravel, and PostgreSQL.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": "http://rfid.charust.com"
  },
  {
    "name": "Sonification through Image, Video or DATA",
    "description": "Python-based application that turns images, videos, or data into sound for alternative data interpretation using AI/ML.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Disease Prediction System",
    "description": "A Django-based ML application that predicts potential diseases from symptoms using AI models.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Certificator Software",
    "description": "Python Django software to generate, print, and mail event certificates with template customization.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Accounting Software",
    "description": "Comprehensive accounting software built in Django and Laravel with invoicing, tracking, and reporting features.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "OCR",
    "description": "Android Java app utilizing Google Vision API to extract text from images with multi-language support.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "AI Course Generator",
    "description": "React and MongoDB app that uses AI to dynamically generate custom learning paths for users.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "AR/VR E Commerce Application",
    "description": "Android Java app for immersive shopping using augmented and virtual reality to visualize products.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "AR/VR Furniture Application",
    "description": "Android app allowing users to place and view furniture in their homes with AR Core support.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Digital Marketing Software",
    "description": "Laravel-based app for managing digital marketing campaigns with social integration and analytics.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "All in one AI enhanced Content Generator",
    "description": "PHP Laravel tool for generating high-quality content using AI algorithms with CMS integration.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Candy Smash (Game)",
    "description": "Android Java game with PHP backend featuring colorful gameplay, smooth animation, and leaderboards.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Resume Builder (Beta Version)",
    "description": "PHP Laravel-based tool for creating, editing, and exporting resumes with dynamic template support.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Resume Builder (Mega Version)",
    "description": "Full-stack resume builder using React and PostgreSQL with real-time editing and custom templates.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Eklavya GPT",
    "description": "Android Java and Laravel app using OpenAI’s GPT for advanced AI-driven language functionalities.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Compass & Live Weather App",
    "description": "Android Java app combining a digital compass with real-time weather updates via external APIs.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "DiabetesBuddy",
    "description": "Android and Laravel-based health tracker for Type 2 diabetics to monitor glucose, meds, and diet.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Event Management Application",
    "description": "Laravel web app for organizing events, managing attendees, registrations, and handling payments.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Inward - Outward Register",
    "description": "PHP app for tracking document flow in organizations with simple UI and export options.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Dynamic and Free QR Generator",
    "description": "Laravel app that allows users to create and manage dynamic QR codes for various use cases.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Ludo (Game)",
    "description": "Classic Ludo game in Android Java supporting multiplayer gameplay and interactive UI.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Medical Care",
    "description": "Healthcare management Android app using PHP Laravel and Flutter for responsive cross-platform UI.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Swaminarayan All in one Application (Anirdesh)",
    "description": "Spiritual Android app with bhajans, scriptures, daily readings, and vibrant UI built in Java.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Tic Tac Toe (Game)",
    "description": "Android Java app for 3x3 Tic Tac Toe with strategic logic and a clean, responsive UI.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Drag N Drop Website Builder",
    "description": "PHP Laravel-based drag-and-drop website builder similar to Wix with module editing and preview.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Whatsapp Clone",
    "description": "A PHP Laravel and Flutter clone of WhatsApp with messaging, media sharing, and status updates.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Zoom + Instagram + Snapchat + Tiktok (All in one Application)",
    "description": "Multifunctional Android app combining video calling, short videos, stories, and social features.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "E Commerce Application",
    "description": "E-commerce app built with Flutter and Laravel, featuring customizable stores and drag-and-drop UI.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "My Personal Notebook",
    "description": "A Laravel journaling app for note-taking with categorization, cloud sync, and privacy options.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "Exercise and Yoga Application",
    "description": "Android app offering workout routines and yoga sessions with a motivational, health-focused UI.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  },
  {
    "name": "All in one Tools Application",
    "description": "Android app with tools for PDF, Word, SEO, and image editing built using PHP Laravel backend.",
    "image": "https://i.ibb.co/GQ0cZNh6/web-267898333.webp",
    "link": ""
  }
];

const Projects = () => {
    return (
        <>
            <div className='p-5'>
                <div data-aos="fade-in" data-aos-duration="1000" className='flex justify-start items-center text-blue-500 mb-7 text-2xl' >
                    <GrProjects className='mr-2' />
                    <h1 className='  font-semibold '>Projects</h1>
{/*                 </div>
                <div>
                    Coming soon
                </div> */}
                <div data-aos="fade-down" data-aos-duration="1500" className="flex flex-wrap ">
                    {projects.map((project, index) => (
                        <div className="lg:w-1/3 sm:w-3/4 md:w-3/5 p-4" key={index}>
                            <div className="hover:bg-gray-100 p-6 transition-all bg-white  rounded-xl">
                                <img className="h-36 bg-white rounded-xl w-full object-contain mb-6" src={project.image} alt={project.name} />
                                <h2 className="text-xl text-blue-500 font-semibold title-font ">{project.name}</h2><hr className='my-4' />
                                <p className="leading-relaxed text-justify">{project.description}</p>
{/*                                 <Link className={`text-lg mt-5 bg-blue-100 rounded-full w-fit  flex items-center py-2 px-5 `} to={project.link} target='_blank'>
                                    
                                    <HiOutlineLink className='mr-2' />
                                    <p>Open</p>
                                </Link> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects;
