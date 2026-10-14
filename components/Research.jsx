import { projects } from '@/data/portfolio';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Cpu,
  Database,
  FileText,
  Radio,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  Compass,
} from 'lucide-react';

export default function Research() {
  const floodProject =
    projects.find((p) => p.id === 'flood-ews') || {
      title: 'AI + IoT Flood Early-Warning System',
      subtitle: 'Final-Year Research Project',
      status: 'Ongoing Research',
      problem:
        'Communities in the Nowshera/Kabul River region of Pakistan face recurring flood risks. Existing warning systems often lack localized, data-driven forecasting capabilities that could support earlier flood-risk awareness.',
      approach:
        'Exploring how machine learning, hydrological data, and IoT-based monitoring can support localized flood-risk forecasting and early-warning decisions.',
      implementation:
        'The project combines hydrological discharge data analysis, machine-learning forecasting experiments, potential IoT sensor telemetry, dashboard-based monitoring, and SMS alert mechanisms as planned system components.',
      tech: ['Python', 'Machine Learning', 'IoT', 'Data Analysis', 'Pandas', 'NumPy', 'Matplotlib'],
      limitations:
        'This is ongoing research. Some components are under development or evaluation. The system is not yet deployed or proven to prevent loss of life.',
      futureWork:
        'Sensor deployment, real-time data pipeline, model validation with historical flood events, community testing.',
    };

  return (
    <section id="research" className="py-20 bg-[#0A0F1E] text-[#F3F4F6] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#151D2E] text-[#38BDF8] border border-[#1E293B] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Investigation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F3F4F6]">
            Featured <span className="text-[#38BDF8]">Research</span>
          </h2>
          <p className="mt-4 text-[#9CA3AF] text-base sm:text-lg">
            Applied machine learning and hydrological telemetry research focused on disaster preparedness and early hazard mitigation.
          </p>
        </div>

        {/* Single Focused Research Presentation Card */}
        <div className="bg-[#111827] border-y border-r border-[#1E293B] border-l-4 border-l-[#38BDF8] rounded-2xl shadow-2xl overflow-hidden">
          {/* Academic Header Banner */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-[#1E293B] bg-[#151D2E]/40">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold tracking-wide bg-[#151D2E] text-[#38BDF8] border border-[#1E293B]">
                <FileText className="w-3.5 h-3.5" />
                <span>Final-Year Research Initiative • UET Peshawar / SID Lab</span>
              </div>

              {/* Current Stage Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/30">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                <span>Current Stage: {floodProject.status || 'Ongoing Research'}</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F3F4F6] tracking-tight leading-tight">
              AI + IoT Hydrological Flood Early-Warning System
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#38BDF8] font-medium">
              Regional Focus: Nowshera & Kabul River Basin, Khyber Pakhtunkhwa, Pakistan
            </p>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 space-y-10">
            {/* 1. Problem Statement & Real-World Impact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Problem Statement */}
              <div className="bg-[#151D2E]/50 border border-[#1E293B] rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-[#38BDF8] font-semibold text-sm uppercase tracking-wider mb-3">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <span>01. Problem Statement</span>
                  </div>
                  <p className="text-[#F3F4F6] text-base font-medium leading-relaxed mb-3">
                    Catastrophic Flash & Riverine Flood Vulnerability
                  </p>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    {floodProject.problem}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#1E293B] text-xs text-[#9CA3AF]">
                  Primary hazard: Sudden river discharge surges with constrained evacuation lead times.
                </div>
              </div>

              {/* Real-World Impact Goals */}
              <div className="bg-[#151D2E]/50 border border-[#1E293B] rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-[#38BDF8] font-semibold text-sm uppercase tracking-wider mb-3">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>02. Real-World Impact Goals</span>
                  </div>
                  <p className="text-[#F3F4F6] text-base font-medium leading-relaxed mb-3">
                    Data-Driven Lead Time for Community Action
                  </p>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    Targeting a 6 to 12-hour advance advisory window using predictive discharge modeling, giving local authorities and vulnerable riverside residents actionable preparation time before flood peaks arrive.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#1E293B] text-xs text-[#9CA3AF]">
                  Key objective: Transform raw upstream hydrological telemetry into prioritized local hazard levels.
                </div>
              </div>
            </div>

            {/* 2. Data Sources & Methods Explored */}
            <div className="bg-[#151D2E]/30 border border-[#1E293B] rounded-xl p-6 sm:p-7">
              <div className="flex items-center gap-2.5 text-[#38BDF8] font-semibold text-sm uppercase tracking-wider mb-4">
                <Database className="w-4 h-4 text-[#38BDF8]" />
                <span>03. Data Sources & Methods Explored</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-[#F3F4F6] mb-2">Hydrological Inputs</h4>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    River gauge discharge measurements, water-level trends, and upstream runoff telemetry across the Kabul River basin, incorporating historical high-water events.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F3F4F6] mb-2">Machine Learning Approaches</h4>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    Time-series regression models, anomaly detection, and sequence forecasting (LSTM/GRU and gradient boosted decision trees) trained on historical flood hydrographs.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F3F4F6] mb-2">Telemetry & Edge Prototyping</h4>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    Ultrasonic and hydrostatic water-level sensor telemetry prototypes sending data over GSM/cellular networks for centralized ingestion and analysis.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. CSS Architecture Diagram */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5 text-[#38BDF8] font-semibold text-sm uppercase tracking-wider">
                  <Activity className="w-4 h-4 text-[#38BDF8]" />
                  <span>04. End-to-End System Architecture</span>
                </div>
                <span className="text-xs text-[#9CA3AF] font-mono">Sequential Data Pipeline</span>
              </div>

              {/* Diagram container */}
              <div className="bg-[#0A0F1E] border border-[#1E293B] rounded-xl p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                  {/* Step 1: Data Sources */}
                  <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-5 relative group hover:border-[#38BDF8]/60 transition duration-300">
                    <div className="w-10 h-10 rounded-lg bg-[#151D2E] text-[#38BDF8] flex items-center justify-center mb-3 border border-[#1E293B]">
                      <Database className="w-5 h-5" />
                    </div>
                    <div className="text-xs text-[#38BDF8] font-mono uppercase font-semibold">Stage 01</div>
                    <h5 className="text-base font-bold text-[#F3F4F6] mt-1 mb-2">Data Sources</h5>
                    <ul className="text-xs text-[#9CA3AF] space-y-1.5 list-disc list-inside">
                      <li>River gauge telemetry</li>
                      <li>Historical discharge logs</li>
                      <li>Precipitation datasets</li>
                    </ul>
                    {/* Desktop connector arrow */}
                    <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#151D2E] border border-[#1E293B] items-center justify-center text-[#38BDF8]">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Step 2: ML Processing */}
                  <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-5 relative group hover:border-[#38BDF8]/60 transition duration-300">
                    <div className="w-10 h-10 rounded-lg bg-[#151D2E] text-[#38BDF8] flex items-center justify-center mb-3 border border-[#1E293B]">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div className="text-xs text-[#38BDF8] font-mono uppercase font-semibold">Stage 02</div>
                    <h5 className="text-base font-bold text-[#F3F4F6] mt-1 mb-2">ML Processing</h5>
                    <ul className="text-xs text-[#9CA3AF] space-y-1.5 list-disc list-inside">
                      <li>Feature normalization</li>
                      <li>Time-series regression</li>
                      <li>Surge trend projection</li>
                    </ul>
                    {/* Desktop connector arrow */}
                    <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#151D2E] border border-[#1E293B] items-center justify-center text-[#38BDF8]">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Step 3: Risk Assessment */}
                  <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-5 relative group hover:border-[#38BDF8]/60 transition duration-300">
                    <div className="w-10 h-10 rounded-lg bg-[#151D2E] text-[#38BDF8] flex items-center justify-center mb-3 border border-[#1E293B]">
                      <ShieldAlert className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="text-xs text-amber-400 font-mono uppercase font-semibold">Stage 03</div>
                    <h5 className="text-base font-bold text-[#F3F4F6] mt-1 mb-2">Risk Assessment</h5>
                    <ul className="text-xs text-[#9CA3AF] space-y-1.5 list-disc list-inside">
                      <li>Hydrological thresholds</li>
                      <li>Confidence metrics</li>
                      <li>Severity classification</li>
                    </ul>
                    {/* Desktop connector arrow */}
                    <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#151D2E] border border-[#1E293B] items-center justify-center text-[#38BDF8]">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Step 4: Warning Delivery */}
                  <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-5 relative group hover:border-[#38BDF8]/60 transition duration-300">
                    <div className="w-10 h-10 rounded-lg bg-[#151D2E] text-[#38BDF8] flex items-center justify-center mb-3 border border-[#1E293B]">
                      <Radio className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="text-xs text-emerald-400 font-mono uppercase font-semibold">Stage 04</div>
                    <h5 className="text-base font-bold text-[#F3F4F6] mt-1 mb-2">Warning Delivery</h5>
                    <ul className="text-xs text-[#9CA3AF] space-y-1.5 list-disc list-inside">
                      <li>Web telemetry dashboard</li>
                      <li>Automated SMS alerts</li>
                      <li>Municipal dispatch log</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Limitations and Future Work (Academic Rigor) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#1E293B]">
              {/* Limitations clearly stated */}
              <div className="bg-[#151D2E]/40 border border-amber-500/20 rounded-xl p-6">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Research Limitations & Academic Transparency</span>
                </div>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  {floodProject.limitations}
                </p>
                <div className="mt-4 p-3 rounded-lg bg-[#111827] border border-[#1E293B] text-xs text-[#9CA3AF]/80 space-y-1">
                  <div>• Model is currently evaluated on retrospective and synthetic hydrological data.</div>
                  <div>• Not currently certified as a primary life-safety early-warning dispatch system.</div>
                </div>
              </div>

              {/* Future Work */}
              <div className="bg-[#151D2E]/40 border border-[#38BDF8]/20 rounded-xl p-6">
                <div className="flex items-center gap-2 text-[#38BDF8] font-semibold text-sm uppercase tracking-wider mb-3">
                  <Compass className="w-4 h-4 shrink-0" />
                  <span>Planned Future Work & Roadmap</span>
                </div>
                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-3">
                  Key milestones under active engineering and scientific exploration:
                </p>
                <ul className="text-xs text-[#9CA3AF] space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#38BDF8] font-bold">→</span>
                    <span>Direct physical deployment and calibration of low-power IoT telemetry stations along the Nowshera riverbank.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38BDF8] font-bold">→</span>
                    <span>Continuous data pipeline streaming to cloud inference endpoints for real-time validation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#38BDF8] font-bold">→</span>
                    <span>Localized community alert drills and offline-first broadcast integration.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
