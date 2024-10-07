import React from "react";
import easyjob from '../../../public/EasyJob.png';
import Tilt from 'react-parallax-tilt';
import abacus from '../../assets/projects/Abacus.jpg';
import pp from '../../assets/projects/pp.png';
import homebuddy from '../../assets/projects/HomeBuddy.png';
import localkonnect from '../../assets/projects/LocalKonnect.jpg';

const projects = [
  {
    image: easyjob,
    title: "EASY JOB",
    description: "Easy Job is an AI-powered app that helps job seekers of all backgrounds find employment including unskilled, freshers and experienced candidates at one platform.",
    link: "/android"
  },
  {
    image: abacus, 
    title: "ABACUS CLOUD",
    description: "Abacus Cloud a storage platform where users can store there data files and many more things with premium features...",
    link: "/react"
  },
  {
    image: pp, 
    title: "Perfect Propertys",
    description: "Perfect Propertys is a real estate platform designed to connect builders,brokers, and clients looking for properties, PG (Paying Guest accommodations),and rentals...",
    link: "/laravel"
  },
  {
    image: homebuddy, 
    title: "HOMBEBUDDY",
    description: "Perfect Propertys is a real estate platform designed to connect builders,brokers, and clients looking for properties, PG (Paying Guest accommodations),and rentals...",
    link: "/laravel"
  },
  {
    image: localkonnect, 
    title: "LocalKonnect",
    description: "Perfect Propertys is a real estate platform designed to connect builders,brokers, and clients looking for properties, PG (Paying Guest accommodations),and rentals...",
    link: "/laravel"
  },
  {
    image: pp, 
    title: "Perfect Propertys",
    description: "Perfect Propertys is a real estate platform designed to connect builders,brokers, and clients looking for properties, PG (Paying Guest accommodations),and rentals...",
    link: "/laravel"
  }
];

const Projects = () => {
  return (
    <div className="projects-container flex flex-col items-center">
      <h2 className="text-center text-4xl font-bold my-6">Our Projects</h2>
      <div className="grid md:grid-cols-3 gap-6  p-6">
        {projects.map((project, index) => (
            <Tilt key={index} tiltMaxAngleX={20} tiltMaxAngleY={20} glareEnable={true} glareMaxOpacity={0.8} glareColor="lightblue" glarePosition="all">
          <div key={index} className="card p-4 border rounded-lg shadow-lg flex flex-col items-center h-full">
            <img src={project.image} alt={project.title} className="h-10 rounded-t-lg " />
            <div className="card-body flex flex-col items-center text-center">
              <h3 className="text-lg font-bold mt-4">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-600 ">{project.description}</p>
              <a href={project.link} className="text-red-500 mt-4 inline-block">Show More ➔</a>
            </div>
          </div>
          </Tilt>
          
        ))}
      </div>
    </div>
  );
};

export default Projects;
