import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Section } from './components/Section';
import { Badge } from './components/Badge';
import { ExperienceCard } from './components/ExperienceCard';
import { MouseGlow } from './components/MouseGlow';
import { ThemeToggle } from './components/ThemeToggle';
import { NavBar } from './components/NavBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <MouseGlow />
      <ThemeToggle />

      <main>
        {/* Hero Section */}
        <div className="relative min-h-[85vh] flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center">
            <div className="mb-12">

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-none">
                Gokul Rajeeve
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                Building enterprise solutions with <span className="text-gray-900 dark:text-white font-semibold">Power Platform</span> and <span className="text-gray-900 dark:text-white font-semibold">modern web technologies</span>.
                Delivering mission-critical tools across various sectors.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 text-base">
                <a
                  href="mailto:gokulrajeeve20@gmail.com"
                  className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl font-medium"
                >
                  <Mail size={18} />
                  <span>Get in Touch</span>
                </a>
                <a
                  href="https://linkedin.com/in/gokulrajeeve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors font-medium"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+91 7306025932</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Bangalore, Karnataka</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <NavBar />

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-20">
          <div className="space-y-24">
            {/* About */}
            <Section title="About" id="about">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Senior Developer with <span className="font-semibold text-gray-900 dark:text-white">3+ years of experience</span> bridging the gap between Enterprise Power Platform solutions and modern Full-Stack Web Architecture.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Expert in building complex Dataverse environments, secure ERP integrations, and custom Next.js applications. Proven track record delivering mission-critical tools across various sectors.
              </p>
            </Section>

          {/* Skills */}
          <Section title="Skills" id="skills">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-blue-600 rounded-full"></span>
                  Microsoft Power Platform
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>CDS & SharePoint</Badge>
                  <Badge>Canvas Apps</Badge>
                  <Badge>Model-Driven Apps</Badge>
                  <Badge>Power BI</Badge>
                  <Badge>Power Automate</Badge>
                  <Badge>Power Platform Administration</Badge>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-purple-600 rounded-full"></span>
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>C#</Badge>
                  <Badge>Swift</Badge>
                  <Badge>PowerFX</Badge>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-green-600 rounded-full"></span>
                  Frameworks & Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>.NET</Badge>
                  <Badge>Redux</Badge>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-pink-600 rounded-full"></span>
                  Styling & UI
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Material UI</Badge>
                  <Badge>Bootstrap</Badge>
                  <Badge>Shadcn</Badge>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-orange-600 rounded-full"></span>
                  Databases & Cloud
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Firebase</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>Dataverse</Badge>
                  <Badge>Azure API Management</Badge>
                  <Badge>Redis</Badge>
                  <Badge>CosmosDB</Badge>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-cyan-600 rounded-full"></span>
                  DevOps & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>GitHub Actions</Badge>
                  <Badge>Azure DevOps</Badge>
                  <Badge>Vercel</Badge>
                  <Badge>CI/CD</Badge>
                  <Badge>Jest</Badge>
                  <Badge>Vitest</Badge>
                </div>
              </div>
            </div>
          </Section>

          {/* Employment History */}
          <Section title="Employment History" id="experience">
            <ExperienceCard
              title="Freelance Full Stack Developer"
              company="European Realtor Agency"
              period="November 2025 – Present"
              location="Remote"
            >
              <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-2">
                Stack: Next.js 16, React 19, TypeScript, Supabase, PostgreSQL, AWS S3, Vitest, DigitalOcean
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Solely architected and delivered a bespoke data collection platform, replacing Google Forms to ensure complete client data sovereignty and privacy compliance.</li>
                <li>Designed a dual-layer security architecture, utilizing Supabase Auth for admins and custom JWT/HTTP-only cookies for secure, code-gated public access.</li>
                <li>Engineered a PostgreSQL JSONB schema with strict Row-Level Security (RLS), enabling dynamic form structures and rigorous multi-tenant isolation.</li>
                <li>Built a complex drag-and-drop interface (15+ field types) using @dnd-kit, supporting multi-page conditional logic and TipTap rich-text editing.</li>
                <li>Implemented advanced state management with custom hooks for undo/redo, auto-saving drafts to local storage, and server-side persistence.</li>
                <li>Deployed production infrastructure on DigitalOcean Droplets.</li>
                <li>Established a comprehensive testing suite using Vitest and React Testing Library, ensuring end-to-end type safety via Zod validation schemas.</li>
              </ul>
            </ExperienceCard>

            <ExperienceCard
              title="Freelance Technical Consultant"
              company="Automotive Parts Manufacturer"
              period="August 2025 – November 2025"
              location="Remote"
            >
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                Steered the delivery of 4 enterprise applications by establishing development standards, conducting code reviews, and mentoring client developers:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Machine Utilization:</strong> Led the implementation of IoT telemetry ingestion, guiding developers on Dataverse best practices to ensure scalable performance for downtime tracking.</li>
                <li><strong>Financial Insight Tool:</strong> Oversaw the development of the revenue pipeline dashboard, enforcing granular security roles and validating complex Business Process Flows (BPF) logic.</li>
                <li><strong>Label Printing:</strong> Prototyped the Zebra Printer REST integration and guided the team on implementing custom connectors for batch control and error-proofing.</li>
                <li><strong>Field Worker App:</strong> Defined the technical roadmap for offline capabilities, supervising the implementation of automated escalation workflows to minimize field downtime.</li>
              </ul>
            </ExperienceCard>

            <ExperienceCard
              title="Software Developer"
              company="Krish Services Group"
              period="January 2022 — August 2025"
              location="Microsoft Gold Partner, Bangalore"
            >
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Led a team of 7 in designing and developing Power Platform Canvas & Model-Driven apps for stakeholders across regions.</li>
                <li>Designed and structured CDS databases and SFTP libraries, ensuring optimized data management.</li>
                <li>Integrated CDS with ERP systems (SAP, JD Edwards) via REST APIs and Azure API Management, enabling 100+ real-time synced transactions, and improving ERP sync performance with Redis.</li>
                <li>Developed and implemented 40+ Power Automate Flows to automate business processes and migrations.</li>
                <li>Built and deployed custom connectors, plugins, and Power Apps components (PCF), managing code versioning and releases with GitHub and Azure DevOps.</li>
                <li>Administered security roles and enabled dynamic authorizations via Power Automate.</li>
                <li><strong>Notable achievement:</strong> Built a Power Platform solution adopted across 4 countries, scaling to 500+ monthly users, driving client retention and business growth. Spearheaded expansion and scaled a 7-member development team, managing code repositories and solution deployments.</li>
              </ul>
            </ExperienceCard>

            <ExperienceCard
              title="Product Engineer"
              company="Frugal Scientific"
              period="August 2021 — December 2021"
              location="Bangalore"
            >
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Developed and documented high-quality products across the lifecycle.</li>
                <li>Conducted client demos, integrated requirements, and served as primary POC between developers and stakeholders.</li>
                <li>Collaborated to create ERP web portal scenarios, and developed a membership website with Angular + Node.js, deployed on client infrastructure.</li>
                <li><strong>Notable achievement:</strong> Designed deployment-ready solutions while providing direct reports to the VP, ensuring alignment and successful delivery.</li>
              </ul>
            </ExperienceCard>
          </Section>

          {/* Education */}
          <Section title="Education" id="education">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">Bachelors in Mechatronics</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">Manipal Institute of Technology</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm shrink-0 font-medium">April 2016 — April 2020</p>
            </div>
          </Section>

          {/* Certifications */}
          <Section title="Certifications" id="certifications">
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-blue-600 dark:text-blue-400 mt-1.5 text-xl">•</span>
                <span>PL-900: Microsoft Power Platform Fundamentals</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-blue-600 dark:text-blue-400 mt-1.5 text-xl">•</span>
                <span>PL-400: Microsoft Power Platform Developer Associate</span>
              </li>
            </ul>
          </Section>
          </div>
        </div>
      </main>
    </div>
  );
}
