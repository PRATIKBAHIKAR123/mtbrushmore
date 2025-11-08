import React from 'react';

interface Team {
  id: number;
  title: string;
  description: string;
  image: string;
  decorativeIcon?: string;
}

const TeamSection = () => {
  const team: Team[] = [
    {
      id: 1,
      title: "Dr. McDonnell",
      description: "Protect your child's smile with cleanings, fluoride, and sealants.",
      image: "/Images/doctor-with-his-arms-crossed-white-background.jpg",
      decorativeIcon: "tooth"
    },
    {
      id: 2,
      title: "Dr. McMahon",
      description: "Restore your child's smile with gentle fillings and crowns.",
      image: "/Images/doctor-with-his-arms-crossed-white-background.jpg"
    },
    {
      id: 3,
      title: "Dr. McMahon",
      description: "Straighten teeth and boost confidence with braces and aligners.",
      image: "/Images/female-doctor-hospital-with-stethoscope.jpg"
    },
    {
      id: 4,
      title: "Dr. Hubbi",
      description: "Get fast, compassionate emergency dental care for your child.",
      image: "/Images/doctor-with-his-arms-crossed-white-background.jpg",
      decorativeIcon: "flower"
    },
    {
      id: 5,
      title: "Dr. McDonnell",
      description: "Protect your child's smile with cleanings, fluoride, and sealants.",
      image: "/Images/doctor-with-his-arms-crossed-white-background.jpg",
      decorativeIcon: "tooth"
    },
    {
      id: 6,
      title: "Dr. McMahon",
      description: "Restore your child's smile with gentle fillings and crowns.",
      image: "/Images/doctor-with-his-arms-crossed-white-background.jpg"
    },
    {
      id: 7,
      title: "Dr. McMahon",
      description: "Straighten teeth and boost confidence with braces and aligners.",
      image: "/Images/female-doctor-hospital-with-stethoscope.jpg"
    },
    {
      id: 8,
      title: "Dr. Hubbi",
      description: "Get fast, compassionate emergency dental care for your child.",
      image: "/Images/doctor-with-his-arms-crossed-white-background.jpg",
      decorativeIcon: "flower"
    }
  ];

  return (
    <section className="relative bg-[#E8DED3] py-16 px-4 md:py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
          <path d="M200 50 L250 150 L350 150 L270 220 L300 320 L200 260 L100 320 L130 220 L50 150 L150 150 Z" 
                fill="#8B6F47" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4">
            <svg className="w-20 h-3" viewBox="0 0 80 12" fill="none">
              <path d="M0 6 Q20 2, 40 6 T80 6" stroke="#4A3728" strokeWidth="2.5" fill="none" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A3728] mb-4">
            MEET <span className="text-[#8B4513]">Our Team</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((service, index) => (
            <div 
              key={service.id}
            >
              {/* Image Container */}
              <div className='relative z-10 h-80 rounded-3xl overflow-hidden shadow-lg transition-all duration-300'>
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 duration-500"
                />
                
              </div>
              </div>

              {/* Content */}
              <div className="py-6">
                <h3 className="text-lg font-bold mb-3">
                  {service.title}
                </h3>

                {/* Buttons */}
                <div className="flex">
                  <button className="flex-1 bg-[#D4C5A0] hover:bg-[#C4B590] text-[#4A3728] font-semibold py-2.5 px-4 rounded-full transition-colors duration-300 text-sm">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;