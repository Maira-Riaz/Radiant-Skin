"use client"

import type React from "react"
import { motion } from "framer-motion"

interface ShimmerButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

const ShimmerButton: React.FC<ShimmerButtonProps> = ({ children, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-rose-600 transition duration-300 ease-out border-2 border-rose-500 rounded-full shadow-md group"
      onClick={onClick}
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-rose-500 group-hover:translate-x-0 ease">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-rose-500 transition-all duration-300 transform group-hover:translate-x-full ease">
        {children}
      </span>
      <span className="relative invisible">{children}</span>
    </motion.button>
  )
}

export default ShimmerButton

