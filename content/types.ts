export interface NavLink { label: string; href: string; }
export interface StatItem { value: number; suffix: string; label: string; }

export interface HeroContent {
  name: string; nameAccent: string;
  roles: string[];
  slogan: string; sloganAccent: string;
  subtext: string;
  stats: StatItem[];
  ctaProjects: string; ctaCV: string; ctaContact: string;
  cvUrl: string;
}

export interface AboutContent { paragraphs: string[]; questions: string[]; sidePhoto: string; }

export interface Education {
  degree: string; faculty: string; institution: string;
  major: string; gpa: string; grade: string;
  period: string; coursework: string[];
}

export interface SkillGroup { category: string; icon: string; skills: string[]; }

export interface Service {
  title: string; subtitle: string; description: string;
  includes: string[]; icon: string;
  gradient: string; accentColor: string; image: string;
}

export interface Project {
  slug: string; title: string;
  description: string; longDescription: string;
  tags: string[]; highlights: string[];
  link: string; linkLabel: string;
  demoLink?: string;
  image: string; screenshots?: string[];
}

export interface ExperienceItem {
  title: string; company: string; track: string;
  startDate: string; period: string;
  bullets: string[];
}

export interface Certification {
  name: string; issuer: string; image?: string;
}

export interface Achievement {
  title: string; description: string;
  date: string; icon: string;
  type: 'award' | 'milestone' | 'certification' | 'competition';
  images?: string[];
}

export interface ContactInfo {
  email: string; phone: string; whatsapp: string;
  linkedin: string; linkedinHandle: string;
  github: string; githubHandle: string;
  location: string; closingLine: string;
}
