import type { projectType } from "../definition/projectType"

export const apps: projectType[] = [
    
    // portfolio
    {
        title:"Portfolio",
        description: "A modern personal portfolio showcasing projects, technical skills, experience, and achievements through an interactive responsive interface.",
        skills: ["React", "Typescript", "react-router", "Tailwind CSS", "npm"], 
        poster:"/portfolio/poster.png",
        videoDemo: "https://jxhrtcjl3epzp802.public.blob.vercel-storage.com/portfolio/record.mov",
        sourceCode: "https://github.com/OussamaEl-Asri/Portfolio.git",
        isCompleted: true,
        isLive: true,
        url: "",
    },

    // ft_transcender
    {
        title:"ft_transcender",
        description: "Real-time multiplayer Tic Tac Toe platform featuring user management, analytics, gaming, and AI-powered features.",
        skills: ["Next.js", "Socket.io", "Express.js", "Prisma ORM", 
            "SQLite", "Python", "Flask", "LangChain", "Ollama","Gunicorn",
             "Docker & Docker Compose", "Nginx"], 
        poster:"/ft_transcender/poster.png",
        videoDemo: "https://jxhrtcjl3epzp802.public.blob.vercel-storage.com/ft_transcender/record.mov",
        sourceCode: "https://github.com/OussamaEl-Asri/ft_transcendence.git",
        isCompleted: true,
        isLive: false
    },

    // weather app
    {
        title:"Weather App",
        description: "Explore weather forecasts, manage saved data, discover locations, and find video vlogs for destinations.",
        skills: ["Python","FastAPI", "SQLModel", "PostgreSQL", "uv", "React", "Tailwind CSS", "npm"], 
        poster:"/weatherApp/poster.png",
        videoDemo: "https://jxhrtcjl3epzp802.public.blob.vercel-storage.com/weather-app/sRecord.mov",
        sourceCode: "https://github.com/OussamaEl-Asri/weatherApp.git",
        isCompleted: true,
        isLive: false
    },
]