import { Code, Database, Bot, GitBranch, PenTool, BrainCircuit, Component, Palette, Languages, GraduationCap, Briefcase, Award } from 'lucide-react';
import type { Project, Skill, NavLink, Experience, Education, Certification } from './types';

export const navLinks: NavLink[] = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
];

export const skills: Skill[] = [
  { name: 'JavaScript', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Python', icon: Code },
  { name: 'HTML', icon: Code },
  { name: 'CSS', icon: Code },
  { name: 'React.js', icon: Component },
  { name: 'Next.js', icon: Component },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'Express.js', icon: Code },
  { name: 'OpenRouter API', icon: Bot },
  { name: 'Gemini API', icon: Bot },
  { name: 'Langchain', icon: BrainCircuit },
  { name: 'MongoDB', icon: Database },
  { name: 'Sanity.io', icon: Database },
  { name: 'MySQL', icon: Database },
  { name: 'Git', icon: GitBranch },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Code Mento AI',
    description: 'AI-based programming mentor providing code help, debugging tips, and developer guidance.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'React', 'OpenRouter API'],
    category: 'Web Development',
    link: 'https://code-mentor-ai.vercel.app',
    aiHint: 'AI programming mentor'
  },
  {
    id: 2,
    title: 'FastCV',
    description: 'A sleek resume builder that helps users instantly generate and download resumes. Responsive design and fast performance.',
    image: 'https://placehold.co/600x400.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    link: 'https://fastcv-beta.vercel.app',
    aiHint: 'resume builder app'
  },
  {
    id: 3,
    title: 'GemCode',
    description: 'An AI coding assistant that supports real-time code suggestions and learning using Gemini AI integration.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'Gemini API'],
    category: 'AI Tools',
    link: 'https://gemcode.vercel.app',
    aiHint: 'AI code assistant'
  },
  {
    id: 4,
    title: 'Chat Buddy',
    description: 'Modern conversational chatbot with multi-theme UI and developer-focused AI-powered Q&A using Gemini API.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'Gemini API'],
    category: 'AI Tools',
    link: 'https://chat-buddy-pearl.vercel.app',
    aiHint: 'chatbot application'
  },
];

export const projectCategories = [...new Set(projects.map(p => p.category))];

export const experiences: Experience[] = [
    {
        company: 'Freelance Developer',
        role: 'Full-Stack Developer',
        period: '2023 – Present',
        description: 'Developed custom client websites using Next.js and React. Integrated AI APIs and authentication systems. Delivered fast, responsive UIs with clean UX.',
        icon: Briefcase,
    }
];

export const education: Education[] = [
    {
        institution: 'Board of Intermediate Education, Karachi',
        degree: 'Intermediate in Commerce',
        period: 'Expected Graduation: 2025',
        icon: GraduationCap,
    }
];

export const certifications: Certification[] = [
    { name: 'Full Stack Web Development', issuer: 'GIAIC', icon: Award },
    { name: 'JavaScript & React Mastery', issuer: 'GIAIC', icon: Award },
    { name: 'OpenRouter API Integration', issuer: 'Self Projects', icon: Award },
];

export const languages: Skill[] = [
    { name: 'English (Professional)', icon: Languages },
    { name: 'Urdu (Native)', icon: Languages },
];
