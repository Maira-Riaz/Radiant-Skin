"use client"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import Link from "next/link"
import ParallaxBackground from "../components/ParallaxBackground"
import GlassmorphicCard from "../components/GlassmorphicCard"
import ProductCarousel from "../components/ProductCarousel"
import TestimonialMarquee from "../components/TestimonialMarquee"
import BeforeAfterSlider from "../components/BeforeAfterSlider"
import ShimmerButton from "../components/ShimmerButton"

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
    { id: 1, name: "Hydrating Serum", image: "height=300&width=300", price: 49.99 },
    { id: 2, name: "Rejuvenating Cream", image: "/placeholder.svg?height=300&width=300", price: 59.99 },
    { id: 3, name: "Gentle Cleanser", image: "/placeholder.svg?height=300&width=300", price: 29.99 },
    { id: 4, name: "Brightening Mask", image: "/placeholder.svg?height=300&width=300", price: 39.99 },
    { id: 5, name: "Firming Eye Cream", image: "/placeholder.svg?height=300&width=300", price: 44.99 },
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
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Michael R.",
      quote: "Finally, a skincare line that delivers on its promises.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emily T.",
      quote: "I've received so many compliments since I started using these products!",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "David K.",
      quote: "The results are amazing. My skin feels rejuvenated and looks younger.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Lisa M.",
      quote: "I love how gentle yet effective these products are. Highly recommended!",
      avatar: "/placeholder.svg?height=80&width=80",
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
        <div className="max-w-2xl mx-auto">
          <BeforeAfterSlider
            beforeImage="/placeholder.svg?height=400&width=600"
            afterImage="/placeholder.svg?height=400&width=600"
          />
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

