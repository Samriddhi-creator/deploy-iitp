"use client"
import React, { useState } from 'react'
import Link from 'next/link'

export default function InstitutionalNavbar() {
  const [isResearchOpen, setIsResearchOpen] = useState(false);
  const [isThesisOpen, setIsThesisOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = "text-white hover:text-amber-400 transition-colors py-2 md:py-3 px-1 border-b-2 border-transparent hover:border-amber-400 duration-150 inline-block tracking-wide shrink-0 font-semibold text-base";
  const mobileLinkClass = "text-white hover:text-amber-400 transition-colors py-2.5 px-4 font-semibold text-base block border-l-2 border-transparent hover:border-amber-400 bg-black/10 rounded-r";

  return (
    <header className="w-full flex flex-col relative z-50">
      
      {/* 1. TOP BRANDING AREA */}
      <div className="bg-gradient-to-br from-[#004b87] to-[#002b54] text-white py-5 px-4 sm:px-8 border-b border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide leading-tight">
              NUTAN KUMAR TOMAR
            </h1>
          </div>
          <div className="text-right flex flex-col items-end gap-2">
            <div className="hidden sm:block text-sm text-sky-200/80 font-semibold tracking-wider uppercase">
              Indian Institute of Technology Patna
            </div>
            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-amber-400 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Specific Subtitle */}
        <div className="sm:hidden text-[11px] text-sky-200/80 font-semibold tracking-wider uppercase mt-1">
          Indian Institute of Technology Patna
        </div>
      </div>

      {/* 2. NAVIGATION LINKS CONTAINER */}
      <nav className="bg-[#003d70] text-white border-b border-amber-500/30 overflow-visible shadow-md">
        
        {/* DESKTOP MENU VIEW */}
        <div className="hidden md:flex max-w-7xl mx-auto px-4 items-center justify-evenly gap-6 h-14 relative">
          
          <Link href="/" className={linkClass}>
            Home
          </Link>

          <Link href="/profile" className={linkClass}>
            Profile
          </Link>

          {/* RESEARCH DROPDOWN CONTAINER */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsResearchOpen(true)}
            onMouseLeave={() => setIsResearchOpen(false)}
          >
            <button className={`${linkClass} h-full flex items-center gap-1 focus:outline-none`}>
              Research ▾
            </button>

            {isResearchOpen && (
              <div className="absolute top-[56px] left-1/2 -translate-x-1/2 w-56 bg-white text-slate-800 rounded-lg shadow-xl border border-gray-100 py-1 flex flex-col z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <Link href="/publications" className="px-5 py-3 text-base font-semibold hover:bg-sky-50 hover:text-[#004b87] border-b border-gray-100 text-left transition-colors">
                  Publications
                </Link>
                <Link href="/conference" className="px-5 py-3 text-base font-semibold hover:bg-sky-50 hover:text-[#004b87] border-b border-gray-100 text-left transition-colors">
                  Conferences
                </Link>
                <Link href="/conference&workshop" className="px-5 py-3 text-base font-semibold hover:bg-sky-50 hover:text-[#004b87] text-left transition-colors">
                  Conference and Workshop
                </Link>
              </div>
            )}
          </div>

          {/* THESIS DROPDOWN CONTAINER */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsThesisOpen(true)}
            onMouseLeave={() => setIsThesisOpen(false)}
          >
            <button className={`${linkClass} h-full flex items-center gap-1 focus:outline-none`}>
              Thesis ▾
            </button>

            {isThesisOpen && (
              <div className="absolute top-[56px] left-1/2 -translate-x-1/2 w-52 bg-white text-slate-800 rounded-lg shadow-xl border border-gray-100 py-1 flex flex-col z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <Link href="/PHD" className="px-5 py-3 text-base font-semibold hover:bg-sky-50 hover:text-[#004b87] border-b border-gray-100 text-left transition-colors">
                  Ph.D Students
                </Link>
                <Link href="/MSC" className="px-5 py-3 text-base font-semibold hover:bg-sky-50 hover:text-[#004b87] border-b border-gray-100 text-left transition-colors">
                  M.Sc Students
                </Link>
                <Link href="/MTECH" className="px-5 py-3 text-base font-semibold hover:bg-sky-50 hover:text-[#004b87] text-left transition-colors">
                  M.Tech Students
                </Link>
              </div>
            )}
          </div>

          <Link href="/projects" className={linkClass}>
            Projects
          </Link>

          <Link href="/scholarships&awards" className={linkClass}>
            Scholarships/Awards
          </Link>

          <Link href="/memberships" className={linkClass}>
            Memberships
          </Link>

        </div>

        {/* MOBILE MENU VIEW */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#003460] px-4 py-4 border-t border-white/10 flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-4 duration-200">
            
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
              Home
            </Link>

            <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
              Profile
            </Link>

            {/* RESEARCH MOBILE STACK */}
            <div className="space-y-1">
              <div className="text-amber-400 font-bold text-xs uppercase tracking-wider px-4 pt-1">
                Research Modules
              </div>
              <Link href="/publications" onClick={() => setIsMobileMenuOpen(false)} className={`${mobileLinkClass} pl-6 bg-black/5`}>
                • Publications
              </Link>
              <Link href="/conference" onClick={() => setIsMobileMenuOpen(false)} className={`${mobileLinkClass} pl-6 bg-black/5`}>
                • Conferences
              </Link>
              <Link href="/conference&workshop" onClick={() => setIsMobileMenuOpen(false)} className={`${mobileLinkClass} pl-6 bg-black/5`}>
                • Conference and Workshop
              </Link>
            </div>

            {/* THESIS MOBILE STACK */}
            <div className="space-y-1">
              <div className="text-amber-400 font-bold text-xs uppercase tracking-wider px-4 pt-1">
                Thesis Guidance
              </div>
              <Link href="/PHD" onClick={() => setIsMobileMenuOpen(false)} className={`${mobileLinkClass} pl-6 bg-black/5`}>
                • Ph.D Students
              </Link>
              <Link href="/MSC" onClick={() => setIsMobileMenuOpen(false)} className={`${mobileLinkClass} pl-6 bg-black/5`}>
                • M.Sc Students
              </Link>
              <Link href="/MTECH" onClick={() => setIsMobileMenuOpen(false)} className={`${mobileLinkClass} pl-6 bg-black/5`}>
                • M.Tech Students
              </Link>
            </div>

            <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
              Projects
            </Link>

            <Link href="/scholarships&awards" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
              Scholarships/Awards
            </Link>

            <Link href="/memberships" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
              Memberships
            </Link>

          </div>
        )}
      </nav>

    </header>
  )
}