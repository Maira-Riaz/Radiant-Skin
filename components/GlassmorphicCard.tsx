import type React from "react"

interface GlassmorphicCardProps {
  children: React.ReactNode
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({ children }) => {
  return (
    <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl p-8 shadow-lg">{children}</div>
  )
}

export default GlassmorphicCard

