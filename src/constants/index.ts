import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
  THobby,
} from "../types";

import {
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
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    id: "fullstack",
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    id: "devops",
    title: "DevOps Engineer",
    icon: mobile,
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    icon: backend,
  },
  {
    id: "mobile",
    title: "Mobile & App Builder",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    id: "mboa",
    title: "Developer",
    companyName: "Mboa Kitchen APP",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2024 - 2025",
    points: [
      "Built and maintained full-stack features for the Mboa Kitchen app using React and Node.js.",
      "Set up CI/CD pipelines using GitHub Actions for automated testing and deployment.",
      "Dockerized the application for consistent development and production environments.",
      "Integrated Firebase for real-time database, authentication, and cloud storage.",
    ],
  },
  {
    id: "altech",
    title: "Developer & DevOps Engineer",
    companyName: "Altech Engineers",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed scalable backend services and REST APIs using Node.js and Golang.",
      "Designed and implemented CI/CD workflows reducing deployment time by 60%.",
      "Managed Kubernetes clusters for production workloads with automated scaling capabilities.",
      "Implemented infrastructure as code practices using Terraform for cloud deployments.",
    ],
  },
  {
    id: "docgen",
    title: "Developer",
    companyName: "DocGen Camp",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developed document generation features for enterprise clients using React and TypeScript.",
      "Migrated legacy applications to containerized microservices architecture on AWS.",
      "Implemented GitOps practices using ArgoCD for declarative continuous deployment.",
      "Architected secure cloud infrastructure on AWS with automated backup and disaster recovery.",
    ],
  },
  {
    id: "horaay",
    title: "Developer",
    companyName: "Horaay Event Pro",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2025 - Present",
    points: [
      "Building and scaling the Hooray Event Platform — a full-featured event management ecosystem.",
      "Developed the Hooray Cards & Reservation System with QR-based virtual ticketing.",
      "Built MYEVIEW, a Golang-powered cybersecurity intelligence tool for asset discovery.",
      "Architecting multi-region AWS infrastructure with focus on reliability and performance.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Kelcy's expertise in DevOps transformed our deployment process. What used to take days now takes minutes.",
    name: "Anonymous Info",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const hobbies: THobby[] = [
  {
    id: "opensource",
    hobby: "Open Source Contributing",
    description:
      "I love diving into open source projects — reading code, fixing bugs, and contributing features. It's how I sharpen my skills and give back to the community that helped me grow.",
    emoji: "🛠️",
    color: "from-violet-600 to-indigo-500",
    tags: ["#github", "#oss", "#collaboration"],
  },
  {
    id: "ctf",
    hobby: "CTF & Cybersecurity Challenges",
    description:
      "Capture The Flag competitions are my digital playground. From reverse engineering to web exploits, I enjoy the puzzle-solving nature of ethical hacking challenges.",
    emoji: "🔐",
    color: "from-rose-500 to-pink-600",
    tags: ["#ctf", "#security", "#hacking"],
  },
  {
    id: "sideprojects",
    hobby: "Building Side Projects",
    description:
      "Nothing beats turning an idea into a working product. I'm always hacking on side projects — from mobile apps to CLI tools — exploring new stacks and solving real problems.",
    emoji: "🚀",
    color: "from-emerald-500 to-teal-600",
    tags: ["#buildinpublic", "#sideprojects", "#shipping"],
  },
  {
    id: "techdocs",
    hobby: "Reading Tech Docs & Research Papers",
    description:
      "I'm a documentation nerd. Reading RFCs, white papers, and research on distributed systems, networking, and security keeps me sharp and ahead of the curve.",
    emoji: "📚",
    color: "from-amber-500 to-orange-500",
    tags: ["#research", "#learning", "#deepdive"],
  },
  {
    id: "homelab",
    hobby: "Homelab Tinkering",
    description:
      "My home server is my sandbox. I experiment with self-hosted services, networking, VMs, and containerized workloads — because the best way to learn infra is to break it and fix it.",
    emoji: "🖥️",
    color: "from-sky-500 to-blue-600",
    tags: ["#homelab", "#selfhosted", "#linux"],
  },
  {
    id: "music",
    hobby: "Music & Lo-fi Coding Sessions",
    description:
      "A good coding session always has a soundtrack. I'm obsessed with lo-fi hip-hop, jazz, and ambient beats. Sometimes I produce my own loops when the creativity hits.",
    emoji: "🎵",
    color: "from-fuchsia-500 to-purple-600",
    tags: ["#lofi", "#music", "#vibes"],
  },
];

const projects: TProject[] = [
  {
    id: "hooray",
    name: "Hooray — Event Manager",
    description:
      "A full-featured event management platform where service providers can post services, create events, and manage bookings. Service pros get a dedicated dashboard to list offerings, set availability, and reach event organizers — all in real time. Built with Firebase, React, and deployed for production use.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "deployed",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    id: "myeview",
    name: "MYEVIEW — Cyber Intelligence",
    description:
      "A powerful cybersecurity intelligence application designed for asset discovery, network recon, and threat visibility. MYEVIEW helps security teams map their attack surface with automated scans, asset fingerprinting, and actionable intelligence — all from a clean, fast interface built in Go and deployed on AWS.",
    tags: [
      {
        name: "golang",
        color: "blue-text-gradient",
      },
      {
        name: "cybersecurity",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    id: "cards",
    name: "Hooray Cards & Reservations",
    description:
      "A smart reservation and ticketing system that lets attendees book their spots at events with virtual tickets. Features include QR code generation for seamless on-site check-in, real-time seat availability, and an admin panel to manage capacity and scan entries at the door. Events, reimagined.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "qr-system",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, hobbies, projects };
