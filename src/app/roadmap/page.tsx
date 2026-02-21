"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import type { VisaStatus, IncomeRange, BankAccount, CreditHistory, EmploymentStatus, QuizAnswers } from "@/lib/roadmap-generator";

interface Question {
  id: keyof QuizAnswers;
  title: string;
  options: { value: string; label: string }[];
}

const questions: Question[] = [
  {
    id: "visaStatus",
    title: "What's your current visa/immigration status?",
    options: [
      { value: "f1", label: "F-1 (Student visa)" },
      { value: "h1b", label: "H-1B (Work visa)" },
      { value: "greencard", label: "Green card holder (less than 1 year)" },
      { value: "citizen", label: "US citizen (new to credit)" },
    ],
  },
  {
    id: "income",
    title: "What's your monthly income range?",
    options: [
      { value: "under1k", label: "Under $1,000/month" },
      { value: "1k-2k", label: "$1,000 - $2,000/month" },
      { value: "2k-4k", label: "$2,000 - $4,000/month" },
      { value: "4k-8k", label: "$4,000 - $8,000/month" },
      { value: "over8k", label: "Over $8,000/month" },
    ],
  },
  {
    id: "bankAccount",
    title: "Do you have a US bank account?",
    options: [
      { value: "none", label: "No, not yet" },
      { value: "checking", label: "Yes, checking account only" },
      { value: "both", label: "Yes, checking + savings" },
    ],
  },
  {
    id: "creditHistory",
    title: "What credit accounts do you currently have?",
    options: [
      { value: "none", label: "None - starting from zero" },
      { value: "secured", label: "Secured credit card only" },
      { value: "student", label: "Student credit card" },
      { value: "regular", label: "Regular credit card(s)" },
    ],
  },
  {
    id: "employment",
    title: "What's your current employment status?",
    options: [
      { value: "student", label: "Full-time student" },
      { value: "employed", label: "Employed full-time" },
      { value: "both", label: "Student + part-time work" },
      { value: "neither", label: "Between jobs / other" },
    ],
  },
];

export default function RoadmapGenerator() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentAnswer = answers[question.id];

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Generate roadmap and navigate to results
      const params = new URLSearchParams();
      Object.entries(answers).forEach(([key, value]) => {
        if (value) params.set(key, value);
      });
      router.push(`/results?${params.toString()}`);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-2xl mx-auto px-6 py-16">
          <h1 className="font-display text-2xl md:text-3xl mb-2">
            Generate Your Credit Roadmap
          </h1>
          <div className="border-b border-border mb-8" />
          
          {/* Progress */}
          <div className="mb-8">
            <p className="font-mono text-sm text-muted-foreground mb-3">
              Question {currentQuestion + 1} of {questions.length}
            </p>
            <Progress value={progress} className="h-1" />
          </div>
          
          {/* Question */}
          <div className="border border-border p-8 bg-card">
            <h2 className="font-display text-lg mb-6">
              {question.title}
            </h2>
            
            <RadioGroup
              value={currentAnswer || ""}
              onValueChange={handleAnswer}
              className="space-y-4"
            >
              {question.options.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center space-x-3 p-4 border border-border bg-background hover:bg-card cursor-pointer transition-colors"
                  onClick={() => handleAnswer(option.value)}
                >
                  <RadioGroupItem
                    value={option.value}
                    id={option.value}
                    className="border-2 border-border data-[state=checked]:border-primary data-[state=checked]:text-primary"
                  />
                  <Label
                    htmlFor={option.value}
                    className="font-normal cursor-pointer flex-1"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className="px-6 py-3 border-2 border-border bg-transparent hover:bg-card transition-colors font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Back
            </button>
            
            <button
              onClick={handleNext}
              disabled={!currentAnswer}
              className="px-6 py-3 bg-primary text-primary-foreground hover:bg-[#3D6B1F] transition-colors font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed border-2 border-primary"
            >
              {currentQuestion === questions.length - 1 ? "Generate Roadmap →" : "Next →"}
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
