"use client"
import React from 'react'
import InstitutionalNavbar from "../../components/navbar"
import Footer from "../../components/footer"

export default function ConferencesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbfa]">
      
      {/*Navbar */}
      <InstitutionalNavbar />
      
      {/* Main Content  */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-12 space-y-10">
        
      
        <div className="border-b border-gray-200 pb-4">
      
          <h2 className="text-3xl font-extrabold tracking-tight text-[#004b87]">
            Conference Proceedings
          </h2>
     
         
        </div>

        {/*  Table Data  */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            {/* Base table */}
            <table className="w-full text-left border-collapse text-base">
              
              {/* Table Column Definitions */}
              <thead>

                <tr className="bg-[#003d70] text-white text-xs sm:text-sm uppercase font-bold tracking-wider">
                  <th className="py-4 px-4 w-24 text-center">Year</th>
                  <th className="py-4 px-6">Conference Paper Details</th>
                </tr>
              </thead>

    
              <tbody className="divide-y divide-gray-100 text-slate-700">

                {/* 2021 Records */}
                <tr className="hover:bg-slate-50/60 transition">
                
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top">2021</td>
                  <td className="py-5 px-6 space-y-1.5">
                  <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">On Functional Observers for Descriptor Systems</p>
                    <p className="text-sm text-gray-500 font-medium">J. Jaiswal, M.K. Gupta, and N.K. Tomar — <span className="italic">Proceedings of American Control Conference 2021 (ACC 2021)</span>, IEEE, 2021.</p>
                    <p className="text-xs sm:text-sm text-[#004b87] font-semibold">📍 New Orleans, Louisiana, USA (May 26-28, 2021)</p>
                  </td>
                </tr>

                {/* 2020 Records */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top">2020</td>
                  <td className="py-5 px-6 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">PD observer design for Descriptor Systems with Unknown Inputs</p>
                    <p className="text-sm text-gray-500 font-medium">M.K. Gupta, N.K. Tomar, D. Sharma, and J. Jaiswal — <span className="italic">Proceedings of 5th IEEE Conference on Recent Advances and Innovations in Engineering (ICRAIE 2020)</span>, IEEE, 2020.</p>
                    <p className="text-xs sm:text-sm text-[#004b87] font-semibold">📍 Poornima College of Engineering, Rajasthan, India (Dec 1-3, 2020)</p>
                  </td>
                </tr>

                {/* 2018 Records */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top">2018</td>
                  <td className="py-5 px-6 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Continuous-Discrete Quadrature Filters for Intercepting a Ballistic Target on Reentry using Seeker Measurements</p>
                    <p className="text-sm text-gray-500 font-medium">R. Radhakrishnan, S. Bhaumik, and N.K. Tomar — <span className="italic">Proceedings of Third IFAC International Conference on Advances in Control and Optimization of Dynamical Systems (ACODS 2018)</span>, IFAC-PapersOnLine Journal, Elsevier, vol. 51(1), pp. 383-388.</p>
                    <p className="text-xs sm:text-sm text-[#004b87] font-semibold">📍 Dr. APJ Abdul Kalam Missile Complex, Hyderabad, India (Feb 18-22, 2018)</p>
                  </td>
                </tr>

                {/* 2017 Records */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top" rowSpan={2}>2017</td>
                  <td className="py-5 px-6 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Continuous-discrete shifted Rayleigh filter for underwater passive bearings-only target tracking</p>
                    <p className="text-sm text-gray-500 font-medium">R. Radhakrishnan, S. Bhaumik, and N.K. Tomar — <span className="italic">Proceedings of the Asian Control Conference (ASCC-2017)</span>, IEEE, 2017. DOI: 10.1109/ASCC.2017.8287272</p>
                    <p className="text-xs sm:text-sm text-[#004b87] font-semibold">📍 Gold Coast Convention Centre, Australia (Dec 17-20, 2017)</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Observer Design Approach to Synchronize Lorenz Chaotic Systems for Secure Communication</p>
                    <p className="text-sm text-gray-500 font-medium">S. Chandra, M.K. Gupta, and N.K. Tomar — <span className="italic">Proceedings of the International Conference on Computational Modelling and Simulation</span>, 2017.</p>
                    <p className="text-xs sm:text-sm text-[#004b87] font-semibold">📍 University of Colombo, Sri Lanka (May 17-19, 2017)</p>
                  </td>
                </tr>

                {/* 2016 Records */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top" rowSpan={2}>2016</td>
                  <td className="py-5 px-6 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Ballistic target tracking and its interception using suboptimal filters on reentry</p>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">R. Radhakrishnan, M. Saha, S. Bhaumik, and N.K. Tomar — <span className="italic">Proceedings of the Sixth International Symposium on Embedded Computing and System Design (ISED-2016)</span>, IEEE, 2016. DOI: 10.1109/ISED.2016.7977096</p>
                    <p className="text-xs sm:text-sm text-[#004b87] font-semibold">📍 Indian Institute of Technology Patna, Bihta, India (Dec 15-17, 2016)</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Controllability Analysis of Linear Time Invariant Descriptor Systems</p>
                    <p className="text-sm text-gray-500 font-medium">V.K. Mishra and N.K. Tomar — <span className="italic">4th International Conference on Advances in Control and Optimization of Dynamical Systems (ACODS 2016)</span>, IFAC-PapersOnLine Journal, Elsevier, vol. 49(1), pp. 532-536.</p>
                    <p className="text-xs sm:text-sm text-[#004b87] font-semibold">📍 NIT Tiruchirappalli, India (Feb 01-05, 2016)</p>
                  </td>
                </tr>

                {/* 2015 Records */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top" rowSpan={4}>2015</td>
                  <td className="py-5 px-6 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Impulse Controllability and Impulse Elimination in Rectangular Descriptor Systems</p>
                    <p className="text-sm text-gray-500 font-medium">V.K. Mishra, N.K. Tomar, and M.K. Gupta — <span className="italic">15th International Conference on Control, Automation and Systems (ICCAS 2015)</span>, IEEE, 2015. DOI: 10.1109/ICCAS.2015.7364930</p>
                    <p className="text-xs sm:text-sm text-[#004b87] font-semibold">📍 BEXCO, Busan, Korea (October 13-16, 2015)</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Synchronization of Rossler Chaotic System for Secure Communication via Descriptor Observer Design Approach</p>
                    <p className="text-sm text-gray-500 font-medium">S. Chandra, M.K. Gupta, and N.K. Tomar — <span className="italic">International Conference on Signal Processing, Computing and Control (ISPCC 2015)</span>, IEEE, 2015. DOI: 10.1109/ISPCC.2015.7375009</p>
                    <p className="text-xs sm:text-sm text-[#004b87] font-semibold">📍 Jaypee University of Information Technology, Waknaghat, Solan, India (Sep 24-26, 2015)</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Quadrature Filters for Underwater Passive Bearings-Only Target Tracking</p>
                    <p className="text-sm text-gray-500 font-medium">R. Radhakrishnan, A.K. Singh, S. Bhaumik, and N.K. Tomar — <span className="italic">Sensor Signal Processing for Defence (SSPD 2015)</span>, IEEE, 2015. DOI: 10.1109/SSPD.2015.7288519</p>
                    <p className="text-xs sm:text-sm text-[#004b87] font-semibold">📍 The University of Edinburgh, Scotland, United Kingdom (Sep 09-10, 2015)</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">IMM-Cubature Quadrature Kalman Filter for Manoeuvring Target Tracking</p>
                    <p className="text-sm text-gray-500 font-medium">R. Radhakrishnan, A.K. Singh, S. Bhaumik, and N.K. Tomar — <span className="italic">International Conference on Signal Processing, Informatics, Communication and Energy Systems (SPICES 2015)</span>, IEEE, 2015, pp. 1-5. DOI: 10.1109/SPICES.2015.7091498</p>
                    <p className="text-xs sm:text-sm text-[#004b87] font-semibold">📍 NIT Calicut, Kozhikode, India (Feb 19-21, 2015)</p>
                  </td>
                </tr>

                {/* 2014 Records */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top" rowSpan={4}>2014</td>
                  <td className="py-5 px-6 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Bearing only Tracking Using Sparse-grid Gauss-Hermite Filter</p>
                    <p className="text-sm text-gray-500 font-medium">R. Radhakrishnan, S. Bhaumik, N.K. Tomar, and A.K. Singh — <span className="italic">International Conference on Intelligent Computing and Applications (ICICA 2014)</span>, Springer, 2015, pp. 349-356.</p>
                    <p className="text-xs sm:text-sm text-[#004b87] font-semibold">📍 NIT Durgapur, India (Dec 22-24, 2014)</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">PD observer design for linear descriptor systems</p>
                    <p className="text-sm text-gray-500 font-medium">M.K. Gupta, N.K. Tomar, and S. Bhaumik — <span className="italic">International Conference on Mathematical Sciences (ICMS-2014)</span>, Elsevier, 2014, pp. 40-43.</p>
                    <p className="text-xs sm:text-sm text-[#004b87] font-semibold">📍 Sathyabama University, Chennai, India (July 17-19, 2014)</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Detectability and observer design for linear descriptor systems</p>
                    <p className="text-sm text-gray-500 font-medium">M.K. Gupta, N.K. Tomar, and S. Bhaumik — <span className="italic">22nd Mediterranean Conference on Control and Automation (MED 2014)</span>, IEEE, 2014, pp. 1094-1098. DOI: 10.1109/MED.2014.6961520</p>
                    <p className="text-xs sm:text-sm text-[#004b87] font-semibold">📍 University of Palermo, Palermo, Italy (June 16-19, 2014)</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">On Observability of Irregular Descriptor Systems</p>
                    <p className="text-sm text-gray-500 font-medium">M.K. Gupta, N.K. Tomar, and S. Bhaumik — <span className="italic">Advances in Control and Optimization of Dynamical Systems (ACODS 2014)</span>, IFAC, vol. 3(1), 2014, pp. 376-379.</p>
                    <p className="text-xs sm:text-sm text-[#004b87] font-semibold">📍 IIT Kanpur, Kanpur, India (March 13-15, 2014)</p>
                  </td>
                </tr>

                {/* 2008 Records */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top">2008</td>
                  <td className="py-5 px-6 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Exact Controllability of Semilinear Thermoelastic System with Control and non-linearity in Thermal Component Only</p>
                    <p className="text-sm text-gray-500 font-medium">N.K. Tomar and N. Sukavanam — <span className="italic">ICIAM07, PAMM</span>, vol. 7(1), 2008, pp. 2030039 - 2030040.</p>
                    <p className="text-xs sm:text-sm text-[#004b87] font-semibold">📍 ETH Zurich and University of Zurich, Switzerland (July 16-20, 2007)</p>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/*  Footer */}
      <Footer />
    </div>
  )
}