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
      name: "Melissa L.",
      location: "Clifton Park, NY",
      rating: 5,
      text: "We had a wonderful experience at Smile Lodge from start to finish. My son was referred due to his sensitivities and anxieties. The Smile Lodge staff were very kind and welcoming and it was apparent that not only do they know how to handle children but they like them as well. Dr. McMahon was personable, compassionate, and did a flawless job on my son's procedure. He even checked in on us later that evening to make sure everything went well. I was surprised at how much we enjoyed our experience and I would highly recommend this practice. My only complaint is I wish they took adult patients! Thank you Smile Lodge.",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      name: "Sarah M.",
      location: "Albany, NY",
      rating: 5,
      text: "Exceptional care for my daughter! The team at Smile Lodge made her feel comfortable and safe throughout the entire visit. The child-friendly environment and patient staff turned what could have been a scary experience into a positive one. Highly recommend to all parents!",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      name: "Jennifer K.",
      location: "Saratoga Springs, NY",
      rating: 5,
      text: "Outstanding pediatric dental practice! My kids actually look forward to their appointments now. The staff is incredibly patient and skilled at working with children of all ages. Clean facility, modern equipment, and a caring team. We're so grateful we found Smile Lodge!",
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
    <section className="relative bg-[#E8DED3] py-16 px-4 md:py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg className="absolute top-10 right-20 w-64 h-64" viewBox="0 0 200 200" fill="none">
          <path d="M100 20 L120 60 L160 80 L120 100 L100 140 L80 100 L40 80 L80 60 Z" fill="#8B6F47" />
        </svg>
        <svg className="absolute bottom-10 left-20 w-48 h-48" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" fill="#8B6F47" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <svg className="w-16 h-2" viewBox="0 0 60 8" fill="none">
              <path d="M0 4 Q15 0, 30 4 T60 4" stroke="#4A3728" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A3728] mb-2">
            TESTIMONIALS
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-[#8B4513]">
            WHAT PARENTS SAY
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
              {/* Decorative smile overlay */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-[#D4563C] rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
                  <circle cx="30" cy="35" r="6" fill="#FFF9E6" />
                  <circle cx="70" cy="35" r="6" fill="#FFF9E6" />
                  <path d="M25 55 Q50 75, 75 55" stroke="#FFF9E6" strokeWidth="5" fill="none" strokeLinecap="round" />
                </svg>
              </div>
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
            <h3 className="text-2xl font-bold text-[#4A3728] mb-1">
              {current.name}
            </h3>
            <p className="text-[#8B6F47] mb-6">{current.location}</p>

            {/* Testimonial Text */}
            <p className="text-[#4A3728] leading-relaxed mb-8">
              {current.text}
            </p>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-2 border-[#8B6F47] flex items-center justify-center hover:bg-[#8B6F47] hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-2 border-[#8B6F47] flex items-center justify-center hover:bg-[#8B6F47] hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="ml-auto text-sm text-[#8B6F47]">
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