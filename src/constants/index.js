import {
    kishan,
    laravel,
    android,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    onlinetransaction,
    portfolio,
  } from "../assets";
  
   const Experience =[
    {
      name: "LDCE_Website_Maintainance_Team [Jul-2022 - present]",
      work:"Maintainance of LDCE WEBSITE with various updates and new features, this website is made using laravel. Where we I contributed in creating some pages where I created slider and we have also worked to create department google website.",
      link:"https://ldce.ac.in/team",
    },
  ];
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  const contacts=[
    {
      name:"Email",
      link:"https://mail.google.com/mail/?view=cm&source=mailto&to=kairaveesr@gmail.com"
    },
    {
      name:"Phone",
      link:"tel:6354376087",
    },
    {
      name:"LinkedIn",
      link:"https://rb.gy/tar8r",
    },
    {
      name:"Github",
      link:"https://github.com/KairaveeR",
    },
  ]
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "App Development",
      icon: mobile,
    },
    {
      title: "Data Analytics",
      icon: backend,
    },
    {
      title: "Full Stack Development",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name:" Laravel",
      icon: laravel,
    },

    {
      name: "Android",
      icon: android,
    },
   
    {
      name: "git",
      icon: git,
    },
  ];
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Online Transaction System",
      description:
        "In my diploma final year project, we created a website for online transactions using PHP and myphpadmin[Database]. Where my role was to create and manage a database and also some backend functions.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "phpMyadmin",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: onlinetransaction,
    },
    {
      name: "e_kishaan(Farmer helping website)",
      description:
        " In a Laravel framework, I created a website for farmers where they can show different government schemes, and previous year's crop statistics in tabular and graph format. I also connected to openweatherAPI so they can also track weather details.based on their current location.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "laravel",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: kishan,
    },
    {
      name: "Portfolio Website",
      description:
        " I created this website using react js and three js for 3d animation. Where using motion and framer I created a smooth animation. I also used tailwind css for styling and responsiveness. I also used react router for routing.",
      tags: [
        {
          name: "react js",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
    },
  ];
  
  export { Experience, services, technologies, testimonials, projects , contacts };