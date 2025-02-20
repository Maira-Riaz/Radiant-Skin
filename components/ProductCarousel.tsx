"use client"

import type React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface Product {
  id: number
  name: string
  image: string
  price: number
}

interface ProductCarouselProps {
  products: Product[]
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      }}
      className="product-carousel"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg p-6 shadow-lg transition duration-300 transform hover:shadow-xl group"
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              <Image
                src={product.image || "/placeholder-image.jpg"}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <button className="bg-white text-rose-600 px-4 py-2 rounded-full font-medium">Quick View</button>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-rose-900">{product.name}</h3>
            <p className="text-lg font-bold text-rose-600 mb-2">${product.price.toFixed(2)}</p>
            <button className="text-rose-500 font-medium flex items-center group">
              Add to Cart
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 transform group-hover:translate-x-2" />
            </button>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ProductCarousel

