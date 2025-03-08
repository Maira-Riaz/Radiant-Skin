"use client"

import { useCallback, useEffect, useState } from "react"
import { loadFull } from "tsparticles"
import type { Engine } from "tsparticles-engine"

const ParticleBackground = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  if (!isClient) return null

  return (
    <div className="fixed inset-0 z-0">
      {isClient && (
        <div id="tsparticles" className="absolute inset-0">
          {/* Particles will be loaded here via tsparticles */}
          {/* This is a simplified version that doesn't require react-particles */}
        </div>
      )}
    </div>
  )
}

export default ParticleBackground

