import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-[#001f3f] text-white relative font-sans">

      {/* container  */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start md:divide-x md:divide-white/20">
        
        {/* ================= LEFT COLUMN: BRANDING & CONTACT INFO ================= */}
        <div className="space-y-6">
          <div>
            <div className="flex items-baseline gap-1">
              <h2 className="text-2xl font-black tracking-tight text-white uppercase">
                STUDENT AFFAIRS <span className="text-white">OFFICE</span>
              </h2>
            </div>
            <p className="text-[11px] text-white uppercase tracking-widest mt-1 font-semibold">
              Department of Mathematics
            </p>
          </div>

          {/* Location Details */}
          <ul className="space-y-3.5 text-sm text-white font-medium">
            <li className="flex items-start gap-2.5 group">
              <span className="text-white font-bold transition-transform group-hover:translate-x-1">&gt;</span>
              <span className="hover:text-white/80 transition text-[15px]">Indian Institute of Technology Patna</span>
            </li>
            <li className="flex items-start gap-2.5 group">
              <span className="text-white font-bold transition-transform group-hover:translate-x-1">&gt;</span>
              <span className="hover:text-white/80 transition text-[15px]">Bihta-801106, Patna, Bihar (India)</span>
            </li>
          </ul>
        </div>

        {/* ================= CENTER COLUMN: EMERGENCY LINKS ================= */}
       
        <div className="space-y-4 md:px-12 w-full">
          <h3 className="text-white text-[20px] font-bold tracking-wider uppercase">
            Emergency Contacts
          </h3>
          <div className="text-[15px] text-white space-y-2.5 font-medium pt-2">
            <p className="hover:text-white/80 transition">
               <strong className="ml-1">Campus Security:</strong> +91-(0)-92205-00000
            </p>
            <p className="hover:text-white/80 transition">
               <strong className="ml-1">Medical Center:</strong> +91-(0)-94708-30000
            </p>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: SEPARATE QUICK LINKS ================= */}
        <div className="space-y-4 md:pl-12">
          <h3 className="text-white text-[20px] font-bold tracking-wider uppercase">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 text-[15px] font-medium text-white">
            
            {/* HOME LINK */}
            <li className="flex items-center gap-3 group">
              <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 opacity-70 group-hover:scale-125 transition" />
              <Link href="/" className="hover:text-white/80 transition-colors">
                Home
              </Link>
            </li>

            {/* PROFILE LINK */}
            <li className="flex items-center gap-3 group">
              <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 opacity-70 group-hover:scale-125 transition" />
              <Link href="/profile" className="hover:text-white/80 transition-colors">
                Profile
              </Link>
            </li>

            {/* RESEARCH LINK */}
            <li className="flex items-center gap-3 group">
              <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 opacity-70 group-hover:scale-125 transition" />
              <Link href="/publications" className="hover:text-white/80 transition-colors">
                Research
              </Link>
            </li>

            {/* THESIS LINK */}
            <li className="flex items-center gap-3 group">
              <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 opacity-70 group-hover:scale-125 transition" />
              <Link href="/PHD" className="hover:text-white/80 transition-colors">
                Thesis
              </Link>
            </li>

            {/* PROJECTS LINK */}
            <li className="flex items-center gap-3 group">
              <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 opacity-70 group-hover:scale-125 transition" />
              <Link href="/projects" className="hover:text-white/80 transition-colors">
                Projects
              </Link>
            </li>

            {/* SCHOLARSHIPS/AWARDS LINK */}
            <li className="flex items-center gap-3 group">
              <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 opacity-70 group-hover:scale-125 transition" />
              <Link href="/scholarships&awards" className="hover:text-white/80 transition-colors">
                Scholarships/Awards
              </Link>
            </li>

            {/* MEMBERSHIPS LINK */}
            <li className="flex items-center gap-3 group">
              <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 opacity-70 group-hover:scale-125 transition" />
              <Link href="/memberships" className="hover:text-white/80 transition-colors">
                Memberships
              </Link>
            </li>

          </ul>
        </div>

      </div>

      {/* 3. BASELINE SUB-FOOTER RECTANGLE */}
      <div className="w-full bg-[#050505] text-[10px] text-gray-500 py-4 px-6 sm:px-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="tracking-wide">
            *This Independent Portal Session is operated under administrative structural layouts.
          </p>
          <p className="font-medium">
            &copy; {new Date().getFullYear()} Student Affairs Office, IIT Patna. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  )
}