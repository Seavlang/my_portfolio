"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function FigmaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.491 4.49-4.491h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117v-6.039H8.148zm4.587 15.019c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.491 4.49-4.491c2.476 0 4.49 2.014 4.49 4.491s-2.014 4.49-4.49 4.49zm0-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.355-3.019-3.019-3.019zm0-1.471c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.491 4.49-4.491 4.49 2.014 4.49 4.491-2.014 4.49-4.49 4.49zm0-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.355-3.019-3.019-3.019z" />
    </svg>
  )
}

const projects = [
  {
    title: "Academate",
    description: "A comprehensive school management system that offers a unified platform for digitally managing and monitoring daily school activities. Students can register for specific classes and access their personal information, teachers can input students' scores and attendance, while administrators can generate detailed reports providing insights into student performance and attendance trends. This crucial web application was developed during my Basic Course at Korea Software HRD Center.",
    image: "/images/academate.png",
    technologies: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Create React App"],
    githubUrl: "https://github.com/Seavlang/Academate",
    figmaUrl: "https://www.figma.com/design/QNtYjKwQPWIy15j94jTC0b/Academate-basic-project?node-id=0-1&p=f&t=nbnr4wR5Rfy8svqz-0",
   
    featured: true,
    projectType: "Basic Course Project",
    year: "2023"
  },
  {
    title: "DataVue",
    description: "A comprehensive web service in Cambodia implementing advanced data analytics concepts. DataVue provides robust web scraping capabilities and financial data visualization, delivering insightful financial knowledge through finance-breaking news, market analysis, and economic indicators for both Cambodia and the world. Features include interactive visualization tools, a chatbot for user inquiries, and modern technologies like Python, Machine Learning, and Web Scraping.",
    image: "/images/datavue.jpg",
    technologies: ["Python", "Machine Learning", "Web Scraping", "Data Visualization", "Chatbot", "Financial Analytics"],
    githubUrl: "https://github.com/Seavlang/DataVue",
    figmaUrl: "https://www.figma.com/design/jtKVOSAchSuXsjRzd3BqWd/DataVue?node-id=1121-19534&t=zuAgttALouHShtSi-1",
   
    featured: true,
    projectType: "Advanced Course Project",
    year: "2023"
  },
  {
    title: "VirtualBiz",
    description: "A comprehensive business management platform that I raised, mentored, and led while teaching Basic Course students at KSHRD. VirtualBiz provides business owners with tools to effectively manage their businesses online and reduce costs, while offering customers a convenient marketplace to place orders and book appointment services through hundreds of shops and services.",
    image: "/images/virtualbizz.png",
    technologies: ["Project Leadership", "Mentoring", "Business Management", "E-commerce", "Marketplace", "Online Services"],
    githubUrl: "https://github.com/Seavlang/VirtualBiz",
    figmaUrl: "https://www.figma.com/design/QR00IEDs0nRsgGdPPpyoeB/VirtualBiz?node-id=1403-6472&t=orFkY0HdwrCDv1Nb-1",
    featured: true,
    projectType: "Instructor-Led Project",
    year: "2024-2025"
  },
    {
    title: "DataTalk",
    description: "The first comprehensive web service in Cambodia offering a suite of generative AI tools for businesses and analysts. I mentored and led Advanced Course students at KSHRD to develop DataTalk, which provides data source connections, data preparation, and AI chat capabilities. The platform gives digital firms a competitive edge through data collection and analysis, improving business performance and driving revenue growth using large language models, Python, and Ollama for local LLM serving.",
    image: "/images/datatalk.jpg",
    technologies: ["Python", "Ollama", "Large Language Models", "Data Analytics", "AI Chat", "Data Visualization", "Generative AI"],
    githubUrl: "https://github.com/Seavlang/DataTalk.git",
    figmaUrl: "https://www.figma.com/design/NImyhLhOWmLGuZxKsPoxHN/UX_UI-Data?node-id=0-1&t=PtJF0144mZxkcxIs-1",
    
    featured: true,
    projectType: "Advanced Instructor-Led Project",
    year: "2024"
  },
  {
    title: "TextBot",
    description: "An AI-powered platform that transforms static content into dynamic, interactive, conversational resources. TexBot allows users to query documents in natural language and get accurate, contextually relevant responses directly from uploaded documents. Built during Advanced Course in collaboration with another instructor, it features an automated chatbot interface accessible via widget or RESTful API integration, bridging the gap between dynamic user interaction and unstructured documents through real-time information retrieval.",
    image: "/images/textbot.jpg",
    technologies: ["AI", "Natural Language Processing", "Language Models", "RESTful API", "Chatbot Interface", "Document Processing", "Real-time Retrieval"],
    githubUrl: "https://github.com/Seavlang/ChatbotUI",
    figmaUrl: "https://www.figma.com/design/AG1NttxrTW5NAMIYTC4zTo/AskMyDocs?node-id=0-1&t=NB3mUo0QmEfrKfuI-1",
    featured: true,
    projectType: "Collaborative Instructor Project",
    year: "2024"
  },
  {
    title: "DevConnect",
    description: "A platform that connects developers and recruiters, addressing challenges in talent acquisition and skill showcasing within the technology sector. I'm raising and mentoring Basic Course students at KSHRD to develop DevConnect, which offers developers tools for project collaboration, coding challenges, resume building, and profile creation to highlight GitHub contributions. Recruiters benefit from job posting capabilities and access to talent demonstrated through real-time activities, promoting teamwork and building a vibrant technology community.",
    image: "/images/devConnect.png",
    technologies: ["SpringBoot", "Next.js", "PostgreSQL", "GitHub API", "Resume Builder", "Coding Challenges", "Job Portal", "Developer Platform"],
    githubUrl: "https://github.com/Seavlang/DevConnect",
    figmaUrl: "https://www.figma.com/design/bgjQDfLg2iFH6AlEWpjM5a/DevConnect?node-id=3077-111178&t=TLx0b7eCBpgwoyN8-1",

    featured: true,
    projectType: "New Basic Course Project",
    year: "2025"
  },
  {
    title: "Dombon Knhom (តំបន់ខ្ញុំ)",
    description: "A modern web ecosystem designed to enhance local event discovery and community engagement across Cambodia, developed by 14th generation Basic Course students at KSHRD under my leadership. Dombon Knhom gives everyday users an interactive map view to explore local activities and a localized social feed to share experiences, while a gamified badge system encourages active participation. Event creators can draft events and provincial moderators review and approve content through a multi-role workflow, built on Next.js, Spring Boot, and PostgreSQL for a scalable, secure platform.",
    image: "/images/dombonknhom.png",
    technologies: ["Next.js", "Spring Boot", "PostgreSQL", "REST APIs", "Role-based Access", "Interactive Maps", "Project Leadership"],
    githubUrl: "https://github.com/14th-Gen-Basic-Course-Final-Project/Dombon-Khnom-UI.git",
    figmaUrl: "https://www.figma.com/design/O35Zf5jhk8h00dkqjqJaCC/%E1%9E%8F%E1%9F%86%E1%9E%94%E1%9E%93%E1%9F%8B%E1%9E%81%E1%9F%92%E1%9E%89%E1%9E%BB%E1%9F%86?node-id=2535-63343&t=04Axp5nK39rYQjCa-1",
    liveUrl: "https://dombonknhom.kshrd.app/",
    featured: true,
    projectType: "14th Generation Basic Course Project",
    year: "2026"
  },
  {
    title: "Cognito",
    description: "A project built to apply hands-on skills from an intensive AI training course on the Claude ecosystem — covering Claude Skills, Sub-agents, Hooks, and the Model Context Protocol (MCP). Cognito was conceived, built, and deployed within a 2-day sprint, exploring agentic workflows and automated tool-use patterns powered by Claude.",
    image: "/images/cognito.png",
    technologies: ["Claude", "Claude Skills", "Sub-agents", "MCP", "Hooks", "Agentic AI"],
    githubUrl: "https://github.com/orgs/ai-group03/repositories",
    liveUrl: "https://cognito.kshrd.app/",
    featured: true,
    projectType: "AI Training Project",
    year: "2026"
  }
]

