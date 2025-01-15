import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Software Engineer with 4 years of experience in front-end and full-stack development, skilled in Angular, Node.js, MongoDB, 
SQL, and Material UI. Proficient in building scalable applications, workflow automation, and responsive interfaces, with expertise in ITSM and 
data visualization. Certified in Angular and ITSM, I specialize in delivering innovative solutions, optimizing processes, and 
crafting impactful software tailored to business needs.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Oct 2022 - Dec 2024",
    role: "Senior Software Engineer",
    company: "Jazz (Telecommunication)",
    description: `Led projects utilizing Angular 17, Node.js, Python, HTML5, CSS3, Bootstrap, and Material UI, focusing on IT service management, SLA optimization, and workflow automation. Delivered impactful solutions such as Fuel Management Systems, Preventive Maintenance Projects, and Inventory Management Systems.`,
    technologies: ["Angular 17", "Node.js", "Python", "Material UI", "SQL"],
  },
  {
    year: "Jul 2021 - Sep 2022",
    role: "Frontend Developer",
    company: "TechnoGenics",
    description: `Specialized in designing and implementing front-end components with Angular, JavaScript, and Bootstrap. Delivered projects like e-commerce platforms, data visualization dashboards, and quiz platforms, enhancing user engagement and streamlining workflows.`,
    technologies: ["Angular", "Bootstrap", "JavaScript", "HTML5", "CSS3"],
  },
  {
    year: "May 2020 - May 2021",
    role: "Freelancer",
    company: "Fiverr",
    description: `Developed tailored websites, landing pages, and custom automation scripts for clients using HTML5, CSS3, JavaScript, and PHP. Customized WordPress themes and plugins to meet specific requirements, delivering responsive and user-friendly designs.`,
    technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP"],
  },
];


export const PROJECTS = [
  {
    title: "DermEase",
    images: [project1, project2],
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: [
      "HTML",
      "CSS",
      "Boostrap",
      "Tailwind",
      "Angular",
      "Node.js",
      "MongoDB",
      "Python",
      "Web Sockets",
    ],
  },
  {
    title: "Task Management App",
    images: [project2],
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    images: [project3],
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    images: [project4],
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
