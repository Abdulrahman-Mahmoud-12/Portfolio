import type {
  NavLink,
  HeroContent,
  AboutContent,
  Education,
  SkillGroup,
  Service,
  Project,
  ExperienceItem,
  Certification,
  Achievement,
  ContactInfo,
} from "./types";

/* Anchor links — all sections on one page */
export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const hero: HeroContent = {
  name: "Abdelrahman",
  nameAccent: "Mahmoud",
  roles: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Computer Vision Engineer",
    "Data Scientist",
    "AI Researcher",
  ],
  slogan: "Intelligence isn't coded,",
  sloganAccent: "It's learned.",
  subtext:
    "AI-focused Computer Science and Engineering student specializing in Machine Learning, Computer Vision, and intelligent system development — transforming data into scalable, real-world AI solutions.",
  stats: [
    { value: 20, suffix: "+", label: "AI Projects" },
    { value: 6, suffix: "+", label: "AI Trainings" },
    { value: 2, suffix: "+", label: "Years in AI" },
    { value: 5, suffix: "+", label: "Researches Implemented" },
  ],
  ctaProjects: "View Projects",
  ctaCV: "View CV",
  ctaContact: "Contact Me",
  cvUrl:
    "https://drive.google.com/file/d/135BC6_U6hqE3eVKleKy57IVNB58ylHxm/view?usp=sharing",
};

export const about: AboutContent = {
  sidePhoto: "/images/profile-about.jpg",
  paragraphs: [
    "Since the early rise of Artificial Intelligence into our daily lives — from intelligent machines in factories and autonomous robots, to transformative applications like ChatGPT — I have always been driven by one central question:",
    "What began as curiosity gradually transformed into a deep passion for research and engineering. As I pursued my studies in Computer Science and Engineering, I realized that Artificial Intelligence is not simply about training models — it is about designing systems that can perceive, reason, learn, and adapt.",
    "This passion pushed me beyond academic requirements. I continuously experiment with building real AI systems, focusing not only on model accuracy but also on system architecture, scalability, and practical deployment considerations.",
    "Today, my goal is clear: to design intelligent AI systems that move beyond experimentation into production-ready, impactful solutions. For me, Artificial Intelligence is not just a specialization. It is a continuous journey of curiosity, research, and innovation.",
  ],
  questions: [
    "How does this actually work?",
    "How can a machine understand different human languages?",
    "How can a robot perceive its environment and make decisions?",
    "How can mathematical equations evolve into intelligence capable of solving real problems?",
  ],
};

export const education: Education = {
  degree: "Bachelor of Electronic Engineering",
  faculty: "Faculty of Electronic Engineering",
  institution: "Menofia University",
  major: "Computer Engineering",
  gpa: "3.58 / 4",
  grade: "Excellent",
  startDate: "Aug 2023",
  period: "Aug 2023 – Present",
  coursework: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Structures & Algorithms",
    "Computer Vision",
    "Operating Systems",
    "Software Engineering",
    "Databases",
    "Digital Signal Processing",
  ],
};

export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: ["Python", "C++", "SQL"],
  },
  {
    category: "Machine Learning & Deep Learning",
    icon: "Brain",
    skills: [
      "Supervised & Unsupervised Learning",
      "Neural Networks",
      "CNN",
      "RNN",
      "YOLO",
      "U-Net",
      "LSTM",
      "Transformers",
      "ViT",
      "Attention Mechanism",
      "Model Evaluation",
      "Model Optimization",
    ],
  },
  {
    category: "Computer Vision",
    icon: "Eye",
    skills: [
      "Image Classification",
      "Object Detection",
      "Object Tracking",
      "Instance Segmentation",
      "Semantic Segmentation",
      "OpenCV",
      "PIL",
    ],
  },
  {
    category: "NLP & LLM Engineering",
    icon: "MessageCircle",
    skills: [
      "Language Models",
      "Prompt Engineering",
      "Tokenization",
      "RAG",
      "Agentic RAG",
      "Sementic Search",
      "Vector Databases",
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "Layers",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "LangChain",
      "LangGraph",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
  },
  {
    category: "MLOps & Deployment",
    icon: "Cloud",
    skills: ["Git", "GitHub", "Docker", "FastAPI", "Stramlit"],
  },
  {
    category: "Tools",
    icon: "Tool",
    skills: [
      "Git",
      "Jupyter",
      "Kaggle",
      "Colab",
      "VS Code",
      "PyCharm",
      "Linux",
    ],
  },
  {
    category: "Soft Skills",
    icon: "Users",
    skills: [
      "Analytical Thinking",
      "Problem Solving",
      "Leadership",
      "Team Collaboration",
      "Fast Learning",
      "Research & Technical Writing",
    ],
  },
];

