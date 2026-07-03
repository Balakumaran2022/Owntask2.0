import React, { useState, useEffect } from 'react';
import { BrowserRouter, useLocation, Routes, Route } from 'react-router-dom';
import Background from './components/layout/Background';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Dashboard from './components/dashboard/Dashboard';

import Home from './pages/core/Home';
import Analytics from './pages/core/Analytics';
import BookDemoForm from './components/forms/BookDemoForm';
// Helper to dynamically enforce SEO tags on route changes
function DynamicSEO() {
  const { pathname } = useLocation();
  useEffect(() => {
    const seoData = {
      '/': {
        title: "ownTask — Project & Task Management Built for Business Teams",
        desc: "ownTask gives your team Projects, SLAs, recurring tasks, approval workflows, and real-time analytics in one intelligent platform.",
        ogPage: "index.html"
      },
      '/features': {
        title: "ownTask Features — SLA, Recurring Tasks, Approvals, Audit Trail & More",
        desc: "Explore ownTask's complete feature set: 3-level hierarchy, dual board types, 2-level SLA, 21 audit events, recurring tasks, approvals, custom fields, bulk upload and more.",
        ogPage: "features.html"
      },
      '/analytics': {
        title: "ownTask Analytics — Real-Time Team & Project Performance Dashboard",
        desc: "ownTask analytics tracks completion rates, on-time delivery, SLA compliance, and team performance — filterable by project, subject, and date range.",
        ogPage: "analytics.html"
      },
      '/solutions': {
        title: "ownTask Use Cases — Support Teams, Operations & Project Management",
        desc: "See how support teams, ops managers, and agencies use ownTask to manage SLAs, recurring processes, and multi-project oversight.",
        ogPage: "use-cases.html"
      },
      '/pricing': {
        title: "ownTask Pricing — Transparent Plans for Teams of All Sizes",
        desc: "Transparent pricing from free to enterprise. SLA tracking, recurring tasks, approval workflows, and full analytics — scale when ready.",
        ogPage: "pricing.html"
      },
      '/about': {
        title: "About ownTask — Built by iEyal Solutions",
        desc: "ownTask is built by iEyal Solutions — focused, practical software for growing businesses.",
        ogPage: "about.html"
      }
    };

    const current = seoData[pathname] || seoData['/'];
    document.title = current.title;

    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.name = "description";
      document.head.appendChild(descMeta);
    }
    descMeta.content = current.desc;

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = current.title;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = current.desc;

    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.content = "website";

    let ogImg = document.querySelector('meta[property="og:image"]');
    if (!ogImg) {
      ogImg = document.createElement('meta');
      ogImg.setAttribute('property', 'og:image');
      document.head.appendChild(ogImg);
    }
    ogImg.content = "https://owntask.ieyalsolutions.com/og-image.png";

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = `https://owntask.ieyalsolutions.com/${current.ogPage}`;
  }, [pathname]);

  return null;
}

// Helper to handle smooth scrolling when route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.replace(/^\//, ''); // remove leading slash
    const id = path.split('/')[0] || 'home'; // get first part
    
    // Give a slight delay to ensure DOM is ready if just loaded
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        // Adjust for navbar height
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', !isDark);
  }, [isDark]);

  if (isLoggedIn) {
    return (
      <div className="relative min-h-screen bg-background">
        <Background />
        <Dashboard onLogout={() => setIsLoggedIn(false)} />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <DynamicSEO />
      <ScrollToTop />
      <div className="relative min-h-screen bg-background flex flex-col overflow-x-hidden">
        <Background />
        <Navbar onOpenLogin={() => setIsLoggedIn(true)} onOpenDemo={() => setIsDemoOpen(true)} />
        
        <main className="flex-1 relative z-10 pt-20 flex flex-col overflow-hidden gap-0">
          <Routes>
            <Route path="/" element={<section id="home"><Home onOpenLogin={() => setIsLoggedIn(true)} onOpenDemo={() => setIsDemoOpen(true)} /></section>} />
            <Route path="*" element={<section id="home"><Home onOpenLogin={() => setIsLoggedIn(true)} onOpenDemo={() => setIsDemoOpen(true)} /></section>} />
          </Routes>
        </main>
        <Footer isDark={isDark} onToggleTheme={() => setIsDark(p => !p)} />

        {isDemoOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsDemoOpen(false)} />
            <div className="relative z-10 w-full max-w-[700px] max-h-[90vh] overflow-y-auto rounded-3xl hide-scrollbar" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
               <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
               <BookDemoForm />
               <button 
                 onClick={() => setIsDemoOpen(false)} 
                 className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border-none cursor-pointer"
               >
                 ✕
               </button>
            </div>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}
