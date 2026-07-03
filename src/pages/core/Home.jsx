import React from 'react';
import Hero from '../../components/sections/Hero';
import StatsStrip from '../../components/sections/StatsStrip';
import FeaturesGrid from '../../components/sections/FeaturesGrid';
import Differentiators from '../../components/sections/Differentiators';
import FeaturePreview from '../../components/sections/FeaturePreview';
import SLADeepDive from '../../components/sections/SLADeepDive';
import ApprovalsDeepDive from '../../components/sections/ApprovalsDeepDive';
import SubtasksDeepDive from '../../components/sections/SubtasksDeepDive';
import Templates from '../../components/sections/Templates';
import BulkImport from '../../components/sections/BulkImport';
import HowItWorks from '../../components/sections/HowItWorks';
import Testimonials from '../../components/sections/Testimonials';
import FAQ from '../../components/sections/FAQ';
import Analytics from './Analytics';
import UseCases from './UseCases';
import Pricing from './Pricing';
import About from './About';


export default function Home({ onOpenLogin, onOpenDemo }) {
  return (
    <div>
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

      {/* Spacer for a sleek gap effect */}
      <div className="w-full py-12 lg:py-20" />

      <div id="solutions">
        <UseCases />
      </div>

      <div id="analytics">
        <Analytics />
      </div>

      {/* Spacer gap effect before Approvals */}
      <div className="w-full py-8 lg:py-12" />

      <div id="security">
        <ApprovalsDeepDive />
      </div>

      {/* Spacer gap effect before Subtasks */}
      <div className="w-full py-8 lg:py-12" />

      <div id="resources">
        <SubtasksDeepDive />
      </div>

      {/* Spacer gap effect before Templates */}
      <div className="w-full py-8 lg:py-12" />

      <div id="templates">
        <Templates />
      </div>

      {/* Spacer gap effect before BulkImport */}
      <div className="w-full py-8 lg:py-12" />

      <div id="bulk-import">
        <BulkImport />
      </div>

      {/* Spacer gap effect before HowItWorks */}
      <div className="w-full py-8 lg:py-12" />

      <div id="workflow">
        <HowItWorks />
      </div>

      {/* Spacer gap effect before Testimonials */}
      <div className="w-full py-8 lg:py-12" />

      <div id="pricing">
        <Pricing />
      </div>

      {/* Spacer gap effect before FAQ */}
      <div className="w-full py-8 lg:py-12" />

      <div id="about">
        <About />
      </div>

      <div className="w-full py-8 lg:py-12" />

      <div id="faq">
        <FAQ />
      </div>

    </div>
  );
}
