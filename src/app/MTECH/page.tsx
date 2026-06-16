"use client"
import React from 'react'
import InstitutionalNavbar from "../../components/navbar"
import Footer from "../../components/footer"

export default function MtechStudentsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbfa]">
      {/* 1.Navbar */}
      <InstitutionalNavbar />
      
      {/* 2. Main content area */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-4 py-12 space-y-8">
        
        {/* Page Header Text */}
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-3xl font-bold text-[#004b87]">M.Tech. Project Students</h2>

        </div>

        {/* DATA TABLE */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-base">
              
              <thead>
                <tr className="bg-[#003d70] text-white text-xs uppercase font-bold tracking-wider">
                  <th className="py-4 px-4 w-16 text-center">S.No</th>
                  <th className="py-4 px-6 w-52">Student Name</th>
                  <th className="py-4 px-6">Dissertation Title</th>
                  <th className="py-4 px-6 w-48 text-center">Academic Year</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 text-slate-700">

                {/* Student 3 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-bold text-gray-400">3</td>
                  <td className="py-5 px-6 font-semibold text-slate-900 text-base">Ramen Ghosh</td>
                  <td className="py-5 px-6 text-slate-700 font-medium">Study of Wong Sequences for Solution of Differential Algebraic Equations</td>
                  <td className="py-5 px-6 text-center font-medium">
                    <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded">2016 - 2017</span>
                  </td>
                </tr>

                {/* Student 2 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-bold text-gray-400">2</td>
                  <td className="py-5 px-6 font-semibold text-slate-900 text-base">Ujjwal Pratap</td>
                  <td className="py-5 px-6 text-slate-700 font-medium">Study of Model Order Reduction Techniques for Descriptor Systems</td>
                  <td className="py-5 px-6 text-center font-medium">
                    <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded">2016 - 2017</span>
                  </td>
                </tr>

                {/* Student 1 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-bold text-gray-400">1</td>
                  <td className="py-5 px-6 font-semibold text-slate-900 text-base">Sonam Chandra</td>
                  <td className="py-5 px-6 text-slate-700 font-medium">Implementation of Descriptor Observer Design Approach to Synchronize Chaotic Systems for Secure Communication</td>
                  <td className="py-5 px-6 text-center font-medium">
                    <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded">2014 - 2015</span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* 3.Footer */}
      <Footer />
    </div>
  )
}