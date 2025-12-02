"use client"

import CTASection from "@/app/home/call-to-action";
import Image from "next/image";

export default function DoctorDetailsPage() {

  return (
    <div className="bg-[#E8DED3] min-h-screen py-12 px-2">
      {/* Paper Container */}
      <div className="mx-auto max-w-7xl bg-[#F8F1E6] rounded-[26px] px-6 py-12 mb-3 md:px-12 shadow-sm">
        

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Image Section */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/Images/doctor-with-his-arms-crossed-white-background.jpg"  // ✅ replace with your image
              alt="Dental Cleaning"
              width={600}
              height={450}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Text Sections */}
          <div className="space-y-8">
            <h1
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#2F241C]"
            style={{ fontFamily: "'Eveleth', serif" }}
          >
            James McDonnell, DMD
          </h1>
            {/* WHAT IT IS */}
            <section className="space-y-6">
  {/* Description */}
  <p className="text-[#4A3A2A] leading-relaxed text-sm md:text-base">
    Dr. James McDonnell, an upstate New York native and graduate of Fairfield and
    Harvard Universities, currently resides in Malta, NY with his wife and five
    children. His pediatric dentistry specialty was obtained at The Children’s
    Hospital of Boston where he also developed an easy-going reputation, and warm
    light-hearted manner that opens children’s hearts and minds for
    conversations about good oral hygiene and making healthy smiles. (He is also
    much better looking than Dr. McMahon, especially in a bow tie).
  </p>

  {/* Fun Facts List */}
  <ul className="space-y-2 text-[#4A3A2A] text-sm md:text-base list-disc pl-5">
    <li>
      <strong>Favorite color:</strong> Ummm, what are colors? I’m colorblind…
    </li>
    <li>
      <strong>Favorite children’s movie:</strong> Anything Avengers
    </li>
    <li>
      <strong>Favorite singalong Disney song:</strong> Does Metallica play any
      Disney songs?
    </li>
    <li>
      <strong>Favorite game to play:</strong> Quiplash
    </li>
    <li>
      <strong>Go-to summer activity:</strong> Flossing underwater in the pool
    </li>
    <li>
      <strong>Go-to winter activity:</strong> Attending Dr. Cao’s hip hop dance
      class with the rest of our docs (next year’s Christmas party is coming)
    </li>
    <li>
      <strong>
        Do you have any skills or talents that most people don’t know about?
      </strong>{" "}
      I am super good at going to breakfast with Dr. McMahon. Also dad jokes,
      but mostly hanging out with Dr. McMahon.
    </li>
    <li>
      <strong>If I were a superhero, my superpower would be:</strong> X ray
      vision. Think of how much time we could save!
    </li>
    <li>
      <strong>What are you most passionate about professionally?</strong>{" "}
      Letting people know that they are worth something by how our team treats
      everyone!
    </li>
    <li>
      <strong>What excites you the most about your work?</strong> Just being a
      part of our team. There is never a day where I take it for granted.
    </li>
    <li>
      <strong>
        Tell us about your team and what makes them so exceptional!
      </strong>{" "}
      Mostly the fact that they put up with me. I will try to do better…
    </li>
    <li>
      <strong>What else should our patients know about you?</strong> My wife
      thinks Dr. McMahon is a better dentist than me.
    </li>
  </ul>
</section>

{/* CTA */}
<div className="pt-6">
  <button
    className="inline-flex items-center justify-center gap-2
      bg-[#8B4513] hover:bg-[#74380F]
      text-white font-semibold
      px-8 py-3 rounded-full
      transition-all duration-300 shadow-md"
  >
    Book Consultation
  </button>
</div>


          </div>
        </div>
      </div>
      <CTASection/>
    </div>
  );
}
