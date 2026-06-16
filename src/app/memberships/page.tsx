"use client"
import React from 'react'
import InstitutionalNavbar from "../../components/navbar"
import Footer from "../../components/footer"

export default function MembershipsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbfa]">
      {/* 1. Navbar */}
      <InstitutionalNavbar />
      
      {/* 2. Main Professional Memberships */}
      <main className="flex-grow max-w-4xl w-full mx-auto px-4 py-12 space-y-10">
        
        {/* Page Header Text */}
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#004b87]">Professional Affiliations</h2>
        
        </div>

        <div className="space-y-5">

          {/* Affiliation 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-[#004b87]/30 transition duration-150 flex items-center justify-between group">
            <div className="flex items-center gap-5">
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                  Indian Mathematical Society (IMS)
                </h3>
                <p className="text-sm text-gray-500 font-semibold mt-0.5">Professional Member / Lifetime Affiliation</p>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full tracking-wide shrink-0">
              Active
            </span>
          </div>

          {/* Affiliation 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-[#004b87]/30 transition duration-150 flex items-center justify-between group">
            <div className="flex items-center gap-5">
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                  Indian Society of Industrial and Applied Mathematicians (ISIAM)
                </h3>
                <p className="text-sm text-gray-500 font-semibold mt-0.5">Professional Member / Applied Mathematics Council</p>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full tracking-wide shrink-0">
              Active
            </span>
          </div>

          {/* Affiliation 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-[#004b87]/30 transition duration-150 flex items-center justify-between group">
            <div className="flex items-center gap-5">
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                  Institute of Electrical and Electronics Engineers (IEEE)
                </h3>
                <p className="text-sm text-gray-500 font-semibold mt-0.5">International Professional Society Member</p>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full tracking-wide shrink-0">
              Active
            </span>
          </div>

        </div>

      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  )
}