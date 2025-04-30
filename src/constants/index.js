import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate Java developer and Android enthusiast with hands-on internship experience in building real-world applications. My expertise lies in object-oriented programming, Java-based development, and crafting seamless user experiences on both web and mobile platforms. I thrive on solving complex problems and continuously learning new technologies to stay ahead in this fast-evolving industry. With a solid foundation in data structures, front-end design, and back-end logic, I aim to build solutions that are not only functional but also impactful.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Web Developer",
    company: "AP Mobility India Private Limited",
    description: `Worked as a Frontend Developer intern, gaining hands-on experience with React, JavaScript, and web development concepts. Contributed to developing and maintaining user interfaces for web applications. Collaborated with the team to implement responsive designs and optimize the user experience.`,
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "H2O Sync - Water Wastage Tracker",
    image: project1,
    description:
      "An Android app built using Java and Firebase that lets users report and track water wastage incidents on a map using GPS. Integrated Google Maps API for location reporting and Firebase for backend storage.",
    technologies: ["Java", "Android Studio", "Firebase", "Google Maps API"],
  },
  {
    title: "B.Tech Library Website",
    image: project2,
    description:
      "A responsive website for B.Tech students to access study material, built using HTML, CSS, JavaScript, and PHP. Included features like subject-wise material listing and a contact form.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "Emotion-Based Music Recommender",
    image: project3,
    description:
      "A web app that uses facial recognition and a CNN model to detect the user’s mood and recommend a playlist accordingly. Designed the frontend in React.js and used Python for backend emotion classification.",
    technologies: ["React", "Python", "CNN", "Face Recognition"],
  },
  {
    title: "Landslide Detection Model",
    image: project4,
    description:
      "Created an Arduino-based landslide detection system that alerts authorities through SMS when soil conditions become unstable.",
    technologies: ["Arduino", "Sensors", "SMS Notification"],
  },
  {
    title: "Jarvis - Personal Assistant",
    image: project1,
    description:
      "Developed a basic Jarvis-like personal assistant capable of performing tasks like opening websites, closing tabs, checking internet speed, and more. The assistant is designed to automate simple tasks and make daily activities easier.",
    technologies: ["Python", "Speech Recognition", "Web Automation"],
  },
];

export const CONTACT = {
  address: "Akash Nagar, Ghaziabad, 201015",
  phoneNo: "+91 7300978845 ",
  email: "shivangrastogi@gmail.com",
};
