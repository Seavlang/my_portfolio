"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, scaleIn, staggerContainer, viewportConfig } from "@/lib/motion"
import {
  SiJavascript, SiReact, SiNextdotjs, SiHtml5, SiTailwindcss,
  SiGit, SiGooglecloud, SiDocker, SiLinux, SiPython,
  SiOpenjdk, SiSpringboot, SiPostgresql,
  SiPuppeteer, SiTensorflow,
  SiClaude, SiAnthropic,
} from "react-icons/si"
import type { IconType } from "react-icons"

/* ── Custom SVG icons for brands not in simple-icons ───────────────────── */

function PowerBIIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor">
      <rect x="2"  y="20" width="6" height="10" rx="1.5" opacity="0.4" />
      <rect x="10" y="13" width="6" height="17" rx="1.5" opacity="0.65" />
      <rect x="18" y="6"  width="6" height="24" rx="1.5" opacity="0.85" />
      <rect x="26" y="1"  width="4" height="29" rx="1.5" />
    </svg>
  )
}

function ExcelIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.17 1.5H8.83A1.83 1.83 0 0 0 7 3.33V6H2.83A1.83 1.83 0 0 0 1 7.83v8.34A1.83 1.83 0 0 0 2.83 18H7v2.67A1.83 1.83 0 0 0 8.83 22.5h12.34A1.83 1.83 0 0 0 23 20.67V3.33A1.83 1.83 0 0 0 21.17 1.5ZM6 15.5H3.5v-2H6Zm0-3.5H3.5v-2H6Zm0-3.5H3.5V6.5H6Zm5.28 7.7-1.78-2.9-1.78 2.9H5.5l2.7-4.2-2.5-3.8h2.2l1.6 2.7 1.6-2.7H13l-2.5 3.8 2.7 4.2Zm10.22.8H13V3.5h8.5Z" />
    </svg>
  )
}

/* ── Skill definitions ──────────────────────────────────────────────────── */

type CustomIcon = { custom: true; component: (props: { size: number }) => JSX.Element }
type SiIcon     = { custom?: false; Icon: IconType; color: string }
type SkillIcon  = CustomIcon | SiIcon

interface Skill {
  name:     string
  iconDef:  SkillIcon
  bg:       string
  category: string
}

const skills: Skill[] = [
  { name: "JavaScript",         bg: "from-yellow-400 to-amber-500",   category: "Web Frontend",    iconDef: { Icon: SiJavascript,  color: "#F7DF1E" } },
  { name: "React.js",           bg: "from-cyan-400   to-sky-500",     category: "Web Frontend",    iconDef: { Icon: SiReact,       color: "#61DAFB" } },
  { name: "Next.js",            bg: "from-gray-700   to-gray-900",    category: "Web Frontend",    iconDef: { Icon: SiNextdotjs,   color: "#ffffff" } },
  { name: "HTML / CSS",         bg: "from-orange-400 to-red-500",     category: "Web Frontend",    iconDef: { Icon: SiHtml5,       color: "#E34F26" } },
  { name: "Tailwind CSS",       bg: "from-teal-400   to-cyan-500",    category: "Web Frontend",    iconDef: { Icon: SiTailwindcss, color: "#06B6D4" } },
  { name: "Git",                bg: "from-orange-500 to-red-600",     category: "Version Control", iconDef: { Icon: SiGit,         color: "#F05032" } },
  { name: "Google Cloud",       bg: "from-blue-500   to-indigo-600",  category: "Cloud Platform",  iconDef: { Icon: SiGooglecloud, color: "#4285F4" } },
  { name: "Docker",             bg: "from-sky-400    to-blue-600",    category: "DevOps",          iconDef: { Icon: SiDocker,      color: "#2496ED" } },
  { name: "Linux",              bg: "from-slate-600  to-gray-800",    category: "Operating System",iconDef: { Icon: SiLinux,       color: "#ffffff" } },
  { name: "Python",             bg: "from-blue-500   to-yellow-400",  category: "Data Analytics",  iconDef: { Icon: SiPython,      color: "#3776AB" } },
  { name: "Power BI",           bg: "from-yellow-500 to-orange-500",  category: "Data Analytics",  iconDef: { custom: true, component: PowerBIIcon } },
  { name: "Java",               bg: "from-red-500    to-orange-600",  category: "Backend",         iconDef: { Icon: SiOpenjdk,     color: "#ED8B00" } },
  { name: "Spring Boot",        bg: "from-green-500  to-emerald-600", category: "Backend",         iconDef: { Icon: SiSpringboot,  color: "#6DB33F" } },
  { name: "PostgreSQL",         bg: "from-blue-600   to-indigo-700",  category: "Database",        iconDef: { Icon: SiPostgresql,  color: "#4169E1" } },
  { name: "Excel",              bg: "from-green-600  to-emerald-700", category: "Data Analytics",  iconDef: { custom: true, component: ExcelIcon } },
  { name: "Web Scraping",       bg: "from-purple-500 to-violet-600",  category: "Data Analytics",  iconDef: { Icon: SiPuppeteer,   color: "#40B5A4" } },
  { name: "Machine Learning",   bg: "from-orange-500 to-amber-600",   category: "Data Analytics",  iconDef: { Icon: SiTensorflow,  color: "#FF6F00" } },
  { name: "Prompt Engineering", bg: "from-violet-500 to-purple-600",  category: "AI / LLM",        iconDef: { custom: true, component: ({ size }) => <Sparkles size={size} color="#ffffff" /> } },
  { name: "Claude AI",          bg: "from-[#CC785C] to-[#B5541B]",   category: "Anthropic",        iconDef: { Icon: SiClaude,      color: "#ffffff" } },
  { name: "AI Agents",          bg: "from-[#D4956A] to-[#CC785C]",   category: "Anthropic",        iconDef: { Icon: SiAnthropic,   color: "#ffffff" } },
  { name: "MCP",                bg: "from-[#B5541B] to-[#8B3A0F]",   category: "Anthropic",        iconDef: { Icon: SiAnthropic,   color: "#ffffff" } },
]

