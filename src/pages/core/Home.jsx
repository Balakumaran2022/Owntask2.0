import React, { Suspense } from 'react';
import Hero from '../../components/sections/Hero';
import StatsStrip from '../../components/sections/StatsStrip';
import FeaturesGrid from '../../components/sections/FeaturesGrid';
import Differentiators from '../../components/sections/Differentiators';

// Code-split below-the-fold components for optimal bundle size (< 500 kB)
const Analytics = React.lazy(() => import('./Analytics'));
const UseCases = React.lazy(() => import('./UseCases'));
const Pricing = React.lazy(() => import('./Pricing'));
const SLADeepDive = React.lazy(() => import('../../components/sections/SLADeepDive'));
const ApprovalsDeepDive = React.lazy(() => import('../../components/sections/ApprovalsDeepDive'));
const SubtasksDeepDive = React.lazy(() => import('../../components/sections/SubtasksDeepDive'));
const Templates = React.lazy(() => import('../../components/sections/Templates'));
const BulkImport = React.lazy(() => import('../../components/sections/BulkImport'));
const HowItWorks = React.lazy(() => import('../../components/sections/HowItWorks'));
const Testimonials = React.lazy(() => import('../../components/sections/Testimonials'));
const FAQ = React.lazy(() => import('../../components/sections/FAQ'));
const CTA = React.lazy(() => import('../../components/sections/CTA'));

const SectionLoader = () => (
  <div className="w-full py-24 flex items-center justify-center bg-transparent">
    <div className="w-10 h-10 rounded-full border-2 border-primary border-t-transparent animate-spin shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
  </div>
);

export default function Home({ onOpenLogin, onOpenDemo }) {
  return (
    <div className="relative font-sans text-white z-10 bg-transparent">
      {/* ── Above the Fold (Synchronous) ── */}
      <div id="home">
        <Hero onOpenLogin={onOpenLogin} onOpenDemo={onOpenDemo} />
        <StatsStrip />
      </div>

      <div id="features">
        <FeaturesGrid />
      </div>

      <div id="architecture">
        <Differentiators />
      </div>

      {/* ── Below the Fold (Code-Split & Aligned with Navbar Order) ── */}
      <div id="analytics">
        <Suspense fallback={<SectionLoader />}>
          <Analytics />
        </Suspense>
      </div>

      <div id="use-cases">
        <Suspense fallback={<SectionLoader />}>
          <UseCases />
        </Suspense>
      </div>

      <div id="sla">
        <Suspense fallback={<SectionLoader />}>
          <SLADeepDive />
        </Suspense>
      </div>

      <div id="security">
        <Suspense fallback={<SectionLoader />}>
          <ApprovalsDeepDive />
        </Suspense>
      </div>

      <div id="resources">
        <Suspense fallback={<SectionLoader />}>
          <SubtasksDeepDive />
        </Suspense>
      </div>

      <div id="templates">
        <Suspense fallback={<SectionLoader />}>
          <Templates />
        </Suspense>
      </div>

      <div id="bulk-import">
        <Suspense fallback={<SectionLoader />}>
          <BulkImport />
        </Suspense>
      </div>

      <div id="workflow">
        <Suspense fallback={<SectionLoader />}>
          <HowItWorks />
        </Suspense>
      </div>

      <div id="pricing">
        <Suspense fallback={<SectionLoader />}>
          <Pricing onOpenLogin={onOpenLogin} onOpenDemo={onOpenDemo} />
        </Suspense>
      </div>

      <div id="cta">
        <Suspense fallback={<SectionLoader />}>
          <CTA onOpenDemo={onOpenDemo} />
        </Suspense>
      </div>

      <div id="testimonials">
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
      </div>

      <div id="faq">
        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>
      </div>
    </div>
  );
}
