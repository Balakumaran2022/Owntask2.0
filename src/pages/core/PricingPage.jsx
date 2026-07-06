import React from 'react';
import Pricing from '../../components/sections/Pricing';

export default function PricingPage({ onOpenLogin, onOpenDemo }) {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Pricing onOpenLogin={onOpenLogin} onOpenDemo={onOpenDemo} />
    </div>
  );
}
