export const personalInfo = {
  name: 'Mubasir Anwar',
  title: 'Full-Stack AI Engineer',
  tagline: 'I build AI-powered applications, intelligent automation workflows, and full-stack software that solves practical problems.',
  description: 'Computer Systems Engineering student at UET Peshawar, working across AI applications, web engineering, and applied research.',
  profileImage: '/images/profile.jpg',
  cvLink: '/Mubasir_Anwar_CV.pdf',
  email: 'mubasiranwar70@gmail.com',
};

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/mubasiranwar', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mubasir-anwar-013628316/', icon: 'Linkedin' },
  { name: 'Kaggle', url: 'https://www.kaggle.com/mubasiranwar', icon: 'BarChart3' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@learnwithmubasir1', icon: 'Video' },
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61594152785293', icon: 'Facebook' },
];

export const projects = [
  {
    id: 'flood-ews',
    title: 'AI + IoT Flood Early-Warning System',
    subtitle: 'Final-Year Research Project',
    status: 'Ongoing Research',
    featured: true,
    problem: 'Communities in the Nowshera/Kabul River region of Pakistan face recurring flood risks. Existing warning systems often lack localized, data-driven forecasting capabilities that could support earlier flood-risk awareness.',
    approach: 'Exploring how machine learning, hydrological data, and IoT-based monitoring can support localized flood-risk forecasting and early-warning decisions.',
    implementation: 'The project combines hydrological discharge data analysis, machine-learning forecasting experiments, potential IoT sensor telemetry, dashboard-based monitoring, and SMS alert mechanisms as planned system components.',
    tech: ['Python', 'Machine Learning', 'IoT', 'Data Analysis', 'Pandas', 'NumPy', 'Matplotlib'],
    github: null,
    demo: null,
    category: 'research',
    limitations: 'This is ongoing research. Some components are under development or evaluation. The system is not yet deployed or proven to prevent loss of life.',
    futureWork: 'Sensor deployment, real-time data pipeline, model validation with historical flood events, community testing.',
  },
  {
    id: 'loanflow',
    title: 'LoanFlow',
    subtitle: 'Loan Application Management System',
    status: 'Repository Available',
    featured: false,
    problem: 'Managing and tracking loan application records requires a reliable system with proper authentication, role-based access control, and clean data persistence.',
    approach: 'Built a full-stack application with separate frontend and backend applications, implementing proper API design, database persistence, protected routes, and user/admin permissions.',
    implementation: 'Next.js and React frontend with TanStack Query for server-state management. Express.js REST API with Joi validation, Sequelize ORM mapping to PostgreSQL. JWT-based authentication with role-based access control. Loan CRUD operations with administrative status management.',
    tech: ['Next.js', 'React', 'Express.js', 'PostgreSQL', 'Sequelize', 'JWT', 'TanStack Query', 'Tailwind CSS'],
    github: 'https://github.com/mubasiranwar/LoanApp',
    demo: null,
    category: 'fullstack',
    limitations: null,
    futureWork: null,
  },
  {
    id: 'plumber-automation',
    title: 'Business Automation Suite',
    subtitle: 'Client Project — Plumber Services, Canada',
    status: 'Client Project',
    featured: false,
    problem: 'A plumbing business in Canada needed to automate customer communication, reduce missed calls, and streamline lead capture through AI-assisted workflows.',
    approach: 'Designing and implementing intelligent automation workflows for missed-call handling, WhatsApp-based customer communication, website chatbot integration, and automated lead capture.',
    implementation: 'Workflow automation using n8n and AI-assisted conversation flows. WhatsApp-based customer communication channels. Website chatbot for initial customer engagement.',
    tech: ['n8n', 'WhatsApp API', 'AI Chatbot', 'Workflow Automation', 'Make.com'],
    github: null,
    demo: null,
    category: 'automation',
    components: [
      { name: 'Missed-call follow-up', status: 'In Development' },
      { name: 'WhatsApp communication', status: 'In Development' },
      { name: 'Website chatbot', status: 'In Development' },
      { name: 'Automated lead capture', status: 'Planned' },
    ],
    limitations: 'Client details are kept confidential. Component statuses are configurable.',
    futureWork: null,
  },
  {
    id: 'sentinelai',
    title: 'SentinelAI',
    subtitle: 'AI-Based Disinformation Intelligence System',
    status: 'Repository Available',
    featured: false,
    problem: 'Detecting coordinated misinformation narratives requires analyzing patterns across content without targeting individuals, while providing explainable indicators for human interpretation.',
    approach: 'Built an AI-based system that analyzes sentiment, emotion, narrative repetition, and behavioral signals to surface risk indicators for human review through a dashboard.',
    implementation: 'Python backend with FastAPI serving analysis endpoints. Streamlit-based human-in-the-loop dashboard. Sentiment and emotion analysis pipeline. Narrative repetition detection. Explainable disinformation risk scoring. Privacy-first and ethical AI design principles.',
    tech: ['Python', 'FastAPI', 'Streamlit', 'NLP', 'Sentiment Analysis', 'Machine Learning'],
    github: 'https://github.com/mubasiranwar/SentinelAI',
    demo: null,
    category: 'ai',
    limitations: 'Some behavioral-signal capabilities are planned as future work. The system provides indicators for human interpretation and does not definitively determine information truthfulness.',
    futureWork: null,
  },
  {
    id: 'careergpt',
    title: 'CareerGPT',
    subtitle: 'AI Career Guidance Chatbot',
    status: 'Repository Available',
    featured: false,
    problem: 'Students and professionals often lack personalized, accessible career guidance tailored to their skills and aspirations.',
    approach: 'Built an AI-powered career assistant using Streamlit and LangChain that provides personalized career advice, resume help, and learning path recommendations.',
    implementation: 'Streamlit-based conversational interface. LangChain-powered AI reasoning and response generation. Career guidance, resume and interview assistance, skill development paths, and career planning features.',
    tech: ['Python', 'Streamlit', 'LangChain', 'OpenAI API', 'Generative AI'],
    github: 'https://github.com/mubasiranwar/CAREERGPT',
    demo: null,
    category: 'ai',
    limitations: null,
    futureWork: null,
  },
  {
    id: 'web-summarizer',
    title: 'Web Page Summarization Chatbot',
    subtitle: 'RAG-Powered Content Analysis Tool',
    status: 'Repository Available',
    featured: false,
    problem: 'Extracting structured insights from web content requires crawling, summarization, keyword analysis, and the ability to interactively query the extracted information.',
    approach: 'Built a Streamlit application that crawls websites, generates summaries with adjustable depth and tone, performs keyword analysis with visualizations, and enables RAG-based chat with crawled content.',
    implementation: 'Advanced web crawling with configurable depth and page limits. Smart summarization with Brief, Detailed, and Comprehensive modes. Keyword extraction, word cloud generation, and frequency chart visualization. FAISS-based vector search for retrieval-augmented question answering. PDF report export.',
    tech: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'BeautifulSoup', 'OpenAI API', 'Pandas', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/mubasiranwar/WEB-PAGE-SUMMARIZE-CHATBOT',
    demo: null,
    category: 'ai',
    limitations: null,
    futureWork: null,
  },
];

