import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Daisy S.",
      location: "Hamilton Square, NJ",
      rating: 5,
      text: "My daughter was nervous for her first dentist visit, but Dr. Manmeet Arora and the team made her feel safe right away. They were gentle, patient, and incredibly kind. She left smiling ear-to-ear and keeps asking when she can go back. We’re so grateful to have Mt. Brushmore close to home.",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      name: "Mark D.",
      location: "Robbinsville, NJ",
      rating: 5,
      text: "Our twins have never been happier at the dentist! Dr. Manmeet Arora is fantastic with kids - knowledgeable, funny, and so patient. The office atmosphere is bright and welcoming, and appointments are always smooth. We trust Mt. Brushmore with our children’s growing smiles completely.",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      name: "Julia C.",
      location: "Mercerville, NJ",
      rating: 5,
      text: "Mt. Brushmore has completely changed how my son feels about the dentist. Dr. Manmeet Arora explained everything to him in a fun, kid-friendly way that made him comfortable. The entire staff is so positive and encouraging. I recommend them to every parent looking for a pediatric dentist who truly understands children.",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative bg-[#dadada] py-12 px-4 md:py-24 overflow-hidden">
      {/* Decorative background elements */}
      

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <svg className="w-16 h-2" viewBox="0 0 60 8" fill="none">
              <path d="M0 4 Q15 0, 30 4 T60 4" stroke="var(--accent)" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2 eveleth">
            TESTIMONIALS
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-accent">
            Why Parents Love Mt. Brushmore
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={current.image}
                alt="Happy parent and child"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              
            </div>
          </div>

          {/* Text Side */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#FFB84D] text-[#FFB84D]" />
              ))}
            </div>

            {/* Author Info */}
            <h3 className="text-2xl font-bold text-accent mb-1">
              {current.name}
            </h3>
            <p className="text-accent mb-6">{current.location}</p>

            {/* Testimonial Text */}
            <p className="text-accent leading-relaxed mb-8">
              {current.text}
            </p>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-2 border-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-2 border-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="ml-auto text-sm text-secondary">
                {currentIndex + 1} / {testimonials.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;