export const services: Service[] = [
  {
    title: "AI Model Development",
    subtitle:
      "Custom ML & DL models tailored to your prediction and classification needs.",
    description:
      "Build production-ready machine learning and deep learning models for intelligent decision-making and automation.",
    includes: [
      "Classification & regression models",
      "Deep learning pipelines",
      "Model fine-tuning & evaluation",
      "Performance benchmarking",
      "Deployment-ready outputs",
    ],
    icon: "Brain",
    gradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
    accentColor: "accent",
    image: "/images/service-ai-model.jpg",
  },
  {
    title: "Computer Vision Solutions",
    subtitle:
      "Intelligent vision systems that see, analyze, and interpret visual data.",
    description:
      "Develop real-time AI systems for image and video analysis, detection, segmentation, and visual automation.",
    includes: [
      "Object detection & tracking",
      "Image classification & segmentation",
      "Real-time video processing",
      "Medical image analysis",
      "Visual inspection pipelines",
    ],
    icon: "Eye",
    gradient: "from-violet-500/20 via-purple-600/10 to-transparent",
    accentColor: "accent-2",
    image: "/images/service-cv.jpg",
  },
  {
    title: "Data Analysis & Predictive Modeling",
    subtitle:
      "Turn raw data into actionable insights with ML-powered analytics.",
    description:
      "Transform business data into predictive systems and visual dashboards that drive smarter decisions.",
    includes: [
      "Data cleaning & EDA",
      "Predictive & regression modeling",
      "Feature importance analysis",
      "Statistical reporting",
      "Visualization dashboards",
    ],
    icon: "BarChart2",
    gradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
    accentColor: "accent",
    image: "/images/service-data.jpg",
  },
  {
    title: "Custom AI Research Implementation",
    subtitle:
      "Implement cutting-edge research papers into working, tested code.",
    description:
      "Reproduce and adapt ML research from papers and repositories for experimentation and proof-of-concept systems.",
    includes: [
      "Research paper implementation",
      "Architecture adaptation",
      "Benchmark testing & metrics",
      "Training pipeline setup",
      "Proof-of-concept builds",
    ],
    icon: "FlaskConical",
    gradient: "from-orange-500/20 via-rose-600/10 to-transparent",
    accentColor: "accent-2",
    image: "/images/service-research.jpg",
  },
];

