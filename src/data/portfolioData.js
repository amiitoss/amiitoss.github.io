export const personalInfo = {
  name: 'Amit Malagoudanavar',
  title: 'Full-Stack Software Engineer',
  tagline: 'Building fast, reliable software — from React dashboards to Python microservices.',
  email: 'amit.electron@icloud.com',
  phone: '+91 8073343712',
  github: 'https://github.com/amiitoss',
  linkedin: 'https://www.linkedin.com/in/amit-malagoudanavar',
  location: 'India',
  summary: 'Full-Stack Software Engineer with 2.3+ years of experience across Web development, Python microservices, and cross-platform mobile apps. Proficient in Python, FastAPI, JavaScript, TypeScript, ReactJS, NextJS, and Docker. Experienced in building fault-tolerant sensor data pipelines and modular system architecture. Passionate about performance, reliability, and building software that solves real problems.',
};

export const skills = {
  Languages: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'Java', 'C/C++', 'HTML5', 'CSS3'],
  Frontend: ['ReactJS', 'NextJS', 'React Native', 'Redux', 'Redux Toolkit', 'Material UI'],
  Backend: ['FastAPI', 'REST API Design', 'SQLAlchemy ORM', 'asyncio', 'JWT Authentication'],
  Databases: ['PostgreSQL', 'TimescaleDB'],
  'Tools & Protocols': ['Git', 'GitHub', 'Docker', 'Postman', 'OPC UA', 'MQTT', 'ROS'],
};

