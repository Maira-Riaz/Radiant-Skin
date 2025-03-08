import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia", // Update to the latest stable version
})

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const { items, paymentMethod } = await req.json()

      const transformedItems = items.map((item: { name: string; image: string; price: number; quantity: number }) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      }))

      const totalAmount = items.reduce(
        (total: number, item: { price: number; quantity: number }) => total + item.price * item.quantity,
        0,
      )

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: transformedItems,
        mode: "payment",
        success_url: `${req.headers.get("origin")}/success`,
        cancel_url: `${req.headers.get("origin")}/shop`,
        metadata: {
          paymentMethod,
          totalAmount: totalAmount.toFixed(2),
        },
        ...(paymentMethod === "partial" && {
          payment_intent_data: {
            setup_future_usage: "off_session",
            capture_method: "manual",
          },
        }),
      })

      return NextResponse.json({ id: session.id })
    } catch (err: unknown) {
      const error = err as Error
      return NextResponse.json({ statusCode: 500, message: error.message })
    }
  } else {
    return NextResponse.json({ statusCode: 405, message: "Method Not Allowed" })
  }
}