const additionalProjects = [
  {
    title: "Teaching Materials Portal",
    description: "A web platform for sharing teaching resources and course materials with students, built for my instructor role.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop&auto=format",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  },
  {
    title: "Student Progress Tracker",
    description: "A tool for tracking student assignments, grades, and progress in various courses I teach.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop&auto=format",
    technologies: ["Java", "Spring Boot", "MySQL", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  }
]

export function Projects() {
  const [showAcademateAchievements, setShowAcademateAchievements] = useState(false)
  const [showDatavueAchievements, setShowDatavueAchievements] = useState(false)
  const [showVirtualbizAchievements, setShowVirtualbizAchievements] = useState(false)
  const [showDatatalkAchievements, setShowDatatalkAchievements] = useState(false)
  const [showTexbotAchievements, setShowTexbotAchievements] = useState(false)
  const [showDevconnectAchievements, setShowDevconnectAchievements] = useState(false)

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 border border-yellow-200 rounded-full text-sm font-medium text-green-800 mb-6">
            Featured Projects
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-yellow-400">Learning</span><br />
            <span className="text-green-800">Journey Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Projects that showcase my development from student to instructor at Korea Software HRD Center
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`group relative bg-white rounded-2xl transition-all duration-300 hover:translate-y-[-4px] ${
              index === 0 ? 'shadow-lg shadow-yellow-200/40 border border-yellow-200' : 'shadow-md shadow-gray-200/40 border border-gray-100'
            } hover:shadow-xl hover:shadow-gray-300/20 overflow-hidden backdrop-blur-sm`}>
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                index === 0 ? 'bg-gradient-to-br from-yellow-50/60 to-green-50/60' :
                index === 1 ? 'bg-gradient-to-br from-blue-50/60 to-purple-50/60' :
                index === 2 ? 'bg-gradient-to-br from-green-50/60 to-teal-50/60' :
                index === 3 ? 'bg-gradient-to-br from-purple-50/60 to-pink-50/60' :
                index === 4 ? 'bg-gradient-to-br from-orange-50/60 to-red-50/60' :
                'bg-gradient-to-br from-cyan-50/60 to-blue-50/60'
              }`}></div>
              
              <div className="relative z-10 grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  
                  {/* Featured Badge */}
                  {index === 0 && (
                    <div className="absolute top-3 left-3">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        ⭐ Featured
                      </div>
                    </div>
                  )}
                  
                  {/* Project Type Badge */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className={`backdrop-blur-md bg-white/90 px-3 py-1 rounded-lg text-xs font-medium shadow-md ${
                      index === 0 ? 'text-yellow-700 border border-yellow-200' :
                      index === 1 ? 'text-blue-700 border border-blue-200' :
                      index === 2 ? 'text-green-700 border border-green-200' :
                      index === 3 ? 'text-purple-700 border border-purple-200' :
                      index === 4 ? 'text-orange-700 border border-orange-200' :
                      'text-cyan-700 border border-cyan-200'
                    }`}>
                      {project.projectType} • {project.year}
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-3 p-6 flex flex-col justify-between">
                  <div className="mb-4">
                    {/* Title */}
                    <h3 className={`text-xl md:text-2xl font-bold mb-3 ${
                      index === 0 ? 'text-yellow-700' :
                      index === 1 ? 'text-blue-700' :
                      index === 2 ? 'text-green-700' :
                      index === 3 ? 'text-purple-700' :
                      index === 4 ? 'text-orange-700' :
                      'text-cyan-700'
                    }`}>
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className={`px-2 py-1 text-xs font-medium rounded-lg ${
                            index === 0 ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
                            index === 1 ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                            index === 2 ? 'bg-green-100 text-green-700 border border-green-200' :
                            index === 3 ? 'bg-purple-100 text-purple-700 border border-purple-200' :
                            index === 4 ? 'bg-orange-100 text-orange-700 border border-orange-200' :
                            'bg-cyan-100 text-cyan-700 border border-cyan-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-lg border border-gray-200">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 flex-wrap">
                      {project.figmaUrl && (
                        <Button size="sm" className={`gap-1 shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105 ${
                          index === 0 ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white' :
                          index === 1 ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white' :
                          index === 2 ? 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white' :
                          index === 3 ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white' :
                          index === 4 ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white' :
                          'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
                        }`} asChild>
                          <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                            <FigmaIcon className="h-3 w-3" />
                            Design
                          </a>
                        </Button>
                      )}
                      {(project as { liveUrl?: string }).liveUrl && (
                        <Button size="sm" className="gap-1 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200" asChild>
                          <a href={(project as { liveUrl?: string }).liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3" />
                            Visit
                          </a>
                        </Button>
                      )}
                      {index === 0 && (
                        <Button
                          size="sm"
                          className="gap-1 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-white shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
                          onClick={() => setShowAcademateAchievements(true)}
                        >
                          <Award className="h-3 w-3" />
                          Achievement
                        </Button>
                      )}
                      {index === 1 && (
                        <Button 
                          size="sm"
                          className="gap-1 bg-gradient-to-r from-blue-400 to-indigo-400 hover:from-blue-500 hover:to-indigo-500 text-white shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
                          onClick={() => setShowDatavueAchievements(true)}
                        >
                          <Award className="h-3 w-3" />
                          Achievement
                        </Button>
                      )}
                      {index === 2 && (
                        <Button 
                          size="sm"
                          className="gap-1 bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-white shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
                          onClick={() => setShowVirtualbizAchievements(true)}
                        >
                          <Award className="h-3 w-3" />
                          Achievement
                        </Button>
                      )}
                      {index === 3 && (
                        <Button 
                          size="sm"
                          className="gap-1 bg-gradient-to-r from-purple-400 to-violet-400 hover:from-purple-500 hover:to-violet-500 text-white shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
                          onClick={() => setShowDatatalkAchievements(true)}
                        >
                          <Award className="h-3 w-3" />
                          Achievement
                        </Button>
                      )}
                      {index === 4 && (
                        <Button 
                          size="sm"
                          className="gap-1 bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
                          onClick={() => setShowTexbotAchievements(true)}
                        >
                          <Award className="h-3 w-3" />
                          Achievement
                        </Button>
                      )}
                      {index === 5 && (
                        <Button 
                          size="sm"
                          className="gap-1 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 text-white shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
                          onClick={() => setShowDevconnectAchievements(true)}
                        >
                          <Award className="h-3 w-3" />
                          Achievement
                        </Button>
                      )}
              
                      <Button size="sm" variant="outline" className="gap-1 border border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400 shadow-sm hover:shadow-md transition-all duration-200" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <GithubIcon className="h-3 w-3" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
            </motion.div>
          ))}
        </motion.div>


        {/* Academate Achievement Popup Modal */}
        {showAcademateAchievements && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
              {/* Close Button */}
              <button
                onClick={() => setShowAcademateAchievements(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>

              {/* Modal Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 border border-yellow-200 rounded-full text-sm font-medium text-green-800 mb-4">
                  <Award className="h-4 w-4" />
                  My Achievements
                </div>
                <h3 className="text-3xl font-bold text-green-800 mb-2">
                  Academic <span className="text-yellow-500">Excellence</span>
                </h3>
                <p className="text-gray-600">
                  Top 2 student achievement among 73 students at Korea Software HRD Center
                </p>
              </div>

              {/* Achievement Images */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 border-2 border-yellow-200">
                    <Image
                      src="/images/top2.png"
                      alt="Top 2 Achievement"
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Top 2 Student Certificate</h4>
                  <p className="text-sm text-gray-600">Official recognition for ranking 2nd among 73 students</p>
                </div>

                <div className="text-center">
                  <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 border-2 border-yellow-200">
                    <Image
                      src="/images/mytop2.png"
                      alt="My Top 2 Achievement"
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Academic Excellence Award</h4>
                  <p className="text-sm text-gray-600">Personal achievement documentation for outstanding academic performance</p>
                </div>
              </div>

              {/* Achievement Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <div className="text-2xl font-bold text-green-800">2/73</div>
                  <div className="text-sm text-gray-600">Student Ranking</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                  <div className="text-2xl font-bold text-yellow-600">2023</div>
                  <div className="text-sm text-gray-600">Basic Course</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <div className="text-2xl font-bold text-green-800">KSHRD</div>
                  <div className="text-sm text-gray-600">Institution</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DataVue Achievement Popup Modal */}
        {showDatavueAchievements && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
              {/* Close Button */}
              <button
                onClick={() => setShowDatavueAchievements(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>

              {/* Modal Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-sm font-medium text-green-800 mb-4">
                  <Award className="h-4 w-4" />
                  DataVue Achievements
                </div>
                <h3 className="text-3xl font-bold text-green-800 mb-2">
                  Outstanding <span className="text-blue-500">Excellence</span>
                </h3>
                <p className="text-gray-600">
                  Top 1 student among 60 students in Advanced Course & DataVue achieved Top 2 Project ranking
                </p>
              </div>

              {/* Achievement Images */}
          <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 border-2 border-green-200">
                    <Image
                      src="/images/advanceAchivement.png"
                      alt="Advanced Course Achievement"
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Top 1 Student Certificate</h4>
                  <p className="text-sm text-gray-600">Ranked #1 among 60 students in Advanced Course</p>
                </div>

                <div className="text-center">
                  <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 border-2 border-purple-200">
                    <Image
                      src="/images/testimony.png"
                      alt="Testimony"
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Korean Testimony</h4>
                  <p className="text-sm text-gray-600">Delivered testimony in Korean about study journey at KSHRD</p>
                </div>

                <div className="text-center">
                  <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 border-2 border-blue-200">
                    <Image
                      src="/images/datavue1.png"
                      alt="DataVue Project Recognition 1"
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Top 1 Student & Testimony Certificate</h4>
                  <p className="text-sm text-gray-600">I got top 1 student certificate and delivered testimony in Korean about study journey at KSHRD</p>
                </div>

                <div className="text-center">
                  <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 border-2 border-blue-200">
                    <Image
                      src="/images/datavue2.png"
                      alt="DataVue Project Recognition 2"
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Project Excellence Certificate</h4>
                  <p className="text-sm text-gray-600">Official recognition for DataVue Top 2 Project achievement</p>
                </div>
              </div>

              {/* Achievement Stats */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                  <div className="text-2xl font-bold text-yellow-600">1/60</div>
                  <div className="text-sm text-gray-600">Student Ranking</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600">2/8</div>
                  <div className="text-sm text-gray-600">Project Ranking</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <div className="text-2xl font-bold text-green-800">450</div>
                  <div className="text-sm text-gray-600">Commits</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <div className="text-2xl font-bold text-purple-600">KR</div>
                  <div className="text-sm text-gray-600">Korean Testimony</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VirtualBiz Achievement Popup Modal */}
        {showVirtualbizAchievements && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
              {/* Close Button */}
              <button
                onClick={() => setShowVirtualbizAchievements(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>

              {/* Modal Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-sm font-medium text-blue-800 mb-4">
                  <Award className="h-4 w-4" />
                  Student Team Achievement
                </div>
                <h3 className="text-3xl font-bold text-blue-800 mb-2">
                  Mentoring <span className="text-blue-500">Success</span> Story
                </h3>
                <p className="text-gray-600">
                  My students won the Best Project Presentation Award for VirtualBiz under my mentorship and guidance
                </p>
              </div>

              {/* Achievement Images */}
              <div className="grid md:grid-cols-1 gap-6">
                <div className="text-center">
                  <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 border-2 border-green-200">
                  <Image
                      src="/images/virtualbiz.png"
                      alt="VirtualBiz Presentation Achievement"
                    width={400}
                      height={300}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Student Team Achievement</h4>
                  <p className="text-sm text-gray-600">My students won the Best Project Presentation Award for their VirtualBiz project delivery - demonstrating the effectiveness of my mentoring approach</p>
                </div>
              </div>

              {/* Achievement Stats */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="text-2xl font-bold text-blue-800">1st</div>
                  <div className="text-sm text-gray-600">Student Team Award</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                  <div className="text-2xl font-bold text-yellow-600">5+</div>
                  <div className="text-sm text-gray-600">Students Mentored</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Mentoring Success</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <div className="text-2xl font-bold text-purple-600">2024</div>
                  <div className="text-sm text-gray-600">Teaching Year</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DataTalk Achievement Popup Modal */}
        {showDatatalkAchievements && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
              {/* Close Button */}
              <button
                onClick={() => setShowDatatalkAchievements(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>

              {/* Modal Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 border border-purple-200 rounded-full text-sm font-medium text-purple-800 mb-4">
                  <Award className="h-4 w-4" />
                  Advanced Student Achievement
                </div>
                <h3 className="text-3xl font-bold text-purple-800 mb-2">
                  Live Demo <span className="text-purple-500">Excellence</span>
                </h3>
                <p className="text-gray-600">
                  My Advanced Course students won the Best Live Project Demonstration Award for DataTalk - delivering a real-life AI demonstration to the audience
                </p>
              </div>

              {/* Achievement Images */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 border-2 border-purple-200">
                    <Image
                      src="/images/dataTalk1.png"
                      alt="DataTalk Live Demonstration 1"
                      width={300}
                      height={200}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 border-2 border-purple-200">
                    <Image
                      src="/images/dataTalk2.jpg"
                      alt="DataTalk Live Demonstration 2"
                      width={300}
                    height={200}
                      className="w-full h-auto object-contain"
                  />
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 border-2 border-purple-200">
                    <Image
                      src="/images/dataTalk3.jpg"
                      alt="DataTalk Live Demonstration 3"
                      width={300}
                      height={200}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <h4 className="text-lg font-semibold text-purple-800 mb-2">Best Live Project Demonstration Award</h4>
                <p className="text-sm text-gray-600">My Advanced Course students delivered an exceptional real-life demonstration of DataTalk to the audience, showcasing Cambodia's first comprehensive AI web service</p>
              </div>

              {/* Achievement Stats */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <div className="text-2xl font-bold text-purple-800">1st</div>
                  <div className="text-sm text-gray-600">Live Demo Award</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600">AI/ML</div>
                  <div className="text-sm text-gray-600">Real-life Demo</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <div className="text-2xl font-bold text-green-600">100+</div>
                  <div className="text-sm text-gray-600">Audience Members</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                  <div className="text-2xl font-bold text-yellow-600">2024</div>
                  <div className="text-sm text-gray-600">Demo Year</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TexBot Achievement Popup Modal */}
        {showTexbotAchievements && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
              {/* Close Button */}
              <button
                onClick={() => setShowTexbotAchievements(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>

              {/* Modal Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full text-sm font-medium text-orange-800 mb-4">
                  <Award className="h-4 w-4" />
                  Personal Achievement
                </div>
                <h3 className="text-3xl font-bold text-orange-800 mb-2">
                  Technical <span className="text-orange-500">Innovation</span>
                </h3>
                <p className="text-gray-600">
                  Built TextBot - an AI-powered document interaction platform in collaboration with another instructor, and published it as an npm widget package
                </p>
              </div>

              {/* Achievement Images */}
              <div className="grid md:grid-cols-1 gap-6">
                <div className="text-center">
             
                  <h4 className="text-lg font-semibold text-orange-800 mb-2">AI Widget Published to NPM</h4>
                  <p className="text-sm text-gray-600">Developed and published TexBot as a reusable npm package (@kshrd/chatbotwidget), transforming static documents into dynamic, conversational resources with natural language querying capabilities</p>
                  <div className="mt-4">
                    <a 
                      href="https://www.npmjs.com/package/@kshrd/chatbotwidget" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
                    >
                      📦 View NPM Package
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Achievement Stats */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <div className="text-2xl font-bold text-orange-800">📦</div>
                  <div className="text-sm text-gray-600">NPM Package</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <div className="text-2xl font-bold text-red-600">Widget</div>
                  <div className="text-sm text-gray-600">Reusable Component</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600">API</div>
                  <div className="text-sm text-gray-600">RESTful + Widget</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <div className="text-2xl font-bold text-purple-600">2024</div>
                  <div className="text-sm text-gray-600">Published</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DevConnect Achievement Popup Modal */}
        {showDevconnectAchievements && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
              {/* Close Button */}
              <button
                onClick={() => setShowDevconnectAchievements(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>

              {/* Modal Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 border border-cyan-200 rounded-full text-sm font-medium text-cyan-800 mb-4">
                  <Award className="h-4 w-4" />
                  2025 Student Project
                </div>
                <h3 className="text-3xl font-bold text-cyan-800 mb-2">
                  Student <span className="text-cyan-500">Excellence</span> Achievement
                </h3>
                <p className="text-gray-600">
                  My 2025 Basic Course students achieved Top 2 Project among 8 teams and won Best Presenter Award for DevConnect
                </p>
              </div>

              {/* Achievement Images */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 border-2 border-cyan-200">
                    <Image
                      src="/images/devConnect1.png"
                      alt="DevConnect Best Presentation Award"
                      width={300}
                      height={200}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 border-2 border-cyan-200">
                    <Image
                      src="/images/devConnect2.jpg"
                      alt="DevConnect Top 2 Project Achievement"
                      width={300}
                      height={200}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <h4 className="text-lg font-semibold text-cyan-800 mb-2">Top 2 Project + Best Presenter Award</h4>
                <p className="text-sm text-gray-600">My 2025 Basic Course students achieved Top 2 ranking among 8 project teams and won the Best Presenter Award for their exceptional DevConnect presentation to the audience</p>
              </div>

              {/* Achievement Stats */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100">
                  <div className="text-2xl font-bold text-cyan-800">Top 2</div>
                  <div className="text-sm text-gray-600">Project Ranking</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                  <div className="text-2xl font-bold text-yellow-600">1st</div>
                  <div className="text-sm text-gray-600">Best Presenter</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600">8</div>
                  <div className="text-sm text-gray-600">Total Teams</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <div className="text-2xl font-bold text-green-600">2025</div>
                  <div className="text-sm text-gray-600">Achievement Year</div>
                </div>
              </div>
          </div>
        </div>
        )}
      </div>
    </section>
  )
}