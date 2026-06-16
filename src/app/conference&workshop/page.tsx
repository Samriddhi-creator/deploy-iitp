"use client"
import React from 'react'
import InstitutionalNavbar from "../../components/navbar"
import Footer from "../../components/footer"

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbfa]">
       {/* Navbar */}
      <InstitutionalNavbar />
      
      <main className="flex-grow max-w-5xl w-full mx-auto px-4 py-12 space-y-10">
         {/* LISTS */}
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#004b87]">Conference & Workshops Organisation</h2>

        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm divide-y divide-gray-100 overflow-hidden">

          {/* Event 1 */}
          <div className="p-6 hover:bg-slate-50/60 transition flex flex-col sm:flex-row sm:items-start gap-5">
            <span className="text-sm font-bold text-sky-700 bg-sky-50 px-3 py-1.5 rounded-md tracking-wide sm:w-40 text-center shrink-0">
              Feb 28, 2021
            </span>
            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">National Science Day 2021 Celebration</h4>
              <p className="text-sm text-gray-600 font-semibold leading-relaxed">Program Co-coordinator for the institutional events and science assemblies at Indian Institute of Technology Patna.</p>
            </div>
          </div>

          {/* Event 2 */}
          <div className="p-6 hover:bg-slate-50/60 transition flex flex-col sm:flex-row sm:items-start gap-5">
            <span className="text-sm font-bold text-sky-700 bg-sky-50 px-3 py-1.5 rounded-md tracking-wide sm:w-40 text-center shrink-0">
              Dec 22 - 27, 2020
            </span>
            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">National Mathematics Day 2020 Events</h4>
              <p className="text-sm text-gray-600 font-semibold leading-relaxed">Program Coordinator. Organized several technical guest lectures and academic student competitions at IIT Patna.</p>
            </div>
          </div>

          {/* Event 3 */}
          <div className="p-6 hover:bg-slate-50/60 transition flex flex-col sm:flex-row sm:items-start gap-5">
            <span className="text-sm font-bold text-sky-700 bg-sky-50 px-3 py-1.5 rounded-md tracking-wide sm:w-40 text-center shrink-0">
              March 29-30, 2019
            </span>
            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">National Conference on Recent Trends in Differential Equation Theory, Modelling and Computation (NCDE - 2019)</h4>
              <p className="text-sm text-gray-600 font-semibold leading-relaxed">Organized at Indian Institute of Technology Patna, bringing together computational mathematicians from across the nation.</p>
            </div>
          </div>

          {/* Event 4 */}
          <div className="p-6 hover:bg-slate-50/60 transition flex flex-col sm:flex-row sm:items-start gap-5">
            <span className="text-sm font-bold text-sky-700 bg-sky-50 px-3 py-1.5 rounded-md tracking-wide sm:w-40 text-center shrink-0">
              January 1 - 5, 2018
            </span>
            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">GIAN Course — Beyond the Kalman Filter: Bayesian Recursive Filtering in Engineering and Finance</h4>
              <p className="text-sm text-gray-600 font-semibold leading-relaxed">Coordinated the Global Initiative of Academic Networks specialized short course at Indian Institute of Technology Patna.</p>
            </div>
          </div>

          {/* Event 5 */}
          <div className="p-6 hover:bg-slate-50/60 transition flex flex-col sm:flex-row sm:items-start gap-5">
            <span className="text-sm font-bold text-sky-700 bg-sky-50 px-3 py-1.5 rounded-md tracking-wide sm:w-40 text-center shrink-0">
              Feb 16 - 23, 2017
            </span>
            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Workshop on Sobolev Spaces</h4>
              <p className="text-sm text-gray-600 font-semibold leading-relaxed">An intensive, week-long foundational mathematics workshop hosted at Indian Institute of Technology Patna.</p>
            </div>
          </div>

          {/* Event 6 */}
          <div className="p-6 hover:bg-slate-50/60 transition flex flex-col sm:flex-row sm:items-start gap-5">
            <span className="text-sm font-bold text-sky-700 bg-sky-50 px-3 py-1.5 rounded-md tracking-wide sm:w-40 text-center shrink-0">
              Aug - Sep, 2012
            </span>
            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Tutorial Series on Algorithms and Mathematical Techniques</h4>
              <p className="text-sm text-gray-600 font-semibold leading-relaxed">Focused on implementation models used in simulation and verification tools for Integrated Circuits at Indian Institute of Technology Patna, India.</p>
            </div>
          </div>

          {/* Event 7 */}
          <div className="p-6 hover:bg-slate-50/60 transition flex flex-col sm:flex-row sm:items-start gap-5">
            <span className="text-sm font-bold text-sky-700 bg-sky-50 px-3 py-1.5 rounded-md tracking-wide sm:w-40 text-center shrink-0">
              Aug 02-03, 2012
            </span>
            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Workshop on Scientific Computing</h4>
              <p className="text-sm text-gray-600 font-semibold leading-relaxed">Two-day advanced computing and applied mathematics workshop held at Indian Institute of Technology Patna.</p>
            </div>
          </div>

        </div>

      </main>
 {/* footer */}
      <Footer />
    </div>
  )
}