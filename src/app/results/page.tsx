"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
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
import {
  generateRoadmap,
  type QuizAnswers,
  type VisaStatus,
  type IncomeRange,
  type BankAccount,
  type CreditHistory,
  type EmploymentStatus,
} from "@/lib/roadmap-generator";

function RoadmapResults() {
  const searchParams = useSearchParams();

  // Parse query params
  const answers: QuizAnswers = {
    visaStatus: (searchParams.get("visaStatus") as VisaStatus) || "f1",
    income: (searchParams.get("income") as IncomeRange) || "2k-4k",
    bankAccount: (searchParams.get("bankAccount") as BankAccount) || "checking",
    creditHistory: (searchParams.get("creditHistory") as CreditHistory) || "none",
    employment: (searchParams.get("employment") as EmploymentStatus) || "student",
  };

  const roadmap = generateRoadmap(answers);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Header */}
          <h1 className="font-display text-2xl md:text-3xl mb-2">
            Your Credit Roadmap
          </h1>
          <div className="border-b border-border mb-6" />

          {/* Profile */}
          <div className="font-mono text-sm text-muted-foreground mb-2">
            Profile: {roadmap.profile.visaLabel} • {roadmap.profile.incomeLabel} • {roadmap.profile.accountsLabel}
          </div>
          <div className="font-mono text-sm text-tertiary mb-8">
            Generated: {roadmap.generatedAt} • Estimated timeline: 90 days
          </div>

          <div className="hr-accent w-full mb-8" />

          {/* Roadmap Table */}
          <div className="border border-border mb-8">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted hover:bg-muted">
                  <TableHead className="font-mono text-sm font-bold text-right w-20">Week</TableHead>
                  <TableHead className="font-mono text-sm font-bold w-24">Priority</TableHead>
                  <TableHead className="font-mono text-sm font-bold">Task</TableHead>
                  <TableHead className="font-mono text-sm font-bold text-right w-24">Est. Impact</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {roadmap.steps.map((step, index) => (
                  <TableRow key={index} className="hover:bg-card group">
                    <TableCell className="font-mono text-sm text-right align-top">
                      {step.week}
                    </TableCell>
                    <TableCell className="font-mono text-sm align-top">
                      <span
                        className={
                          step.priority === "HIGH"
                            ? "text-primary font-medium"
                            : step.priority === "MEDIUM"
                            ? "text-[#8B6914]"
                            : "text-muted-foreground"
                        }
                      >
                        {step.priority}
                      </span>
                    </TableCell>
                    <TableCell className="align-top">
                      <div className="font-mono text-sm font-medium mb-1">
                        {step.task}
                      </div>
                      <div className="font-mono text-xs text-muted-foreground mb-1">
                        {step.details}
                      </div>
                      <a
                        href={step.source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-tertiary hover:text-primary transition-colors"
                      >
                        Source: {step.source.name} ↗
                      </a>
                    </TableCell>
                    <TableCell className="font-mono text-sm text-right text-primary align-top">
                      {step.impact}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Expected Outcome */}
          <div className="border border-border p-6 bg-card mb-8">
            <h2 className="font-mono text-sm font-bold uppercase tracking-wide mb-4">
              Expected Outcome
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-mono text-xs text-muted-foreground mb-1">Month 3:</p>
                <p className="font-mono text-lg font-bold text-primary">
                  {roadmap.expectedOutcome.month3}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted-foreground mb-1">Month 6:</p>
                <p className="font-mono text-lg font-bold text-primary">
                  {roadmap.expectedOutcome.month6}
                </p>
              </div>
            </div>
            <p className="font-mono text-xs text-tertiary mt-4">
              Source: FICO scoring methodology (myfico.com)
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => window.print()}
              className="px-6 py-3 border-2 border-border bg-transparent hover:bg-card transition-colors font-mono text-sm"
            >
              📄 Download PDF
            </button>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "My Credit Roadmap - Launch Path",
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }
              }}
              className="px-6 py-3 border-2 border-border bg-transparent hover:bg-card transition-colors font-mono text-sm"
            >
              📧 Share Roadmap
            </button>
            <Link
              href="/roadmap"
              className="px-6 py-3 border-2 border-border bg-transparent hover:bg-card transition-colors font-mono text-sm"
            >
              ↻ Generate New
            </Link>
          </div>

          {/* Upsell */}
          <div className="border border-border p-6 bg-accent/30">
            <h3 className="font-display text-lg mb-2">
              Want to track your progress?
            </h3>
            <p className="text-muted-foreground mb-4">
              Premium includes visual progress tracker, credit score estimator, and weekly email reminders.
            </p>
            <div className="flex gap-4">
              <span className="font-mono text-sm text-muted-foreground">$12/mo</span>
              <Link
                href="#"
                className="px-6 py-2 bg-primary text-primary-foreground hover:bg-[#3D6B1F] transition-colors font-mono text-sm border-2 border-primary"
              >
                Start Free 14-Day Trial →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-mono text-muted-foreground">Loading your roadmap...</p>
      </div>
    }>
      <RoadmapResults />
    </Suspense>
  );
}
