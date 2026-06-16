"use client"
import React from 'react'
import InstitutionalNavbar from "../../components/navbar"
import Footer from "../../components/footer"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbfa]">
      {/* 1.Navbar */}
      <InstitutionalNavbar />
      
      {/* 2. Main  Projects Content Area */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-4 py-12 space-y-8">
        
        {/* Header Text */}
        <div className="border-b border-gray-200 pb-3">
          <h2 className="text-2xl font-bold text-[#004b87]">Sponsored Research Projects</h2>

        </div>

        {/* PROJECTS GRID CARD LAYOUT */}
        <div className="grid grid-cols-1 gap-6">

          {/* Project Card 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-[#004b87]/40 transition duration-150 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600" />
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 px-2.5 py-1 rounded">
                  SERB, New Delhi
                </span>
                <span className="text-xs font-semibold text-gray-400">
                  Feb 2020 - Feb 2023
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#004b87] transition">
                Systems described by differential and algebraic equations together: Analysis and Design
              </h3>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-50 text-xs text-gray-500 flex justify-between items-center font-medium">
              <span>Funding Agency: Science and Engineering Research Board (SERB)</span>
              <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold">Completed</span>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-[#004b87]/40 transition duration-150 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500" />
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 px-2.5 py-1 rounded">
                  NPOL, DRDO
                </span>
                <span className="text-xs font-semibold text-gray-400">
                  March 2017 - March 2019
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#004b87] transition">
                Underwater target motion analysis with passive sensors
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                 <strong className="text-slate-700">PI:</strong> Dr. Shovan Bhaumik &nbsp;|&nbsp; <strong className="text-slate-700">Co-PI:</strong> Dr. Nutan Kumar Tomar
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-50 text-xs text-gray-500 flex justify-between items-center font-medium">
              <span>Funding Agency: Naval Physical and Oceanographic Laboratory (DRDO)</span>
              <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold">Completed</span>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-[#004b87]/40 transition duration-150 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-purple-600" />
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-50 text-purple-700 px-2.5 py-1 rounded">
                  CSIR, New Delhi
                </span>
                <span className="text-xs font-semibold text-gray-400">
                  April 2011 - March 2014
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#004b87] transition">
                Descriptor systems: Modeling and control
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                 <strong className="text-slate-700">Role:</strong> Completed as Principal Investigator (PI)
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-50 text-xs text-gray-500 flex justify-between items-center font-medium">
              <span>Funding Agency: Council of Scientific and Industrial Research (CSIR)</span>
              <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold">Completed</span>
            </div>
          </div>

        </div>

      </main>

      {/* 3.Footer  */}
      <Footer />
    </div>
  )
}