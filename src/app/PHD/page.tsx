"use client"
import React from 'react'
import InstitutionalNavbar from "../../components/navbar"
import Footer from "../../components/footer"

export default function PhdStudentsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbfa]">
      {/* 1. Navbar */}
      <InstitutionalNavbar />
      
      {/* 2. Main content area */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-4 py-12 space-y-8">
        
        {/* Header Text */}
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-3xl font-bold text-[#004b87]">Ph.D. Mentorship Records</h2>

        </div>

        {/* DATA TABLE */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-base">
              
              <thead>
                <tr className="bg-[#003d70] text-white text-xs uppercase font-bold tracking-wider">
                  <th className="py-4 px-4 w-12 text-center">S.No</th>
                  <th className="py-4 px-6 w-48">Research Scholar</th>
                  <th className="py-4 px-6">Thesis Title / Domain Area</th>
                  <th className="py-4 px-6 w-44 text-center">Academic Session</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 text-slate-700">

                {/* Student 9 */}
                <tr className="hover:bg-slate-50/60 transition relative">
                  <td className="py-5 px-4 font-bold text-gray-400 text-center border-l-4 border-blue-600">9</td>
                  <td className="py-5 px-6 font-semibold text-slate-900 text-base">Rishab Sharma</td>
                  <td className="py-5 px-6 text-slate-700 font-medium">Mathematical Control Theory</td>
                  <td className="py-5 px-6 text-center">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">2020 - Current</span>
                  </td>
                </tr>

                {/* Student 8 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 font-bold text-gray-400 text-center border-l-4 border-blue-600">8</td>
                  <td className="py-5 px-6 font-semibold text-slate-900 text-base">Ashna Goel</td>
                  <td className="py-5 px-6 text-slate-700 font-medium">Mathematical Control Theory</td>
                  <td className="py-5 px-6 text-center">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">2020 - Current</span>
                  </td>
                </tr>

                {/* Student 7 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 font-bold text-gray-400 text-center border-l-4 border-blue-600">7</td>
                  <td className="py-5 px-6 font-semibold text-slate-900 text-base">Pabitra Kumar Tunga</td>
                  <td className="py-5 px-6 text-slate-700 font-medium">Observer Design for Descriptor Systems</td>
                  <td className="py-5 px-6 text-center">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">2019 - Current</span>
                  </td>
                </tr>

                {/* Student 6 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 font-bold text-gray-400 text-center border-l-4 border-blue-600">6</td>
                  <td className="py-5 px-6 font-semibold text-slate-900 text-base">Juhi Jaiswal</td>
                  <td className="py-5 px-6 text-slate-700 font-medium">Observer Design for Descriptor Systems</td>
                  <td className="py-5 px-6 text-center">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">2018 - Current</span>
                  </td>
                </tr>

                {/* Student 5 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 font-bold text-gray-400 text-center border-l-4 border-emerald-500">5</td>
                  <td className="py-5 px-6 font-semibold text-slate-900 text-base">Dr. Rahul Radhakrishnan</td>
                  <td className="py-5 px-6 text-slate-600 space-y-1">
                    <p className="text-slate-800 font-medium">Nonlinear Filtering: Extensions and Application to Target Tracking Problems</p>
                    <p className="text-xs text-gray-400">Jointly guided with Dr. Shovan Bhaumik (IIT Patna)</p>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">2013 - 2018</span>
                  </td>
                </tr>

                {/* Student 4 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 font-bold text-gray-400 text-center border-l-4 border-emerald-500">4</td>
                  <td className="py-5 px-6 font-semibold text-slate-900 text-base">Dr. Arindam Kundu</td>
                  <td className="py-5 px-6 text-slate-600 space-y-1">
                    <p className="text-slate-800 font-medium">Modelling and Numerics For Arbitrage-Free Option Pricing using Bernstein Polynomial Basis</p>
                    <p className="text-xs text-gray-400">Jointly guided with Dr. Sumit Kumar (IIM Udaipur)</p>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">2010 - 2017</span>
                  </td>
                </tr>

                {/* Student 3 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 font-bold text-gray-400 text-center border-l-4 border-emerald-500">3</td>
                  <td className="py-5 px-6 font-semibold text-slate-900 text-base">Dr. Mahendra Kumar Gupta</td>
                  <td className="py-5 px-6 text-slate-600 space-y-1">
                    <p className="text-slate-800 font-medium">Observer Design for Irregular Descriptor Systems</p>
                    <p className="text-xs text-gray-400">Jointly guided with Dr. Shovan Bhaumik (IIT Patna)</p>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">2012 - 2016</span>
                  </td>
                </tr>

                {/* Student 2 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 font-bold text-gray-400 text-center border-l-4 border-emerald-500">2</td>
                  <td className="py-5 px-6 font-semibold text-slate-900 text-base">Dr. Suman Kumar</td>
                  <td className="py-5 px-6 text-slate-700 font-medium">Controllability Analysis for Infinite-Dimensional Semilinear Systems</td>
                  <td className="py-5 px-6 text-center">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">2010 - 2016</span>
                  </td>
                </tr>

                {/* Student 1 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 font-bold text-gray-400 text-center border-l-4 border-emerald-500">1</td>
                  <td className="py-5 px-6 font-semibold text-slate-900 text-base">Dr. Vikas Kumar Mishra</td>
                  <td className="py-5 px-6 text-slate-700 font-medium">Controllability and Feedback Control Problems for Linear Time-Invariant Descriptor Systems</td>
                  <td className="py-5 px-6 text-center">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">2011 - 2016</span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* 3.Footer*/}
      <Footer />
    </div>
  )
}