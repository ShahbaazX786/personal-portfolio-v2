import {
  DockAppType,
  LocationType,
  NavbarMenuType,
  NavIconsType,
  WELCOME_PAGE_FONT_WEIGHTS_TYPE,
} from "../types/types.constants";
import ProjectData from "./ProjectConstants";

const NavbarMenu: NavbarMenuType[] = [
  {
    id: 1,
    name: "Portfolio",
    type: "finder",
  },
  {
    id: 2,
    name: "Contact",
    type: "contact",
  },
  {
    id: 3,
    name: "Projects",
    type: "projects",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
] as const;

const NavIcons: NavIconsType[] = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
] as const;

const DockApps: DockAppType[] = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
  },
];

const TechStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const BlogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://www.google.com",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "Angular state management with rxjs subjects",
    image: "/images/blog2.png",
    link: "https://www.google.com",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering Zustand state management",
    image: "/images/blog3.png",
    link: "https://www.google.com",
  },
];

const WORK_LOCATION: LocationType = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // Project 1
    {
      id: 1,
      name: ProjectData.web.globotalk.title,
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-5 left-0",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Project Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-0",
          description: ProjectData.web.globotalk.description,
        },
        {
          id: 2,
          name: "www.globotalk.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: ProjectData.web.globotalk.hostedUrl,
          position: "top-5 left-40",
        },
        {
          id: 3,
          name: "Project_SlideShow.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-40 left-0",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 4,
          name: "Github.html",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: ProjectData.web.globotalk.repoUrl,
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 2,
      name: ProjectData.web.mediaai.title,
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-5 left-30",
      windowPosition: "top-5 left-0",
      children: [
        {
          id: 1,
          name: "Media.ai - Confidential Information.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-0",
          description: ProjectData.web.mediaai.description,
        },
        {
          id: 2,
          name: "www.media.ai.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: ProjectData.web.mediaai.hostedUrl,
          position: "top-5 left-40",
        },
        {
          id: 3,
          name: "project-showcase.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 4,
          name: "github link?",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: ProjectData.web.mediaai.repoUrl,
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 3,
      name: ProjectData.web.carhuz.title,
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-5 left-60",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Car Retail Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: ProjectData.web.carhuz.description,
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: ProjectData.web.carhuz.hostedUrl,
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "food-delivery-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 4,
          name: "Github link (it might be private?)",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: ProjectData.web.carhuz.repoUrl,
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/casual-me.jpg",
    },
    {
      id: 3,
      name: "conference-me.gif",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/conference-me.gif",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/conference-me.gif",
      description: [
        "Hey! I’m Shaik Mohammad Shahbaaz Alam 👋, a full-stack web developer who enjoys building clean, scalable, and interactive applications that actually solve real problems.",
        "I specialize in JavaScript, TypeScript, React, Angular, Next.js, and Node.js, with a strong focus on performance, architecture, accessibility, SEO, Internationalization and developer experience.",
        "I care deeply about clean UI, solid UX, and writing code that’s easy to understand, maintain, and scaleable.",
        "Beyond coding, I enjoy refining systems, mentoring teammates, and turning complex ideas into simple, well-structured solutions.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.jpg",
    },
  ],
};

const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

export { DockApps, NavbarMenu, NavIcons, TechStack, BlogPosts, locations };

const WELCOME_PAGE_FONT_WEIGHTS: WELCOME_PAGE_FONT_WEIGHTS_TYPE = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
} as const;

const INITIAL_Z_INDEX: number = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
} as const;

export { INITIAL_Z_INDEX, WELCOME_PAGE_FONT_WEIGHTS, WINDOW_CONFIG };
