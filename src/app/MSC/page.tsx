"use client"
import React from 'react'
import InstitutionalNavbar from "../../components/navbar"
import Footer from "../../components/footer"

export default function MscStudentsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbfa]">
      {/* 1. Navbar */}
      <InstitutionalNavbar />
      
      {/* 2. Main content area */}
      <main className="flex-grow max-w-4xl w-full mx-auto px-4 py-12 space-y-8">
        
        {/* Page Header Text */}
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-3xl font-bold text-[#004b87]">M.Sc. Project Students</h2>

        </div>

        {/*DATA TABLE */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-base">
              
              <thead>
                <tr className="bg-[#003d70] text-white text-xs uppercase font-bold tracking-wider">
                  <th className="py-4 px-4 w-20 text-center">S.No</th>
                  <th className="py-4 px-6">Student Name</th>
                  <th className="py-4 px-6 w-48 text-center">Academic Year</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 text-slate-700">

                {/* 2020 - 2021 Group */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-bold text-gray-400">2</td>
                  <td className="py-5 px-6 font-semibold text-slate-900 text-base">Ankita Yadav</td>
                  <td className="py-5 px-6 text-center">
                    <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded">2020 - 2021</span>
                  </td>
                </tr>

                {/* 2017 - 2018 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-bold text-gray-400" rowSpan={4}>1</td>
                  <td className="py-5 px-6 font-semibold text-slate-900 text-base">Suman Kumari</td>
                  <td className="py-5 px-6 text-center text-gray-500 font-medium" rowSpan={4}>
                    <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded">2017 - 2018</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 font-semibold text-slate-900 text-base border-t border-gray-50">Rani Kumari</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 font-semibold text-slate-900 text-base border-t border-gray-50">Vaishaly Verma</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 font-semibold text-slate-900 text-base border-t border-gray-50">Shivam Middha</td>
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