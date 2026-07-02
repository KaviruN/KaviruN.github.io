export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  languages: string[];
  tools: string[];
  githubUrl?: string;
  demoUrl?: string;
  imgSrc?: string;
}

export interface CtfAchievement {
  platform: string;
  title: string;
  stat: string;
  description: string;
  iconType: 'trophy' | 'shield' | 'code' | 'terminal';
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  bullets: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}