export const projects: Project[] = [
  {
    slug: "uav-tracking",
    title: "Single Object Tracking for UAVs",
    description:
      "Optimized a TrackingMamba-based tracker for UAV applications with edge-device deployment.",
    longDescription:
      "This project focuses on optimizing the TrackingMamba architecture — a state-space model-based visual tracker — specifically for UAV applications. The work involved analyzing inference bottlenecks, profiling GPU/CPU performance, and applying targeted optimizations for deployment on edge devices. Key contributions include architecture-level adaptation, quantization experiments, and UAV-specific test set evaluation.",
    tags: ["Deep Learning", "Computer Vision", "Model Optimization"],
    highlights: [
      "TrackingMamba-based architecture",
      "UAV edge-device deployment",
      "Inference speed improvements",
      "State-space model adaptation",
    ],
    link: "https://github.com/Abdulrahman-Mahmoud-12/TrackMamba",
    linkLabel: "GitHub",
    image: "/images/project-uav-tracking-main.jpg",
    screenshots: [],
  },
  {
    slug: "dynamic-pricing",
    title: "Dynamic Pricing System – Servixa",
    description:
      "ML models for real-time dynamic pricing in a home services marketplace.",
    longDescription:
      "Part of the Servixa home services marketplace, this module tackles real-time dynamic pricing — determining optimal service prices based on demand, provider availability, and market signals. Multiple supervised learning approaches were experimented with, including gradient boosting ensembles, MLP regressors, and LSTM-based models. Regression diagnostics, feature importance analysis, and cross-validation were used to compare architectures.",
    tags: ["Python", "Machine Learning", "Deep Learning"],
    highlights: [
      "Dynamic pricing ML pipeline",
      "Multi-architecture experimentation",
      "Regression diagnostics",
      "Market-driven optimization",
    ],
    link: "https://www.kaggle.com/code/abdulrahmanmahm0ud/servixa-dynamic-pricingv2",
    linkLabel: "Kaggle",
    image: "/images/project-dynamic-pricing-main.png",
    screenshots: [],
  },
  {
    slug: "id-verification",
    title: "ID Verification Model – Servixa",
    description:
      "AI-powered identity verification from document images for marketplace trust.",
    longDescription:
      "Part of the Servixa project, this computer vision pipeline automates provider identity verification. The system ingests document images and applies OCR preprocessing and CNN-based classification to detect authenticity signals and extract key identity fields. Designed for real-world deployment with handling for low-quality camera images and lighting variations.",
    tags: ["Python", "Computer Vision", "Deep Learning"],
    highlights: [
      "Document OCR preprocessing",
      "CNN authenticity classification",
      "Mobile image robustness",
      "Provider credential pipeline",
    ],
    link: "https://www.kaggle.com/code/abdulrahmanmahm0ud/servixa-dynamic-pricingv2",
    linkLabel: "Kaggle",
    image: "/images/project-id-verification-main.png",
    screenshots: [
      "/images/project-id-verification1.png",
      "/images/project-id-verification2.png",
      "/images/project-id-verification3.png",
    ],
  },
  {
    slug: "retail-detection",
    title: "Retail Product Detection (SKU110K)",
    description:
      "YOLOv8 models for dense retail shelf product detection and comparison.",
    longDescription:
      "This project addresses retail automation using the SKU110K benchmark dataset. Two YOLOv8 variants were trained and compared: YOLOv8s (small) and YOLOv8n (nano). The study covers data augmentation strategies, anchor configuration, and post-processing threshold tuning, with a detailed accuracy vs. inference-speed trade-off analysis.",
    tags: ["YOLOv8", "Computer Vision", "Python"],
    highlights: [
      "SKU110K dense detection",
      "YOLOv8s vs YOLOv8n comparison",
      "Augmentation tuning",
      "Speed vs accuracy analysis",
    ],
    link: "https://www.kaggle.com/code/abdulrahmanmahm0ud/retail-product-detection",
    linkLabel: "Kaggle",
    image: "/images/project-retail-detection-main.png",
    screenshots: [],
  },
  {
    slug: "retailiq",
    title: "RetailIQ — Retail Intelligence Platform",
    description:
      "End-to-end retail monitoring and management system powered by AI.",
    longDescription:
      "RetailIQ is a retail intelligence platform that merges computer vision-based product detection, automatic reporting, sales and marketing insights, profit estimation with business analytics. The system ingests store camera feeds, applies trained detection models to count and classify products, and feeds results into analytics dashboards tracking stock levels, planogram compliance, and sales correlation.",
    tags: ["Python", "Computer Vision", "Analytics", "Machine Learning", "NLP"],
    highlights: [
      "CV-to-analytics pipeline",
      "Planogram compliance detection",
      "Inventory intelligence",
      "Sales correlation modeling",
      "Profit estimation and reporting",
      "NLP-based insights extraction",
    ],
    link: "https://github.com/Abdulrahman-Mahmoud-12/RetailIQ",
    linkLabel: "GitHub",
    demoLink:
      "https://drive.google.com/file/d/1C8GBlvcI_22QYY3Iz0uoCxWjqqUnKhvk/view?usp=sharing",
    image: "/images/project-retailiq-main.png",
    screenshots: [
      "/images/project-retailiq-1.png",
      "/images/project-retailiq-2.png",
    ],
  },
  {
    slug: "mri-detection",
    title: "Medical AI Detection System for MRI Brain Tumors",
    description:
      "AI system detecting brain tumors from MRI images using YOLOv8 with a clinical Streamlit interface.",
    longDescription:
      "Medica is a medical AI application built to assist in early detection of brain tumors from MRI scans. A fine-tuned YOLOv8 model is trained on annotated MRI datasets to detect and localize tumor regions in real time. A Streamlit-based graphical interface enables image upload, real-time inference, and visual output with bounding boxes and confidence scores.",
    tags: ["Python", "YOLOv8", "OpenCV", "Streamlit"],
    highlights: [
      "YOLOv8 fine-tuned on MRI data",
      "Real-time tumor localization",
      "Streamlit clinical interface",
      "Confidence-scored bounding boxes",
    ],
    link: "https://github.com/Abdulrahman-Mahmoud-12/MRI-Brain-Tumor-Detection",
    linkLabel: "GitHub",
    demoLink:
      "https://www.youtube.com/watch?v=38XwrCeBmfo&embeds_referring_euri=https%3A%2F%2Fkhamsat.com%2F",
    image: "/images/project-mri-main.png",
    screenshots: ["/images/project-mri1.png", "/images/project-mri2.png"],
  },
  {
    slug: "medica",
    title: "Medica — Agentic RAG Clinical Assistant",
    description:
      "Contributed to the data collection, ingestion, and retrieval pipeline for an agentic RAG clinical assistant.",
    longDescription:
      "For Medica, I worked on the data collection and ingestion pipeline, including preparing clinical data, generating embeddings, and storing them in a ChromaDB vector database. The retrieval layer combined semantic vector search with BM25 keyword search, while LangGraph was used to help orchestrate the agentic workflow.",
    tags: ["RAG", "ChromaDB", "BM25", "LangGraph"],
    highlights: [
      "Clinical data collection and ingestion",
      "Embedding generation and vector storage",
      "ChromaDB semantic search and BM25 keyword search",
      "LangGraph workflow orchestration",
    ],
    link: "https://github.com/NotMohamedHany/clinical-rag",
    linkLabel: "GitHub",
    demoLink:
      "#https://drive.google.com/file/d/1rgAhPkb3aTmyvCRwHW1WIOFhUrG9ob0n/view?usp=sharing",
    image: "/images/project-medica-main.png",
    screenshots: [
      "/images/project-medica1.png",
      "/images/project-medica2.png",
      "/images/project-medica3.png",
      "/images/project-medica4.png",
    ],
  },
  {
    slug: "endox",
    title: "ENDO-X — Endoscopy AI Analysis",
    description:
      "Deep learning system for gastrointestinal endoscopy analysis and abnormality detection.",
    longDescription:
      "ENDO-X is a deep learning system for gastrointestinal endoscopy analysis, targeting automatic detection and classification of abnormalities such as polyps, ulcers, and inflammation. The project implements a CNN-based classification backbone with attention mechanisms, evaluated with sensitivity/specificity metrics alongside standard accuracy for medical-grade requirements.",
    tags: ["Deep Learning", "Medical AI", "Computer Vision"],
    highlights: [
      "GI abnormality detection",
      "Attention-guided CNN",
      "Sensitivity/specificity evaluation",
      "Medical-grade accuracy",
    ],
    link: "https://github.com/Abdulrahman-Mahmoud-12/ENDO-X",
    linkLabel: "GitHub",
    demoLink: "#",
    image: "/images/project-endox-main.png",
    screenshots: ["/images/project-endox1.png", "/images/project-endox2.png"],
  },
];

