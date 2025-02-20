import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white flex items-center justify-center p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl md:text-3xl font-bold text-rose-900 mb-3 md:mb-4">Order Successful!</h1>
        <p className="text-base md:text-lg text-rose-700 mb-6 md:mb-8">
          Thank you for your purchase. Your order has been received.
        </p>
        <Link
          href="/"
          className="bg-rose-500 text-white px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-rose-600 transition duration-300 inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}

