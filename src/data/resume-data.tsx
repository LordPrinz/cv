import { dzajcoLogo, enteLogo, ipodomiLogo } from "@/images/logos";
import { DiscordIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Oskar Płaziński",
  initials: "OP",
  location: "Łany, Poland",
  locationLink: "https://www.google.com/maps/place/44-160+%C5%81any/",
  about:
    "Passionate Full Stack Developer focused on quality and self-education",
  summary:
    "I am Oskar Płaziński, and my journey embodies a junior developer's unwavering commitment to growth and innovation. With a diverse skill set and successful contributions to impactful projects, I showcase resilience and adaptability, ready to thrive within any development team.",
  avatarUrl:
    "https://media.licdn.com/dms/image/C4E03AQGfnodCCxww5A/profile-displayphoto-shrink_800_800/0/1656342442469?e=2147483647&v=beta&t=zC0kU7-OKI3AKh7lexV7PDp_VNMfzZNsY61DbjTlYjU",
  personalWebsiteUrl: "https://dzaj.de",
  contact: {
    email: "plazinski2902@gmail.com",
    tel: "+48510273465",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/LordPrinz",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/oskar-p%C5%82azi%C5%84ski-1375a6243",
        icon: LinkedInIcon,
      },
      {
        name: "Discord",
        url: "https://discord.com/users/520676533279522817",
        icon: DiscordIcon,
      },
    ],
  },
  education: [
    {
      school: "Zespół Szkół Techniczno-Informatycznych w Gliwicach",
      degree: "Software Technician INF.03 & INF.04 certificate",
      start: "2019",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Ente",
      link: "https://ente.com.pl/",
      badges: ["Internship"],
      title: "C++ Developer → Full Stack Developer",
      logo: enteLogo,
      start: "May 2023",
      end: "June 2023",
      description:
        "Implemented new features, worked on improving train control system, and created a web application for monitoring and controlling trains. Technologies: C++, Linux, TypeScript, React, Node.js",
    },
    {
      company: "Faro",
      link: "",
      badges: ["Internship"],
      title: "Full Stack Developer",
      start: "April 2023",
      end: "May 2023",
      description:
        "Created a blog application for a client using Next.js, MongoDB, and Typescript",
    },
    {
      company: "Ente",
      link: "https://ente.com.pl/",
      badges: ["Internship"],
      title: "C++ Developer",
      logo: enteLogo,
      start: "April 2022",
      end: "May 2022",
      description:
        "Worked on improving train control system. Technologies: C++, Linux",
    },
    {
      company: "Ipodomi",
      link: "https://ipodomi-kdm.gr/",
      badges: ["Internship"],
      title: "Frontend Developer",
      logo: ipodomiLogo,
      start: "May 2022",
      end: "May 2022",
      description:
        "Worked on creating an attractions web map of Thessaloniki using React and TypeScript",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Tailwind/SCSS",
    "React Native",
    "Mongodb/PostgreSQL/MySQL",
    "Photoshop/Figma",
    "C++",
  ],
  projects: [
    {
      title: "Dzajco",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      description: "A ling shorener application with extra free features",
      logo: dzajcoLogo,
      link: {
        label: "dzaj.de",
        href: "https://github.com/LordPrinz/dzajco",
      },
    },
    {
      title: "Dzajcarz",
      techStack: [
        "Side Project",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Discord.js",
        "Voice API",
      ],
      description: "Advanced Discord bot with great amount of features",

      link: {
        label: "dzajcarz",
        href: "https://github.com/dzajlopment/dzajcarz-pro",
      },
    },
    {
      title: "Dzajdrop",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Annonfiles",
      ],
      description: "Platform for sharing files via links. (Currently down)",

      link: {
        label: "dzajdrop",
        href: "https://github.com/LordPrinz/dzajdrop",
      },
    },
    {
      title: "Natours",
      techStack: ["Side Project", "HTML", "SCSS"],
      description: "Landing page of Natours tour store.",

      link: {
        label: "natours",
        href: "https://github.com/LordPrinz/Natours",
      },
    },
    {
      title: "Nexter",
      techStack: ["Side Project", "HTML", "SCSS"],
      description: "Landing page of imagined home sales agency called Nexter.",

      link: {
        label: "nexter",
        href: "https://github.com/LordPrinz/Nexter",
      },
    },
    {
      title: "BigNtertainment",
      techStack: [
        "Side Project",
        "Next.js",
        "Tailwind",
        "Sanity",
        "Typescript",
      ],
      description: "Website for a friend's game development organisation.",

      link: {
        label: "BigNtertainment",
        href: "https://www.dzaj.de/bign",
      },
    },

    {
      title: "Ailingo",
      techStack: [
        "Side Project",
        "TypeScript",
        "React.js",
        "Typescript",
        "Tailwind",
        "GPT-3.5 turbo",
        "Vite",
      ],
      description:
        "Hackheroes 2023 project - app for learning languages with support of AI. (Currently down)",

      link: {
        label: "ailingo",
        href: "https://github.com/extl0l/ailingo-frontend",
      },
    },
    {
      title: "Siti",
      techStack: [
        "Side Project",
        "TypeScript",
        "React Native",
        "MongoDB",
        "Expo",
      ],
      description:
        "Hackheroes 2022 project - app for reporting city problems. (Currently down)",

      link: {
        label: "siti",
        href: "https://github.com/dzajlopment/siti",
      },
    },
    {
      title: "Graphite",
      techStack: ["Side Project", "TypeScript", "React.js", "Tailwind", "SVG"],
      description: "The tool for visualising numerous graph algorithms.",

      link: {
        label: "graphite",
        href: "https://github.com/team-nullptr/graphite",
      },
    },
    {
      title: "Logic Gates Simulator",
      techStack: ["Side Project", "TypeScript", "SCSS"],
      description: "Logic gates simulator - Motorola Science Cup 2021/2022",

      link: {
        label: "logic-gates-simulator",
        href: "https://github.com/Bildschirmauflosung/logic-gate-simulator",
      },
    },
    {
      title: "Mechanizm z antykitchiry",
      techStack: ["Side Project", "JavaScript", "React.js", "SCSS"],
      description: "Website for AGH University competition.",

      link: {
        label: "antykitchira",
        href: "http://www.dzaj.de/antykithira",
      },
    },
    {
      title: "Raspberry Project Server",
      techStack: ["Side Project", "Typescript", "Node.js", "Express", "Linux"],
      description:
        "Server to manage apps remotly on my raspberry pi (under development)",

      link: {
        label: "raspberry-project-server",
        href: "https://github.com/LordPrinz/raspberry-project-server",
      },
    },

    {
      title: "Valorant Wrapper",
      techStack: ["Side Project", "Typescript", "Valorant API"],
      description: "A third-party VALORANT API wrapper library.",

      link: {
        label: "valorant-wrapper",
        href: "https://github.com/LordPrinz/wrapper-valorant",
      },
    },
    {
      title: "PROJECT: Key (Frontend)",
      techStack: [
        "Side Project",
        "Typescript",
        "React.js",
        "Tailwind",
        "Vite",
        "Uonet+",
      ],
      description:
        "A frontend for a school classroom key system. (Whole project is not finished yet)",

      link: {
        label: "project-key",
        href: "https://github.com/dzajlopment/keyFrontend",
      },
    },
    {
      title: "PROJECT: Key (Backend)",
      techStack: [
        "Side Project",
        "Typescript",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      description:
        "A legacy backend for a school classroom key system. (Whole project is not finished yet)",

      link: {
        label: "project-key",
        href: "https://github.com/dzajlopment/keyBackend",
      },
    },
  ],
} as const;