export const experience: ExperienceItem[] = [
  {
    title: "Computer Vision Trainee",
    company: "National Communication Institute (NTI)",
    track: "AI & Data Science Track",
    startDate: "Aug 2026",
    period: "August 2026 – September 2026",
    bullets: [
      "Studied and implemented major CNN architectures for image classification and feature extraction",
      "Applied image segmentation techniques using encoder-decoder architectures and different segmentation loss functions",
      "Explored object detection concepts, architectures, and evaluation metrics for real-world computer vision tasks",
      "Studied face recognition pipelines and the mathematical foundations of deep learning, optimization, and loss functions",
    ],
  },
  {
    title: "Machine Learning Engineering Trainee",
    company: "Digital Egypt Pioneers (DEPI)",
    track: "AI & Data Science Track",
    startDate: "Dec 2025",
    period: "December 2025 – July 2026",
    bullets: [
      "Applied full ML workflows using Python across diverse problem domains",
      "Built and evaluated ML and DL models for Computer Vision and NLP tasks",
      "Performed preprocessing, visualization, and feature engineering on real-world datasets",
      "Gained hands-on exposure to Azure AI Services and cloud-based ML",
      "Explored MLOps fundamentals and model lifecycle practices",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: "MTC AIC4 Competition",
    description:
      "Competed in the MTC AIC4 AI competition, achieving a strong leaderboard position among top AI practitioners and students in Egypt.",
    date: "2026",
    icon: "Trophy",
    type: "competition",
    images: ["/images/mtc-leaderboard.png", "/images/mtc-submission.png"],
  },
  {
    title: "AI Hackathon Participation",
    description:
      "Participated in a competitive AI Hackathon, applying machine learning and computer vision skills to solve real-world challenges under time constraints.",
    date: "2026",
    icon: "Zap",
    type: "competition",
    images: ["/images/ach-hackathon1.jpg", "/images/ach-hackathon2.jpg"],
  },
  {
    title: "Selected — Digital Egypt Pioneers",
    description:
      "Selected by Eyouth as the AI/ML representative to join a cross-track team for the program's Mega Project, collaborating with trainees from multiple technical tracks.",
    date: "2026",
    icon: "Award",
    type: "award",
    images: [],
  },
];

export const certifications: Certification[] = [
  {
    name: "Computer Vision Training",
    issuer: "National Telecommunication Institute (NTI)",
    image: "/images/cert-nti_cv.png",
  },
  {
    name: "Freelancing Training",
    issuer: "Creativa Menofia",
    image: "/images/cert-freelancing.png",
  },
  {
    name: "Building LLM Applications With Prompt Engineering",
    issuer: "NVIDIA DLI",
    image: "/images/cert-prompt.png",
  },
  {
    name: "Building RAG Agents with LLMs",
    issuer: "NVIDIA DLI",
    image: "/images/cert-rag.png",
  },
  {
    name: "S'26 AI team Member",
    issuer: "IEEE Menofia SB",
    image: "/images/cert-ieee_26.png",
  },
  {
    name: "NASA SpaceApps Bootcamp",
    issuer: "NASA SpaceApps Shebin El-Kom",
    image: "/images/cert-nasa.png",
  },
];

export const contact: ContactInfo = {
  email: "abdulrahmanmahmoudrezk@gmail.com",
  phone: "+20 106 041 0473",
  whatsapp: "+20 106 041 0473",
  linkedin: "linkedin.com/in/abdulrahman-mahmoud-ai",
  linkedinHandle: "Abdelrahman Mahmoud",
  github: "github.com/Abdulrahman-Mahmoud-12",
  githubHandle: "Abdulrahman-Mahmoud-12",
  location: "Menoufia, Egypt",
  closingLine: "Let's build intelligent systems that create real impact.",
};
