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

interface Article {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
}

const articles: Article[] = [
  {
    slug: "credit-101",
    title: "Credit 101 for Immigrants",
    category: "Basics",
    readTime: "8 min",
    excerpt: "Everything you need to know about the US credit system, explained for people starting from zero.",
  },
  {
    slug: "visa-paths",
    title: "F-1 vs H-1B Credit Building Paths",
    category: "Visas",
    readTime: "12 min",
    excerpt: "Different visa types mean different strategies. Here's the optimal path for your situation.",
  },
  {
    slug: "secured-cards",
    title: "Secured Cards Explained",
    category: "Products",
    readTime: "6 min",
    excerpt: "How secured credit cards work, which ones to get, and when to graduate to unsecured.",
  },
  {
    slug: "no-ssn",
    title: "How to Build Credit Without SSN",
    category: "Basics",
    readTime: "10 min",
    excerpt: "You don't need a Social Security Number to start. Here are your options.",
  },
  {
    slug: "apartment-hunting",
    title: "Apartment Hunting with No Credit",
    category: "Housing",
    readTime: "15 min",
    excerpt: "Strategies for getting approved for apartments when you have no US credit history.",
  },
  {
    slug: "credit-score-factors",
    title: "The 5 Factors That Determine Your Score",
    category: "Basics",
    readTime: "7 min",
    excerpt: "Payment history, utilization, length, mix, and inquiries—explained with data.",
  },
  {
    slug: "first-card-mistakes",
    title: "10 Mistakes to Avoid with Your First Card",
    category: "Strategy",
    readTime: "9 min",
    excerpt: "Common errors that tank scores and how to avoid them from day one.",
  },
  {
    slug: "authorized-user",
    title: "Authorized User Strategy",
    category: "Strategy",
    readTime: "5 min",
    excerpt: "How piggybacking on someone else's credit can boost your score fast.",
  },
];

const categories = [...new Set(articles.map((a) => a.category))];

export default function LearnPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="font-display text-2xl md:text-3xl mb-2">Learn</h1>
          <div className="border-b border-border mb-8" />

          <p className="text-muted-foreground mb-8 max-w-2xl">
            Free educational content about building credit in the US. Every article cites sources
            and provides actionable steps—no fluff, no upsells.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 border border-primary bg-accent text-primary font-mono text-sm">
              All
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 border border-border bg-background hover:bg-card transition-colors font-mono text-sm cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Articles table */}
          <div className="border border-border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted hover:bg-muted">
                  <TableHead className="font-mono text-sm font-bold">Title</TableHead>
                  <TableHead className="font-mono text-sm font-bold w-28">Category</TableHead>
                  <TableHead className="font-mono text-sm font-bold text-right w-24">Read time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {articles.map((article) => (
                  <TableRow key={article.slug} className="hover:bg-card cursor-pointer group">
                    <TableCell>
                      <Link href={`/learn/${article.slug}`} className="block">
                        <div className="font-mono text-sm font-medium group-hover:text-primary transition-colors">
                          {article.title}
                        </div>
                        <div className="font-mono text-xs text-muted-foreground mt-1">
                          {article.excerpt}
                        </div>
                      </Link>
                    </TableCell>
                    <TableCell>
                      <span className="px-2 py-1 border border-border font-mono text-xs">
                        {article.category}
                      </span>
                    </TableCell>
                    <TableCell className="font-mono text-sm text-right text-muted-foreground">
                      {article.readTime}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 border border-border bg-card">
            <h2 className="font-display text-lg mb-2">Ready to start building?</h2>
            <p className="text-muted-foreground mb-4">
              Get your personalized 90-day credit roadmap in 2 minutes.
            </p>
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-[#3D6B1F] transition-colors border-2 border-primary"
            >
              Generate Your Roadmap →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
