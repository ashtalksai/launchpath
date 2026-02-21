import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-lg mb-4">Launch Path</h3>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Build US credit from zero.<br />
              No SSN required. No BS.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-mono text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wide">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/roadmap" className="font-mono text-sm hover:text-primary transition-colors">
                  Free Roadmap Generator
                </Link>
              </li>
              <li>
                <Link href="/learn" className="font-mono text-sm hover:text-primary transition-colors">
                  Credit 101 Guide
                </Link>
              </li>
              <li>
                <Link href="/learn/visa-paths" className="font-mono text-sm hover:text-primary transition-colors">
                  F-1 vs H-1B Paths
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-mono text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wide">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="font-mono text-sm text-muted-foreground">
                  Not financial advice
                </span>
              </li>
              <li>
                <span className="font-mono text-sm text-muted-foreground">
                  © 2026 Launch Path
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom text */}
        <div className="mt-12 pt-6 border-t border-border">
          <p className="font-mono text-xs text-tertiary text-center">
            All recommendations cite sources. We earn affiliate commissions from some card providers.
          </p>
        </div>
      </div>
    </footer>
  );
}
