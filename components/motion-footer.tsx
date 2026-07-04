"use client"

import { motion } from "framer-motion"
import { fadeInUp, viewportConfig } from "@/lib/motion"

export function MotionFooter() {
  return (
    <motion.footer
      className="bg-background border-t py-8 px-4"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground">
          © 2026 Vey Seavlang. Built with Next.js, Tailwind CSS, and shadcn/ui.
        </p>
      </div>
    </motion.footer>
  )
}
