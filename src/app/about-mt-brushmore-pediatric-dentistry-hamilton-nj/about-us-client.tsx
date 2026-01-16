"use client"

import { Button } from "@/components/ui/button";

export default function AboutUsClient() {
  return (
    <main className="container mx-auto px-4 md:px-6 py-12">
      <div>
        {/* Left Column - Welcome Text */}
        <div className="bg-white rounded-3xl shadow-lg p-4 md:p-12 relative overflow-hidden flex-1 justify-center ">
          {/* Background Pattern */}

          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: "'Eveleth', sans-serif"}}>
              <span className="text-primary">Meet Mt. Brushmore -</span>
              <br />
              <span className="text-accent">Where Little Smiles Grow Big & Confident</span>
            </h1>

            <p className="text-accent text-lg w-auto md:w-3xl leading-relaxed mb-8">
              <span className="font-semibold">Mt. Brushmore Pediatric Dentistry</span> is where kids feel brave, parents feel supported, and healthy smiles shine brighter every day. Led by Dr. Manmeet Arora, DDS, our Hamilton, NJ pediatric dentist office specializes in gentle care for infants, children, and teens - from routine checkups and cavity prevention to orthodontics, emergencies, sedation dentistry, and special needs dental care. Families across Hamilton Square (08690), Mercerville (08619), Robbinsville (08691), Lawrenceville (08648), West Windsor (08550), East Windsor (08512, 08520) and surrounding neighborhoods trust us for friendly, modern care that makes every visit positive and stress-free. Searching for a pediatric dentist near me? You've found a dental home that puts comfort, safety, and fun first - because building a lifetime of confident smiles always starts with the right team by your child's side.
               
            </p>

            
            <div className='flex gap-2 md:gap-3 mb-2'>
              <Button variant={'secondary'} className='rounded-full text-lg font-bold' size={'lg'}>Book Now</Button>
              <Button variant={'accent'} className='rounded-full text-lg font-bold' size={'lg'}>Call Us</Button>
            </div>

          </div>

          <div className='h-48 w-auto absolute z-9 bottom-0 right-0'>
            <img src={'/Images/animals/bear-baby-bear.png'} className='h-full w-full'/>
          </div>

          {/* Decorative Bear */}
          <div className="absolute inset-0">
            <img src={"/Images/Mountains.png"} className='w-full h-full object-cover opacity-40'/>
          </div>
        </div>

      </div>
    </main>
  );
}
