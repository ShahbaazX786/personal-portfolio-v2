const ProjectData = {
  web: {
    globotalk: {
      title: "globoTalk",
      description: [
        "GloboTalk is a real-time social platform designed to help users connect globally and practice conversations naturally.",
        "It offers a social-media-like experience with custom avatars, 32 themes, and seamless UI interactions.",
        "Users can engage through real-time chat, audio, and video calls powered by Stream.io",
        "Built with a modern React stack, it ensures fast performance, scalable state management, and clean architecture.",
        "A secure Node.js backend handles authentication, data modeling, and real-time interactions efficiently.",
      ],
      hostedUrl: "https://globotalk.onrender.com/",
      repoUrl: "https://github.com/ShahbaazX786/globotalk",
    },
    casecoby: {
      title: "casecoby",
      description: [
        "CaseCobra is a modern full-stack e-commerce platform for creating one-of-one custom phone cases.",
        "Users can design phone cases using a drag-and-drop configurator with an Apple-inspired experience.",
        "The platform includes a clean landing page, direct purchases, and automated thank-you emails.",
        "A secure admin dashboard allows order management with authentication powered by Kinde.",
        "Built from scratch in Next.js 14 with shadcn-ui and 100% TypeScript for a polished, scalable UI.",
      ],
      hostedUrl: null,
      repoUrl: "https://github.com/ShahbaazX786/casecoby",
    },
    chatio: {
      title: "chat.io",
      description: [
        "Chat.io is a real-time anonymous chat application where conversations matter more than identity.",
        "It allows users to engage in 1-on-1 chat rooms with hidden identities and online user indicators.",
        "Built for instant communication, the app supports real-time messaging using Socket.io.",
        "Future enhancements include typing indicators, message delivery status, group chats, and calling features.",
        "Developed using React.js, Node.js, Express, MongoDB, and Socket.io for a scalable real-time experience.",
      ],
      hostedUrl: "https://chat-io-eta-three.vercel.app/",
      repoUrl: "https://github.com/ShahbaazX786/Chat.io",
    },
    authsystem: {
      title: "AuthSystem",
      description: [
        "This project is a custom-built authentication system designed as a plug-and-play backend for frontend applications.",
        "It provides full control over auth logic, removing dependency on third-party services like Clerk or Auth.js.",
        "The system eliminates pricing and usage-limit concerns while still supporting secure email-based flows.",
        "A Node.js and Express backend handles JWT auth, password hashing, cookies, and email delivery via SMTP.",
        "Paired with a modern React + Vite frontend, it offers a clean, flexible, and self-owned authentication experience.",
      ],
      hostedUrl: null,
      repoUrl: "https://github.com/ShahbaazX786/authSystem",
    },
    carhuz: {
      title: "CarHuz",
      description: [
        "CarHuz is a technology-driven, self-service platform that makes private car selling safe, simple, and secure.",
        "It features verified users with driver’s license validation to prevent scams and ensure trust.",
        "All vehicles go through a 120+ point custom checklist before being listed in the trusted catalogue.",
        "The platform enables secure instant fund transfers and offers competitive deals on verified cars.",
        "Built with Angular, CarHuz delivers a reliable, user-friendly experience with priority customer support.",
      ],
      hostedUrl: "https://car-huz.vercel.app/",
      repoUrl: "https://github.com/ShahbaazX786/CarHuz",
    },
    mediaai: {
      title: "Media.ai",
      description: [
        "Media.ai is a modern SaaS platform that leverages generative AI to create text, images, music, and videos.",
        "It provides an all-in-one creative workspace for generating and managing AI-powered media content.",
        "The platform focuses on simplicity, speed, and a clean user experience for creators.",
        "Users can experiment with multiple AI media formats from a single interface.",
        "Media.ai helps transform ideas into high-quality digital content effortlessly.",
      ],
      hostedUrl: "https://media-ai.vercel.app/",
      repoUrl: "https://github.com/ShahbaazX786/media.ai",
    },
  },
  mobile: {
    pexels: {
      title: "pexels",
      description: [
        "Pexels is a modern wallpaper app that delivers fresh, high-quality wallpapers tailored to your mood and device.",
        "It features smooth navigation, smart filters, and category-based discovery for effortless browsing.",
        "Users can search, preview, download, and share wallpapers with an immersive, modern UI.",
        "Built with React Native and Reanimated, the app ensures fluid animations and responsive layouts.",
        "A GraphQL-powered Node.js backend with Supabase enables fast, scalable data handling",
      ],
      hostedUrl: null,
      repoUrl: "https://github.com/ShahbaazX786/pexels",
    },
    recipe: {
      title: "recipe",
      description: [
        "Recipe Finder is a modern mobile app to discover, search, and explore delicious recipes with ease.",
        "Users can browse featured recipes, filter by categories, and view step-by-step cooking instructions.",
        "Each recipe includes YouTube video tutorials and can be saved to favorites for quick access.",
        "The app features secure authentication with Clerk and supports 8 beautiful color themes.",
        "Built with React Native, Expo, Express, and PostgreSQL using 100% free tools.",
      ],
      hostedUrl: null,
      repoUrl: "https://github.com/ShahbaazX786/recipe",
    },
  },
} as const;

export default ProjectData;
