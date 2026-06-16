"use client"
import React from 'react'
import InstitutionalNavbar from "../../components/navbar"
import Footer from "../../components/footer"

export default function PublicationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbfa]">
      {/* 1.Navbar */}
      <InstitutionalNavbar />
      
      {/* 2. Main Publications Content Area */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-12 space-y-10">
        
        {/* Header */}
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#004b87]">Research Publications</h2>

        </div>

        {/*DATA TABLE */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-base">
              
              <thead>
                <tr className="bg-[#003d70] text-white text-xs sm:text-sm uppercase font-bold tracking-wider">
                  <th className="py-4 px-4 w-24 text-center">Year</th>
                  <th className="py-4 px-6">Publication Details</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 text-slate-700">

                {/* 2021 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top">2021</td>
                  <td className="py-5 px-6 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Necessary and sufficient conditions for ODE observer design of descriptor systems</p>
                    <p className="text-sm text-gray-500 font-medium">J. Jaiswal, M.K. Gupta, and N.K. Tomar — <span className="italic">Systems & Control Letters</span>, vol. 151, pp. 104916.</p>
                  </td>
                </tr>

                {/* 2020 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top">2020</td>
                  <td className="py-5 px-6 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Mild solution and controllability of second order nonlocal retarded semilinear systems</p>
                    <p className="text-sm text-gray-500 font-medium">S. Kumar and N.K. Tomar — <span className="italic">IMA Journal of Mathematical Control and Information</span>, vol. 37(1), pp. 39-49.</p>
                  </td>
                </tr>

                {/* 2019 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top" rowSpan={3}>2019</td>
                  <td className="py-5 px-6 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Continuous-discrete filters for bearings-only underwater target tracking problems</p>
                    <p className="text-sm text-gray-500 font-medium">R. Radhakrishnan, S. Bhaumik, and N.K. Tomar — <span className="italic">Asian Journal of Control</span>, vol. 21(4), pp. 1576-1586.</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Option Implied Risk-neutral Density Estimation: A Robust and Flexible Method</p>
                    <p className="text-sm text-gray-500 font-medium">A. Kundu, S. Kumar, and N.K. Tomar — <span className="italic">Computational Economics</span>, vol. 54(2), pp. 705-728.</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Gaussian sum shifted Rayleigh filter for underwater bearings-only target tracking problems</p>
                    <p className="text-sm text-gray-500 font-medium">R. Radhakrishnan, S. Bhaumik, and N.K. Tomar — <span className="italic">IEEE Journal of Oceanic Engineering</span>, vol. 44, pp. 492-501.</p>
                  </td>
                </tr>

                {/* 2018 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top" rowSpan={2}>2018</td>
                  <td className="py-5 px-6 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Unknown inputs observer design for descriptor systems with monotone nonlinearities</p>
                    <p className="text-sm text-gray-500 font-medium">M.K. Gupta, N.K. Tomar, and M. Darouach — <span className="italic">International Journal of Robust and Nonlinear Control</span>, vol. 28, pp. 5481-5494.</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Regularization and index reduction for linear differential-algebraic systems</p>
                    <p className="text-sm text-gray-500 font-medium">V.K. Mishra, N.K. Tomar, and M.K. Gupta — <span className="italic">Computational and Applied Mathematics</span>, vol. 37(4), pp. 4587-4598.</p>
                  </td>
                </tr>

                {/* 2017 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top" rowSpan={4}>2017</td>
                  <td className="py-5 px-6 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Alternate checking criteria for reachable controllability of rectangular descriptor systems</p>
                    <p className="text-sm text-gray-500 font-medium">V.K. Mishra and N.K. Tomar — <span className="italic">Kybernetika</span>, vol. 53(5), pp. 820-837.</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Observer design for semilinear descriptor systems with applications to chaos-based secure communication</p>
                    <p className="text-sm text-gray-500 font-medium">M.K. Gupta, N.K. Tomar, V.K. Mishra, and S. Bhaumik — <span className="italic">International Journal of Applied and Computational Mathematics</span>, vol. 3(1), pp. 1313-1324.</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Index reduction for rectangular descriptor systems via feedbacks</p>
                    <p className="text-sm text-gray-500 font-medium">V.K. Mishra, N.K. Tomar, and M.K. Gupta — <span className="italic">Cogent Engineering</span>, vol. 4(1), 2017, pp. 1319786. Taylor &amp; Francis Online. DOI: 10.1080/23311916.2017.1319786.</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Mild solution and constrained local controllability of semi-linear boundary control systems</p>
                    <p className="text-sm text-gray-500 font-medium">S. Kumar and N.K. Tomar — <span className="italic">Journal of Dynamical and Control Systems</span>, vol. 23(4), pp. 735-751.</p>
                  </td>
                </tr>

                {/* 2016 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top" rowSpan={5}>2016</td>
                  <td className="py-5 px-6 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Call option price function in Bernstein polynomial basis with no-arbitrage inequality constraints</p>
                    <p className="text-sm text-gray-500 font-medium">A. Kundu, S. Kumar, N.K. Tomar, and S. K. Gupta — <span className="italic">Journal of Inequalities and Applications</span>, vol. 2016, 2016:153.</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Multiple Sparse-grid Gauss-Hermite Filtering</p>
                    <p className="text-sm text-gray-500 font-medium">R. Radhakrishnan, A. K. Singh, S. Bhaumik, and N.K. Tomar — <span className="italic">Applied Mathematical Modelling</span>, vol. 40(7-8), pp. 4441-4450.</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">On Complete and Strong Controllability for Rectangular Descriptor Systems</p>
                    <p className="text-sm text-gray-500 font-medium">V.K. Mishra and N.K. Tomar — <span className="italic">Circuits, Systems, and Signal Processing</span>, vol. 35(4), pp. 1395-1406.</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">On Detectability and Observer Design for Rectangular Linear Descriptor Systems</p>
                    <p className="text-sm text-gray-500 font-medium">M.K. Gupta, N.K. Tomar, and S. Bhaumik — <span className="italic">International Journal of Dynamics and Control</span>, vol. 4(4), pp. 438-446.</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">On Controllability and Normalizability for Linear Descriptor Systems</p>
                    <p className="text-sm text-gray-500 font-medium">V.K. Mishra, N.K. Tomar, and Mahendra Kumar Gupta — <span className="italic">Journal of Control, Automation and Electrical Systems</span>, vol. 27(1), pp. 19-28.</p>
                  </td>
                </tr>

                {/* 2015 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top" rowSpan={2}>2015</td>
                  <td className="py-5 px-6 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Full- and reduced-order observer design for rectangular descriptor systems with unknown inputs</p>
                    <p className="text-sm text-gray-500 font-medium">M.K. Gupta, N.K. Tomar, and S. Bhaumik — <span className="italic">Journal of The Franklin Institute</span>, vol. 352(3), pp. 1250-1264.</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">PD Observer Design for Rectangular Linear Descriptor Systems</p>
                    <p className="text-sm text-gray-500 font-medium">M.K. Gupta and N.K. Tomar — <span className="italic">Bharatiya Vaigyanik evam Audyogik Anusandhan Patrika</span>, vol. 23(1), June 2015, pp. 48-53. (In Hindi, Publisher: CSIR - NISCAIR)</p>
                  </td>
                </tr>

                {/* 2014 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top">2014</td>
                  <td className="py-5 px-6 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Observer Design for Descriptor Systems with Lipschitz Nonlinearities: an LMI Approach</p>
                    <p className="text-sm text-gray-500 font-medium">M.K. Gupta, N.K. Tomar, and S. Bhaumik — <span className="italic">Nonlinear Dynamics and Systems Theory</span>, vol. 14(3), pp. 291-301.</p>
                  </td>
                </tr>

                {/* 2013 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top">2013</td>
                  <td className="py-5 px-6 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">On Controllability of Nonlocal Retarded Semilinear Distributed Control Systems</p>
                    <p className="text-sm text-gray-500 font-medium">N.K. Tomar and S. Kumar — <span className="italic">Differential Equations and Dynamical Systems</span>, vol. 21(3), pp. 215-223.</p>
                  </td>
                </tr>

                {/* 2012 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top" rowSpan={2}>2012</td>
                  <td className="py-5 px-6 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Controllability of impulsive fractional order semilinear evolution equations with nonlocal conditions</p>
                    <p className="text-sm text-gray-500 font-medium">N.K. Tomar and J. Dabas — <span className="italic">Journal of Nonlinear Evolution Equations and Applications</span>, vol. 2012(5), pp. 57-67.</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Approximate controllability of nonlocal semilinear time-varying delay control systems</p>
                    <p className="text-sm text-gray-500 font-medium">N.K. Tomar and S. Kumar — <span className="italic">Nonlinear Dynamics and Systems Theory</span>, vol. 12(3), pp. 303-310.</p>
                  </td>
                </tr>

                {/* 2011 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top" rowSpan={3}>2011</td>
                  <td className="py-5 px-6 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Hybridization of Neural Nets and Genetic Algorithms to Compute the Boundary Control for Controlled Heat Equation</p>
                    <p className="text-sm text-gray-500 font-medium">N.K. Tomar, N. Sukavanam, and K. P. Singh — <span className="italic">European Journal of Pure and Applied Mathematics</span>, vol. 4(2), pp. 117-128.</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Exact Controllability of Semilinear Third Order Dispersion Equation</p>
                    <p className="text-sm text-gray-500 font-medium">N.K. Tomar and N. Sukavanam — <span className="italic">The Journal of Nonlinear Science and its Applications</span>, vol. 4(4), pp. 308-314.</p>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-6 border-t border-gray-100 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Approximate Controllability of Non-densely defined Semilinear Delayed Control Systems</p>
                    <p className="text-sm text-gray-500 font-medium">N.K. Tomar and N. Sukavanam — <span className="italic">Nonlinear Studies</span>, vol. 18(2), pp. 229-234.</p>
                  </td>
                </tr>

                {/* 2008 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top">2008</td>
                  <td className="py-5 px-6 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Exact Controllability of Semilinear Thermoelastic System with Control Solely in Thermal Equation</p>
                    <p className="text-sm text-gray-500 font-medium">N.K. Tomar and N. Sukavanam — <span className="italic">Numerical Functional Analysis and Optimization</span>, vol. 29(9-10), pp. 1171-1179.</p>
                  </td>
                </tr>

                {/* 2007 */}
                <tr className="hover:bg-slate-50/60 transition">
                  <td className="py-5 px-4 text-center font-extrabold text-sky-700 bg-sky-50/40 text-base sm:text-lg align-top">2007</td>
                  <td className="py-5 px-6 space-y-1.5">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-snug">Approximate Controllability of semilinear delay control systems</p>
                    <p className="text-sm text-gray-500 font-medium">N. Sukavanam and N.K. Tomar — <span className="italic">Nonlinear Functional Analysis and Applications</span>, vol. 12(1), pp. 53-59.</p>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  )
}