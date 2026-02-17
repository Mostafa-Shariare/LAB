export const gapAnalysisData = {
    python: {
        gaps: [
            "Data Structures (Arrays, Linked Lists, Dictionaries)",
            "Object-Oriented Programming (Classes, Inheritance)",
            "Error Handling and Exception Management",
            "Data Manipulation with Pandas and NumPy"
        ],
        realWorldApplications: [
            {
                icon: "fa-database",
                title: "Data Structures in Industry",
                description: "Mastering data structures is crucial for building efficient applications that handle large datasets and complex operations.",
                examples: [
                    "E-commerce platforms use arrays and dictionaries to manage product catalogs and shopping carts",
                    "Social media apps use linked lists for comment threads and message chains",
                    "Financial systems use hash tables for fast transaction lookups and fraud detection",
                    "Search engines use trees and graphs to index and rank billions of web pages"
                ]
            },
            {
                icon: "fa-chart-line",
                title: "Data Science & Analytics",
                description: "These skills are essential for analyzing business data, creating predictive models, and making data-driven decisions.",
                examples: [
                    "Data analysts use Pandas to process sales data and identify market trends",
                    "Business intelligence teams use NumPy for statistical analysis and forecasting",
                    "Healthcare researchers analyze patient data to predict disease outcomes",
                    "Marketing teams track campaign performance and optimize ad spending"
                ]
            },
            {
                icon: "fa-code",
                title: "Software Development",
                description: "Professional Python development requires robust error handling and clean code architecture.",
                examples: [
                    "Web applications need exception handling for API failures and user input validation",
                    "Automated trading systems require error handling to prevent financial losses",
                    "IoT devices use OOP to manage sensors and actuators efficiently",
                    "Microservices architecture relies on proper error handling for system reliability"
                ]
            }
        ]
    },
    web: {
        gaps: [
            "Responsive Design and CSS Grid/Flexbox",
            "JavaScript ES6+ Features (Async/Await, Promises)",
            "API Integration and RESTful Services",
            "Performance Optimization and Caching"
        ],
        realWorldApplications: [
            {
                icon: "fa-mobile-alt",
                title: "Modern Web Development",
                description: "These skills are fundamental for creating professional, scalable web applications used by millions of users.",
                examples: [
                    "E-commerce sites need responsive design to work on mobile, tablet, and desktop devices",
                    "Social media platforms use async/await to load content without blocking the UI",
                    "Weather apps integrate with APIs to fetch real-time data from external services",
                    "Online banking uses caching to improve performance and reduce server load"
                ]
            },
            {
                icon: "fa-briefcase",
                title: "Enterprise Applications",
                description: "Business applications require robust API integration and performance optimization for scalability.",
                examples: [
                    "CRM systems integrate with email, calendar, and payment APIs",
                    "Project management tools use REST APIs to sync data across multiple platforms",
                    "Healthcare portals optimize performance to handle thousands of concurrent users",
                    "Educational platforms cache content to deliver fast learning experiences"
                ]
            },
            {
                icon: "fa-rocket",
                title: "Startup & Freelance Projects",
                description: "These skills enable you to build complete, production-ready web applications independently.",
                examples: [
                    "Portfolio websites showcase your work with responsive, modern designs",
                    "SaaS products use API integration to connect with payment gateways and analytics",
                    "Blog platforms optimize images and code for fast page loads and SEO",
                    "Marketplace apps handle real-time updates using modern JavaScript patterns"
                ]
            }
        ]
    },
    ml: {
        gaps: [
            "Neural Network Architecture and Deep Learning",
            "Model Evaluation and Hyperparameter Tuning",
            "Feature Engineering and Data Preprocessing",
            "Deployment and Model Serving in Production"
        ],
        realWorldApplications: [
            {
                icon: "fa-brain",
                title: "AI & Machine Learning Industry",
                description: "These skills are essential for building production-ready AI systems that solve real business problems.",
                examples: [
                    "Tech companies use neural networks for image recognition in photo apps and autonomous vehicles",
                    "E-commerce platforms use ML models to recommend products and personalize shopping experiences",
                    "Healthcare systems deploy models to assist doctors in diagnosing diseases from medical images",
                    "Financial institutions use ML for fraud detection and algorithmic trading"
                ]
            },
            {
                icon: "fa-industry",
                title: "Enterprise AI Solutions",
                description: "Businesses across industries are adopting ML to automate processes and gain competitive advantages.",
                examples: [
                    "Manufacturing companies use predictive maintenance to reduce equipment downtime",
                    "Retail chains optimize inventory using demand forecasting models",
                    "Customer service teams use chatbots powered by NLP models",
                    "Marketing departments use ML to segment customers and optimize campaigns"
                ]
            },
            {
                icon: "fa-flask",
                title: "Research & Innovation",
                description: "Advanced ML skills enable you to contribute to cutting-edge research and develop new AI capabilities.",
                examples: [
                    "Research labs develop new architectures for natural language understanding",
                    "Startups create innovative solutions using computer vision for accessibility",
                    "Universities collaborate with industry on breakthrough AI applications",
                    "Open-source projects contribute to the global ML community"
                ]
            }
        ]
    }
};

