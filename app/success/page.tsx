import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-rose-900 mb-4">Order Successful!</h1>
        <p className="text-lg text-rose-700 mb-8">Thank you for your purchase. Your order has been received.</p>
        <Link
          href="/"
          className="bg-rose-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-600 transition duration-300"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}

