// AI Response Engine — keyword-based responses for the AI Tutor, Code Reviewer, and Dashboard Quick AI

export const tutorResponses = {
    python: "Python is a high-level, interpreted language known for clean syntax. Key concepts include:\n• **Variables & Types**: int, float, str, list, dict\n• **Control Flow**: if/elif/else, for/while loops\n• **Functions**: def, return, *args, **kwargs\n• **OOP**: classes, inheritance, polymorphism\n\nWould you like me to dive deeper into any of these?",

    javascript: "JavaScript is the language of the web! Here's what you should know:\n• **ES6+ Features**: let/const, arrow functions, template literals\n• **DOM Manipulation**: querySelector, addEventListener\n• **Async**: Promises, async/await, fetch API\n• **Frameworks**: React, Vue, Angular\n\nWant me to explain any specific concept?",

    react: "React is a JavaScript library for building user interfaces:\n• **Components**: Functional & Class components\n• **Hooks**: useState, useEffect, useContext, useRef\n• **JSX**: HTML-like syntax in JavaScript\n• **State Management**: Context API, Redux\n• **Routing**: react-router-dom for SPA navigation\n\nWhat aspect of React interests you?",

    "data structure": "Data Structures organize and store data efficiently:\n• **Arrays**: Ordered collections, O(1) access by index\n• **Linked Lists**: Dynamic size, O(1) insertions\n• **Stacks & Queues**: LIFO and FIFO patterns\n• **Trees**: Hierarchical, great for search (BST: O(log n))\n• **Hash Tables**: Key-value pairs, O(1) average lookup\n• **Graphs**: Networks, used in maps and social networks",

    algorithm: "Algorithms are step-by-step procedures for solving problems:\n• **Sorting**: Bubble Sort O(n²), Merge Sort O(n log n), Quick Sort O(n log n)\n• **Searching**: Linear O(n), Binary O(log n)\n• **Dynamic Programming**: Break problems into subproblems\n• **Greedy**: Make locally optimal choices\n• **Graph Algorithms**: BFS, DFS, Dijkstra's shortest path",

    "machine learning": "Machine Learning teaches computers to learn from data:\n• **Supervised**: Linear Regression, Decision Trees, SVM\n• **Unsupervised**: K-Means Clustering, PCA\n• **Deep Learning**: Neural Networks, CNNs, RNNs, Transformers\n• **Tools**: scikit-learn, TensorFlow, PyTorch\n• **Pipeline**: Data → Preprocess → Train → Evaluate → Deploy",

    "neural network": "Neural Networks are inspired by the human brain:\n• **Layers**: Input → Hidden → Output\n• **Activation Functions**: ReLU, Sigmoid, Softmax\n• **Backpropagation**: Adjusts weights to minimize loss\n• **Types**: CNN (images), RNN (sequences), Transformer (attention)\n• **Training**: Epochs, batch size, learning rate, optimizers (Adam, SGD)",

    database: "Databases store and manage data:\n• **SQL**: MySQL, PostgreSQL — structured, relational\n• **NoSQL**: MongoDB, Redis — flexible, document-based\n• **CRUD**: Create, Read, Update, Delete operations\n• **Normalization**: Reducing data redundancy\n• **Indexing**: Speed up queries with B-trees\n• **Joins**: INNER, LEFT, RIGHT, FULL OUTER",

    css: "CSS controls the visual presentation of web pages:\n• **Selectors**: class, id, attribute, pseudo-class\n• **Box Model**: margin, border, padding, content\n• **Flexbox**: One-dimensional layouts (row/column)\n• **Grid**: Two-dimensional layouts\n• **Responsive**: Media queries, relative units (rem, vh, vw)\n• **Animations**: @keyframes, transitions, transforms",

    html: "HTML is the backbone of every web page:\n• **Semantic Tags**: header, nav, main, section, article, footer\n• **Forms**: input, select, textarea, validation\n• **Accessibility**: ARIA attributes, alt text, roles\n• **SEO**: meta tags, heading hierarchy, structured data\n• **HTML5**: canvas, video, audio, localStorage",

    git: "Git is essential for version control:\n• **Basics**: init, add, commit, status, log\n• **Branching**: branch, checkout, merge, rebase\n• **Remote**: clone, push, pull, fetch\n• **Collaboration**: Pull Requests, code reviews, conflicts\n• **Best Practices**: Meaningful commits, .gitignore, branching strategies",

    api: "APIs allow applications to communicate:\n• **REST**: GET, POST, PUT, DELETE over HTTP\n• **GraphQL**: Query exactly the data you need\n• **Authentication**: JWT tokens, OAuth 2.0, API keys\n• **Status Codes**: 200 OK, 201 Created, 404 Not Found, 500 Server Error\n• **Tools**: Postman, curl, fetch/axios in JavaScript",

    recursion: "Recursion is when a function calls itself to solve smaller instances of a problem:\n• **Base Case**: The condition that stops recursion\n• **Recursive Case**: The function calling itself with modified input\n• **Examples**: Factorial (n! = n × (n-1)!), Fibonacci, tree traversal\n• **Stack**: Each call adds to the call stack\n• **Tip**: Always define your base case first to avoid infinite recursion!",

    oop: "Object-Oriented Programming organizes code around objects:\n• **Encapsulation**: Bundle data and methods together\n• **Inheritance**: Child classes inherit from parent classes\n• **Polymorphism**: Same interface, different implementations\n• **Abstraction**: Hide complex details, expose simple interface\n• **Design Patterns**: Singleton, Factory, Observer, Strategy",

    "web security": "Web Security protects applications from attacks:\n• **XSS**: Cross-Site Scripting — sanitize user input\n• **CSRF**: Cross-Site Request Forgery — use tokens\n• **SQL Injection**: Parameterized queries prevent this\n• **HTTPS**: Encrypts data in transit with TLS\n• **CORS**: Controls which domains can access your API\n• **Auth**: Hash passwords (bcrypt), use JWT tokens",

    docker: "Docker containerizes applications for consistency:\n• **Images**: Blueprints for containers (Dockerfile)\n• **Containers**: Running instances of images\n• **Volumes**: Persist data outside containers\n• **Networking**: Bridge, host, overlay networks\n• **Compose**: Multi-container apps with docker-compose.yml\n• **Registry**: Docker Hub for sharing images",

    cloud: "Cloud Computing provides on-demand resources:\n• **IaaS**: Virtual machines (EC2, Azure VMs)\n• **PaaS**: Managed platforms (Heroku, App Engine)\n• **SaaS**: Ready-to-use software (Gmail, Salesforce)\n• **Serverless**: Functions (Lambda, Cloud Functions)\n• **Storage**: S3, Blob Storage, Cloud Storage\n• **Providers**: AWS, Azure, Google Cloud Platform",

    testing: "Testing ensures code quality and reliability:\n• **Unit Tests**: Test individual functions/components\n• **Integration Tests**: Test component interactions\n• **E2E Tests**: Test full user workflows\n• **TDD**: Write tests before code\n• **Tools**: Jest, Mocha, Cypress, Selenium\n• **Coverage**: Aim for 80%+ but focus on critical paths",

    agile: "Agile is an iterative approach to software development:\n• **Scrum**: Sprints (2-4 weeks), daily standups, retrospectives\n• **Kanban**: Visual board, limit work in progress\n• **User Stories**: 'As a [user], I want [feature] so that [benefit]'\n• **Sprint Planning**: Estimate effort, prioritize backlog\n• **Ceremonies**: Planning, Standup, Review, Retrospective",
};

