"use client"
import React from 'react'
import InstitutionalNavbar from "../../components/navbar"
import Footer from "../../components/footer"

export default function ProfilePage() {

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbfa]">
      {/* 1. NavBar */}
      <InstitutionalNavbar />
      
      {/* 2. Main Profile Content Frame */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-4 py-12 space-y-12">
        
        {/* BIGGER HERO SHOWCASE CARD */}
        <div className="w-full rounded-2xl bg-gradient-to-br from-[#004b87] to-[#002b54] text-white shadow-md border border-[#003d70]/30 flex flex-col md:flex-row items-center p-8 md:p-10 gap-8 md:gap-10">
          <div className="relative w-40 h-46  border-4 border-white/90 shadow-lg overflow-hidden bg-white/10 shrink-0 flex items-center justify-center">
            <img 
              src={"https://iitp.ac.in/~nktomar_BKP/images/nkt3.jpg"} 
              alt="Dr. Nutan Kumar Tomar" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="text-center md:text-left space-y-3">
         {/*Name */}
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">Dr. Nutan Kumar Tomar</h3>
          {/*Proffession */}
            <p className="text-sky-300 font-bold text-lg md:text-xl tracking-wide">
              Associate Professor
            </p>
            {/* details of proffesor*/}
            <div className="pt-4 border-t border-white/20 flex flex-col gap-2 text-sm md:text-base font-semibold">
              <p> Department of Mathematics</p>
              <p> Research Interest: Mathematical Control Theory</p>
              <p> Indian Institute of Technology Patna</p>
            </div>
          </div>
        </div>

        {/* DETAILS GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* COLUMN 1: EDUCATION */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm space-y-6">
          
            <h4 className="text-lg font-extrabold text-[#004b87] uppercase tracking-wider border-b border-gray-100 pb-3 flex items-center gap-2">
               Educational Qualifications
            </h4>
           
            <div className="border-l-2 border-sky-100 ml-2 pl-5 space-y-5 text-base">
              <div className="relative">
                <span className="absolute -left-[26px] top-1.5 w-3 h-3 rounded-full bg-sky-500 ring-4 ring-white" />
                <span className="text-xs font-bold text-sky-600 block mb-0.5">2008</span>
                <h5 className="font-bold text-slate-900 text-lg">Ph.D.</h5>
                <p className="text-sm text-gray-500">Indian Institute of Technology Roorkee</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[26px] top-1.5 w-3 h-3 rounded-full bg-sky-400 ring-4 ring-white" />
                <span className="text-xs font-bold text-sky-600 block mb-0.5">2003</span>
                <h5 className="font-bold text-slate-800 text-lg">M.Sc.</h5>
                <p className="text-sm text-gray-500">Indian Institute of Technology Roorkee</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[26px] top-1.5 w-3 h-3 rounded-full bg-sky-400 ring-4 ring-white" />
                <span className="text-xs font-bold text-gray-500 block mb-0.5">2001</span>
                <h5 className="font-bold text-slate-800 text-lg">B.Sc.</h5>
                <p className="text-sm text-gray-500">CCS University Meerut</p>
              </div>
            </div>
          </div>

          {/* COLUMN 2: ACADEMIC POSITIONS */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-6">
       
            <h4 className="text-lg font-extrabold text-[#004b87] uppercase tracking-wider border-b border-gray-100 pb-3 flex items-center gap-2">
               Academic Positions
            </h4>
     
            <div className="divide-y divide-gray-100 text-base">
              <div className="py-3.5 flex justify-between items-center">
                <div>
                  <span className="font-bold text-slate-900 block">Associate Professor</span>
                  <span className="text-sm text-gray-500">IIT Patna</span>
                </div>
                <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded">2017 - Present</span>
              </div>
              <div className="py-3.5 flex justify-between items-center">
                <div>
                  <span className="font-bold text-slate-800 block">Assistant Professor</span>
                  <span className="text-sm text-gray-500">IIT Patna</span>
                </div>
                <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded">2010 - 2017</span>
              </div>
              <div className="py-3.5 flex justify-between items-center">
                <div>
                  <span className="font-bold text-slate-800 block">Senior Lecturer</span>
                  <span className="text-sm text-gray-500">IIT Patna</span>
                </div>
                <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded">2008 - 2010</span>
              </div>
              <div className="py-3.5 flex justify-between items-center">
                <div>
                  <span className="font-bold text-slate-800 block">DAAD Research Fellow</span>
                  <span className="text-sm text-gray-500">University of Bayreuth, Germany</span>
                </div>
                <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded">2008</span>
              </div>
            </div>
          </div>

        </div>

        {/* LARGER TEACHING PORTFOLIO SECTION */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm space-y-6">

          <h4 className="text-lg font-extrabold text-[#004b87] uppercase tracking-wider border-b border-gray-100 pb-3">
             Course Portfolio (Teaching)
          </h4>
          
       
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm sm:text-base">
            
            {/* B.Tech Block */}
            <div className="p-5 bg-slate-50 border border-slate-100 rounded-xl space-y-3">
              <h5 className="text-xs font-extrabold text-amber-800 uppercase bg-amber-50 px-2.5 py-1 rounded w-fit tracking-wider">UG (B.Tech)</h5>
              <ul className="text-sm text-gray-700 space-y-1.5 list-disc pl-4 font-semibold">
                <li>Mathematics - I</li>
                <li>Mathematics - II</li>
                <li>Mathematics - III</li>
                <li>Optimization Techniques</li>
                <li>Matrix Computation</li>
              </ul>
            </div>

            {/* M.Sc Block */}
            <div className="p-5 bg-slate-50 border border-slate-100 rounded-xl space-y-3">
              <h5 className="text-xs font-extrabold text-blue-800 uppercase bg-blue-50 px-2.5 py-1 rounded w-fit tracking-wider">UG (M.Sc)</h5>
              <ul className="text-sm text-gray-700 space-y-1.5 list-disc pl-4 font-semibold">
                <li>Real Analysis</li>
                <li>Ordinary Differential Equations</li>
                <li>Control Theory</li>
                <li>Functional Analysis</li>
                <li>Operators on Hilbert Spaces</li>
              </ul>
            </div>

            {/* M.Tech Block */}
            <div className="p-5 bg-slate-50 border border-slate-100 rounded-xl space-y-3">
              <h5 className="text-xs font-extrabold text-emerald-800 uppercase bg-emerald-50 px-2.5 py-1 rounded w-fit tracking-wider">PG (M.Tech)</h5>
              <ul className="text-sm text-gray-700 space-y-1.5 list-disc pl-4 font-semibold">
                <li>Numerical Optimization</li>
                <li>Large Scale Scientific Computing</li>
                <li>Advanced Engineering Mathematics</li>
              </ul>
            </div>

            {/* Ph.D Block */}
            <div className="p-5 bg-slate-50 border border-slate-100 rounded-xl space-y-3">
              <h5 className="text-xs font-extrabold text-purple-800 uppercase bg-purple-50 px-2.5 py-1 rounded w-fit tracking-wider">PG (Ph.D)</h5>
              <ul className="text-sm text-gray-700 space-y-1.5 list-disc pl-4 font-semibold">
                <li>Analysis (Functional Analysis)</li>
              </ul>
            </div>

          </div>
        </div>

      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  )
}