export const experience = [
  {
    title: 'Research Associate',
    organization: 'SID Lab — Secured IoT Devices Lab',
    location: 'UET Peshawar',
    type: 'Research',
    description: 'Involved in research activities focused on IoT security and intelligent systems. Contributing to the AI + IoT flood early-warning research as part of final-year project work.',
    date: '', // No confirmed date
  },
  {
    title: 'Web Development Participant',
    organization: 'Algorithm Software',
    location: 'Remote',
    type: 'Development',
    description: 'Participating in web-development learning and work experience. Development progression through HTML, CSS, JavaScript, React, Next.js, and backend development.',
    date: 'June 2026 — Present',
  },
  {
    title: 'Lead AI',
    organization: 'Computer Cell Society',
    location: 'UET Peshawar',
    type: 'Leadership',
    description: 'Leading AI-related initiatives and technical collaboration within the Computer Cell Society. Supporting AI-focused learning and community engagement.',
    date: '',
  },
  {
    title: 'AI Projects',
    organization: 'NCBC',
    location: '',
    type: 'Experience',
    description: 'Previous experience with AI-related projects and development work.',
    date: '',
  },
];

export const education = {
  degree: 'BS Computer Systems Engineering',
  university: 'University of Engineering and Technology (UET), Peshawar',
  status: 'Final-year / 7th-semester student',
  cgpa: '3.8/4.0',
  matriculation: '1070/1100',
  etea: '88/100',
  distinction: 'Class Topper',
};

export const skills = [
  {
    category: 'AI & Machine Learning',
    items: ['Machine Learning', 'Supervised Learning', 'Deep Learning Fundamentals', 'Data Preprocessing', 'NumPy', 'Pandas', 'Matplotlib', 'Generative AI', 'LLM Integrations', 'RAG Concepts', 'AI Agents'],
  },
  {
    category: 'LLM Applications & Automation',
    items: ['LangChain', 'LangGraph', 'n8n', 'Make.com', 'OpenAI APIs', 'Workflow Automation', 'API Integrations'],
  },
  {
    category: 'Frontend Engineering',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'TanStack Query'],
  },
  {
    category: 'Backend & Databases',
    items: ['Node.js', 'Express.js', 'REST API Design', 'PostgreSQL', 'SQL', 'Sequelize', 'JWT', 'RBAC', 'Postman'],
  },
  {
    category: 'Tools & Development',
    items: ['Git', 'GitHub', 'Docker Fundamentals', 'VS Code', 'Python', 'C/C++'],
  },
];

