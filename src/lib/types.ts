import type { LucideIcon } from 'lucide-react';

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  aiHint: string;
};

export type Skill = {
  name: string;
  icon: LucideIcon;
};

export type NavLink = {
  href: string;
  label: string;
};
