import { Code, Database, Bot, GitBranch, PenTool, BrainCircuit, Component, Palette, Languages, GraduationCap, Briefcase, Award, Home, User, FolderGit2, BookUser, AwardIcon, MessageSquare, FileText } from 'lucide-react';
import type { NavLink, Project, Skill, Experience, Education, Certification } from './types';

export const navLinks: NavLink[] = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: User },
    { href: '/projects', label: 'Projects', icon: FolderGit2 },
    { href: '/experience', label: 'Experience', icon: Briefcase },
    { href: '/education', label: 'Education', icon: GraduationCap },
    { href: '/certifications', label: 'Certifications', icon: AwardIcon },
    { href: '/resume', label: 'Resume', icon: FileText },
    { href: '/contact', label: 'Contact', icon: MessageSquare },
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
    link: 'https://update-code-mentor-ai-2i5m.vercel.app/',
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

export const projectCategories = ['All', 'Web Development', 'AI Tools'];

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
