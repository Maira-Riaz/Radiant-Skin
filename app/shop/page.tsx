"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, ArrowLeft, X } from "lucide-react"
import ShimmerButton from "../../components/ShimmerButton"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface Product {
  id: number
  name: string
  image: string
  price: number
}

interface CartItem extends Product {
  quantity: number
}

const products: Product[] = [
  {
    id: 1,
    name: "Hydrating Serum",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpbmNhcmUlMjBwcm9kdWN0fGVufDB8fDB8fHww",
    price: 49.99,
  },
  {
    id: 2,
    name: "Rejuvenating Cream",
    image:
      "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2tpbmNhcmUlMjBwcm9kdWN0fGVufDB8fDB8fHww",
    price: 59.99,
  },
  {
    id: 3,
    name: "Gentle Cleanser",
    image:
      "https://images.unsplash.com/photo-1556229174-5e42a09e45c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNraW5jYXJlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: 29.99,
  },
  {
    id: 4,
    name: "Brightening Mask",
    image:
      "https://images.unsplash.com/photo-1567721913486-6585f069b332?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNraW5jYXJlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: 39.99,
  },
  {
    id: 5,
    name: "Firming Eye Cream",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2tpbmNhcmUlMjBwcm9kdWN0fGVufDB8fDB8fHww",
    price: 44.99,
  },
  {
    id: 6,
    name: "Exfoliating Scrub",
    image:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNraW5jYXJlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: 34.99,
  },
  {
    id: 7,
    name: "Nourishing Night Cream",
    image:
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNraW5jYXJlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: 54.99,
  },
  {
    id: 8,
    name: "Vitamin C Serum",
    image:
      "https://images.unsplash.com/photo-1617897903246-719242758050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHNraW5jYXJlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: 64.99,
  },
]

export default function ShopPage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<"full" | "partial">("full")

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const handleCheckout = async () => {
    const stripe = await stripePromise
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cart,
        paymentMethod,
      }),
    })

    const session = await response.json()

    const result = await stripe!.redirectToCheckout({
      sessionId: session.id,
    })

    if (result.error) {
      console.error(result.error.message)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white py-6 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8">
          <Link
            href="/"
            className="flex items-center text-rose-600 hover:text-rose-800 transition duration-300 mb-4 md:mb-0"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-rose-900">Shop Our Products</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-lg p-4 md:p-6 shadow-lg transition duration-300 transform hover:shadow-xl"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 md:h-64 object-cover transition duration-300 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <button className="bg-white text-rose-600 px-3 py-1 md:px-4 md:py-2 rounded-full font-medium text-sm md:text-base">
                    Quick View
                  </button>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-rose-900">{product.name}</h3>
              <p className="text-base md:text-lg font-bold text-rose-600 mb-2">${product.price.toFixed(2)}</p>
              <ShimmerButton onClick={() => addToCart(product)}>Add to Cart</ShimmerButton>
            </motion.div>
          ))}
        </div>

        <div className="fixed bottom-4 right-4 md:top-4 md:bottom-auto z-50">
          <button
            className="bg-rose-500 text-white p-3 rounded-full shadow-lg hover:bg-rose-600 transition duration-300"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <ShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-rose-500 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>

        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
            <div className="bg-white w-full max-w-xs sm:max-w-sm md:max-w-md p-4 md:p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-rose-900">Your Cart</h2>
                <button className="text-rose-500 hover:text-rose-700 p-1" onClick={() => setIsCartOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              {cart.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <>
                  <div className="max-h-[60vh] overflow-y-auto mb-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-3">
                        <div>
                          <h3 className="text-base md:text-lg font-semibold">{item.name}</h3>
                          <p className="text-sm md:text-base">
                            ${item.price.toFixed(2)} x {item.quantity}
                          </p>
                        </div>
                        <button
                          className="text-rose-500 hover:text-rose-700 text-sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 md:mt-6">
                    <p className="text-lg md:text-xl font-bold mb-4">Total: ${getTotalPrice().toFixed(2)}</p>
                    <div className="mb-4">
                      <label className="block mb-2 font-semibold text-sm md:text-base">Payment Method:</label>
                      <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value as "full" | "partial")}
                        className="w-full p-2 border rounded text-sm md:text-base"
                      >
                        <option value="full">Full Payment</option>
                        <option value="partial">50% Advance + COD</option>
                      </select>
                    </div>
                    <ShimmerButton onClick={handleCheckout}>Checkout</ShimmerButton>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

