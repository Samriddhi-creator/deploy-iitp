"use client"
import React from 'react'

export default function MainContent() {
  const facultyPhotoUrl = "https://iitp.ac.in/~nktomar_BKP/nktomar.jpg";

  return (
    <div className="w-full bg-[#fcfbfa] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        
        {/* 1. TEXT-BASED HERO HEADER BLOCK */}
        <div className="w-full rounded-2xl bg-gradient-to-r from-[#003d70] via-[#004b87] to-[#0a2540] p-8 md:p-10 shadow-md border border-[#002244]/20 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="max-w-3xl relative z-10">
            <span className="bg-[#00b5ef] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md shadow-sm inline-block">
              Student Affairs Portal
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-3 leading-tight">
              Office of Student Affairs
            </h2>
            <p className="text-blue-100 text-xs md:text-sm font-light mt-2 leading-relaxed opacity-90">
              Nurturing leadership, ensuring wellness, managing student life infrastructure, and cultivating an inclusive campus community at IIT Patna.
            </p>
          </div>
        </div>

        {/* 2. TWO-COLUMN SPLIT NAVIGATION & INFO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Left Navigation Pillar */}
          <aside className="lg:col-span-1 lg:sticky lg:top-24">
            <div className="bg-[#004b87] text-white font-bold px-4 py-3 text-sm rounded-t-xl border-b-2 border-[#003d70] tracking-wide shadow-sm">
              Navigation Menu
            </div>
            <div className="border border-t-0 border-gray-200 rounded-b-xl divide-y divide-gray-100 text-sm text-gray-600 bg-white shadow-sm overflow-hidden font-medium">
              <a href="#" className="block px-4 py-3 bg-sky-50 text-[#004b87] border-l-4 border-[#00b5ef] font-semibold">
                Overview Profile
              </a>
              <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-gray-900 transition">
                Student Welfare Services
              </a>
              <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-gray-900 transition">
                Campus Life & Clubs
              </a>
              <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-gray-900 transition">
                Key Responsibilities
              </a>
              <a href="#" className="block px-4 py-3 hover:bg-gray-50 hover:text-gray-900 transition">
                Resources & Downloads
              </a>
            </div>
          </aside>

          {/* Right Core Details Column */}
          <main className="lg:col-span-3 space-y-8">
            
            {/* 3. BLUE PROFILE SHOWCASE CARD */}
            <div className="w-full rounded-xl bg-gradient-to-br from-[#004b87] to-[#002b54] text-white shadow-md border border-[#003d70]/30 overflow-hidden flex flex-col md:flex-row items-center p-6 md:p-8 gap-6 md:gap-8">
              <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-white/90 shadow-lg overflow-hidden bg-white/10 shrink-0 flex items-center justify-center">
                <img 
                  src={facultyPhotoUrl} 
                  alt="Dr. Nutan Kumar Tomar" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="text-center md:text-left space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Dr. Nutan Kumar Tomar</h3>
                <p className="text-sky-300 font-medium text-sm md:text-base tracking-wide">
                  Associate Professor & Dean of Student Affairs
                </p>
                <div className="pt-2 border-t border-white/10 flex flex-col gap-1 text-xs text-gray-200">
                  <p>🏛️ Department of Mathematics</p>
                  <p>🎯 Research Interest: Mathematical Control Theory</p>
                  <p>📍 Indian Institute of Technology Patna</p>
                </div>
              </div>
            </div>

            {/* 4. DYNAMIC PROFILE BIO DATA MATRIX */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm space-y-8">
              
              {/* SECTION A: EDUCATION CHRONOLOGY */}
              <div className="space-y-4">
                <h4 className="text-base font-bold text-[#004b87] uppercase tracking-wider border-b border-gray-100 pb-2 flex items-center gap-2">
                  🎓 Educational Qualifications
                </h4>
                <div className="border-l-2 border-sky-100 ml-2 pl-4 space-y-4">
                  <div className="relative">
                    <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-sky-500 ring-4 ring-white" />
                    <span className="text-xs font-bold text-sky-600 block">2008</span>
                    <h5 className="text-sm font-bold text-gray-800">Ph.D.</h5>
                    <p className="text-xs text-gray-500">Indian Institute of Technology Roorkee</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-sky-400 ring-4 ring-white" />
                    <span className="text-xs font-bold text-sky-600 block">2003</span>
                    <h5 className="text-sm font-bold text-gray-800">M.Sc.</h5>
                    <p className="text-xs text-gray-500">Indian Institute of Technology Roorkee</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-gray-300 ring-4 ring-white" />
                    <span className="text-xs font-bold text-gray-500 block">2001</span>
                    <h5 className="text-sm font-bold text-gray-800">B.Sc.</h5>
                    <p className="text-xs text-gray-500">CCS University Meerut</p>
                  </div>
                </div>
              </div>

              {/* SECTION B: ACADEMIC POSITIONS */}
              <div className="space-y-4">
                <h4 className="text-base font-bold text-[#004b87] uppercase tracking-wider border-b border-gray-100 pb-2 flex items-center gap-2">
                  💼 Academic Positions Held
                </h4>
                <div className="overflow-hidden border border-gray-100 rounded-xl shadow-inner divide-y divide-gray-100">
                  {[
                    { designation: 'Associate Professor', inst: 'Indian Institute of Technology Patna', duration: '2017 - Present' },
                    { designation: 'Assistant Professor', inst: 'Indian Institute of Technology Patna', duration: '2010 - 2017' },
                    { designation: 'Senior Lecturer', inst: 'Indian Institute of Technology Patna', duration: '2008 - 2010' },
                    { designation: 'DAAD Research Fellow', inst: 'University of Bayreuth, Germany', duration: '2008' }
                  ].map((pos, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center px-4 py-3 text-xs sm:text-sm hover:bg-gray-50/60 transition">
                      <div>
                        <span className="font-bold text-gray-800 block">{pos.designation}</span>
                        <span className="text-xs text-gray-500">{pos.inst}</span>
                      </div>
                      <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md mt-1 sm:mt-0 w-fit shrink-0">
                        {pos.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION C: TEACHING CURRICULUM */}
              <div className="space-y-4">
                <h4 className="text-base font-bold text-[#004b87] uppercase tracking-wider border-b border-gray-100 pb-2 flex items-center gap-2">
                  📖 Course Portfolio (Teaching)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* UG Blocks */}
                  <div className="p-4 bg-gray-50/60 border border-gray-100 rounded-xl space-y-2">
                    <h5 className="text-xs font-bold text-amber-800 uppercase bg-amber-50 px-2 py-0.5 rounded w-fit">UG (B.Tech)</h5>
                    <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4 font-medium">
                      <li>Mathematics - I (Calculus)</li>
                      <li>Mathematics - II (Linear Algebra and ODEs)</li>
                      <li>Mathematics - III (Complex Analysis and PDEs)</li>
                      <li>Optimization Techniques</li>
                      <li>Matrix Computation</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50/60 border border-gray-100 rounded-xl space-y-2">
                    <h5 className="text-xs font-bold text-blue-800 uppercase bg-blue-50 px-2 py-0.5 rounded w-fit">UG (M.Sc)</h5>
                    <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4 font-medium">
                      <li>Real Analysis, Ordinary Differential Equations</li>
                      <li>Control Theory</li>
                      <li>Functional Analysis</li>
                      <li>Operators on Hilbert Spaces</li>
                    </ul>
                  </div>

                  {/* PG / PhD Blocks */}
                  <div className="p-4 bg-gray-50/60 border border-gray-100 rounded-xl space-y-2">
                    <h5 className="text-xs font-bold text-emerald-800 uppercase bg-emerald-50 px-2 py-0.5 rounded w-fit">PG (M.Tech)</h5>
                    <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4 font-medium">
                      <li>Numerical Optimization</li>
                      <li>Large Scale Scientific Computing</li>
                      <li>Advanced Engineering Mathematics</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50/60 border border-gray-100 rounded-xl space-y-2">
                    <h5 className="text-xs font-bold text-purple-800 uppercase bg-purple-50 px-2 py-0.5 rounded w-fit">PG (Ph.D)</h5>
                    <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4 font-medium">
                      <li>Analysis (Functional Analysis)</li>
                    </ul>
                  </div>

                </div>
              </div>

            </div>

          </main>

        </div>

      </div>
    </div>
  );
}