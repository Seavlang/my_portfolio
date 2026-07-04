"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from "@/lib/motion"

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

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: GithubIcon,
      url: "https://github.com/Seavlang",
      color: "hover:bg-gray-900 hover:text-white hover:border-gray-900",
      description: "Check out my code and projects"
    },
    {
      name: "LinkedIn",
      icon: LinkedinIcon,
      url: "https://www.linkedin.com/in/vey-seavlang-4912b0288",
      color: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
      description: "Professional network and experience"
    },
    {
      name: "Facebook",
      icon: FacebookIcon,
      url: "https://www.facebook.com/share/14Ju3sbwGtf/?mibextid=wwXIfr",
      color: "hover:bg-blue-500 hover:text-white hover:border-blue-500",
      description: "Connect with me on Facebook"
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      url: "https://www.instagram.com/_seavlang_?igsh=dW9ibGk2NHdlOHRx&utm_source=qr",
      color: "hover:bg-pink-500 hover:text-white hover:border-pink-500",
      description: "Follow my daily updates"
    },
    {
      name: "Telegram",
      icon: MessageCircle,
      url: "https://t.me/seavlangg",
      color: "hover:bg-blue-400 hover:text-white hover:border-blue-400",
      description: "Message me on Telegram"
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full text-sm font-medium text-green-800 mb-6">
            <Mail className="h-4 w-4" />
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="text-green-600">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to collaborate or have questions about my work? Let's connect through these platforms or reach out directly!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Social Media Section */}
          <motion.div
            className="space-y-6"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
          >
            <Card className="border-2 border-green-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800">Follow Me</CardTitle>
                <CardDescription className="text-gray-600">
                  Connect with me on social media and stay updated with my latest projects and insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="space-y-3"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportConfig}
                >
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <motion.div key={social.name} variants={fadeInUp}>
                        <Button
                          variant="outline"
                          className={`w-full justify-start gap-4 p-5 h-auto transition-all duration-300 ${social.color} border-2`}
                          asChild
                        >
                          <a href={social.url} target="_blank" rel="noopener noreferrer">
                            <IconComponent className="h-5 w-5 flex-shrink-0" />
                            <div className="text-left">
                              <div className="font-semibold">{social.name}</div>
                              <div className="text-sm text-gray-500">{social.description}</div>
                            </div>
                          </a>
                        </Button>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
          >
            {[
              { icon: Mail, label: "Email", value: "sievlangvey@gmail.com" },
              { icon: Phone, label: "Phone", value: "088 275 8284" },
              { icon: MapPin, label: "Location", value: "Toul Kork, Phnom Penh" },
            ].map(({ icon: Icon, label, value }) => (
              <motion.div key={label} variants={fadeInRight}>
                <Card className="border-2 border-green-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <Icon className="h-6 w-6 text-green-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-800">{label}</h3>
                        <p className="text-gray-600">{value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div variants={fadeInRight}>
              <Card className="border-2 border-green-800 bg-green-800 text-white shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Available for collaborations</h3>
                  <p className="text-sm text-green-100">
                    I'm currently available for teaching opportunities, technical mentoring, and project collaborations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
