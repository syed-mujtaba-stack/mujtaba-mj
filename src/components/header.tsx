import { navLinks } from '@/lib/data';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
                <span className="font-headline text-xl font-bold text-primary">SYED MUJTABA ABBAS ZAIDI</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
                {navLinks.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-primary"
                    >
                    {link.label}
                    </Link>
                ))}
            </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* You can add a search bar here if you want */}
          </div>
          <nav className="hidden md:flex items-center">
            <ThemeToggle />
          </nav>
        </div>
         <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                         <span className="font-headline text-lg font-bold text-primary">SYED MUJTABA ABBAS ZAIDI</span>
                    </Link>
                    <nav className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="transition-colors hover:text-primary flex items-center gap-2"
                            >
                                <link.icon className="w-4 h-4" />
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                     <div className="mt-6">
                        <ThemeToggle />
                    </div>
                </SheetContent>
            </Sheet>
         </div>
      </div>
    </header>
  );
}
