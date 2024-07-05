"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "My Portfolio",
        description: "This is my portfolio built using Next.js. I have used Tailwind CSS and it's components in my portfolio. This portfolio helps the users know about my skills, projects and my experience. I placed different sections in my portfolio and a few of them are, About me, projects and contact me",
        image: "/images/projects/img_portfolio.png",
        name: ["All", "Mobile"],
        /*gitUrl: "/",*/
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Hunger halters",
        description: "This is a website which acts as an interface between food donar with the recipients. This is a user interactive website built using HTML, CSS and JavaScript. The website provides a complete solution for food wastage.",
        image: "/images/projects/img_hunger.png",
        name: ["All", "Web"],
        /*gitUrl: "https://vmihira.github.io/Hunger-Halters/",*/
        previewUrl: "https://vmihira.github.io/Hunger-Halters/",
    },
    {
        id: 3,
        title: "OptiBus",
        description: "OptiBus is a place where students can locate their bus easily using maps. Any emergency alerts can be notified by the driver or students to the management. The transport management can even notify its drivers and students regarding any circulars. This website is a solution for several transport issues.",
        image: "/images/projects/img_optibus.png",
        name: ["All", "Web"],
        /*gitUrl: "https://github.com/Vmihira/OptiBus",*/
        previewUrl: "https://vmihira.github.io/OptiBus/",
    },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.name.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity:0 },
    animate: { y: 0, opacity:1 },
  };

  return (
    <section id="projects">
       <h2 className="text-center text-4xl font-bold text-[#4F6F52] mt-4 mb-5">
        My Projects
      </h2>
      <div className=" flex flex-row font-bold justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li 
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4}}
          >
          <ProjectCard 
            key={project.id}
            description={project.description} 
            imgUrl={project.image} 
            tags={project} 
           previewUrl={project.previewUrl}
         >
          </ProjectCard>
        </motion.li>
       ))}
     </ul>
     <br />
     <br />
     <br />
     <br />
    </section>
  );
};

export default ProjectsSection;