const categoryColor: Record<string, string> = {
  "Web Frontend":    "bg-sky-50    text-sky-700    border-sky-200",
  "Version Control": "bg-orange-50 text-orange-700 border-orange-200",
  "Cloud Platform":  "bg-blue-50   text-blue-700   border-blue-200",
  "DevOps":          "bg-teal-50   text-teal-700   border-teal-200",
  "Operating System":"bg-slate-50  text-slate-700  border-slate-200",
  "Data Analytics":  "bg-violet-50 text-violet-700 border-violet-200",
  "Backend":         "bg-red-50    text-red-700    border-red-200",
  "Database":        "bg-indigo-50 text-indigo-700 border-indigo-200",
  "AI / LLM":        "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
  "Anthropic":       "bg-orange-50  text-orange-700  border-orange-200",
}

const services = [
  {
    title: "Frontend Web Development",
    icon: "💻",
    description: "Teaching modern web development using HTML, CSS, Tailwind CSS, JavaScript, React.js, and Next.js. Focus on building responsive, interactive user interfaces.",
    technologies: ["HTML/CSS", "Tailwind CSS", "JavaScript", "React.js", "Next.js"],
    courseType: "Basic Course (2024)"
  },
  {
    title: "Version Control & Deployment",
    icon: "🚀",
    description: "Instructing Git version control systems and cloud deployment using Google Cloud Platform, Linux administration, and Docker containerization.",
    technologies: ["Git", "Google Cloud", "Linux", "Docker", "Docker Compose"],
    courseType: "Basic Course (2025)"
  },
  {
    title: "Data Analytics",
    icon: "📊",
    description: "Teaching comprehensive data analysis using Python, statistical methods, data visualization, and business intelligence tools for informed decision-making.",
    technologies: ["Python", "Statistics", "Data Visualization", "Web Scraping", "EXCEL", "Power BI", "Machine Learning"],
    courseType: "Advanced Course (2024-2025)"
  },
  {
    title: "Database Management",
    icon: "🗄️",
    description: "Teaching database design and management using PostgreSQL, covering relational schema design, SQL querying, and data integrity for the 14th generation Basic Course.",
    technologies: ["PostgreSQL", "SQL", "Database Design", "Data Modeling"],
    courseType: "Basic Course (2026)"
  }
]

function SkillCard({ skill }: { skill: Skill }) {
  const iconSize = 30

  return (
    <div className="group flex-shrink-0 w-36 bg-white rounded-2xl p-4 shadow-md hover:shadow-xl border-2 border-transparent hover:border-yellow-400 transition-all duration-300 cursor-default select-none">
      {/* Icon container */}
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.bg} flex items-center justify-center shadow-md mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
        {skill.iconDef.custom ? (
          <div className="text-white">
            <skill.iconDef.component size={iconSize} />
          </div>
        ) : (
          <skill.iconDef.Icon size={iconSize} color="#ffffff" />
        )}
      </div>

      {/* Name */}
      <h3 className="font-bold text-sm text-gray-800 text-center leading-tight mb-2">
        {skill.name}
      </h3>

      {/* Category pill */}
      <div className="text-center">
        <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full border ${categoryColor[skill.category] ?? "bg-green-50 text-green-700 border-green-200"}`}>
          {skill.category}
        </span>
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto">

        {/* Teaching Services */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full text-sm font-medium text-green-800 mb-6">
            Teaching Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-yellow-400">Courses</span> I Teach
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Currently instructing at Korea Software HRD Center, empowering the next generation of IT professionals
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Card className="group hover:scale-105 transition-all duration-300 border-2 hover:border-yellow-400 shadow-lg hover:shadow-xl h-full">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <div className="mb-3">
                    <span className="inline-flex px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      {service.courseType}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-800">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-yellow-100 text-green-800 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Skills — Infinite Marquee */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-100 to-green-100 border-2 border-yellow-200 rounded-full text-base font-bold text-green-800 mb-8 shadow-lg">
            ⚡ Technical Mastery
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="text-yellow-400">Technologies</span><br />
            <span className="text-green-800">I Master & Teach</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Hover to pause · All technologies I teach and use hands-on
          </p>
        </motion.div>

        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
        >
          {/* Edge fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-yellow-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-green-50 to-transparent z-10 pointer-events-none" />

          {/* Marquee track — list duplicated so it loops seamlessly */}
          <div className="animate-marquee flex gap-5 py-4 w-max">
            {[...skills, ...skills].map((skill, i) => (
              <SkillCard key={i} skill={skill} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
