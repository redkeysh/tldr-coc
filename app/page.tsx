/*
 * All Things Linux Code of Conduct TL;DR
 * 
 * Accessibility decisions implemented:
 * - Dark-mode first with system preference detection and toggle persistence
 * - Semantic HTML with proper landmarks (header, main, footer, nav)
 * - ARIA labels and roles where needed, hierarchical headings (h1 → h2 → h3)
 * - Skip link for keyboard navigation to main content
 * - Color-blind safe design: never color-only communication, always paired with icons and text
 * - High contrast support and reduced motion preferences
 * - Screen reader optimized with proper list roles and descriptive labels
 * - Focus management with visible focus indicators
 * - Keyboard navigation support for all interactive elements
 */

'use client';

import { useEffect } from 'react';
import { CheckCircle, XCircle, ExternalLink, Github } from 'lucide-react';
import SkipLink from './components/SkipLink';
import DarkModeToggle from './components/DarkModeToggle';
import Section from './components/Section';
import TLDRCard from './components/TLDRCard';
import StatusLegend from './components/StatusLegend';
import Callout from './components/Callout';
import cocData from './content/atl-coc-tldr.json';

export default function Home() {
  // Initialize axe-core for development accessibility testing
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      import('@axe-core/react').then((axe) => {
        axe.default(require('react'), require('react-dom'), 1000);
      }).catch(() => {
        // Silently fail if axe-core is not available
      });
    }
  }, []);

  return (
    <>
      <SkipLink />
      
      <header className="sticky top-0 z-50 bg-[var(--bg)]/95 backdrop-blur-sm border-b border-[var(--card-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-[var(--fg)]">
                All Things Linux
              </h1>
              <span className="text-[var(--muted)]">•</span>
              <span className="text-[var(--muted)] font-medium">Code of Conduct TL;DR</span>
            </div>
            
            <nav aria-label="Header navigation">
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/allthingslinux/code-of-conduct"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  aria-label="View full Code of Conduct on GitHub (opens in new tab)"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  <span className="hidden sm:inline">Full Policy</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
                <DarkModeToggle />
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main id="main" className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--fg)] mb-6">
              {cocData.title}
            </h2>
            <p className="text-xl text-[var(--muted)] mb-8 max-w-2xl mx-auto">
              {cocData.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/allthingslinux/code-of-conduct"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--accent-contrast)] rounded-lg font-medium hover:opacity-90 transition-opacity"
                aria-label="Read the full Code of Conduct policy (opens in new tab)"
              >
                Read Full Policy
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#essentials"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--card-border)] text-[var(--fg)] rounded-lg font-medium hover:bg-[var(--card)] transition-colors"
              >
                View Rules
              </a>
            </div>
          </div>
        </section>

        {/* Status Legend */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatusLegend />
        </div>

        {/* Core Principles */}
        <Section 
          id="principles" 
          title="Core Principles" 
          description="The fundamental values that guide our community"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {cocData.principles.map((principle, index) => (
              <TLDRCard key={index}>
                <p className="text-[var(--fg)]">{principle}</p>
              </TLDRCard>
            ))}
          </div>
        </Section>

        {/* Conduct Sections */}
        {Object.entries(cocData.sections).map(([sectionKey, section]) => (
          <Section 
            key={sectionKey}
            id={sectionKey} 
            title={section.title}
          >
            {/* Create paired rows for side-by-side comparison */}
            <div className="space-y-8">
              {/* Column Headers */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
                <h3 className="text-2xl font-semibold text-[var(--ok)] mb-0 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" aria-hidden="true" />
                  Expected Behavior
                </h3>
                <h3 className="text-2xl font-semibold text-[var(--bad)] mb-0 flex items-center gap-3">
                  <XCircle className="w-6 h-6" aria-hidden="true" />
                  Prohibited Behavior
                </h3>
              </div>

              {/* Paired Cards */}
              <div className="space-y-4">
                {Array.from({ length: Math.max(section.expected.length, section.prohibited.length) }).map((_, index) => (
                  <div key={index} className="card-row gap-4 lg:gap-8">
                    {/* Expected Card */}
                    <div className="card-container">
                      {section.expected[index] ? (
                        <TLDRCard variant="ok" className="h-full">
                          <div className="flex items-start gap-3">
                            <CheckCircle 
                              className="w-4 h-4 text-[var(--ok)] flex-shrink-0 mt-1" 
                              aria-hidden="true"
                            />
                            <div className="flex-1">
                              <span className="sr-only">Expected: </span>
                              <p 
                                className="text-[var(--fg)] leading-relaxed"
                                dangerouslySetInnerHTML={{ 
                                  __html: section.expected[index].replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                                }}
                              />
                            </div>
                          </div>
                        </TLDRCard>
                      ) : (
                        <div className="h-full"></div>
                      )}
                    </div>

                    {/* Prohibited Card */}
                    <div className="card-container">
                      {section.prohibited[index] ? (
                        <TLDRCard variant="bad" className="h-full">
                          <div className="flex items-start gap-3">
                            <XCircle 
                              className="w-4 h-4 text-[var(--bad)] flex-shrink-0 mt-1" 
                              aria-hidden="true"
                            />
                            <div className="flex-1">
                              <span className="sr-only">Prohibited: </span>
                              <p 
                                className="text-[var(--fg)] leading-relaxed"
                                dangerouslySetInnerHTML={{ 
                                  __html: section.prohibited[index].replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                                }}
                              />
                            </div>
                          </div>
                        </TLDRCard>
                      ) : (
                        <div className="h-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        ))}

        {/* Reporting */}
        <Section 
          id="reporting" 
          title="Reporting Issues" 
          description="How to report concerns and what to expect"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Callout type="info" title="How to Report">
              <p className="text-base leading-relaxed">{cocData.reporting.how}</p>
            </Callout>
            <Callout type="success" title="Confidentiality">
              <p className="text-base leading-relaxed">{cocData.reporting.confidentiality}</p>
            </Callout>
          </div>
        </Section>

        {/* Enforcement */}
        <Section 
          id="enforcement" 
          title="Enforcement" 
          description="How violations are handled and what consequences to expect"
        >
          <TLDRCard>
            <h3 className="text-lg font-semibold text-[var(--fg)] mb-4">
              Progressive Enforcement
            </h3>
            <ul role="list" className="space-y-3">
              {cocData.enforcement.map((item, index) => (
                <li key={index} className="text-[var(--fg)]">
                  {item}
                </li>
              ))}
            </ul>
          </TLDRCard>
        </Section>
      </main>

      <footer className="border-t border-[var(--card-border)] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[var(--muted)] mb-4">
              {cocData.attribution}
            </p>
            <p className="text-sm text-[var(--muted)] mb-6">
              Last updated: {cocData.lastReviewed}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://github.com/allthingslinux/code-of-conduct"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                aria-label="View source on GitHub (opens in new tab)"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                View Source
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
              <span className="text-[var(--muted)] hidden sm:inline">•</span>
              <a
                href="https://discord.gg/linux"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                aria-label="Join our Discord community (opens in new tab)"
              >
                Join Our Community
                <ExternalLink className="w-3 h-3 inline ml-1" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-[var(--card-border)]">
              <p className="text-sm text-[var(--muted)]">
                © 2025 All Things Linux. Licensed under{' '}
                <a
                  href="https://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  aria-label="Creative Commons Attribution 4.0 International License (opens in new tab)"
                >
                  CC BY 4.0
                  <ExternalLink className="w-3 h-3 inline ml-1" aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
