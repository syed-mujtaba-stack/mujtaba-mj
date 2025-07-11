import { Codepen, Database, LayoutTemplate, PenTool, Smartphone, TerminalSquare } from 'lucide-react';
import type { Project, Skill, NavLink } from './types';

export const navLinks: NavLink[] = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

export const skills: Skill[] = [
  { name: 'React', icon: TerminalSquare },
  { name: 'Next.js', icon: TerminalSquare },
  { name: 'TypeScript', icon: TerminalSquare },
  { name: 'Node.js', icon: Database },
  { name: 'Tailwind CSS', icon: LayoutTemplate },
  { name: 'Figma', icon: PenTool },
  { name: 'Mobile Dev', icon: Smartphone },
  { name: 'UI/UX', icon: Codepen },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce website with a modern UI, product filtering, and a secure checkout process.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    category: 'Web Development',
    aiHint: 'e-commerce website'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application to help teams stay organized and productive.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'Firebase', 'Material-UI'],
    category: 'Web Development',
    aiHint: 'task app'
  },
  {
    id: 3,
    title: 'Travel App UI/UX',
    description: 'A complete UI/UX design for a mobile travel booking application, focusing on user experience.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Figma', 'User Research'],
    category: 'UI/UX Design',
    aiHint: 'travel app'
  },
  {
    id: 4,
    title: 'Recipe Finder Mobile App',
    description: 'A cross-platform mobile app to discover and save new recipes, built with React Native.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React Native', 'Expo', 'API Integration'],
    category: 'Mobile App',
    aiHint: 'recipe app'
  },
  {
    id: 5,
    title: 'Personal Blog',
    description: 'A static-generated blog built with Next.js and MDX for high performance and a great writing experience.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'MDX', 'Tailwind CSS'],
    category: 'Web Development',
    aiHint: 'blog website'
  },
  {
    id: 6,
    title: 'Fitness Tracker Dashboard',
    description: 'UI/UX design for a fitness tracker dashboard that visualizes user activity and progress.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Figma', 'Data Visualization'],
    category: 'UI/UX Design',
    aiHint: 'fitness dashboard'
  },
];

export const projectCategories = [...new Set(projects.map(p => p.category))];
