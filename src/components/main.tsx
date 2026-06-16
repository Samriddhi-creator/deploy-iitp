"use client"
import React from 'react'

export default function MainContent() {

  return (
    <div className="w-full bg-[#fcfbfa] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="items-start"> 

          {/* Right Core Details Column */}
         
            <div className="w-full rounded-xl bg-gradient-to-br from-[#004b87] to-[#002b54] text-white shadow-md border border-[#003d70]/30 overflow-hidden flex flex-col md:flex-row items-center p-6 md:p-8 gap-6 md:gap-12">
              
              {/*Image */}
              <div className="relative w-33 h-36 md:w-40 md:h-47  border-4 border-white/90 shadow-lg  bg-white/10 shrink-0 flex items-center justify-center gap-10">
                <img 
                  src={"https://iitp.ac.in/~nktomar_BKP/images/nkt.jpg"} 
                  alt="Dr. Nutan kumar Tomar Portrait" 
                  className="w-full h-full object-cover object-center"
                 
                />
              </div>

              {/* Text Credentials Group */}
              <div className="text-center md:text-left space-y-2">
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight">
                  Dr. Nutan Kumar Tomar
                </h3>
                <p className="text-sky-300 font-medium text-[18px] md:text-base tracking-wide">
                  Associate Professor & Dean of Student Affairs
                </p>
                <div className="pt-2 border-t border-white/10 flex flex-col gap-1 text-[15px] text-gray-200">
                  <p>Department of Mathematics</p>
                  <p>Indian Institute of Technology Patna</p>
                </div>
              </div>
            </div>

            {/* 4. BOTTOM BOX */}
           <div className="bg-white border border-gray-200 rounded-xl p-6 mt-5 shadow-sm">

  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
    
    {/* Left Side */}
    <div>

      <div className="text-xl md:text-2xl font-semibold text-[#000033]">
      Mathematical Control Theory
      </div>
    </div>

    {/* Right Side */}
    <div className="shrink-0 pt-2 md:pt-0">
      <a 
        href="https://scholar.google.co.in/citations?user=WHEUGkYAAAAJ&hl=en"
      
        className="inline-block bg-blue-50 text-[#000033] font-bold px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-colors text-base"
      >
        Google Scholar
      </a>
    </div>

  </div>
</div>



        </div>

      </div>
    </div>
  )
} 