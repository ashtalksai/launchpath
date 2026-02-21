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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl text-foreground tracking-tight">
              Launch Path
            </h1>
            <div className="hr-accent w-full max-w-md mt-4 mb-8" />
            
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Build US credit from zero.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Free roadmap in 2 minutes.
            </p>
            
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-medium text-lg hover:bg-[#3D6B1F] transition-colors border-2 border-primary"
            >
              Generate Your Roadmap →
            </Link>
            
            <p className="font-mono text-sm text-tertiary mt-6">
              No signup required • No SSN required • No BS
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-t border-border bg-card">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <h2 className="font-display text-2xl mb-2">How it works</h2>
            <div className="border-b border-border mb-8" />
            
            <div className="space-y-8">
              <div>
                <p className="font-mono text-sm font-medium text-primary mb-2">
                  Step 1 → Answer 5 questions
                </p>
                <p className="text-muted-foreground">
                  Visa status, income range, current accounts
                </p>
              </div>
              
              <div>
                <p className="font-mono text-sm font-medium text-primary mb-2">
                  Step 2 → Get your roadmap
                </p>
                <p className="text-muted-foreground">
                  Personalized 90-day plan with exact steps
                </p>
              </div>
              
              <div>
                <p className="font-mono text-sm font-medium text-primary mb-2">
                  Step 3 → Track progress (optional)
                </p>
                <p className="text-muted-foreground">
                  $12/mo for dashboard, or use free roadmap forever
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Example Roadmap Preview */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-mono text-sm text-muted-foreground mb-4">
            Example roadmap for F-1 student, $2k/month income
          </h2>
          <div className="border-b border-border mb-6" />
          
          <div className="border border-border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted hover:bg-muted">
                  <TableHead className="font-mono text-sm font-bold text-right w-20">Week</TableHead>
                  <TableHead className="font-mono text-sm font-bold">Task</TableHead>
                  <TableHead className="font-mono text-sm font-bold text-right w-28">Impact</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-card">
                  <TableCell className="font-mono text-sm text-right">1</TableCell>
                  <TableCell className="font-mono text-sm">Open secured card ($200 deposit)</TableCell>
                  <TableCell className="font-mono text-sm text-right text-primary">+40 points</TableCell>
                </TableRow>
                <TableRow className="hover:bg-card">
                  <TableCell className="font-mono text-sm text-right">2</TableCell>
                  <TableCell className="font-mono text-sm">Set utilities to auto-pay</TableCell>
                  <TableCell className="font-mono text-sm text-right text-primary">+15 points</TableCell>
                </TableRow>
                <TableRow className="hover:bg-card">
                  <TableCell className="font-mono text-sm text-right">4</TableCell>
                  <TableCell className="font-mono text-sm">Apply for student credit card</TableCell>
                  <TableCell className="font-mono text-sm text-right text-primary">+30 points</TableCell>
                </TableRow>
                <TableRow className="hover:bg-card">
                  <TableCell className="font-mono text-sm text-right">8</TableCell>
                  <TableCell className="font-mono text-sm">Increase secured card limit</TableCell>
                  <TableCell className="font-mono text-sm text-right text-primary">+20 points</TableCell>
                </TableRow>
                <TableRow className="hover:bg-card">
                  <TableCell className="font-mono text-sm text-right">12</TableCell>
                  <TableCell className="font-mono text-sm">Request credit limit increase</TableCell>
                  <TableCell className="font-mono text-sm text-right text-primary">+25 points</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-8">
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-[#3D6B1F] transition-colors border-2 border-primary"
            >
              Generate Your Roadmap →
            </Link>
          </div>
        </section>

        {/* Pricing */}
        <section className="border-t border-border bg-card">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <h2 className="font-display text-2xl mb-2">Pricing</h2>
            <div className="border-b border-border mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
              {/* Free */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-border bg-background">
                <h3 className="font-mono text-sm font-bold uppercase tracking-wide mb-6">
                  Free Forever
                </h3>
                <ul className="space-y-3">
                  <li className="font-mono text-sm">✓ Roadmap generator</li>
                  <li className="font-mono text-sm">✓ Educational content</li>
                  <li className="font-mono text-sm">✓ Community access</li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="/roadmap"
                    className="inline-flex items-center px-6 py-3 border-2 border-border bg-transparent hover:bg-card transition-colors font-medium text-sm"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              
              {/* Premium */}
              <div className="p-8 bg-background">
                <h3 className="font-mono text-sm font-bold uppercase tracking-wide mb-6">
                  Premium — $12/month
                </h3>
                <ul className="space-y-3">
                  <li className="font-mono text-sm">✓ Everything in Free</li>
                  <li className="font-mono text-sm">✓ Progress tracker</li>
                  <li className="font-mono text-sm">✓ Credit score estimator</li>
                  <li className="font-mono text-sm">✓ Card recommendations</li>
                  <li className="font-mono text-sm">✓ Weekly email reminders</li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="/roadmap"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-medium text-sm hover:bg-[#3D6B1F] transition-colors border-2 border-primary"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display text-2xl mb-2">FAQ</h2>
          <div className="border-b border-border mb-8" />
          
          <div className="space-y-8">
            <div>
              <h3 className="font-mono text-sm font-bold mb-2">Do I need an SSN?</h3>
              <p className="text-muted-foreground">
                No. You can start building credit with an ITIN or even without any tax ID using certain secured cards. Our roadmap tells you exactly which options work for your situation.
              </p>
            </div>
            
            <div>
              <h3 className="font-mono text-sm font-bold mb-2">How long until I have a credit score?</h3>
              <p className="text-muted-foreground">
                Typically 3-6 months after opening your first credit account. Our 90-day roadmap gets you to a &quot;Fair&quot; score (620-680) by month 3.
              </p>
            </div>
            
            <div>
              <h3 className="font-mono text-sm font-bold mb-2">Is this actually free?</h3>
              <p className="text-muted-foreground">
                Yes. The roadmap generator and all educational content are free forever. Premium is optional for those who want progress tracking and personalized recommendations.
              </p>
            </div>
            
            <div>
              <h3 className="font-mono text-sm font-bold mb-2">How do you make money?</h3>
              <p className="text-muted-foreground">
                Premium subscriptions ($12/mo) and affiliate commissions when you apply for credit cards through our links. We always show the best option for you, not the highest commission.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