// Quiz data organized by topic
export const quizBank = {
    python: [
        { question: "What is the output of `print(type([]))` in Python?", options: ["<class 'list'>", "<class 'array'>", "<class 'tuple'>", "<class 'set'>"], correct: 0 },
        { question: "Which keyword is used to define a function in Python?", options: ["function", "func", "def", "define"], correct: 2 },
        { question: "What does `len('Hello')` return?", options: ["4", "5", "6", "Error"], correct: 1 },
        { question: "Which of these is immutable in Python?", options: ["List", "Dictionary", "Tuple", "Set"], correct: 2 },
    ],
    javascript: [
        { question: "What does `typeof null` return in JavaScript?", options: ["'null'", "'undefined'", "'object'", "'boolean'"], correct: 2 },
        { question: "Which method adds an element to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], correct: 0 },
        { question: "What is the result of `'2' + 2` in JavaScript?", options: ["4", "'22'", "NaN", "Error"], correct: 1 },
        { question: "Which keyword declares a block-scoped variable?", options: ["var", "let", "function", "global"], correct: 1 },
    ],
    "data structures": [
        { question: "What is the time complexity of accessing an array element by index?", options: ["O(n)", "O(log n)", "O(1)", "O(n²)"], correct: 2 },
        { question: "Which data structure uses FIFO ordering?", options: ["Stack", "Queue", "Tree", "Graph"], correct: 1 },
        { question: "What is the worst-case time complexity of Binary Search?", options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"], correct: 1 },
        { question: "In a hash table, what is a collision?", options: ["When the table is full", "When two keys hash to the same index", "When data is lost", "When the hash function fails"], correct: 1 },
    ],
    "machine learning": [
        { question: "Which algorithm is used for classification tasks?", options: ["Linear Regression", "K-Means", "Decision Tree", "PCA"], correct: 2 },
        { question: "What does 'overfitting' mean in ML?", options: ["Model is too simple", "Model memorizes training data", "Model is fast", "Model uses too little data"], correct: 1 },
        { question: "Which is an unsupervised learning algorithm?", options: ["SVM", "K-Means Clustering", "Random Forest", "Logistic Regression"], correct: 1 },
        { question: "What is the purpose of a validation set?", options: ["To train the model", "To tune hyperparameters", "To deploy the model", "To clean data"], correct: 1 },
    ],
    "web development": [
        { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Creative Style System", "Cascading Style Sheets", "Colorful Style Sheets"], correct: 2 },
        { question: "Which HTML tag is used for the largest heading?", options: ["<heading>", "<h6>", "<h1>", "<head>"], correct: 2 },
        { question: "What does API stand for?", options: ["Application Programming Interface", "Applied Programming Index", "Advanced Protocol Interface", "Application Process Integration"], correct: 0 },
        { question: "Which HTTP method is used to update a resource?", options: ["GET", "POST", "PUT", "DELETE"], correct: 2 },
    ],
};

// Code review patterns
export const codeReviewRules = [
    { pattern: /var\s+/g, severity: "warning", message: "Use `let` or `const` instead of `var` for better scoping." },
    { pattern: /console\.log/g, severity: "info", message: "Remove `console.log` statements before production." },
    { pattern: /==(?!=)/g, severity: "warning", message: "Use strict equality `===` instead of loose equality `==`." },
    { pattern: /!=(?!=)/g, severity: "warning", message: "Use strict inequality `!==` instead of loose inequality `!=`." },
    { pattern: /function\s+\w+\s*\([^)]{50,}\)/g, severity: "warning", message: "Function has too many parameters. Consider using an options object." },
    { pattern: /\/\/\s*TODO/gi, severity: "info", message: "Found TODO comment — don't forget to address this." },
    { pattern: /catch\s*\(\s*\w+\s*\)\s*\{\s*\}/g, severity: "error", message: "Empty catch block — errors are being silently swallowed." },
    { pattern: /eval\s*\(/g, severity: "error", message: "Avoid `eval()` — it's a security risk and hurts performance." },
    { pattern: /document\.write/g, severity: "error", message: "Avoid `document.write()` — it can overwrite the entire page." },
    { pattern: /innerHTML\s*=/g, severity: "warning", message: "Using `innerHTML` can lead to XSS vulnerabilities. Consider `textContent` or DOM methods." },
    { pattern: /new\s+Array\s*\(/g, severity: "info", message: "Prefer array literal `[]` over `new Array()`." },
    { pattern: /\.then\s*\(\s*function/g, severity: "info", message: "Consider using arrow functions or async/await for cleaner promise handling." },
    { pattern: /password|secret|api_key|apikey/gi, severity: "error", message: "Possible hardcoded secret detected! Use environment variables." },
];

export function reviewCode(code) {
    const issues = [];
    const lines = code.split('\n');

    lines.forEach((line, lineIndex) => {
        codeReviewRules.forEach(rule => {
            if (rule.pattern.test(line)) {
                issues.push({
                    line: lineIndex + 1,
                    severity: rule.severity,
                    message: rule.message,
                    code: line.trim()
                });
                // Reset regex lastIndex
                rule.pattern.lastIndex = 0;
            }
        });
    });

    // General advice if no issues found
    if (issues.length === 0) {
        issues.push({
            line: 0,
            severity: "success",
            message: "Great job! No issues detected. Your code looks clean. Consider adding tests and documentation for best practices.",
            code: ""
        });
    }

    return issues;
}

// Learning style assessment questions
export const assessmentQuestions = [
    {
        question: "When learning a new concept, you prefer to:",
        options: [
            { text: "Watch a video tutorial", style: "visual" },
            { text: "Listen to a podcast or lecture", style: "auditory" },
            { text: "Build something hands-on", style: "kinesthetic" },
            { text: "Read documentation", style: "reading" },
        ]
    },
    {
        question: "When debugging code, you usually:",
        options: [
            { text: "Draw diagrams to trace the flow", style: "visual" },
            { text: "Talk through the problem out loud", style: "auditory" },
            { text: "Add breakpoints and step through code", style: "kinesthetic" },
            { text: "Read the error logs carefully", style: "reading" },
        ]
    },
    {
        question: "Your ideal study environment is:",
        options: [
            { text: "Well-lit with color-coded notes", style: "visual" },
            { text: "Playing background music or white noise", style: "auditory" },
            { text: "A standing desk where you can move", style: "kinesthetic" },
            { text: "A quiet library with lots of books", style: "reading" },
        ]
    },
    {
        question: "When explaining something to others, you:",
        options: [
            { text: "Draw it out on a whiteboard", style: "visual" },
            { text: "Explain it verbally with analogies", style: "auditory" },
            { text: "Show them by demonstrating", style: "kinesthetic" },
            { text: "Write it down step by step", style: "reading" },
        ]
    },
    {
        question: "You retain information best when:",
        options: [
            { text: "Using diagrams and mind maps", style: "visual" },
            { text: "Discussing it with peers", style: "auditory" },
            { text: "Doing practice exercises", style: "kinesthetic" },
            { text: "Taking detailed notes", style: "reading" },
        ]
    },
];

// Get AI tutor response based on query
export function getAIResponse(query) {
    const lowerQuery = query.toLowerCase();

    // Check each topic for keyword matches
    for (const [topic, response] of Object.entries(tutorResponses)) {
        if (lowerQuery.includes(topic)) {
            return response;
        }
    }

    // Check for greetings
    if (/^(hi|hello|hey|greetings|howdy)/i.test(lowerQuery)) {
        return "Hello! 👋 I'm your AI Tutor. I can help you with topics like Python, JavaScript, React, Data Structures, Algorithms, Machine Learning, Databases, and more. What would you like to learn about?";
    }

    // Check for "help" or "what can you do"
    if (lowerQuery.includes("help") || lowerQuery.includes("what can")) {
        return "I can help you with many CS topics! Try asking about:\n• Programming languages (Python, JavaScript)\n• Frameworks (React)\n• Data Structures & Algorithms\n• Machine Learning & Neural Networks\n• Databases & APIs\n• Git, Docker, Cloud, Testing\n• Web Security, CSS, HTML\n• OOP, Agile, and more!";
    }

    // Check for thanks
    if (/thank|thanks|thx/i.test(lowerQuery)) {
        return "You're welcome! 😊 Feel free to ask me anything else. Happy learning!";
    }

    // Default response
    return `That's an interesting question about "${query}"! While I'm a simulated AI tutor, I can help you explore many computer science topics. Try asking about specific subjects like Python, JavaScript, Data Structures, Machine Learning, or any other CS topic!`;
}

// Generate study schedule based on enrolled courses
export function generateSchedule(enrolledCourses) {
    if (!enrolledCourses || enrolledCourses.length === 0) {
        return [
            { time: "09:00 AM", task: "Browse & Enroll in Courses", type: "setup", tip: "Start by enrolling in courses that match your goals" },
            { time: "10:00 AM", task: "Take Learning Style Assessment", type: "assessment", tip: "Understand how you learn best" },
            { time: "02:00 PM", task: "Explore AI Advisor", type: "planning", tip: "Get personalized career recommendations" },
        ];
    }

    const timeSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"];
    const activities = ["Watch lectures", "Practice coding", "Review notes", "Complete exercises", "Take quiz", "Read documentation"];

    return enrolledCourses.slice(0, 4).map((course, index) => ({
        time: timeSlots[index] || timeSlots[timeSlots.length - 1],
        task: course.title.length > 35 ? course.title.substring(0, 35) + "..." : course.title,
        type: "study",
        tip: activities[index % activities.length],
        progress: course.progress
    }));
}
