'use client';

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Menu, User } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/categories/technology', label: 'Technology' },
  { href: '/categories/productivity', label: 'Productivity' },
  { href: '/categories/lifestyle', label: 'Lifestyle' },
];

export function SiteHeader() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-headline text-2xl font-bold">Blogwise</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="font-headline text-2xl font-bold">
                    Blogwise
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg"
                    onClick={() => setSheetOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                 <Link href="/admin/login" className="text-lg" onClick={() => setSheetOpen(false)}>
                  Admin
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2 md:hidden">
           <Link href="/" className="font-headline text-2xl font-bold">
             Blogwise
           </Link>
        </div>
        
        <div className="flex items-center justify-end md:flex-1 space-x-2">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-9"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
