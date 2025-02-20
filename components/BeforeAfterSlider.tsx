"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    let clientX: number

    if ("touches" in e) {
      clientX = e.touches[0].clientX
    } else {
      clientX = e.clientX
    }

    const position = ((clientX - containerRect.left) / containerRect.width) * 100
    setSliderPosition(Math.min(Math.max(position, 0), 100))
  }, [])

  return (
    <div
      ref={containerRef}
<<<<<<< HEAD
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden cursor-ew-resize rounded-lg"
=======
      className="relative w-full h-[500px] overflow-hidden cursor-ew-resize rounded-lg"
>>>>>>> e0ac673 (Initial commit)
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After image (full width) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage || "/placeholder.svg"}
          alt="After treatment"
          fill
          className="object-cover"
<<<<<<< HEAD
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 70vw"
          priority
        />
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/80 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-rose-600 font-semibold text-xs sm:text-sm">
=======
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute top-4 right-4 bg-white/80 px-3 py-1 rounded-full text-rose-600 font-semibold">
>>>>>>> e0ac673 (Initial commit)
          After
        </div>
      </div>

      {/* Before image (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <Image
          src={beforeImage || "/placeholder.svg"}
          alt="Before treatment"
          fill
          className="object-cover"
<<<<<<< HEAD
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 70vw"
          priority
        />
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/80 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-rose-600 font-semibold text-xs sm:text-sm">
=======
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-rose-600 font-semibold">
>>>>>>> e0ac673 (Initial commit)
          Before
        </div>
      </div>

      {/* Slider line */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize" style={{ left: `${sliderPosition}%` }}>
        {/* Slider handle */}
<<<<<<< HEAD
        <div className="absolute top-1/2 left-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg flex items-center justify-center">
          <div className="w-0.5 h-3 sm:h-4 bg-rose-500" />
=======
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg flex items-center justify-center">
          <div className="w-0.5 h-4 bg-rose-500" />
>>>>>>> e0ac673 (Initial commit)
        </div>
      </div>
    </div>
  )
}

export default BeforeAfterSlider

