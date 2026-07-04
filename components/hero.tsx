"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn, fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from "@/lib/motion"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div className="space-y-4" variants={fadeInLeft}>
              <h1 className="text-5xl lg:text-5xl font-bold leading-tight">
                I'm <span className="text-yellow-400">Vey Seavlang</span>,<br />
                <span className="text-green-800">IT Instructor.</span><br />
              </h1>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                I'm an IT instructor at Korea Software HRD Center, teaching the next generation of developers.
                Specializing in web development, data analytics, version control, and cloud deployment.
                Passionate about sharing knowledge and empowering students with cutting-edge technology skills.
              </p>
            </motion.div>

            <motion.div className="flex flex-wrap items-center gap-4" variants={fadeInUp}>
              <Button size="lg" variant="outline" className="gap-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white px-8 py-3 rounded-full font-medium" asChild>
                <a href="#contact">
                  Get in touch
                </a>
              </Button>
            </motion.div>

            <motion.div className="flex items-center gap-4" variants={staggerContainer}>
              {[
                {
                  href: "https://github.com/Seavlang",
                  label: "GitHub",
                  icon: <GithubIcon className="h-5 w-5" />
                },
                {
                  href: "https://www.linkedin.com/in/vey-seavlang-4912b0288",
                  label: "LinkedIn",
                  icon: <LinkedinIcon className="h-5 w-5" />
                },
                {
                  href: "https://www.facebook.com/share/14Ju3sbwGtf/?mibextid=wwXIfr",
                  label: "Facebook",
                  icon: (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )
                },
                {
                  href: "https://www.instagram.com/_seavlang_?igsh=dW9ibGk2NHdlOHRx&utm_source=qr",
                  label: "Instagram",
                  icon: (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  )
                },
                {
                  href: "https://t.me/seavlangg",
                  label: "Telegram",
                  icon: <MessageCircle className="h-5 w-5" />
                }
              ].map(({ href, label, icon }) => (
                <motion.div key={label} variants={fadeInUp}>
                  <Button variant="outline" size="icon" className="rounded-full border-green-200 hover:bg-green-100" asChild>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {icon}
                      <span className="sr-only">{label}</span>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image Section */}
          <motion.div
            className="relative"
            variants={fadeInRight}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
          >
            {/* Yellow circle background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-80 h-80 bg-yellow-400 rounded-full opacity-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              />
            </div>

            {/* Main profile image */}
            <div className="relative z-10 flex items-center justify-center">
              <motion.div
                className="relative w-72 h-72"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Vey Seavlang Profile Picture"
                  fill
                  className="rounded-full object-cover border-8 border-white shadow-xl"
                  priority
                />
              </motion.div>
            </div>

            {/* Floating badges — each has a unique float speed/amplitude so they feel organic */}
            {[
              {
                className: "absolute top-16 right-8 z-20",
                enterDelay: 0.6, floatDuration: 3.0, floatY: 10,
                content: <div className="bg-green-800 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">IT Instructor</div>
              },
              {
                className: "absolute bottom-16 left-8 z-20",
                enterDelay: 0.7, floatDuration: 2.6, floatY: 8,
                content: <a href="https://kshrd.com.kh/" target="_blank" rel="noopener noreferrer" className="block bg-yellow-400 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-yellow-300 transition-colors">KSHRD Faculty</a>
              },
              {
                className: "absolute top-32 left-4 z-20",
                enterDelay: 0.8, floatDuration: 3.4, floatY: 12,
                content: <div className="bg-white border-2 border-green-200 text-green-800 px-3 py-2 rounded-full text-xs font-medium shadow-lg">Web Development</div>
              },
              {
                className: "absolute bottom-32 right-4 z-20",
                enterDelay: 0.9, floatDuration: 2.8, floatY: 9,
                content: <div className="bg-white border-2 border-yellow-200 text-yellow-600 px-3 py-2 rounded-full text-xs font-medium shadow-lg">Data Analytics</div>
              },
              {
                className: "absolute top-8 left-1/2 transform -translate-x-1/2 z-20",
                enterDelay: 1.0, floatDuration: 3.2, floatY: 11,
                content: <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">Git & Deployment</div>
              },
              {
                className: "absolute bottom-8 right-1/2 transform translate-x-1/2 z-20",
                enterDelay: 1.1, floatDuration: 2.4, floatY: 7,
                content: <div className="bg-yellow-300 text-green-800 px-3 py-1 rounded-full text-xs font-medium shadow-lg">Cloud & Docker</div>
              },
            ].map(({ className, enterDelay, floatDuration, floatY, content }, i) => (
              <motion.div
                key={i}
                className={className}
                initial={{ opacity: 0, scale: 0.5, y: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -floatY, 0],
                }}
                transition={{
                  opacity: { duration: 0.4, delay: enterDelay },
                  scale: { duration: 0.4, delay: enterDelay },
                  y: {
                    duration: floatDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: enterDelay + 0.4,
                  },
                }}
              >
                {content}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
