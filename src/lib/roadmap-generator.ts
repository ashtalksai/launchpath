export type VisaStatus = "f1" | "h1b" | "greencard" | "citizen";
export type IncomeRange = "under1k" | "1k-2k" | "2k-4k" | "4k-8k" | "over8k";
export type BankAccount = "none" | "checking" | "both";
export type CreditHistory = "none" | "secured" | "student" | "regular";
export type EmploymentStatus = "student" | "employed" | "both" | "neither";

export interface QuizAnswers {
  visaStatus: VisaStatus;
  income: IncomeRange;
  bankAccount: BankAccount;
  creditHistory: CreditHistory;
  employment: EmploymentStatus;
}

export interface RoadmapStep {
  week: number;
  priority: "HIGH" | "MEDIUM" | "LOW";
  task: string;
  details: string;
  impact: string;
  source: {
    name: string;
    url: string;
  };
}

export interface GeneratedRoadmap {
  profile: {
    visaLabel: string;
    incomeLabel: string;
    accountsLabel: string;
  };
  steps: RoadmapStep[];
  expectedOutcome: {
    month3: string;
    month6: string;
  };
  generatedAt: string;
}

const VISA_LABELS: Record<VisaStatus, string> = {
  f1: "F-1 Student",
  h1b: "H-1B Worker",
  greencard: "Green Card Holder",
  citizen: "US Citizen (new to credit)",
};

const INCOME_LABELS: Record<IncomeRange, string> = {
  under1k: "Under $1,000/mo",
  "1k-2k": "$1,000-2,000/mo",
  "2k-4k": "$2,000-4,000/mo",
  "4k-8k": "$4,000-8,000/mo",
  over8k: "Over $8,000/mo",
};

const ACCOUNT_LABELS: Record<BankAccount, string> = {
  none: "No US bank account",
  checking: "Checking only",
  both: "Checking + Savings",
};

export function generateRoadmap(answers: QuizAnswers): GeneratedRoadmap {
  const steps: RoadmapStep[] = [];
  let weekCounter = 1;

  // Step 1: Bank account (if needed)
  if (answers.bankAccount === "none") {
    steps.push({
      week: weekCounter,
      priority: "HIGH",
      task: "Open a US bank account",
      details: "Chase, Bank of America, or online bank (Mercury/Wise). No minimum balance required for student accounts.",
      impact: "Foundation",
      source: {
        name: "NerdWallet - Best Banks for Immigrants",
        url: "https://www.nerdwallet.com/best/banking/checking-accounts-for-non-citizens",
      },
    });
    weekCounter++;
  }

  // Step 2: Secured card (for everyone starting from zero)
  if (answers.creditHistory === "none" || answers.creditHistory === "secured") {
    const depositAmount = answers.income === "under1k" ? "$200" : answers.income === "1k-2k" ? "$300" : "$500";
    steps.push({
      week: weekCounter,
      priority: "HIGH",
      task: `Open secured credit card (${depositAmount} deposit)`,
      details: answers.visaStatus === "f1" 
        ? "Discover it® Secured - best for students, no SSN required initially"
        : "Capital One Platinum Secured - reports to all 3 bureaus, good for workers",
      impact: "+40 pts",
      source: {
        name: "Experian - How Secured Cards Work",
        url: "https://www.experian.com/blogs/ask-experian/what-is-a-secured-credit-card/",
      },
    });
    weekCounter += 2;
  }

  // Step 3: Utility payments
  steps.push({
    week: weekCounter,
    priority: "MEDIUM",
    task: "Set up utility auto-pay reporting",
    details: "Use Experian Boost to add phone, electric, internet bills. Free service, immediate score impact.",
    impact: "+15 pts",
    source: {
      name: "Experian Boost",
      url: "https://www.experian.com/consumer-products/score-boost.html",
    },
  });
  weekCounter += 2;

  // Step 4: Student/starter card (based on status)
  if (answers.visaStatus === "f1" || answers.employment === "student") {
    steps.push({
      week: weekCounter,
      priority: "HIGH",
      task: "Apply for student credit card",
      details: "Discover it® Student Cash Back or Capital One Journey. No annual fee, rewards from day 1.",
      impact: "+30 pts",
      source: {
        name: "NerdWallet - Best Student Cards",
        url: "https://www.nerdwallet.com/best/credit-cards/college-student",
      },
    });
  } else if (answers.income === "4k-8k" || answers.income === "over8k") {
    steps.push({
      week: weekCounter,
      priority: "HIGH",
      task: "Apply for starter rewards card",
      details: "Capital One Quicksilver or Chase Freedom Unlimited. 1.5-2% cash back, no annual fee.",
      impact: "+30 pts",
      source: {
        name: "NerdWallet - Best No-Fee Cards",
        url: "https://www.nerdwallet.com/best/credit-cards/no-annual-fee",
      },
    });
  } else {
    steps.push({
      week: weekCounter,
      priority: "MEDIUM",
      task: "Apply for basic credit card",
      details: "Capital One Platinum (unsecured). Build more history before rewards cards.",
      impact: "+25 pts",
      source: {
        name: "Capital One",
        url: "https://www.capitalone.com/credit-cards/platinum/",
      },
    });
  }
  weekCounter += 4;

  // Step 5: Credit limit increase
  steps.push({
    week: weekCounter,
    priority: "MEDIUM",
    task: "Request credit limit increase",
    details: "After 3-6 months of on-time payments, request 2x limit. Improves utilization ratio.",
    impact: "+20 pts",
    source: {
      name: "FICO - Credit Utilization",
      url: "https://www.myfico.com/credit-education/credit-scores/amount-of-debt",
    },
  });
  weekCounter += 4;

  // Step 6: Authorized user (if applicable)
  if (answers.visaStatus === "f1" || answers.creditHistory === "none") {
    steps.push({
      week: weekCounter,
      priority: "LOW",
      task: "Become authorized user (optional)",
      details: "Ask a trusted person with good credit to add you. Their history helps your score.",
      impact: "+15 pts",
      source: {
        name: "Experian - Authorized User Benefits",
        url: "https://www.experian.com/blogs/ask-experian/can-authorized-user-build-credit/",
      },
    });
  }

  // Step 7: Final card for rewards
  steps.push({
    week: 12,
    priority: "MEDIUM",
    task: "Graduate to rewards credit card",
    details: answers.income === "over8k" 
      ? "Consider Chase Sapphire Preferred or Amex Gold for travel rewards"
      : "Upgrade secured card to unsecured, or apply for Discover it® Cash Back",
    impact: "+25 pts",
    source: {
      name: "The Points Guy - Best Rewards Cards",
      url: "https://thepointsguy.com/guide/best-credit-cards/",
    },
  });

  // Calculate expected outcomes
  const baseScore = 580;
  const totalImpact = steps.reduce((sum, step) => {
    const pts = parseInt(step.impact.replace(/[^0-9]/g, "")) || 0;
    return sum + pts;
  }, 0);

  const month3Score = Math.min(baseScore + Math.floor(totalImpact * 0.6), 680);
  const month6Score = Math.min(baseScore + totalImpact + 40, 740);

  return {
    profile: {
      visaLabel: VISA_LABELS[answers.visaStatus],
      incomeLabel: INCOME_LABELS[answers.income],
      accountsLabel: ACCOUNT_LABELS[answers.bankAccount],
    },
    steps,
    expectedOutcome: {
      month3: `${month3Score - 40}–${month3Score} (Fair)`,
      month6: `${month6Score - 40}–${month6Score} (Good)`,
    },
    generatedAt: new Date().toISOString().split("T")[0],
  };
}
