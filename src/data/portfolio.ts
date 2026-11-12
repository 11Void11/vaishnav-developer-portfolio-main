/**
 * Portfolio content lives here so project, résumé, experience, and contact edits stay centralized.
 * Replace public/assets/profile/vaishnav-k.png or add verified project imagery in public/assets/projects/.
 */
export const portfolio = {
  personal: {
    name: "Vaishnav K",
    email: "vaishnav.ack@gmail.com",
    phone: "8891195880",
    github: "https://github.com/11Void11",
    linkedin: "https://www.linkedin.com/in/vaishnav-ack",
    resumePath: "/assets/resume/Vaishnav_K_Resume.pdf",
    resumeFilename: "Vaishnav_K_Resume.pdf",
  },
  navigation: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ],
  hero: {
    headline: "Building Intelligent Software. Engineering Real-World Impact.",
    introduction:
      "I'm Vaishnav K, a software-focused developer specializing in AI/ML, Data Science, backend systems, and software engineering.",
    supporting:
      "From building low-level C++ systems and AI-powered diagnostic pipelines to developing event-driven applications and intelligent automation workflows, I enjoy engineering software that solves meaningful problems.",
  },
  about: {
    paragraphs: [
      "I'm Vaishnav K, a third-year B.Tech student in Electronics and Communication Engineering, specializing in Data Science at SRM Institute of Science and Technology, Ramapuram.",
      "My primary interests lie in software engineering, backend development, artificial intelligence, machine learning, data science, and systems programming. I enjoy building complete software solutions, working with algorithms and data structures, developing backend services, and bringing intelligent automation into practical applications.",
      "My projects explore in-memory storage systems, explainable AI, event-driven architectures, machine-learning pipelines, and distributed communication. I believe in learning by building and creating technology with meaningful real-world impact.",
    ],
    academic: {
      course: "B.Tech · ECE (Data Science)",
      years: "2024–2028",
      cgpa: "9.55",
    },
  },
  experience: [
    {
      role: "Data Science Intern",
      company: "Unified Mentor",
      location: "Remote",
      status: "ONGOING",
      project: "Machine Learning-Based Buyer Segmentation & Investment Profiling",
      contributions: [
        "Segmented 2,000 real-estate customers into four buyer personas.",
        "Applied K-Means and Hierarchical Clustering to $2.5B+ transaction data.",
        "Developed data-driven insights for investor targeting and market intelligence.",
      ],
      technologies: ["Python", "Machine Learning", "K-Means", "Hierarchical Clustering", "Data Analytics"],
    },
    {
      role: "Software Developer Intern",
      company: "Beau Roi Technologies Private Limited",
      location: "Remote",
      status: "INTERNSHIP",
      project: "Backend development for a European client project",
      contributions: [
        "Contributed to a team improvement of 25% in API stability across eight REST APIs.",
        "Worked on backend API development, schema validation, Node.js, and MySQL.",
        "Contributed to a $2M European client project.",
      ],
      technologies: ["Node.js", "MySQL", "REST APIs", "Schema Validation", "Backend Development"],
    },
  ],
  projects: [
    {
      title: "C++ Redis-Style In-Memory Key-Value Store",
      category: "Systems Programming",
      badge: "Featured Systems Project",
      featured: true,
      description:
        "Engineered a Redis-inspired in-memory key-value storage system in C, focused on efficient data organization, memory-based storage, persistence, and TCP communication.",
      problem:
        "Explore how a compact in-memory storage engine can organize key-value data, manage key lifetimes, persist state, and communicate over a network.",
      architecture:
        "Implemented a custom hash table for key-value storage, Time-To-Live (TTL) expiration, disk-based persistence, and TCP networking using select(). The work explores data structures, efficient access, and systems programming fundamentals.",
      highlights: ["Custom hash table", "TTL-based key expiration", "Disk-based persistence", "TCP networking with select()"],
      technologies: ["C", "Hash Tables", "Data Structures", "TTL", "TCP Networking", "Systems Programming"],
      diagramLabel: "In-Memory Store · Persistence · TCP",
      repository: null,
    },
    {
      title: "Industrial Fault Diagnosis via Explainable RAG",
      category: "AI & Machine Learning",
      badge: "Explainable AI Pipeline",
      featured: true,
      description:
        "An intelligent industrial fault diagnosis pipeline that combines machine learning, deep learning, and Retrieval-Augmented Generation to turn sensor anomalies into actionable maintenance information.",
      problem:
        "Industrial sensor anomalies can be difficult to interpret quickly; the project explored connecting detected signals with useful context for maintenance diagnosis.",
      architecture:
        "Built an Autoencoder–LSTM anomaly-detection pipeline around more than 10,000 sensor records, then integrated retrieval-augmented generation for contextual retrieval and explainable diagnosis.",
      highlights: ["10,000+ sensor records", "Autoencoder–LSTM anomaly detection", "RAG-based contextual diagnosis", "35% reduction in false-anomaly impact and 40% less diagnosis time, as reported"],
      technologies: ["Python", "Machine Learning", "Deep Learning", "Autoencoder–LSTM", "RAG", "NLP"],
      diagramLabel: "Sensor Data · Anomaly Model · Retrieval · Diagnosis",
      repository: null,
    },
    {
      title: "Drive.Net — Intelligent V2V/V2I Safety Network",
      category: "Event-Driven Systems",
      badge: "Featured Safety Prototype",
      featured: true,
      description:
        "A vehicle-safety proof of concept combining event processing, wireless communication, workflow automation, and alert generation to demonstrate road-hazard and vehicle-incident communication.",
      problem:
        "Explore how vehicle and infrastructure safety events could be validated, routed, and communicated through a distributed prototype architecture.",
      architecture:
        "The n8n workflow validates and normalizes demonstration events, routes road-hazard (V2I) and simulated vehicle-incident (V2V) events through separate branches, generates human-readable messages, and delivers Telegram demo notifications. The architecture separates a local communication path from the monitoring and automation layer, and explores ESP-NOW and local Wi-Fi exchange.",
      highlights: ["Separate V2I and V2V event branches", "Event validation, normalization, and conditional routing", "Two sample Telegram notifications successfully delivered", "Distributed safety communication and automation architecture"],
      technologies: ["C/C++", "n8n", "Telegram Bot API", "ESP-NOW", "Wi-Fi", "Event-Driven Design"],
      currentStatus:
        "Engineering prototype and proof of concept. The current workflow begins with a Manual Trigger and demonstration data; it does not receive live rover telemetry. Live hazard prediction and public emergency alerts are not validated. Excel event logging is not confirmed operational.",
      diagramLabel: "Local Safety Path · Event Router · Telegram Demo",
      repository: null,
    },
    {
      title: "AI-Powered Smart Grid Monitoring & Self-Healing System",
      category: "Intelligent Automation",
      badge: "Group Project",
      featured: false,
      description:
        "An AI-assisted monitoring and fault-response solution combining predictive machine-learning concepts, workflow automation, and remote monitoring for rural microgrids.",
      problem:
        "Explore software-assisted monitoring and response workflows for rural microgrid conditions.",
      architecture:
        "Combined a monitoring architecture, predictive machine-learning concepts, automated alert workflows, and remote monitoring and response mechanisms using cloud-connected and workflow tools.",
      highlights: ["Real-time monitoring architecture", "Predictive machine-learning concepts", "Automated alerts and remote response mechanisms"],
      technologies: ["Python", "Machine Learning", "Blynk Cloud", "n8n", "Twilio", "ESP32"],
      diagramLabel: "Monitoring · Predictive Signals · Alert Workflow",
      repository: null,
    },
    {
      title: "AI-Based Electronic Device Classifier",
      category: "Deep Learning",
      badge: "Group Project",
      featured: false,
      description:
        "A TensorFlow deep-learning classifier that distinguishes BJT and FET devices from their I–V characteristics using an automated simulated-data pipeline.",
      problem:
        "Explore classification of BJT and FET devices from I–V curves by creating a consistent dataset and training a deep-learning model.",
      architecture:
        "Processed more than 5,000 simulated LTspice models and built a TensorFlow classification pipeline. The reported result was 100% accuracy on the validation dataset.",
      highlights: ["5,000+ simulated LTspice models", "Automated data processing", "TensorFlow classification pipeline", "100% accuracy on the reported validation dataset"],
      technologies: ["Python", "TensorFlow", "Deep Learning", "LTspice", "Data Processing"],
      diagramLabel: "Simulated I–V Data · Processing · Classifier",
      repository: null,
    },
    {
      title: "VASNOVA — Smart EV Solar Charging & Energy Monitoring",
      category: "Undergraduate Research",
      badge: "Ongoing Research",
      featured: false,
      description:
        "An ongoing undergraduate research project developing an energy-monitoring and EV solar-charging platform through connected systems, workflow automation, and predictive analytics.",
      problem:
        "Investigate an integrated software approach to energy monitoring, solar charging, and intelligent control concepts.",
      architecture:
        "The developing platform connects monitoring, predictive fault-detection concepts, automated alert workflows, and intelligent charging-control ideas using software, network, and cloud tools.",
      highlights: ["Connected energy-monitoring architecture", "Predictive fault-detection concepts", "Automated alert workflows", "Intelligent charging-control concepts"],
      technologies: ["Python", "Wi-Fi", "Bluetooth", "Blynk Cloud", "n8n", "AI / ML"],
      currentStatus: "Ongoing undergraduate research project.",
      diagramLabel: "Energy Data · Monitoring · Automation",
      repository: null,
    },
  ],
  skills: [
    { title: "Programming languages", items: ["C", "C++", "Python", "SQL", "JavaScript", "TypeScript"] },
    { title: "Software engineering", items: ["Data Structures", "Algorithms", "Systems Programming", "Backend Development", "REST APIs", "TCP Networking", "Object-Oriented Programming"] },
    { title: "AI · ML · data science", items: ["Machine Learning", "Deep Learning", "Scikit-learn", "TensorFlow", "RAG", "Data Analytics", "Data Processing"] },
    { title: "Developer tools", items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "MATLAB"] },
    { title: "Databases · automation", items: ["MySQL", "MongoDB", "n8n", "Blynk", "Twilio"] },
  ],
  technologies: [
    { name: "C", simpleIcon: "siC", category: "Programming" },
    { name: "C++", simpleIcon: "siCplusplus", category: "Programming" },
    { name: "Python", simpleIcon: "siPython", category: "Programming" },

    { name: "JavaScript", simpleIcon: "siJavascript", category: "Programming" },
    { name: "TypeScript", simpleIcon: "siTypescript", category: "Programming" },
    { name: "React", simpleIcon: "siReact", category: "Software" },
    { name: "Node.js", simpleIcon: "siNodedotjs", category: "Software" },
    { name: "Git", simpleIcon: "siGit", category: "Software" },
    { name: "GitHub", simpleIcon: "siGithub", category: "Software" },

    { name: "TensorFlow", simpleIcon: "siTensorflow", category: "AI & Data" },
    { name: "Scikit-learn", simpleIcon: "siScikitlearn", category: "AI & Data" },



    { name: "MongoDB", simpleIcon: "siMongodb", category: "Databases" },
    { name: "MySQL", simpleIcon: "siMysql", category: "Databases" },
    { name: "n8n", simpleIcon: "siN8n", category: "Automation" },

  ],
  certifications: [
    { name: "Data Analytics with Python", issuer: "NPTEL · IIT Roorkee", date: null },
    { name: "MongoDB Basics for Students", issuer: "MongoDB", date: "JUNE 2025" },
    { name: "RAG with MongoDB", issuer: "MongoDB", date: "JULY 2026" },
    { name: "Oracle Database for Developers: Foundation’s Course", issuer: "Oracle", date: null },
    { name: "Automated Machine Learning for Beginners", issuer: "Google & Apple · Udemy", date: null },
  ],
} as const;