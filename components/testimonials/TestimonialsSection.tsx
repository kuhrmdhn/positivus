import React from 'react'
import TestimonialList from './TestimonialList'
import SectionHeading from '../ui/section-heading'
import Divider from '../ui/divider'

export default function TestimonialsSection() {
  return (
    <>
      <Divider />
      <div>
        <SectionHeading title='Testimonials' description='Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services' />
        <TestimonialList />
      </div>
    </>
  )
}
