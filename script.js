// --- Mock Data ---
const courses = [
    // Software Development
    { title: "Programming Fundamentals (Python / Java / C++)", instructor: "Dr. Sarah Jenkins", progress: 0, category: "Programming", icon: "fas fa-code", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop" },
    { title: "Object-Oriented Programming", instructor: "Prof. Michael Chen", progress: 0, category: "Programming", icon: "fas fa-cube", image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop" },
    { title: "Data Structures & Algorithms", instructor: "Alex Rivera", progress: 0, category: "Programming", icon: "fas fa-sitemap", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop" },
    { title: "Version Control with Git & GitHub", instructor: "Emma Watson", progress: 0, category: "Programming", icon: "fab fa-github", image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=250&fit=crop" },
    { title: "Software Engineering Principles", instructor: "Dr. James Wilson", progress: 0, category: "Programming", icon: "fas fa-cogs", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop" },
    { title: "Database Management Systems", instructor: "Prof. Lisa Anderson", progress: 0, category: "Programming", icon: "fas fa-database", image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop" },
    { title: "API & Backend Basics", instructor: "Sara Veras", progress: 0, category: "Programming", icon: "fas fa-server", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop" },

    // Web Development
    { title: "HTML, CSS & JavaScript Fundamentals", instructor: "Alex Rivera", progress: 0, category: "Programming", icon: "fab fa-html5", image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=250&fit=crop" },
    { title: "Responsive Web Design", instructor: "Emma Watson", progress: 0, category: "Programming", icon: "fas fa-mobile-alt", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop" },
    { title: "Frontend Frameworks (React / Vue)", instructor: "Sara Veras", progress: 0, category: "Programming", icon: "fab fa-react", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop" },
    { title: "Backend Development (Node.js / Django)", instructor: "Dr. Sarah Jenkins", progress: 0, category: "Programming", icon: "fab fa-node-js", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop" },
    { title: "RESTful APIs", instructor: "Prof. Michael Chen", progress: 0, category: "Programming", icon: "fas fa-plug", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop" },
    { title: "Web Security Basics", instructor: "Dr. James Wilson", progress: 0, category: "Programming", icon: "fas fa-shield-alt", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop" },
    { title: "Full Stack Web Development Project", instructor: "Alex Rivera", progress: 0, category: "Programming", icon: "fas fa-layer-group", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop" },

    // Mobile Development
    { title: "Programming with Java / Kotlin / Swift", instructor: "Prof. Lisa Anderson", progress: 0, category: "Programming", icon: "fab fa-java", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop" },
    { title: "Android App Development", instructor: "Dr. Sarah Jenkins", progress: 0, category: "Programming", icon: "fab fa-android", image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=250&fit=crop" },
    { title: "iOS App Development", instructor: "Sara Veras", progress: 0, category: "Programming", icon: "fab fa-apple", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop" },
    { title: "Cross-Platform Development (Flutter / React Native)", instructor: "Alex Rivera", progress: 0, category: "Programming", icon: "fas fa-mobile-alt", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop" },
    { title: "Mobile UI/UX Design", instructor: "Emma Watson", progress: 0, category: "Programming", icon: "fas fa-palette", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop" },
    { title: "App Deployment & Maintenance", instructor: "Dr. James Wilson", progress: 0, category: "Programming", icon: "fas fa-rocket", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop" },

    // Machine Learning & AI
    { title: "Python for Machine Learning", instructor: "Prof. Michael Chen", progress: 0, category: "AI & ML", icon: "fab fa-python", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop" },
    { title: "Mathematics for ML (Linear Algebra & Probability)", instructor: "Dr. Sarah Jenkins", progress: 0, category: "AI & ML", icon: "fas fa-calculator", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop" },
    { title: "Data Preprocessing & Feature Engineering", instructor: "Prof. Lisa Anderson", progress: 0, category: "AI & ML", icon: "fas fa-filter", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop" },
    { title: "Machine Learning Algorithms", instructor: "Prof. Michael Chen", progress: 0, category: "AI & ML", icon: "fas fa-brain", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop" },
    { title: "Model Evaluation & Optimization", instructor: "Dr. Sarah Jenkins", progress: 0, category: "AI & ML", icon: "fas fa-chart-line", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop" },
    { title: "Deep Learning Fundamentals", instructor: "Prof. Michael Chen", progress: 0, category: "AI & ML", icon: "fas fa-network-wired", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop" },
    { title: "ML Model Deployment Basics", instructor: "Dr. James Wilson", progress: 0, category: "AI & ML", icon: "fas fa-cloud-upload-alt", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop" },
    { title: "Introduction to Artificial Intelligence", instructor: "Prof. Michael Chen", progress: 0, category: "AI & ML", icon: "fas fa-robot", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop" },
    { title: "Search & Optimization Techniques", instructor: "Dr. Sarah Jenkins", progress: 0, category: "AI & ML", icon: "fas fa-search", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop" },
    { title: "Neural Networks & Deep Learning", instructor: "Prof. Michael Chen", progress: 0, category: "AI & ML", icon: "fas fa-network-wired", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop" },
    { title: "Natural Language Processing", instructor: "Prof. Lisa Anderson", progress: 0, category: "AI & ML", icon: "fas fa-language", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" },
    { title: "Computer Vision Fundamentals", instructor: "Dr. Sarah Jenkins", progress: 0, category: "AI & ML", icon: "fas fa-eye", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop" },
    { title: "AI Ethics & Responsible AI", instructor: "Emma Watson", progress: 0, category: "AI & ML", icon: "fas fa-balance-scale", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop" },

    // Data Science
    { title: "Python for Data Science", instructor: "Dr. Sarah Jenkins", progress: 0, category: "Data Science", icon: "fab fa-python", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250" },
    { title: "Statistics & Probability", instructor: "Prof. Lisa Anderson", progress: 0, category: "Data Science", icon: "fas fa-chart-bar", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop" },
    { title: "Data Analysis with Pandas & NumPy", instructor: "Dr. Sarah Jenkins", progress: 0, category: "Data Science", icon: "fas fa-table", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop" },
    { title: "Data Visualization (Matplotlib / Power BI)", instructor: "Prof. Michael Chen", progress: 0, category: "Data Science", icon: "fas fa-chart-pie", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop" },
    { title: "Machine Learning for Data Science", instructor: "Prof. Michael Chen", progress: 0, category: "Data Science", icon: "fas fa-brain", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop" },
    { title: "Big Data Fundamentals", instructor: "Dr. James Wilson", progress: 0, category: "Data Science", icon: "fas fa-database", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop" },
    { title: "Data Science Capstone Project", instructor: "Dr. Sarah Jenkins", progress: 0, category: "Data Science", icon: "fas fa-project-diagram", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop" },
    { title: "Excel for Data Analysis", instructor: "Prof. Lisa Anderson", progress: 0, category: "Data Science", icon: "fas fa-file-excel", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" },
    { title: "SQL for Data Analytics", instructor: "Dr. Sarah Jenkins", progress: 0, category: "Data Science", icon: "fas fa-database", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop" },
    { title: "Python for Data Analysis", instructor: "Dr. Sarah Jenkins", progress: 0, category: "Data Science", icon: "fab fa-python", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop" },
    { title: "Data Visualization Techniques", instructor: "Prof. Michael Chen", progress: 0, category: "Data Science", icon: "fas fa-chart-area", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop" },
    { title: "Business Intelligence Tools", instructor: "Prof. Lisa Anderson", progress: 0, category: "Data Science", icon: "fas fa-briefcase", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop" },
    { title: "Analytical Thinking & Reporting", instructor: "Emma Watson", progress: 0, category: "Data Science", icon: "fas fa-file-alt", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop" },

    // Cloud & DevOps
    { title: "Cloud Computing Fundamentals", instructor: "Dr. James Wilson", progress: 0, category: "Programming", icon: "fas fa-cloud", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop" },
    { title: "AWS / Azure / Google Cloud Basics", instructor: "Prof. Lisa Anderson", progress: 0, category: "Programming", icon: "fab fa-aws", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&w=400&h=250&fit=crop" },
    { title: "Virtual Machines & Containers", instructor: "Dr. James Wilson", progress: 0, category: "Programming", icon: "fas fa-server", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop" },
    { title: "Docker & Kubernetes", instructor: "Dr. James Wilson", progress: 0, category: "Programming", icon: "fab fa-docker", image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=250&fit=crop" },
    { title: "Cloud Security Fundamentals", instructor: "Dr. James Wilson", progress: 0, category: "Programming", icon: "fas fa-shield-alt", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop" },
    { title: "DevOps & CI/CD Basics", instructor: "Dr. James Wilson", progress: 0, category: "Programming", icon: "fas fa-sync-alt", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop" },
    { title: "Linux Fundamentals", instructor: "Dr. James Wilson", progress: 0, category: "Programming", icon: "fab fa-linux", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" },
    { title: "Git & Version Control", instructor: "Emma Watson", progress: 0, category: "Programming", icon: "fab fa-git-alt", image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=250&fit=crop" },
    { title: "CI/CD Pipelines", instructor: "Dr. James Wilson", progress: 0, category: "Programming", icon: "fas fa-project-diagram", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop" },
    { title: "Infrastructure as Code", instructor: "Dr. James Wilson", progress: 0, category: "Programming", icon: "fas fa-code", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop" },
    { title: "Monitoring & Logging Tools", instructor: "Prof. Lisa Anderson", progress: 0, category: "Programming", icon: "fas fa-chart-line", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop" },

    // Cybersecurity
    { title: "Cybersecurity Fundamentals", instructor: "Dr. James Wilson", progress: 0, category: "Programming", icon: "fas fa-shield-alt", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop" },
    { title: "Network Security", instructor: "Dr. James Wilson", progress: 0, category: "Programming", icon: "fas fa-network-wired", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop" },
    { title: "Ethical Hacking Basics", instructor: "Dr. James Wilson", progress: 0, category: "Programming", icon: "fas fa-user-secret", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop" },
    { title: "Cryptography Essentials", instructor: "Prof. Lisa Anderson", progress: 0, category: "Programming", icon: "fas fa-lock", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop" },
    { title: "Security Operations & Monitoring", instructor: "Dr. James Wilson", progress: 0, category: "Programming", icon: "fas fa-eye", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" },
    { title: "Incident Response & Risk Management", instructor: "Emma Watson", progress: 0, category: "Programming", icon: "fas fa-exclamation-triangle", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop" },

    // Game Development
    { title: "Programming for Games (C# / C++)", instructor: "Alex Rivera", progress: 0, category: "Programming", icon: "fas fa-gamepad", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=250&fit=crop" },
    { title: "Game Design Principles", instructor: "Emma Watson", progress: 0, category: "Programming", icon: "fas fa-palette", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop" },
    { title: "Unity / Unreal Engine Basics", instructor: "Alex Rivera", progress: 0, category: "Programming", icon: "fas fa-cube", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop" },
    { title: "2D & 3D Game Development", instructor: "Sara Veras", progress: 0, category: "Programming", icon: "fas fa-cube", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop" },
    { title: "Game Physics & Animation", instructor: "Prof. Michael Chen", progress: 0, category: "Programming", icon: "fas fa-running", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop" },
    { title: "Game Testing & Optimization", instructor: "Dr. Sarah Jenkins", progress: 0, category: "Programming", icon: "fas fa-bug", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop" },

    // UI/UX Design
    { title: "Design Thinking Fundamentals", instructor: "Emma Watson", progress: 0, category: "Soft Skills", icon: "fas fa-lightbulb", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop" },
    { title: "UI Design Principles", instructor: "Emma Watson", progress: 0, category: "Soft Skills", icon: "fas fa-paint-brush", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" },
    { title: "UX Research Methods", instructor: "Prof. Lisa Anderson", progress: 0, category: "Soft Skills", icon: "fas fa-search", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop" },
    { title: "Wireframing & Prototyping", instructor: "Emma Watson", progress: 0, category: "Soft Skills", icon: "fas fa-drafting-compass", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop" },
    { title: "Figma / Adobe XD", instructor: "Sara Veras", progress: 0, category: "Soft Skills", icon: "fas fa-palette", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop" },
    { title: "Usability Testing", instructor: "Emma Watson", progress: 0, category: "Soft Skills", icon: "fas fa-vial", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop" },

    // Project Management
    { title: "IT Project Management Fundamentals", instructor: "Emma Watson", progress: 0, category: "Soft Skills", icon: "fas fa-tasks", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop" },
    { title: "Agile & Scrum Methodology", instructor: "Prof. Lisa Anderson", progress: 0, category: "Soft Skills", icon: "fas fa-project-diagram", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop" },
    { title: "Software Development Lifecycle (SDLC)", instructor: "Dr. James Wilson", progress: 0, category: "Soft Skills", icon: "fas fa-sync", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop" },
    { title: "Risk & Quality Management", instructor: "Emma Watson", progress: 0, category: "Soft Skills", icon: "fas fa-clipboard-check", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" },
    { title: "Communication & Team Leadership", instructor: "Emma Watson", progress: 0, category: "Soft Skills", icon: "fas fa-users", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop" },
    { title: "Project Management Tools", instructor: "Prof. Lisa Anderson", progress: 0, category: "Soft Skills", icon: "fas fa-toolbox", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop" },

    // Original courses (keeping for compatibility)
    { title: "Machine Learning A-Z", instructor: "Prof. Michael Chen", progress: 0, category: "AI & ML", icon: "fas fa-brain", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop" },
    { title: "Frontend Development", instructor: "Alex Rivera", progress: 0, category: "Programming", icon: "fas fa-code", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop" },
    { title: "Soft Skills for Tech", instructor: "Emma Watson", progress: 0, category: "Soft Skills", icon: "fas fa-users", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop" },
    { title: "Deep Learning Specialization", instructor: "Dr. Andrew Ng (Demo)", progress: 0, category: "AI & ML", icon: "fas fa-network-wired", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop" },
    { title: "React & Modern JS", instructor: "Sara Veras", progress: 0, category: "Programming", icon: "fab fa-js", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop" }
];

// --- Navigation Logic ---
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    // Show target section
    document.getElementById(sectionId).classList.add('active');

    // Update Nav Link Active State
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick').includes(sectionId)) {
            link.classList.add('active');
        }
    });

    // Close mobile menu if open
    const navItems = document.querySelector('.nav-links');
    if (window.innerWidth <= 768) {
        navItems.style.display = 'none';
    }
}

// --- Render Courses ---
function renderCourses(filterCategory = 'All') {
    const container = document.getElementById('course-container');
    const dashboardList = document.getElementById('enrolled-list');

    container.innerHTML = '';
    dashboardList.innerHTML = '';

    // Filter courses based on category
    const filteredCourses = filterCategory === 'All'
        ? courses
        : courses.filter(course => course.category === filterCategory);

    // Show empty state if no courses match
    if (filteredCourses.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--gray); margin-bottom: 1rem;"></i>
                <p style="color: var(--gray); font-size: 1.1rem;">No courses found in this category</p>
            </div>
        `;
        return;
    }

    filteredCourses.forEach(course => {
        // Render Course Page Cards
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <div class="course-img">
                <img src="${course.image}" alt="${course.title}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/400x250/4f46e5/ffffff?text=' + encodeURIComponent('${course.title}');">
                <div class="course-img-overlay">
                    <i class="${course.icon}"></i>
                </div>
                <span class="category-badge">${course.category}</span>
            </div>
            <div class="course-info">
                <h3>${course.title}</h3>
                <p>Instructor: ${course.instructor}</p>
                <div class="progress-container">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${course.progress}%"></div>
                    </div>
                    <small>${course.progress}% Complete</small>
                </div>
                <button class="btn btn-primary" style="width:100%">Enroll Now</button>
            </div>
        `;
        container.appendChild(card);

        // Render Dashboard Items (only if progress > 0)
        if (course.progress > 0) {
            const dashItem = document.createElement('div');
            dashItem.className = 'enrolled-item';
            dashItem.innerHTML = `
                <span><strong>${course.title}</strong></span>
                <span>${course.progress}%</span>
                <button class="btn-primary btn" style="padding: 5px 10px; font-size: 0.8rem">Continue</button>
            `;
            dashboardList.appendChild(dashItem);
        }
    });
}

// --- Mock AI Tutor Interaction ---
function sendMockMessage() {
    const input = document.getElementById('chat-input');
    const display = document.getElementById('chat-display');

    if (input.value.trim() === "") return;

    // User Message
    const userMsg = document.createElement('div');
    userMsg.className = 'msg user';
    userMsg.innerText = input.value;
    display.appendChild(userMsg);

    const query = input.value.toLowerCase();
    input.value = "";

    // Mock AI "Thinking" and Response
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'msg bot';

        if (query.includes("python")) {
            botMsg.innerText = "Python is a high-level programming language known for readability. In your current course, we are focusing on List Comprehensions.";
        } else if (query.includes("quiz")) {
            botMsg.innerText = "I've generated a new quiz based on your last lecture. Would you like to start it?";
        } else {
            botMsg.innerText = "That's a great question! Based on your learning path, I recommend reviewing the 'Neural Networks' module before exploring that topic.";
        }

        display.appendChild(botMsg);
        display.scrollTop = display.scrollHeight;
    }, 1000);
}

// --- Filter Courses by Category ---
function filterCourses(category) {
    // Update active button state
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.trim() === category) {
            btn.classList.add('active');
        }
    });

    // Render filtered courses
    renderCourses(category);
}

// --- Initialize ---
window.onload = () => {
    renderCourses();

    // Add event listeners to filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterCourses(btn.textContent.trim());
        });
    });
};

// --- Simple Mobile Menu Toggle ---
document.querySelector('.burger')?.addEventListener('click', () => {
    const nav = document.querySelector('.nav-links');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '70px';
    nav.style.left = '0';
    nav.style.width = '100%';
    nav.style.background = 'white';
    nav.style.padding = '20px';
});

// --- AI Advisor Simulation Functions ---

// --- AI Advisor Redesign Logic ---

function switchAdvisorTab(tabId) {
    // Buttons
    document.querySelectorAll('.advisor-tab').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(tabId)) {
            btn.classList.add('active');
        }
    });

    // Content
    document.querySelectorAll('.advisor-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`tab-${tabId}`).classList.add('active');
}

function simulateGapAnalysis() {
    const results = document.getElementById('gap-results');
    const gapList = document.getElementById('gap-list');
    const realWorldContent = document.getElementById('real-world-content');
    const btn = event.currentTarget; // Use currentTarget for button with icon
    const selectedCourse = document.getElementById('gap-course').value;

    if (!selectedCourse) {
        // Simple visual feedback for missing input
        const select = document.getElementById('gap-course');
        select.style.borderColor = '#ef4444';
        setTimeout(() => select.style.borderColor = 'transparent', 2000);
        return;
    }

    // Processing State
    const originalText = btn.innerHTML;
    btn.innerHTML = `<span class="btn-text">AI Analysis in Progress...</span><span class="btn-icon"><i class="fas fa-spinner fa-spin"></i></span>`;
    btn.disabled = true;
    results.classList.add('hidden');

    setTimeout(() => {
        // Define gaps and real-world applications based on course
        const gapData = getGapAnalysisData(selectedCourse);

        // Render Tags
        gapList.innerHTML = '';
        gapData.gaps.forEach((gap, index) => {
            const span = document.createElement('span');
            span.className = 'gap-tag';
            span.style.animationDelay = `${index * 0.1}s`; // Staggered animation
            span.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${gap}`;
            gapList.appendChild(span);
        });

        // Render Real World Content
        realWorldContent.innerHTML = '';
        gapData.realWorldApplications.forEach(app => {
            const appCard = document.createElement('div');
            appCard.className = 'real-world-card';
            appCard.innerHTML = `
                <div class="real-world-header">
                    <i class="fas ${app.icon}"></i>
                    <h5>${app.title}</h5>
                </div>
                <p>${app.description}</p>
            `;
            realWorldContent.appendChild(appCard);
        });

        // Show Results
        results.classList.remove('hidden');
        btn.innerHTML = `<span class="btn-text">Analysis Complete</span><span class="btn-icon"><i class="fas fa-check"></i></span>`;
        btn.disabled = false;

        // Reset button after delay
        setTimeout(() => {
            btn.innerHTML = originalText;
        }, 3000);

    }, 2000); // Longer delay to show off scanning line animation
}

// --- Gap Analysis Data with Real-World Applications ---
function getGapAnalysisData(course) {
    const dataMap = {
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

    return dataMap[course] || dataMap.python;
}

function simulateCareerPlan() {
    const results = document.getElementById('career-results');
    const btn = event.currentTarget;
    const goalInput = document.getElementById('career-goal').value.toLowerCase().trim();
    const experienceLevel = document.getElementById('career-level').value;

    if (!goalInput) {
        const input = document.getElementById('career-goal');
        input.style.borderColor = '#ef4444';
        setTimeout(() => input.style.borderColor = 'transparent', 2000);
        return;
    }

    // Processing State
    const originalText = btn.innerHTML;
    btn.innerHTML = `<span class="btn-text">Generating Roadmap...</span><span class="btn-icon"><i class="fas fa-spinner fa-spin"></i></span>`;
    btn.disabled = true;
    results.classList.add('hidden');

    setTimeout(() => {
        const careerPath = matchCareerPath(goalInput);

        // Fallback or Match
        const pathData = careerPath || {
            title: "General Tech Career",
            courses: ["Programming Fundamentals", "Git Version Control", "Project Management"]
        };

        // Render Roadmap
        let roadmapHTML = `<div class="career-roadmap">`;

        // Step 1: Foundation
        roadmapHTML += `
            <div class="roadmap-step">
                <h5>Step 1: Build Strong Foundations</h5>
                <p>Master Core Concepts: ${pathData.coreSkills ? pathData.coreSkills[0] : 'Programming Basics'}</p>
            </div>
        `;

        // Step 2: Specialization
        roadmapHTML += `
            <div class="roadmap-step">
                <h5>Step 2: Specialized Skills</h5>
                <p>Advanced Topics: ${pathData.coreSkills ? pathData.coreSkills[1] : 'Advanced Functions'}</p>
            </div>
        `;

        // Step 3: Recommended Courses (Dynamic)
        roadmapHTML += `
            <div class="roadmap-step">
                <h5>Step 3: Recommended Courses</h5>
                <div class="mini-course-list">
                    ${pathData.courses.slice(0, 3).map(c => `
                        <div class="mini-course-card" style="margin-top:0.5rem; padding:0.5rem;">
                            <i class="fas fa-book-reader" style="color:var(--primary)"></i> <span>${c}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        roadmapHTML += `</div>`;

        results.innerHTML = `
            <h4><i class="fas fa-map"></i> Your Personal Roadmap: ${pathData.title}</h4>
            ${roadmapHTML}
        `;

        results.classList.remove('hidden');
        btn.innerHTML = `<span class="btn-text">Roadmap Generated</span><span class="btn-icon"><i class="fas fa-check"></i></span>`;
        btn.disabled = false;

        setTimeout(() => {
            btn.innerHTML = originalText;
        }, 3000);

    }, 1500);
}

// --- Match User Input to Career Path ---
function matchCareerPath(userInput) {
    const careerPaths = getCareerPathsData();

    for (const career of careerPaths) {
        // Check if any keyword matches
        const keywords = career.keywords || [];
        if (keywords.some(keyword => userInput.includes(keyword.toLowerCase()))) {
            return career;
        }
    }

    return null;
}

// --- Display Career Results ---
function displayCareerResults(resultsElement, careerPath, experienceLevel) {
    const duration = experienceLevel === 'beginner' ? '8-12 Weeks' :
        experienceLevel === 'intermediate' ? '6-10 Weeks' :
            '4-8 Weeks';

    resultsElement.innerHTML = `
        <hr>
        <h4><span class="badge badge-boost"><i class="fas ${careerPath.icon}"></i> Career Path: ${careerPath.title}</span></h4>
        <div class="career-info">
            <div class="career-core-skills">
                <strong>Core Skills:</strong>
                <div class="skills-tags">
                    ${careerPath.coreSkills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        </div>
        <div class="recommended-courses">
            <h5 style="margin-top: 1.5rem; margin-bottom: 1rem; color: var(--dark);">
                <i class="fas fa-graduation-cap"></i> Suggested Courses:
            </h5>
            ${careerPath.courses.map((course, index) => `
                <div class="mini-course-card">
                    <div class="course-number">${index + 1}</div>
                    <div class="course-content">
                        <h5>${course}</h5>
                        <p><span class="badge badge-rec">Recommended</span> <span class="course-duration">${duration}</span></p>
                    </div>
                </div>
            `).join('')}
        </div>
        <p class="demo-note">Note: This is a simulated AI response for demonstration purposes.</p>
    `;
}

// --- Career Paths Data ---
function getCareerPathsData() {
    return [
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
            keywords: ["project manager", "it project manager", "pm", "project management", "scrum", "agile"],
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
}

// --- Smart Study Schedule Interactivity ---
document.querySelectorAll('.schedule-item').forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all
        document.querySelectorAll('.schedule-item').forEach(i => i.classList.remove('active'));
        // Add to clicked
        item.classList.add('active');
    });
});