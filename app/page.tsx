"use client"

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import Link from "next/link"
import ParallaxBackground from "@/components/ParallaxBackground"
import GlassmorphicCard from "@/components/GlassmorphicCard"
import ProductCarousel from "@/components/ProductCarousel"
import TestimonialMarquee from "@/components/TestimonialMarquee"
import BeforeAfterSlider from "@/components/BeforeAfterSlider"
import ShimmerButton from "@/components/ShimmerButton"

export default function Home() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 100])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <ParallaxBackground />
      <HeroSection />
      <ProductShowcase />
      <TestimonialSection />
      <BeforeAfterSection />
      <CTASection y1={y1} y2={y2} />
    </main>
  )
}

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center text-rose-900">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Radiant Skin Awaits
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          Discover the secret to naturally glowing skin
        </motion.p>
        <Link href="/shop">
          <ShimmerButton>Shop Now</ShimmerButton>
        </Link>
      </div>
    </section>
  )
}

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Hydrating Serum",
      image:
        "https://images.unsplash.com/photo-1601049541067-adaf79e7408e?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 49.99,
    },
    {
      id: 2,
      name: "Rejuvenating Cream",
      image:
        "https://plus.unsplash.com/premium_photo-1674949802338-f94005eb5b0a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 59.99,
    },
    {
      id: 3,
      name: "Gentle Cleanser",
      image:
        "https://images.unsplash.com/photo-1629198726018-604230bdb091?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 29.99,
    },
    {
      id: 4,
      name: "Brightening Mask",
      image:
        "https://images.unsplash.com/photo-1619153709656-b2cf605b819b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 39.99,
    },
    {
      id: 5,
      name: "Firming Eye Cream",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2tpbmNhcmUlMjBwcm9kdWN0fGVufDB8fDB8fHww",
      price: 44.99,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-rose-900">Our Bestsellers</h2>
        <ProductCarousel products={products} />
      </div>
    </section>
  )
}

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah L.",
      quote: "My skin has never looked better! I'm glowing from within.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces&auto=format&q=60",
    },
    {
      name: "Michael R.",
      quote: "Finally, a skincare line that delivers on its promises.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces&auto=format&q=60",
    },
    {
      name: "Emily T.",
      quote: "I've received so many compliments since I started using these products!",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&auto=format&q=60",
    },
    {
      name: "David K.",
      quote: "The results are amazing. My skin feels rejuvenated and looks younger.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&auto=format&q=60",
    },
    {
      name: "Lisa M.",
      quote: "I love how gentle yet effective these products are. Highly recommended!",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces&auto=format&q=60",
    },
  ]

  return (
    <section className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-rose-900">What Our Customers Say</h2>
        <GlassmorphicCard>
          <TestimonialMarquee testimonials={testimonials} />
        </GlassmorphicCard>
      </div>
    </section>
  )
}

const BeforeAfterSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-rose-900">See the Difference</h2>
        <div className="max-w-3xl mx-auto">
          <BeforeAfterSlider
            beforeImage="https://plus.unsplash.com/premium_photo-1679750867341-99e26cb8898e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGZhY2V8ZW58MHx8MHx8fDA%3D"
            afterImage="https://images.unsplash.com/photo-1556942057-94aaf3ae5d6e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <p className="text-center mt-6 text-rose-600">Results after 4 weeks of consistent use</p>
        </div>
      </div>
    </section>
  )
}

const CTASection = ({ y1, y2 }: { y1: MotionValue<number>; y2: MotionValue<number> }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-rose-100 to-pink-100 relative overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 left-0 w-full h-full bg-rose-200 opacity-30 transform -skew-y-6"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-0 left-0 w-full h-full bg-pink-200 opacity-30 transform skew-y-6"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-rose-900">Ready for Radiant Skin?</h2>
          <p className="text-xl mb-8 text-rose-800">
            Join thousands of happy customers and start your skincare journey today.
          </p>
          <Link href="/shop">
            <ShimmerButton>Shop Now</ShimmerButton>
          </Link>
        </div>
      </div>
    </section>
  )
}

