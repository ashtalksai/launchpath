"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-tight text-foreground hover:text-primary transition-colors">
          Launch Path
        </Link>
        <nav className="flex items-center gap-6">
          <Link 
            href="/roadmap" 
            className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Generator
          </Link>
          <Link 
            href="/learn" 
            className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Learn
          </Link>
          <Link 
            href="/roadmap" 
            className="bg-primary text-primary-foreground px-4 py-2 font-medium text-sm hover:bg-[#3D6B1F] transition-colors border-2 border-primary"
          >
            Get Started →
          </Link>
        </nav>
      </div>
    </header>
  );
}
