import type React from "react"
import Image from "next/image"
import Marquee from "react-fast-marquee"

interface Testimonial {
  name: string
  quote: string
  avatar: string
}

interface TestimonialMarqueeProps {
  testimonials: Testimonial[]
}

const TestimonialMarquee: React.FC<TestimonialMarqueeProps> = ({ testimonials }) => {
  return (
    <Marquee gradient={false} speed={50}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="flex items-center mx-8">
          <Image
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.name}
            width={60}
            height={60}
            className="rounded-full mr-4"
          />
          <div>
            <p className="text-lg italic text-rose-800 mb-2">&ldquo;{testimonial.quote}&rdquo;</p>
            <p className="font-semibold text-rose-900">{testimonial.name}</p>
          </div>
        </div>
      ))}
    </Marquee>
  )
}

export default TestimonialMarquee

