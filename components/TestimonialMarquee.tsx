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
    <Marquee gradient={false} speed={40}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="flex items-center mx-4 sm:mx-8">
          <Image
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.name}
            width={50}
            height={50}
            className="rounded-full mr-3 sm:mr-4 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          />
          <div className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">
            <p className="text-sm sm:text-base md:text-lg italic text-rose-800 mb-1 sm:mb-2">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p className="text-xs sm:text-sm font-semibold text-rose-900">{testimonial.name}</p>
          </div>
        </div>
      ))}
    </Marquee>
  )
}

export default TestimonialMarquee

