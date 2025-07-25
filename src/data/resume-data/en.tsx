import {
  billtechLogo,
  doubledataLogo,
  dzajcoLogo,
  enteLogo,
  ipodomiLogo,
} from "@/images/logos";
import { DiscordIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Oskar Płaziński",
  initials: "OP",
  location: "Łany, Poland",
  locationLink: "https://www.google.com/maps/place/44-160+%C5%81any/",
  about:
    "Passionate Junior Developer Dedicated to Innovation and Growth, Ready to Make Meaningful Contributions to Your Team.",

  summary:
    "I am Oskar Płaziński, currently studying computer science at POLSL . I am a passionate developer who loves to create new stuff. I am always looking for new challenges and ways to improve my skills. I am really dedicated to all of my projects that I always try to accomplish. All of them are available on GitHub/LordPrinz. I love music and games. I also play the piano",

  avatarUrl: "https://cv.dzaj.de/cv-photo.png",
  personalWebsiteUrl: "https://github.com/LordPrinz",
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
      school: "Politechnika Śląska",
      degree: "Bachelor of Science in Computer Science",
      start: "2024",
      end: "2028",
    },
    {
      school: "Zespół Szkół Techniczno-Informatycznych w Gliwicach",
      degree: "Software Technician INF.03 & INF.04 certificate",
      start: "2019",
      end: "2024",
    },
  ],
  awards: [
    {
      title: 'Winner of the "Złoty Indeks Politechniki Śląskiej" competition ',
      date: "March 2024",
      link: "https://www.polsl.pl/rd1-cos/zi-ii-etap-konkursu/",
    },
    {
      title: 'Laureate of 18th edition of "Gliwicki Laur Nauki"',
      date: "November 2023",
      link: "https://gliwice.eu/aktualnosci/miasto/gliwicki-laur-nauki-2023",
    },
    {
      title: 'Third place in the "Silesian CYBERhackathon" competition',
      date: "June 2023",
      link: "https://silesiancyberhackathon.pl/",
    },
    {
      title: 'Laureate of 17th edition of "Gliwicki Laur Nauki"',
      date: "November 2022",
      link: "https://edukacja.gliwice.eu/galeria-oswiatowa/gliwicki-laur-nauki-2022",
    },
    {
      title: 'Third place in the "Motorola Science Cup" competition',
      date: "June 2022",
      link: "https://science-cup.pl/",
    },
  ],
  languages: [
    {
      name: "Polish",
      level: "Native",
    },
    {
      name: "English",
      level: "C1",
    },
    {
      name: "German",
      level: "A2/B1",
    },
  ],
  work: [
    {
      company: "DoubleData",
      link: "https://doubledata.com/",
      badges: [],
      title: "Typescript Developer",
      logo: doubledataLogo,
      start: "August 2024",
      end: "Current",
      description: "Developing website, scraping data",
    },
    {
      company: "Billtech",
      link: "https://www.billtech.pl/",
      badges: [],
      title: "Typescript Developer",
      logo: billtechLogo,
      start: "June 2024",
      end: "December 2024",
      description:
        "Developing API and billing platform for banks, scraping data",
    },
    {
      company: "Ente",
      link: "https://ente.com.pl/",
      badges: ["Internship"],
      title: "C++ Developer → Full Stack Developer",
      logo: enteLogo,
      start: "May 2023",
      end: "June 2023",
      description:
        "Implementing new features, working on improving train control system, and created a web application for monitoring and controlling trains. Technologies: C++, Linux, TypeScript, React, Node.js",
    },
    {
      company: "Erasmus+ Participant at Bpg Multimédia",
      link: "",
      badges: ["Internship"],
      title: "Full Stack Developer",
      start: "April 2023",
      end: "May 2023",
      description:
        "Creating a blog application for a client using Next.js, MongoDB, and TypeScript",
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
        "Working on improving train control system. Technologies: C++, Linux",
    },
    {
      company: "Erasmus+ Participant at Ipodomi",
      link: "https://ipodomi-kdm.gr/",
      badges: ["Internship"],
      title: "Frontend Developer",
      logo: ipodomiLogo,
      start: "May 2022",
      end: "May 2022",
      description:
        "Working on creating an attractions web map of Thessaloniki using React and TypeScript",
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind/SCSS",
    "React Native",
    "MongoDB/PostgreSQL/MySQL",
    "Photoshop/Figma",
    "C++",
    "Git",
    "Linux/Bash",
    "Docker",
  ],
  interests: [
    {
      name: "Programming",
      description:
        "I love to create new things and solve problems. I always look for new technologies and ways to improve my skills. ",
      link: "https://github.com/LordPrinz/",
    },
    {
      name: "Music",
      description:
        "I play the piano and I like to listen to music. I even have a music channel on YouTube with my covers.",
      link: "https://www.youtube.com/channel/UCbXJjpfKjvrlOAuUCexGtEA",
    },
    {
      name: "Gaming",
      description:
        "I like to play games, especially with my friends. My favourite game is Minecraft since I have much freedom in it.",
      link: null,
    },
  ],
  certificates: [
    {
      name: "The research project at POLSL",
      link: "https://cv.dzaj.de/certificates/posl-certificate.pdf",
      date: "February 2024",
    },
    {
      name: "React Native",
      link: "https://www.udemy.com/certificate/UC-c868c3dd-2cd7-4424-b972-334d8800e191/",
      date: "February 2024",
    },
    {
      name: "Erasmus+ Portugal 2023 Attendance Certificate",
      link: "https://cv.dzaj.de/certificates/erasmus-portugal.pdf",
      date: "May 2023",
    },
    {
      name: "Next.js",
      link: "https://www.udemy.com/certificate/UC-6f4ca96d-5890-4bc4-bb5d-8076298b1c69/",
      date: "September 2022",
    },
    {
      name: "TypeScript",
      link: "https://www.udemy.com/certificate/UC-f56b763f-0958-4940-88bc-90989fcdbb06",
      date: "August 2022",
    },
    {
      name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      link: "https://www.udemy.com/certificate/UC-e9a37fc2-a21a-44af-99e9-b80279e27ed3/",
      date: "June 2022",
    },
    {
      name: "Erasmus+ Greece 2022 Attendance Certificate",
      link: "https://cv.dzaj.de/certificates/erasmus-greece.pdf",
      date: "May 2022",
    },
    {
      name: "Git & GitHub - The Practical Guide",
      link: "https://www.udemy.com/certificate/UC-40f20425-a485-4008-88df-c6eb54c33165/",
      date: "May 2022",
    },
    {
      name: "SQL - The Complete Developer's Guide (MySQL, PostgreSQL)",
      link: "https://www.udemy.com/certificate/UC-9098e0d5-7581-44ed-8182-ac6dcd2a7144/",
      date: "December 2021",
    },
    {
      name: "Advanced CSS and Sass",
      link: "https://www.udemy.com/certificate/UC-cd74bb24-8508-48c3-9a7d-d3051aec7b5c/",
      date: "August 2021",
    },
    {
      name: "Photoshop Course",
      link: "https://www.udemy.com/certificate/UC-d45aae91-53ec-414e-ab4a-acec0bd5e204/",
      date: "November 2020",
    },
  ],
  projects: [
    {
      title: "Dzajco",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "MongoDB",
        "Tailwind",
      ],
      description: "A link shortener application with extra free features",
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
        "Tailwind",
        "Anonfiles",
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
        "TypeScript",
      ],
      description: "Website for a friend's game development organization.",

      link: {
        label: "BigNtertainment",
        href: "https://www.dzaj.de/bign",
      },
    },

    {
      title: "Ailingo",
      techStack: [
        "TypeScript",
        "React.js",
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
      techStack: ["TypeScript", "React Native", "MongoDB", "Expo"],
      description:
        "Hackheroes 2022 project - app for reporting city problems. (Currently down)",

      link: {
        label: "siti",
        href: "https://github.com/dzajlopment/siti",
      },
    },
    {
      title: "Graphite",
      techStack: ["TypeScript", "React.js", "Tailwind", "SVG"],
      description: "A tool for visualising numerous graph algorithms.",

      link: {
        label: "graphite",
        href: "https://github.com/team-nullptr/graphite",
      },
    },
    {
      title: "Logic Gates Simulator",
      techStack: ["Side Project", "TypeScript", "SCSS"],
      description: "Logic Gates Simulator - Motorola Science Cup 2021/2022",

      link: {
        label: "logic-gates-simulator",
        href: "https://github.com/Bildschirmauflosung/logic-gate-simulator",
      },
    },
    {
      title: "Mechanizm z antykitchiry",
      techStack: ["JavaScript", "React.js", "SCSS"],
      description: "Website for AGH University competition.",

      link: {
        label: "antykitchira",
        href: "http://www.dzaj.de/antykithira",
      },
    },
    {
      title: "Raspberry Project Server",
      techStack: ["Side Project", "TypeScript", "Node.js", "Express", "Linux"],
      description:
        "Server to manage apps remotely on my raspberry pi (under development)",

      link: {
        label: "raspberry-project-server",
        href: "https://github.com/LordPrinz/raspberry-project-server",
      },
    },

    {
      title: "Valorant Wrapper",
      techStack: ["Side Project", "TypeScript", "Valorant API"],
      description: "A third-party VALORANT API wrapper library.",

      link: {
        label: "valorant-wrapper",
        href: "https://github.com/LordPrinz/wrapper-valorant",
      },
    },
    {
      title: "PROJECT: Key (Frontend)",
      techStack: ["TypeScript", "React.js", "Tailwind", "Vite"],
      description:
        "A frontend part for a school classroom door key system. (The whole project is not finished yet)",

      link: {
        label: "project-key",
        href: "https://github.com/dzajlopment/keyFrontend",
      },
    },
    {
      title: "PROJECT: Key (Backend)",
      techStack: ["TypeScript", "Node.js", "Express", "MongoDB"],
      description:
        "A legacy backend part for a school classroom door key system. (The whole project is not finished yet)",

      link: {
        label: "project-key",
        href: "https://github.com/dzajlopment/keyBackend",
      },
    },
  ],
} as const;
