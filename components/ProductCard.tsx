"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface ProductCardProps {
  product: {
    name: string
    image: string
  }
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg p-6 shadow-lg transition duration-300 transform hover:shadow-xl"
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-64 object-cover transition duration-300 transform hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
          <button className="bg-white text-rose-600 px-4 py-2 rounded-full font-medium">Quick View</button>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-rose-900">{product.name}</h3>
      <button className="text-rose-500 font-medium flex items-center group">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 transform group-hover:translate-x-2" />
      </button>
    </motion.div>
  )
}

export default ProductCard

