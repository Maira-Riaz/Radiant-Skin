"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const ParallaxBackground = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 500])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 700])

  return (
    <div ref={ref} className="fixed inset-0 z-0">
      <motion.div style={{ y: y1 }} className="absolute top-10 left-10 w-20 h-20 bg-rose-200 rounded-full opacity-50" />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-20 w-32 h-32 bg-pink-200 rounded-full opacity-50"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-20 left-1/4 w-24 h-24 bg-rose-100 rounded-full opacity-50"
      />
    </div>
  )
}

export default ParallaxBackground

