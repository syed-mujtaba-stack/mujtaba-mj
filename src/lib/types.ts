import type { LucideIcon } from 'lucide-react';

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  aiHint: string;
  link?: string;
};

export type Skill = {
  name: string;
  icon: LucideIcon;
};

export type NavLink = {
  href: string;
  label: string;
};

export type Experience = {
    company: string;
    role: string;
    period: string;
    description: string;
    icon: LucideIcon;
};

export type Education = {
    institution: string;
    degree: string;
    period: string;
    icon: LucideIcon;
};
