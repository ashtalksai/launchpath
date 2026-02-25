'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const sections = [
  { id: 'research', label: 'Research', icon: '📊' },
  { id: 'gtm', label: 'GTM Plan', icon: '🎯' },
  { id: 'marketing', label: 'Marketing', icon: '📣' },
  { id: 'brand', label: 'Brand Spec', icon: '🎨' },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('research');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 150;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-[#1A1A1A] text-white z-50 px-4 py-3 flex justify-between items-center">
        <span className="font-mono text-lg">Launch Path Docs</span>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#1A1A1A]/95 z-40 pt-16">
          <nav className="p-4 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                  activeSection === section.id
                    ? 'bg-primary text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <span>{section.icon}</span>
                <span className="font-medium">{section.label}</span>
              </button>
            ))}
            <div className="border-t border-gray-700 pt-4 mt-4">
              <Link href="/" className="block px-4 py-3 text-primary hover:text-green-hover">
                ← Back to Site
              </Link>
              <Link href="/pitch" className="block px-4 py-3 text-green-muted hover:text-green-400">
                View Pitch Deck →
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 bottom-0 w-64 bg-[#1A1A1A] text-white">
        <div className="p-6 border-b border-gray-800">
          <h1 className="font-mono text-xl text-white">Launch Path</h1>
          <p className="text-gray-400 text-sm mt-1">Documentation</p>
        </div>
        <nav className="p-4 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                activeSection === section.id
                  ? 'bg-primary text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <span>{section.icon}</span>
              <span className="font-medium">{section.label}</span>
            </button>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
          <Link href="/" className="block px-4 py-2 text-primary hover:text-[#3D6B1F] text-sm">
            ← Back to Site
          </Link>
          <Link href="/pitch" className="block px-4 py-2 text-[#E8F0E3] hover:text-green-300 text-sm">
            View Pitch Deck →
          </Link>
          <a href="https://github.com/ashtalksai/launchpath" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-400 hover:text-gray-300 text-sm">
            GitHub →
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0">
        <div className="max-w-5xl mx-auto px-6 py-12">
          
          {/* RESEARCH SECTION */}
          <section id="research" className="mb-24 scroll-mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Card */}
              <div className="bg-gradient-to-br from-primary to-[#3D6B1F] p-8 mb-8 text-white">
                <span className="text-green-100 font-mono text-sm uppercase tracking-wider">Research Document</span>
                <h2 className="font-mono text-4xl mt-2 mb-4">Market Validation</h2>
                <p className="text-green-100 text-lg max-w-2xl">
                  Immigrants and international students with proven financial responsibility in their home countries start with ZERO credit score in the US. 
                  This blocks access to apartments, car loans, and basic financial services.
                </p>
              </div>

              {/* Metrics Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-card p-6 border border-border">
                  <span className="text-muted-foreground font-mono text-sm">VALIDATION SCORE</span>
                  <div className="text-4xl font-mono font-bold text-primary mt-2">68/100</div>
                  <div className="text-muted-foreground text-sm mt-1">Solid opportunity</div>
                </div>
                <div className="bg-card p-6 border border-border">
                  <span className="text-muted-foreground font-mono text-sm">PAIN SEVERITY</span>
                  <div className="text-4xl font-mono font-bold text-primary mt-2">20/25</div>
                  <div className="text-muted-foreground text-sm mt-1">Housing/car denials</div>
                </div>
                <div className="bg-card p-6 border border-border">
                  <span className="text-muted-foreground font-mono text-sm">TARGET MARKET</span>
                  <div className="text-4xl font-mono font-bold text-primary mt-2">1.6M+</div>
                  <div className="text-muted-foreground text-sm mt-1">F-1 + H-1B annually</div>
                </div>
              </div>

              {/* Problem & Target */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-card p-6 border border-border">
                  <h3 className="font-mono text-xl mb-4 text-foreground">💔 The Problem</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>F-1 visa international students (~1M in US) start at zero</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>H-1B skilled workers (~600k annual arrivals) blocked despite income</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Real denials for housing, auto loans, utilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Existing solutions charging $4.99-$12/mo for credit building</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-accent p-6 border border-border">
                  <h3 className="font-mono text-xl mb-4 text-foreground">🎯 Target User</h3>
                  <p className="text-muted-foreground mb-4">
                    Primary: International grad student (F-1 visa) from India/China, tech-savvy, first 6 months in US
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Comfortable with spreadsheets</li>
                    <li>✓ Reads Reddit threads</li>
                    <li>✓ Distrusts "too slick" marketing</li>
                    <li>✓ Values clarity over decoration</li>
                    <li>✓ Wants to feel in control</li>
                  </ul>
                </div>
              </div>

              {/* Competitors */}
              <div className="bg-card p-6 border border-border mb-8">
                <h3 className="font-mono text-xl mb-4 text-foreground">🏢 Competitor Analysis</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 font-mono text-muted-foreground">Competitor</th>
                        <th className="text-left py-3 px-2 font-mono text-muted-foreground">What They Do</th>
                        <th className="text-left py-3 px-2 font-mono text-muted-foreground">Pricing</th>
                        <th className="text-left py-3 px-2 font-mono text-muted-foreground">Gap</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-2 font-medium text-foreground">Nova Credit</td>
                        <td className="py-3 px-2">B2B credit passport for lenders</td>
                        <td className="py-3 px-2">Enterprise only</td>
                        <td className="py-3 px-2 text-primary">Not consumer-facing</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-2 font-medium text-foreground">Zolve</td>
                        <td className="py-3 px-2">Full banking + credit card</td>
                        <td className="py-3 px-2">Banking fees</td>
                        <td className="py-3 px-2 text-primary">Must shift entire banking</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-2 font-medium text-foreground">Firstcard</td>
                        <td className="py-3 px-2">Secured credit card</td>
                        <td className="py-3 px-2">$0 or $12/mo</td>
                        <td className="py-3 px-2 text-primary">Requires deposit upfront</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-2 font-medium text-foreground">Petal</td>
                        <td className="py-3 px-2">Unsecured card via cashflow</td>
                        <td className="py-3 px-2">12-30% APR</td>
                        <td className="py-3 px-2 text-primary">Generic, not immigrant-focused</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sources */}
              <div className="bg-muted p-4 border border-border">
                <span className="font-mono text-sm text-muted-foreground">Sources: </span>
                <a href="https://www.reddit.com/r/immigration" className="text-primary hover:underline text-sm">Reddit r/immigration</a>
                <span className="text-muted-foreground"> • </span>
                <a href="https://www.ideabrowser.com" className="text-primary hover:underline text-sm">IdeaBrowser.com</a>
                <span className="text-muted-foreground"> • </span>
                <span className="text-muted-foreground text-sm">University international student forums</span>
              </div>
            </motion.div>
          </section>

          {/* GTM SECTION */}
          <section id="gtm" className="mb-24 scroll-mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Card */}
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#333333] p-8 mb-8 text-white">
                <span className="text-gray-400 font-mono text-sm uppercase tracking-wider">Go-to-Market Plan</span>
                <h2 className="font-mono text-4xl mt-2 mb-4">Launch Strategy</h2>
                <p className="text-gray-300 text-lg max-w-2xl">
                  Free roadmap tool → University partnerships → Viral Reddit distribution → Premium tier conversion.
                </p>
              </div>

              {/* Target Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-card p-6 border border-border">
                  <span className="text-muted-foreground font-mono text-sm">NORTH STAR</span>
                  <div className="text-2xl font-mono font-bold text-primary mt-2">700+</div>
                  <div className="text-muted-foreground text-sm mt-1">Credit score achieved</div>
                </div>
                <div className="bg-card p-6 border border-border">
                  <span className="text-muted-foreground font-mono text-sm">CONVERSION</span>
                  <div className="text-2xl font-mono font-bold text-primary mt-2">&gt;15%</div>
                  <div className="text-muted-foreground text-sm mt-1">Free → Paid</div>
                </div>
                <div className="bg-card p-6 border border-border">
                  <span className="text-muted-foreground font-mono text-sm">RETENTION</span>
                  <div className="text-2xl font-mono font-bold text-primary mt-2">&gt;60%</div>
                  <div className="text-muted-foreground text-sm mt-1">Annual retention</div>
                </div>
                <div className="bg-card p-6 border border-border">
                  <span className="text-muted-foreground font-mono text-sm">M6 TARGET</span>
                  <div className="text-2xl font-mono font-bold text-primary mt-2">$9K</div>
                  <div className="text-muted-foreground text-sm mt-1">MRR + referral revenue</div>
                </div>
              </div>

              {/* Audience & Channels */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-card p-6 border border-border">
                  <h3 className="font-mono text-xl mb-4 text-foreground">👥 Target Audience</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono">1.</span>
                      <span><strong className="text-foreground">Primary:</strong> International students on F-1 visas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono">2.</span>
                      <span><strong className="text-foreground">Secondary:</strong> H-1B workers relocating from abroad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-mono">3.</span>
                      <span><strong className="text-foreground">Tertiary:</strong> New immigrants building financial history</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card p-6 border border-border">
                  <h3 className="font-mono text-xl mb-4 text-foreground">📢 Distribution Channels</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>University partnerships: International student orientations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Facebook: International student groups by university</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Reddit: r/immigration, r/internationalstudents, r/personalfinance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Immigration attorneys: Referral partnerships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>SEO: "Credit building for [nationality] in US"</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Launch Phases */}
              <div className="bg-card p-6 border border-border mb-8">
                <h3 className="font-mono text-xl mb-4 text-foreground">🚀 Launch Phases</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-mono text-lg text-foreground mb-2">Phase 1: Weeks 1-4</h4>
                    <p className="text-muted-foreground text-sm mb-2">Free roadmap tool launch</p>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Visa status + income → personalized credit sequence</li>
                      <li>• Launch at 3 universities with large international populations</li>
                      <li>• Partner with student orgs for endorsement</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-muted-foreground pl-4">
                    <h4 className="font-mono text-lg text-foreground mb-2">Phase 2: Months 2-3</h4>
                    <p className="text-muted-foreground text-sm mb-2">Premium tier + monitoring</p>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Plaid integration for bank data</li>
                      <li>• Credit monitoring + alerts</li>
                      <li>• Referral program: Credit for referrals</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pricing Strategy */}
              <div className="bg-accent p-6 border border-border">
                <h3 className="font-mono text-xl mb-4 text-foreground">💰 Pricing Strategy</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 font-mono text-muted-foreground">Tier</th>
                        <th className="text-left py-3 px-2 font-mono text-muted-foreground">Price</th>
                        <th className="text-left py-3 px-2 font-mono text-muted-foreground">Includes</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border">
                        <td className="py-3 px-2 font-medium text-foreground">Free</td>
                        <td className="py-3 px-2 text-primary font-mono">$0</td>
                        <td className="py-3 px-2">Credit roadmap + basic education</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-2 font-medium text-foreground">Premium</td>
                        <td className="py-3 px-2 text-primary font-mono">$19/mo</td>
                        <td className="py-3 px-2">Credit monitoring + alerts + personalized recommendations</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-2 font-medium text-foreground">Student</td>
                        <td className="py-3 px-2 text-primary font-mono">$12/mo</td>
                        <td className="py-3 px-2">Premium features with .edu email verification</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2 font-medium text-foreground">Referral Fees</td>
                        <td className="py-3 px-2 text-primary font-mono">$5-15/lead</td>
                        <td className="py-3 px-2">Affiliate revenue from credit cards, loans</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </section>

          {/* MARKETING SECTION */}
          <section id="marketing" className="mb-24 scroll-mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Card */}
              <div className="bg-gradient-to-br from-[#8B6914] to-[#6B5010] p-8 mb-8 text-white">
                <span className="text-yellow-100 font-mono text-sm uppercase tracking-wider">Marketing Plan</span>
                <h2 className="font-mono text-4xl mt-2 mb-4">Distribution Strategy</h2>
                <p className="text-yellow-100 text-lg max-w-2xl">
                  Product Hunt → Reddit → Twitter/X launch thread. Total reach: 18.5M+ across all channels.
                </p>
              </div>

              {/* Channel Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-card p-6 border border-border">
                  <span className="text-muted-foreground font-mono text-sm">PRODUCT HUNT</span>
                  <div className="text-2xl font-mono font-bold text-primary mt-2">500-2K</div>
                  <div className="text-muted-foreground text-sm mt-1">Expected upvotes</div>
                </div>
                <div className="bg-card p-6 border border-border">
                  <span className="text-muted-foreground font-mono text-sm">REDDIT</span>
                  <div className="text-2xl font-mono font-bold text-primary mt-2">18.4M</div>
                  <div className="text-muted-foreground text-sm mt-1">Combined members</div>
                </div>
                <div className="bg-card p-6 border border-border">
                  <span className="text-muted-foreground font-mono text-sm">TWITTER/X</span>
                  <div className="text-2xl font-mono font-bold text-primary mt-2">10-50K</div>
                  <div className="text-muted-foreground text-sm mt-1">Expected impressions</div>
                </div>
              </div>

              {/* Product Hunt Copy */}
              <div className="bg-card p-6 border border-border mb-4">
                <h3 className="font-mono text-xl mb-4 text-foreground">🏆 Product Hunt Launch Copy</h3>
                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-sm text-muted-foreground">TAGLINE</span>
                    <p className="text-foreground font-medium mt-1">Free credit roadmap for immigrants starting from zero</p>
                  </div>
                  <div>
                    <span className="font-mono text-sm text-muted-foreground">DESCRIPTION</span>
                    <p className="text-muted-foreground mt-1 text-sm">
                      If you're an F-1 student or H-1B worker in the U.S., you probably know the problem: no credit history = can't rent an apartment, can't get a phone plan, can't buy a car.
                      Launch Path fixes this with a FREE Credit Roadmap Generator.
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-sm text-muted-foreground">KEY DIFFERENTIATORS</span>
                    <ul className="text-muted-foreground mt-1 text-sm space-y-1">
                      <li>✅ Tailored to visa holders (F-1, H-1B, green card)</li>
                      <li>✅ Shows real timelines with your actual income/situation</li>
                      <li>✅ Free. No upsell. No "premium plan."</li>
                      <li>✅ Anti-fintech design (looks like a Google Doc, not a startup)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Reddit Targets */}
              <div className="bg-card p-6 border border-border mb-4">
                <h3 className="font-mono text-xl mb-4 text-foreground">🔗 Reddit Distribution</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 font-mono text-muted-foreground">Subreddit</th>
                        <th className="text-left py-3 px-2 font-mono text-muted-foreground">Members</th>
                        <th className="text-left py-3 px-2 font-mono text-muted-foreground">Expected Reach</th>
                        <th className="text-left py-3 px-2 font-mono text-muted-foreground">Fit</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-2 font-medium text-foreground">r/immigration</td>
                        <td className="py-3 px-2">350k</td>
                        <td className="py-3 px-2">200-500 upvotes</td>
                        <td className="py-3 px-2 text-primary">Direct target</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-2 font-medium text-foreground">r/f1visa</td>
                        <td className="py-3 px-2">85k</td>
                        <td className="py-3 px-2">100-300 upvotes</td>
                        <td className="py-3 px-2 text-primary">Exact audience</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-2 font-medium text-foreground">r/personalfinance</td>
                        <td className="py-3 px-2">18M</td>
                        <td className="py-3 px-2">50-150 upvotes</td>
                        <td className="py-3 px-2">Broader reach</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Posting Schedule */}
              <div className="bg-accent p-6 border border-border">
                <h3 className="font-mono text-xl mb-4 text-foreground">📅 Launch Schedule</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-mono text-sm bg-primary/10 px-2 py-1">Day 1 AM</span>
                    <span>Product Hunt launch</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-mono text-sm bg-primary/10 px-2 py-1">Day 1 PM</span>
                    <span>Twitter/X thread (10 tweets)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-mono text-sm bg-primary/10 px-2 py-1">Day 2-3</span>
                    <span>Reddit posts (staggered to avoid spam filters)</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </section>

          {/* BRAND SECTION */}
          <section id="brand" className="mb-24 scroll-mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Card */}
              <div className="bg-gradient-to-br from-primary to-[#3D6B1F] p-8 mb-8 text-white">
                <span className="text-green-100 font-mono text-sm uppercase tracking-wider">Brand Specification</span>
                <h2 className="font-mono text-4xl mt-2 mb-4">Design System</h2>
                <p className="text-green-100 text-lg max-w-2xl">
                  "A knowledgeable friend's Google Doc, not a polished sales pitch." Anti-fintech design: data-first, no decoration, spreadsheet aesthetic.
                </p>
              </div>

              {/* Design Philosophy */}
              <div className="bg-card p-6 border border-border mb-8">
                <h3 className="font-mono text-xl mb-4 text-foreground">✨ Design Philosophy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-mono text-sm text-muted-foreground mb-2">WHAT WE DO</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>Trust through transparency, not polish</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>Data-first, no decoration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>Spreadsheet aesthetic over slick gradients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>Sources cited like academic paper</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>Monospace fonts signal precision</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-sm text-muted-foreground mb-2">WHAT WE DON'T DO</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>Purple gradients everywhere</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>Hero sections with 3D floating credit cards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>"Sign up in 2 minutes!" false urgency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>Stock photos of diverse people</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">✗</span>
                        <span>Hidden pricing ("Contact Sales")</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Color Palette */}
              <div className="bg-card p-6 border border-border mb-4">
                <h3 className="font-mono text-xl mb-4 text-foreground">🎨 Color Palette</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="w-full h-16 bg-[#FAFAFA] border border-border mb-2"></div>
                    <span className="font-mono text-xs text-muted-foreground">Background</span>
                    <p className="font-mono text-sm text-foreground">#FAFAFA</p>
                  </div>
                  <div>
                    <div className="w-full h-16 bg-[#1A1A1A] border border-border mb-2"></div>
                    <span className="font-mono text-xs text-muted-foreground">Text Primary</span>
                    <p className="font-mono text-sm text-foreground">#1A1A1A</p>
                  </div>
                  <div>
                    <div className="w-full h-16 bg-[#2D5016] border border-border mb-2"></div>
                    <span className="font-mono text-xs text-muted-foreground">Forest Green</span>
                    <p className="font-mono text-sm text-foreground">#2D5016</p>
                  </div>
                  <div>
                    <div className="w-full h-16 bg-[#E8F0E3] border border-border mb-2"></div>
                    <span className="font-mono text-xs text-muted-foreground">Green Muted</span>
                    <p className="font-mono text-sm text-foreground">#E8F0E3</p>
                  </div>
                </div>
              </div>

              {/* Typography */}
              <div className="bg-card p-6 border border-border mb-4">
                <h3 className="font-mono text-xl mb-4 text-foreground">📝 Typography</h3>
                <div className="space-y-4">
                  <div className="border-b border-border pb-4">
                    <span className="font-mono text-sm text-muted-foreground">DISPLAY (Headings)</span>
                    <p className="font-mono text-2xl text-foreground mt-1">JetBrains Mono — 500/700 weight</p>
                    <p className="text-muted-foreground text-sm mt-1">Used for H1, H2, hero text, data labels</p>
                  </div>
                  <div className="border-b border-border pb-4">
                    <span className="font-mono text-sm text-muted-foreground">BODY (Paragraphs)</span>
                    <p className="text-xl text-foreground mt-1">Inter — 400/500 weight</p>
                    <p className="text-muted-foreground text-sm mt-1">Used for paragraphs, UI text, buttons</p>
                  </div>
                  <div>
                    <span className="font-mono text-sm text-muted-foreground">DATA/CODE</span>
                    <p className="font-mono text-xl text-foreground mt-1">JetBrains Mono — 400 weight</p>
                    <p className="text-muted-foreground text-sm mt-1">Used for numbers, credit scores, table data</p>
                  </div>
                </div>
              </div>

              {/* Components */}
              <div className="bg-card p-6 border border-border mb-4">
                <h3 className="font-mono text-xl mb-4 text-foreground">🧩 Component Rules</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <span className="font-mono text-sm text-muted-foreground">PRIMARY BUTTON</span>
                      <button className="block w-full mt-2 bg-primary text-white px-6 py-3 font-medium">
                        Get Your Free Roadmap →
                      </button>
                    </div>
                    <div>
                      <span className="font-mono text-sm text-muted-foreground">SECONDARY BUTTON</span>
                      <button className="block w-full mt-2 bg-transparent border-2 border-border text-foreground px-6 py-3 font-medium hover:bg-muted">
                        Learn More
                      </button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <span className="font-mono text-sm text-muted-foreground">INPUT FIELD</span>
                      <input 
                        type="text" 
                        placeholder="Enter your email" 
                        className="block w-full mt-2 bg-white border-2 border-border px-4 py-3 focus:border-primary outline-none"
                      />
                    </div>
                    <div>
                      <span className="font-mono text-sm text-muted-foreground">BORDER RADIUS</span>
                      <p className="text-foreground mt-2 font-mono">0px (NO rounded corners)</p>
                      <p className="text-muted-foreground text-sm">Override all shadcn defaults</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inspiration */}
              <div className="bg-accent p-6 border border-border">
                <h3 className="font-mono text-xl mb-4 text-foreground">💡 Inspiration References</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-mono text-sm bg-primary/10 px-2 py-1">Causal.app</span>
                    <span>Financial modeling - serious, data-first, no fluff</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-mono text-sm bg-primary/10 px-2 py-1">Stripe Docs</span>
                    <span>Information density, clarity, trust through transparency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-mono text-sm bg-primary/10 px-2 py-1">Hacker News</span>
                    <span>Text-first, trust through substance not style</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </section>

          {/* Footer CTA */}
          <div className="text-center py-12 border-t border-border">
            <p className="text-muted-foreground mb-4">Ready to see the product?</p>
            <div className="flex justify-center gap-4">
              <Link href="/" className="bg-primary text-white px-6 py-3 font-medium hover:bg-[#3D6B1F] transition-colors">
                Visit Launch Path →
              </Link>
              <Link href="/pitch" className="bg-transparent border-2 border-border text-foreground px-6 py-3 font-medium hover:bg-muted transition-colors">
                View Pitch Deck
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