export const certificates = [
  {
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'Coursera / DeepLearning.AI & Stanford University',
    date: 'January 15, 2025',
    file: '/certificates/SUPERVISED LESRNING CERTIFICATE.jpg',
    type: 'image',
  },
  {
    title: 'Advanced Learning Algorithms',
    issuer: 'Coursera / DeepLearning.AI & Stanford University',
    date: 'May 3, 2025',
    file: '/certificates/Advanced Algoritum CertifcateCoursera.pdf',
    type: 'pdf',
  },
  {
    title: 'Machine Learning',
    issuer: 'Coursera / DeepLearning.AI & Stanford University',
    date: '',
    file: '/certificates/Machine learning.pdf',
    type: 'pdf',
  },
  {
    title: 'AI for Beginners',
    issuer: 'HP LIFE',
    date: 'December 12, 2024',
    file: '/certificates/BASIC AI CERTIFICATE.pdf',
    type: 'pdf',
  },
  {
    title: 'Programming with C++',
    issuer: 'Coursera / Simplilearn',
    date: 'February 5, 2025',
    file: '/certificates/Coursera c++ certificate.pdf',
    type: 'pdf',
  },
  {
    title: 'Wireshark 101: Packet Analysis Essentials',
    issuer: 'Coursera / Pearson',
    date: 'June 5, 2026',
    file: '/certificates/Coursera wireshark101.pdf',
    type: 'pdf',
  },
  {
    title: 'Claude AI Agent Development',
    issuer: 'Anthropic',
    date: '',
    file: '/certificates/certificate-claude agent.pdf',
    type: 'pdf',
  },
  {
    title: 'Python Programming',
    issuer: '',
    date: '',
    file: '/certificates/PYTHON CERTIFCATE.png',
    type: 'image',
  },
  {
    title: 'Signal Processing Onramp',
    issuer: 'MathWorks',
    date: 'December 4, 2025',
    file: '/certificates/certificate.pdf',
    type: 'pdf',
  },
];

export const achievements = [
  { title: 'Class Topper', description: 'BS Computer Systems Engineering, UET Peshawar' },
  { title: 'Ideathon Winner', description: '' },
  { title: 'Qwenathon Winner', description: '' },
  { title: 'Runner-up — National AI Excellence', description: '' },
  { title: 'Prime Minister Laptop Program Winner', description: '' },
  { title: 'CGPA: 3.8/4.0', description: 'UET Peshawar' },
  { title: 'Matriculation: 1070/1100', description: '' },
  { title: 'ETEA: 88/100', description: '' },
];

export const services = [
  {
    title: 'AI-Powered Web Applications',
    description: 'Full-stack applications with integrated AI capabilities, from LLM-powered features to intelligent data processing.',
    icon: 'Brain',
  },
  {
    title: 'LLM Chatbots & Assistants',
    description: 'Conversational AI systems using retrieval-augmented generation, LangChain, and custom knowledge bases.',
    icon: 'MessageSquare',
  },
  {
    title: 'Business Workflow Automation',
    description: 'Intelligent automation workflows using n8n, Make.com, and API integrations to streamline business operations.',
    icon: 'Workflow',
  },
  {
    title: 'WhatsApp & Website Integrations',
    description: 'Customer-support chatbots and communication automation for WhatsApp and website channels.',
    icon: 'Smartphone',
  },
  {
    title: 'API Integration & Backend',
    description: 'REST API design, database architecture, authentication systems, and third-party service integrations.',
    icon: 'Server',
  },
  {
    title: 'AI Proof-of-Concept Development',
    description: 'Rapid prototyping and validation of AI-powered product ideas, from concept to working demonstration.',
    icon: 'Lightbulb',
  },
];

export const workProcess = [
  { step: 1, title: 'Understand', description: 'Define the problem, identify requirements, and understand the context and constraints.' },
  { step: 2, title: 'Design', description: 'Plan the solution architecture, define workflows, and establish the technical approach.' },
  { step: 3, title: 'Build', description: 'Implement the solution with clean code, proper testing, and iterative development.' },
  { step: 4, title: 'Test & Refine', description: 'Validate functionality, gather feedback, and refine the implementation.' },
  { step: 5, title: 'Document & Deliver', description: 'Ensure proper documentation, deployment guidance, and knowledge transfer.' },
];