export const experiences = [
  {
    company: 'Crevavi Technologies Pvt Ltd',
    period: 'Jul 2025 – Present',
    roles: [
      {
        title: 'Software Engineer — MES & Industrial Automation',
        client: 'Aequs-Cantier',
        period: 'Mar 2026 – Present',
        tags: ['Python', 'Ignition', 'OPC UA', 'MES', 'Industrial Automation'],
        bullets: [
          'Developed Python scripting logic in Ignition Vision for operator workflows, machine interaction, barcode scanning, validation, and production data handling.',
          'Developed operator-facing UI screens and reusable templates in Ignition Designer, applying component-based design principles.',
          'Implemented event-driven scripting for industrial workflows including input validation, dynamic UI behavior, and database interactions.',
          'Conducted machine connectivity requirement analysis and supported OPC UA-based equipment integration within MES environments.',
        ],
      },
      {
        title: 'Software Engineer — Biomarker Visualization',
        client: 'Incision Vue',
        period: 'Dec 2025 – Feb 2026',
        tags: ['Python', 'Data Pipeline', 'Biomarkers', 'Real-time Dashboard', 'Modular Architecture'],
        bullets: [
          'Built a Python real-time visualization tool for post-surgical wound healing monitoring, processing multi-frequency bio-marker sensor data with live-updating interactive dashboards.',
          'Engineered an end-to-end fault-tolerant data pipeline with robust guards for sensor failures, null values, and connection drops.',
          'Designed a modular 3-layer architecture separating hardware ingestion, data persistence, and visualization layers.',
        ],
      },
      {
        title: 'Software Engineer — NodeRED to Python Conversion',
        client: 'Emm-Solutions',
        period: 'Oct 2025 – Nov 2025',
        tags: ['Python', 'Node-RED', 'Docker', 'AGV', 'Microservices'],
        bullets: [
          'Re-architected Node-RED automation workflows into production-grade Python microservices for AGV robot operations, improving reliability and maintainability.',
          'Centralized system configurations into a unified module, reducing environment setup and maintenance overhead by 25%.',
          'Developed a hardware-free mock testing environment with a web interface, enabling full workflow validation without physical AGV hardware.',
          'Containerized the entire application stack using Docker for consistent and reproducible deployments.',
        ],
      },
      {
        title: 'Software Engineer — Internal IoT Diagnostics Tool',
        client: 'Emm-Solutions',
        period: 'Jul 2025 – Sept 2025',
        tags: ['FastAPI', 'ReactJS', 'OPC UA', 'MQTT', 'TimescaleDB', 'asyncio'],
        bullets: [
          'Designed and built a full-stack diagnostic tool for AGVs, integrating OPC UA and MQTT protocol clients for real-time telemetry ingestion at scale.',
          'Engineered an asynchronous FastAPI backend using asyncio and SQLAlchemy ORM, managing a high-throughput in-memory queue processing 5,000+ concurrent IoT messages.',
          'Optimized time-series data storage and retrieval using TimescaleDB (PostgreSQL), achieving significant query latency reduction under heavy load.',
          'Developed a real-time ReactJS dashboard for AGV health monitoring, enabling engineers to identify and resolve issues 40% faster.',
        ],
      },
    ],
  },
  {
    company: 'Crevavi Technologies Pvt Ltd',
    period: 'Jun 2024 – Nov 2024',
    roles: [
      {
        title: 'Software Engineer — Web & Mobile',
        client: 'Inspiredone AI',
        period: 'Jun 2024 – Nov 2024',
        tags: ['NextJS', 'Redux', 'Material UI', 'React Native'],
        bullets: [
          'Architected and built the frontend of a podcast web application from scratch using NextJS, Redux, and Material UI, delivering a responsive media experience.',
          'Built a dynamic media discovery page supporting 4 media types (video, audio, image, text) using reusable React components with infinite scroll.',
          'Implemented auto-scrolling transcript functionality synchronized to media playback, improving content accessibility and user engagement.',
          'Contributed to the React Native mobile app by implementing feature screens, resolving production bugs, and designing first-launch onboarding flows.',
        ],
      },
      {
        title: 'Software Engineer — Web Application',
        client: 'CTRLPanel AI',
        period: 'Sept 2023 – May 2024',
        tags: ['NextJS', 'TypeScript', 'Redux Toolkit', 'Material UI', 'React DnD'],
        bullets: [
          'Built the entire frontend of a productivity web application from scratch using NextJS, TypeScript, Redux Toolkit, and Material UI.',
          'Designed and implemented draggable dashboard widgets embedding Gmail and Slack integrations, replicating core messaging workflows.',
          'Enabled drag-and-drop, resize, and repositioning of Gmail/Slack panels using React DnD libraries for a fully customizable workspace.',
          'Integrated Redux Toolkit for centralized state management, improving data consistency and eliminating redundant API calls.',
        ],
      },
      {
        title: 'Software Development Intern',
        client: 'CTRLPanel AI',
        period: 'Jun 2023 – Aug 2023',
        tags: ['Python', 'Flask', 'Gmail API', 'Slack API', 'MongoDB', 'Flutter'],
        bullets: [
          'Developed Python and Flask REST API integrations with Gmail, Slack, and Outlook APIs to fetch, process, and synchronize user data into MongoDB.',
          'Built a functional prototype of the web application using Flutter, establishing UI patterns and user flows later adopted in the production build.',
        ],
      },
    ],
  },
];

export const projects = [
  {
    name: 'CollabBoard',
    tagline: 'Real-Time Collaborative Whiteboard',
    description: 'A full-stack real-time collaborative whiteboard where multiple users draw and sync simultaneously via WebSocket rooms, with live multi-cursor tracking and user presence indicators.',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'WebSocket', 'Redux', 'SQLite', 'Docker', 'JWT'],
    github: 'https://github.com/amiitoss/collaborative-whiteboard',
    highlights: [
      'Canvas rendering engine from scratch: 7 drawing tools, infinite pan/zoom, undo/redo (100 steps), PNG/SVG export — no library dependency',
      'Real-time multi-user sync via WebSocket rooms with live cursor tracking and presence indicators',
      'JWT + bcrypt auth with board ownership, session persistence, and token-aware WebSocket identity',
      'Production hardening: CORS whitelist, IP rate limiting, WebSocket message guard, structured logging, Docker Compose',
    ],
    color: 'var(--purple-bright)',
    icon: '🎨',
  },
];

export const education = {
  institution: 'S G Balekundri Institute of Technology',
  degree: 'B.E. in Computer Science and Engineering',
  period: '2019 – 2023',
  cgpa: '7.93 / 10',
  coursework: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Operating Systems', 'Computer Networks', 'Discrete Mathematics', 'Data Mining'],
};
