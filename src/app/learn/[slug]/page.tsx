import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Article content database (in production, this would be MDX files or a CMS)
const articleContent: Record<string, {
  title: string;
  category: string;
  readTime: string;
  lastUpdated: string;
  content: React.ReactNode;
}> = {
  "credit-101": {
    title: "Credit 101 for Immigrants",
    category: "Basics",
    readTime: "8 min",
    lastUpdated: "2026-02-15",
    content: (
      <>
        <h2 className="font-display text-xl mt-8 mb-4">What is a credit score?</h2>
        <p className="text-muted-foreground mb-4">
          A credit score is a three-digit number (300-850) that represents your creditworthiness
          to lenders. In the US, this number determines whether you can rent an apartment,
          get a car loan, qualify for credit cards, or even pass background checks for jobs.
        </p>
        <p className="text-muted-foreground mb-6">
          Unlike many other countries, the US has no centralized banking system that tracks
          your financial reliability. Instead, three private companies (Experian, TransUnion,
          and Equifax) collect data about your borrowing and payment behavior.
        </p>

        <div className="border border-border my-8">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted hover:bg-muted">
                <TableHead className="font-mono text-sm font-bold">Range</TableHead>
                <TableHead className="font-mono text-sm font-bold">Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-card">
                <TableCell className="font-mono text-sm">800-850</TableCell>
                <TableCell className="font-mono text-sm">Exceptional</TableCell>
              </TableRow>
              <TableRow className="hover:bg-card">
                <TableCell className="font-mono text-sm">740-799</TableCell>
                <TableCell className="font-mono text-sm">Very Good</TableCell>
              </TableRow>
              <TableRow className="hover:bg-card">
                <TableCell className="font-mono text-sm">670-739</TableCell>
                <TableCell className="font-mono text-sm">Good</TableCell>
              </TableRow>
              <TableRow className="hover:bg-card">
                <TableCell className="font-mono text-sm">580-669</TableCell>
                <TableCell className="font-mono text-sm">Fair</TableCell>
              </TableRow>
              <TableRow className="hover:bg-card">
                <TableCell className="font-mono text-sm">300-579</TableCell>
                <TableCell className="font-mono text-sm">Poor</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="font-mono text-xs text-tertiary mb-8">
          Source: FICO scoring (fico.com)
        </p>

        <h2 className="font-display text-xl mt-8 mb-4">Why starting from zero is hard</h2>
        <p className="text-muted-foreground mb-4">
          The frustrating catch-22: you need credit history to get credit, but you need credit
          to build credit history. This affects immigrants disproportionately because:
        </p>
        <ul className="list-none space-y-2 mb-6">
          <li className="font-mono text-sm">• Your home country credit history doesn&apos;t transfer</li>
          <li className="font-mono text-sm">• No SSN = fewer options (but not zero)</li>
          <li className="font-mono text-sm">• Banks see &quot;no history&quot; as &quot;risky&quot;</li>
          <li className="font-mono text-sm">• Apartment applications often require 700+ score</li>
        </ul>

        <h2 className="font-display text-xl mt-8 mb-4">The good news</h2>
        <p className="text-muted-foreground mb-4">
          You can build a solid credit score (650-700) in 3-6 months with the right strategy.
          This guide and our free roadmap generator will show you exactly how.
        </p>

        <div className="border-t border-border mt-12 pt-8">
          <h3 className="font-mono text-sm font-bold uppercase tracking-wide mb-2">Sources</h3>
          <ul className="space-y-1">
            <li>
              <a href="https://www.myfico.com/credit-education/credit-scores" className="font-mono text-xs text-tertiary hover:text-primary">
                FICO - Understanding Credit Scores ↗
              </a>
            </li>
            <li>
              <a href="https://www.experian.com/blogs/ask-experian/credit-education/" className="font-mono text-xs text-tertiary hover:text-primary">
                Experian - Credit Education ↗
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  "visa-paths": {
    title: "F-1 vs H-1B Credit Building Paths",
    category: "Visas",
    readTime: "12 min",
    lastUpdated: "2026-02-18",
    content: (
      <>
        <h2 className="font-display text-xl mt-8 mb-4">Different visas, different strategies</h2>
        <p className="text-muted-foreground mb-4">
          Your visa type affects which credit products you can access and how quickly
          you can build credit. Here&apos;s the breakdown.
        </p>

        <h3 className="font-display text-lg mt-8 mb-4">F-1 Students</h3>
        <ul className="list-none space-y-2 mb-6">
          <li className="font-mono text-sm">• <strong>Timeline:</strong> Usually 4-6 months to 650+ score</li>
          <li className="font-mono text-sm">• <strong>Best first card:</strong> Discover it® Student or secured card</li>
          <li className="font-mono text-sm">• <strong>Income limitation:</strong> On-campus work only (20 hrs/week)</li>
          <li className="font-mono text-sm">• <strong>SSN:</strong> Can get one with on-campus employment</li>
          <li className="font-mono text-sm">• <strong>Advantage:</strong> Student cards have lower requirements</li>
        </ul>

        <h3 className="font-display text-lg mt-8 mb-4">H-1B Workers</h3>
        <ul className="list-none space-y-2 mb-6">
          <li className="font-mono text-sm">• <strong>Timeline:</strong> 3-4 months to 650+ score</li>
          <li className="font-mono text-sm">• <strong>Best first card:</strong> Secured card → quick graduation</li>
          <li className="font-mono text-sm">• <strong>Income advantage:</strong> Higher income = higher limits</li>
          <li className="font-mono text-sm">• <strong>SSN:</strong> Required for H-1B employment</li>
          <li className="font-mono text-sm">• <strong>Advantage:</strong> Can qualify for premium cards faster</li>
        </ul>

        <div className="border border-border my-8">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted hover:bg-muted">
                <TableHead className="font-mono text-sm font-bold">Factor</TableHead>
                <TableHead className="font-mono text-sm font-bold">F-1</TableHead>
                <TableHead className="font-mono text-sm font-bold">H-1B</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-card">
                <TableCell className="font-mono text-sm">Time to 650+</TableCell>
                <TableCell className="font-mono text-sm">4-6 months</TableCell>
                <TableCell className="font-mono text-sm">3-4 months</TableCell>
              </TableRow>
              <TableRow className="hover:bg-card">
                <TableCell className="font-mono text-sm">First card limit</TableCell>
                <TableCell className="font-mono text-sm">$500-1,500</TableCell>
                <TableCell className="font-mono text-sm">$1,000-5,000</TableCell>
              </TableRow>
              <TableRow className="hover:bg-card">
                <TableCell className="font-mono text-sm">Best strategy</TableCell>
                <TableCell className="font-mono text-sm">Student cards</TableCell>
                <TableCell className="font-mono text-sm">Secured → premium</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <h3 className="font-mono text-sm font-bold uppercase tracking-wide mb-2">Sources</h3>
          <ul className="space-y-1">
            <li>
              <a href="https://www.nerdwallet.com/article/credit-cards/build-credit-no-ssn" className="font-mono text-xs text-tertiary hover:text-primary">
                NerdWallet - Build Credit Without SSN ↗
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
  },
};

// Fallback content for articles not yet written
const fallbackContent = {
  title: "Article Coming Soon",
  category: "Draft",
  readTime: "N/A",
  lastUpdated: "2026-02-21",
  content: (
    <p className="text-muted-foreground">
      This article is being written. Check back soon for detailed, source-cited content.
    </p>
  ),
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articleContent[slug] || { ...fallbackContent, title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <div className="font-mono text-sm text-muted-foreground mb-8">
            <Link href="/learn" className="hover:text-primary">Learn</Link>
            <span className="mx-2">/</span>
            <span>{article.title}</span>
          </div>

          {/* Article header */}
          <h1 className="font-display text-2xl md:text-3xl mb-4">{article.title}</h1>
          
          <div className="flex gap-4 font-mono text-sm text-muted-foreground mb-6">
            <span>Last updated: {article.lastUpdated}</span>
            <span>•</span>
            <span>{article.readTime} read</span>
          </div>

          <div className="border-b border-border mb-8" />

          {/* Article content */}
          <article className="prose prose-neutral max-w-none">
            {article.content}
          </article>

          {/* CTA */}
          <div className="mt-16 p-6 border border-border bg-card">
            <h2 className="font-display text-lg mb-2">Ready to start building?</h2>
            <p className="text-muted-foreground mb-4">
              Get your personalized 90-day credit roadmap based on your visa status and income.
            </p>
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-[#3D6B1F] transition-colors border-2 border-primary"
            >
              Get Your Free Roadmap →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Generate static params for known articles
export function generateStaticParams() {
  return Object.keys(articleContent).map((slug) => ({ slug }));
}
