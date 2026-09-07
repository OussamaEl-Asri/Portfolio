import type { projectType } from "../definition/projectType";

export const smallProject: projectType[] = [

    // cube 3d
    {
        title:"Cube 3d",
        description: "A 3D game using raycasting to render immersive environments, inspired by classic first-person games.",
        skills: ["C", "Mlx", "Raycasting"], 
        poster:"",
        videoDemo: "",
        sourceCode: "https://github.com/OussamaEl-Asri/Cube-3D.git",
        isCompleted: true,
        isLive: false,
        url: "",
    },

    // webserver
    {
        title:"Webserver",
        description: "C++98 HTTP/1.1 web server handling static files, uploads, CGI scripts, routing, and concurrent connections.",
        skills: ["C++98", "HTTP/1.1", "Sockets", "Non-blocking I/O", "poll()", "CGI", "NGINX Configuration", "TCP/IP"], 
        poster:"",
        videoDemo: "",
        sourceCode: "https://github.com/OussamaEl-Asri/Webserv.git",
        isCompleted: true,
        isLive: true,
        url: "",
    },

    // crypto analysis agent
    {
        title:"Crypto Analysis Agent",
        description: "A local AI agent analyzing cryptocurrency market data and providing technical insights without making price predictions.",
        skills: ["LangChain", "LangGraph InMemorySaver", "Binance Public API", "Python3", "Pydantic", "Docker + Docker Compose"], 
        poster:"",
        videoDemo: "",
        sourceCode: "https://github.com/OussamaEl-Asri/crypto-analysis-agent.git",
        isCompleted: true,
        isLive: false,
        url: "",
    },

    // inception
    {
        title:"Inception",
        description: "Multi-container Docker infrastructure orchestrating NGINX, WordPress, and MariaDB with TLS, networking, and persistent storage.",
        skills: ["Docker", "Docker Compose", "MariaDB", "NGINX", "WordPress + PHP-FPM"], 
        poster:"",
        videoDemo: "",
        sourceCode: "https://github.com/OussamaEl-Asri/inception.git",
        isCompleted: true,
        isLive: true,
        url: "",
    },

    // json parser
    {
        title:"Json Parser",
        description: "Handwritten recursive descent JSON parser building an AST and converting structured data into native Python types.",
        skills: ["Python3", "AST", "Regex" ,"recursive descent parser"], 
        poster:"",
        videoDemo: "",
        sourceCode: "https://github.com/OussamaEl-Asri/JsonParser.git",
        isCompleted: true,
        isLive: true,
        url: "",
    },

    // minishell
    {
        title:"Minishell",
        description: "A Unix shell rebuilt in C, implementing command parsing, execution, pipes, redirections, environment variables, and built-ins.",
        skills: ["C", "Shell", "Parsing", "Processes", "Pipes", "Signals"], 
        poster:"",
        videoDemo: "",
        sourceCode: "https://github.com/OussamaEl-Asri/minishell.git",
        isCompleted: true,
        isLive: true,
        url: "",
    },
]