export const careerPaths = [
    {
        title: "Software Developer / Software Engineer",
        icon: "fa-code",
        keywords: ["software developer", "software engineer", "programmer", "developer", "coding", "programming"],
        coreSkills: ["Programming", "Problem Solving", "Software Design"],
        courses: [
            "Programming Fundamentals (Python / Java / C++)",
            "Object-Oriented Programming",
            "Data Structures & Algorithms",
            "Version Control with Git & GitHub",
            "Software Engineering Principles",
            "Database Management Systems",
            "API & Backend Basics"
        ]
    },
    {
        title: "Web Developer",
        icon: "fa-globe",
        keywords: ["web developer", "frontend", "backend", "full stack", "web development", "website"],
        coreSkills: ["Web Technologies", "UI/UX", "Server-Side Logic"],
        courses: [
            "HTML, CSS & JavaScript Fundamentals",
            "Responsive Web Design",
            "Frontend Frameworks (React / Vue)",
            "Backend Development (Node.js / Django)",
            "RESTful APIs",
            "Web Security Basics",
            "Full Stack Web Development Project"
        ]
    },
    {
        title: "Mobile App Developer",
        icon: "fa-mobile-alt",
        keywords: ["mobile app", "mobile developer", "android", "ios", "app developer", "mobile"],
        coreSkills: ["Mobile UI", "App Lifecycle", "APIs"],
        courses: [
            "Programming with Java / Kotlin / Swift",
            "Android App Development",
            "iOS App Development",
            "Cross-Platform Development (Flutter / React Native)",
            "Mobile UI/UX Design",
            "App Deployment & Maintenance"
        ]
    },
    {
        title: "Machine Learning Engineer",
        icon: "fa-brain",
        keywords: ["machine learning", "ml engineer", "ml", "machine learning engineer"],
        coreSkills: ["Math", "ML Models", "Data Handling"],
        courses: [
            "Python for Machine Learning",
            "Mathematics for ML (Linear Algebra & Probability)",
            "Data Preprocessing & Feature Engineering",
            "Machine Learning Algorithms",
            "Model Evaluation & Optimization",
            "Deep Learning Fundamentals",
            "ML Model Deployment Basics"
        ]
    },
    {
        title: "Artificial Intelligence Engineer",
        icon: "fa-robot",
        keywords: ["artificial intelligence", "ai engineer", "ai", "neural networks", "intelligent systems"],
        coreSkills: ["AI Concepts", "Neural Networks", "Intelligent Systems"],
        courses: [
            "Introduction to Artificial Intelligence",
            "Search & Optimization Techniques",
            "Neural Networks & Deep Learning",
            "Natural Language Processing",
            "Computer Vision Fundamentals",
            "AI Ethics & Responsible AI"
        ]
    },
    {
        title: "Data Scientist",
        icon: "fa-chart-bar",
        keywords: ["data scientist", "data science", "data analysis", "data"],
        coreSkills: ["Data Analysis", "Statistics", "Visualization"],
        courses: [
            "Python for Data Science",
            "Statistics & Probability",
            "Data Analysis with Pandas & NumPy",
            "Data Visualization (Matplotlib / Power BI)",
            "Machine Learning for Data Science",
            "Big Data Fundamentals",
            "Data Science Capstone Project"
        ]
    },
    {
        title: "Data Analyst",
        icon: "fa-chart-line",
        keywords: ["data analyst", "analyst", "data analysis", "business analyst"],
        coreSkills: ["Data Cleaning", "Reporting", "Insights"],
        courses: [
            "Excel for Data Analysis",
            "SQL for Data Analytics",
            "Python for Data Analysis",
            "Data Visualization Techniques",
            "Business Intelligence Tools",
            "Analytical Thinking & Reporting"
        ]
    },
    {
        title: "Cloud Engineer",
        icon: "fa-cloud",
        keywords: ["cloud engineer", "cloud", "aws", "azure", "google cloud", "cloud computing"],
        coreSkills: ["Cloud Platforms", "Infrastructure"],
        courses: [
            "Cloud Computing Fundamentals",
            "AWS / Azure / Google Cloud Basics",
            "Virtual Machines & Containers",
            "Docker & Kubernetes",
            "Cloud Security Fundamentals",
            "DevOps & CI/CD Basics"
        ]
    },
    {
        title: "Cybersecurity Analyst",
        icon: "fa-shield-alt",
        keywords: ["cybersecurity", "security analyst", "cyber security", "security", "ethical hacking"],
        coreSkills: ["Security", "Risk Analysis", "Networks"],
        courses: [
            "Cybersecurity Fundamentals",
            "Network Security",
            "Ethical Hacking Basics",
            "Cryptography Essentials",
            "Security Operations & Monitoring",
            "Incident Response & Risk Management"
        ]
    },
    {
        title: "DevOps Engineer",
        icon: "fa-cogs",
        keywords: ["devops", "devops engineer", "deployment", "automation", "ci/cd"],
        coreSkills: ["Automation", "Deployment", "Monitoring"],
        courses: [
            "Linux Fundamentals",
            "Git & Version Control",
            "CI/CD Pipelines",
            "Docker & Kubernetes",
            "Infrastructure as Code",
            "Monitoring & Logging Tools"
        ]
    },
    {
        title: "Game Developer",
        icon: "fa-gamepad",
        keywords: ["game developer", "game development", "gaming", "unity", "unreal"],
        coreSkills: ["Game Logic", "Graphics", "Engines"],
        courses: [
            "Programming for Games (C# / C++)",
            "Game Design Principles",
            "Unity / Unreal Engine Basics",
            "2D & 3D Game Development",
            "Game Physics & Animation",
            "Game Testing & Optimization"
        ]
    },
    {
        title: "UI/UX Designer",
        icon: "fa-palette",
        keywords: ["ui/ux", "ui designer", "ux designer", "designer", "design", "user interface"],
        coreSkills: ["Design Thinking", "Usability"],
        courses: [
            "Design Thinking Fundamentals",
            "UI Design Principles",
            "UX Research Methods",
            "Wireframing & Prototyping",
            "Figma / Adobe XD",
            "Usability Testing"
        ]
    },
    {
        title: "IT Project Manager",
        icon: "fa-tasks",
        keywords: ["it project manager", "project manager", "pm", "management"],
        coreSkills: ["Planning", "Coordination", "Leadership"],
        courses: [
            "IT Project Management Fundamentals",
            "Agile & Scrum Methodology",
            "Software Development Lifecycle (SDLC)",
            "Risk & Quality Management",
            "Communication & Team Leadership",
            "Project Management Tools"
        ]
    }
];
