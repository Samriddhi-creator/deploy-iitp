"use client"
import React from 'react'
import InstitutionalNavbar from "../../components/navbar"
import Footer from "../../components/footer"

export default function AwardsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbfa]">
      {/* 1.  Navbar */}
      <InstitutionalNavbar />
      
      {/* 2. Main content area */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-4 py-12 space-y-10">
        
        {/* Page Header Text */}
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#004b87]">Honours, Awards & Scholarships</h2>

        </div>

        {/* SECTION A: KEY HONOURS & INVITED LECTURES */}
        <div className="space-y-5">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
             Professional Honours & Invited Lectures
          </h3>
          
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm divide-y divide-gray-100 overflow-hidden">
            
            {/* Record 1 */}
            <div className="p-5 hover:bg-slate-50/50 transition flex items-start gap-5">
              <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded w-36 text-center shrink-0">May 2021</span>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Session Co-Chair (Observers)</h4>
                <p className="text-sm text-gray-600 font-semibold leading-relaxed">American Control Conference 2021 (ACC 2021) — New Orleans, Louisiana, USA.</p>
              </div>
            </div>

            {/* Record 2 */}
            <div className="p-5 hover:bg-slate-50/50 transition flex items-start gap-5">
              <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded w-36 text-center shrink-0">IIT Patna</span>
              <div className="space-y-1">
                <h4 className="font-bold text-black text-base sm:text-lg leading-snug">Best Teacher Award (Three Consecutive Years)</h4>
                <p className="text-sm text-gray-600 font-semibold leading-relaxed">Received institutional excellence honors for the years 2017, 2018, and 2019 from Indian Institute of Technology Patna.</p>
              </div>
            </div>

            {/* Record 3 */}
            <div className="p-5 hover:bg-slate-50/50 transition flex items-start gap-5">
              <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded w-36 text-center shrink-0">Feb 2021</span>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Invited Lecture — DAEs: A General Mathematical Framework</h4>
                <p className="text-sm text-gray-600 font-semibold leading-relaxed">Pandit Deendayal Petroleum University, Gandhinagar, Gujarat, India.</p>
              </div>
            </div>

            {/* Record 4 */}
            <div className="p-5 hover:bg-slate-50/50 transition flex items-start gap-5">
              <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded w-36 text-center shrink-0">Jan 2021</span>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Invited Lectures — Applied Linear Algebra and Large Scale Scientific Computing</h4>
                <p className="text-sm text-gray-600 font-semibold leading-relaxed">QIP Event, Indian Institute of Technology Roorkee, India.</p>
              </div>
            </div>

            {/* Record 5 */}
            <div className="p-5 hover:bg-slate-50/50 transition flex items-start gap-5">
              <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded w-36 text-center shrink-0">Dec 2020</span>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Invited Lecture — Online Training Program for School Students</h4>
                <p className="text-sm text-gray-600 font-semibold leading-relaxed">Organized by the Bihar Mathematical Society.</p>
              </div>
            </div>

            {/* Record 6 */}
            <div className="p-5 hover:bg-slate-50/50 transition flex items-start gap-5">
              <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded w-36 text-center shrink-0">Nov 2020</span>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Invited Lectures — Essential Mathematics for Machine Learning</h4>
                <p className="text-sm text-gray-600 font-semibold leading-relaxed">TEQIP-III FDP Event with hands-on training, IIT Roorkee, India.</p>
              </div>
            </div>

            {/* Record 7 */}
            <div className="p-5 hover:bg-slate-50/50 transition flex items-start gap-5">
              <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded w-36 text-center shrink-0">Oct 2020</span>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Invited Lecture — DAEs: Modelling, Analysis, and Control</h4>
                <p className="text-sm text-gray-600 font-semibold leading-relaxed">National Institute of Technology (NIT) Jamshedpur, India.</p>
              </div>
            </div>

            {/* Record 8 */}
            <div className="p-5 hover:bg-slate-50/50 transition flex items-start gap-5">
              <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded w-36 text-center shrink-0">Feb 2020</span>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Special Lecture — Nonlinear Estimation for Engineers</h4>
                <p className="text-sm text-gray-600 font-semibold leading-relaxed">CEP Course, Indian Institute of Technology Patna.</p>
              </div>
            </div>

            {/* Record 9 */}
            <div className="p-5 hover:bg-slate-50/50 transition flex items-start gap-5">
              <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded w-36 text-center shrink-0">Jan 2019</span>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Special Lecture — TEQIP Institutional Event</h4>
                <p className="text-sm text-gray-600 font-semibold leading-relaxed">LNJP Institute of Technology, Chapra, Bihar, India.</p>
              </div>
            </div>

            {/* Record 10 */}
            <div className="p-5 hover:bg-slate-50/50 transition flex items-start gap-5">
              <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded w-36 text-center shrink-0">Feb 2018</span>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Invited Lectures — Indo-German Workshop</h4>
                <p className="text-sm text-gray-600 font-semibold leading-relaxed">Topic: Optimal control, Inverse problems and their applications — IIT Delhi, India.</p>
              </div>
            </div>

            {/* Record 11 */}
            <div className="p-5 hover:bg-slate-50/50 transition flex items-start gap-5">
              <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded w-36 text-center shrink-0">Jun 2017</span>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Invited Lectures — Computational Science with Engineering Applications</h4>
                <p className="text-sm text-gray-600 font-semibold leading-relaxed">QIP Event, Indian Institute of Technology Roorkee, India.</p>
              </div>
            </div>

            {/* Record 12 */}
            <div className="p-5 hover:bg-slate-50/50 transition flex items-start gap-5">
              <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded w-36 text-center shrink-0">May 2017</span>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Invited Delegate — DAAD Alumni International Event</h4>
                <p className="text-sm text-gray-600 font-semibold leading-relaxed">Held at University of Colombo, Sri Lanka.</p>
              </div>
            </div>

            {/* Record 13 */}
            <div className="p-5 hover:bg-slate-50/50 transition flex items-start gap-5">
              <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded w-36 text-center shrink-0">Jun 2014</span>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Session Chair (Identification and Control)</h4>
                <p className="text-sm text-gray-600 font-semibold leading-relaxed">22nd Mediterranean Conference on Control and Automation — Palermo University, Italy.</p>
              </div>
            </div>

            {/* Record 14 */}
            <div className="p-5 hover:bg-slate-50/50 transition flex items-start gap-5">
              <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded w-36 text-center shrink-0">Nov 2014</span>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Invited Talk — Introduction to Descriptor Systems</h4>
                <p className="text-sm text-gray-600 font-semibold leading-relaxed">SSV College Hapur, Uttar Pradesh (Event: National Conference on Future Perspectives of Science and Technology).</p>
              </div>
            </div>

            {/* Record 15 */}
            <div className="p-5 hover:bg-slate-50/50 transition flex items-start gap-5">
              <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded w-36 text-center shrink-0">Mar 2013</span>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Invited Talk — Basics of Mathematics</h4>
                <p className="text-sm text-gray-600 font-semibold leading-relaxed">Akal College of Pharmacy and Technical Education, Mastuana Sahib, Sangrur, Punjab (Event: Inspire Internship Camp).</p>
              </div>
            </div>

            {/* Record 16 */}
            <div className="p-5 hover:bg-slate-50/50 transition flex items-start gap-5">
              <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded w-36 text-center shrink-0">Mar 2011</span>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Invited Delegate — DAAD Alumni Event</h4>
                <p className="text-sm text-gray-600 font-semibold leading-relaxed">Held at National Institute of Technology, Calicut, India.</p>
              </div>
            </div>

            {/* Record 17 */}
            <div className="p-5 hover:bg-slate-50/50 transition flex items-start gap-5">
              <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded w-36 text-center shrink-0">Jun 2008</span>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Research Lecture — Controllability of Semilinear Control systems governed by PDEs</h4>
                <p className="text-sm text-gray-600 font-semibold leading-relaxed">Department of Engineering Mathematics, University of Bayreuth, Germany.</p>
              </div>
            </div>

          </div>
        </div>


        {/* SECTION B: FELLOWSHIPS & SCHOLARSHIPS */}
        <div className="space-y-5">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            🎓 National & International Fellowships
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-2 relative overflow-hidden">
              <span className="text-[11px] font-extrabold text-sky-700 bg-sky-50 px-2.5 py-1 rounded uppercase tracking-wider">International</span>
              <h4 className="font-bold text-slate-900 text-base sm:text-lg">DAAD Research Scholarship</h4>
              <p className="text-sm text-gray-600 font-semibold leading-relaxed">Awarded fellowship funding to visit and conduct advanced mathematics work at the University of Bayreuth, Germany, 2008.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-2 relative overflow-hidden">
              <span className="text-[11px] font-extrabold text-sky-700 bg-sky-50 px-2.5 py-1 rounded uppercase tracking-wider">National Fellowship</span>
              <h4 className="font-bold text-slate-900 text-base sm:text-lg">Science Academies' Summer Research Fellowship</h4>
              <p className="text-sm text-gray-600 font-semibold leading-relaxed">Awarded prestigious research support credentials during the 2009 session.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-2 relative overflow-hidden">
              <span className="text-[11px] font-extrabold text-sky-700 bg-sky-50 px-2.5 py-1 rounded uppercase tracking-wider">National Fellowship</span>
              <h4 className="font-bold text-slate-900 text-base sm:text-lg">UGC Senior Research Fellowship (SRF)</h4>
              <p className="text-sm text-gray-600 font-semibold leading-relaxed">Conferred by the University Grants Commission from 2006 to 2008.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-2 relative overflow-hidden">
              <span className="text-[11px] font-extrabold text-sky-700 bg-sky-50 px-2.5 py-1 rounded uppercase tracking-wider">Travel Grant</span>
              <h4 className="font-bold text-slate-900 text-base sm:text-lg">ICIAM07 Student Travel Grant</h4>
              <p className="text-sm text-gray-600 font-semibold leading-relaxed">International Council for Industrial and Applied Mathematics travel funding support for Zurich, Switzerland (July 16-20, 2007).</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-2 relative overflow-hidden">
              <span className="text-[11px] font-extrabold text-purple-700 bg-purple-50 px-2.5 py-1 rounded uppercase tracking-wider">National Rank</span>
              <h4 className="font-bold text-slate-900 text-base sm:text-lg">GATE & NET Qualifications</h4>
              <p className="text-sm text-gray-600 font-semibold leading-relaxed">Successfully qualified both the Graduate Aptitude Test in Engineering (GATE) and National Eligibility Test (NET) in Mathematical Sciences in 2003.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-2 relative overflow-hidden">
              <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded uppercase tracking-wider">Institutional</span>
              <h4 className="font-bold text-slate-900 text-base sm:text-lg">Merit Scholarship — IIT Roorkee</h4>
              <p className="text-sm text-gray-600 font-semibold leading-relaxed">Awarded top academic standing honors during the 2001-2002 academic session.</p>
            </div>

          </div>
        </div>

      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  )
}