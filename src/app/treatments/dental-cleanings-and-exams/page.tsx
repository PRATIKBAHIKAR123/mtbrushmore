import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

export default function TreatmentDetailsPage() {
  const faqs = [
  {
    question: "How can I tell if my child needs this type of dental care?",
    answer:
      "Regular dental cleanings are essential if your child has visible plaque buildup or frequent bad breath. If it’s been more than six months since their last visit, scheduling an appointment ensures optimal oral health and prevents issues like cavities or gum disease.",
  },
  {
    question: "What should I do to prepare my child for their appointment?",
    answer:
      "Help your child feel comfortable by explaining the visit positively. Avoid using words that may cause fear and reassure them the dentist’s role is to help keep their smile healthy.",
  },
  {
    question: "Is this procedure safe and appropriate for children?",
    answer:
      "Yes, dental cleanings and exams are safe, gentle, and tailored specifically for children. Our pediatric specialists ensure every step is comfortable and age-appropriate.",
  },
  {
    question: "What should I expect after the treatment is completed?",
    answer:
      "After the appointment, your child’s teeth will feel cleaner and fresher. Mild sensitivity is normal and temporary, but there is no downtime.",
  },
  {
    question: "How can I help prevent similar dental issues in the future?",
    answer:
      "Encourage daily brushing and flossing, limit sugary snacks, and maintain regular dental visits every six months for ongoing oral health.",
  },
];

  return (
    <div className="bg-primary/10 min-h-screen py-12">
      {/* Paper Container */}
      <div className="mx-auto max-w-7xl bg-white rounded-[26px] px-6 py-12 md:px-12 shadow-sm">
        
        {/* Header */}
        <div className="mb-10">
          <h1
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-accent eveleth"
          >
            Dental Cleanings and Exams
          </h1>
          <p className=" max-w-2xl text-base md:text-lg">
            Routine check-ups and cleanings prevent issues and keep teeth in optimal condition.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Image Section */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/Images/close-up-boy-dentist.jpg"  // ✅ replace with your image
              alt="Dental Cleaning"
              width={600}
              height={450}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Text Sections */}
          <div className="space-y-8">
            
            {/* WHAT IT IS */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                What It Is
              </h3>
              <p className=" leading-relaxed text-sm md:text-base">
                Dental cleanings and exams remove plaque and tartar while assessing overall oral health. 
                They help prevent cavities, gum disease, and other dental problems before they worsen.
              </p>
            </section>

            {/* HOW IT WORKS */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                How It Works
              </h3>
              <p className=" leading-relaxed text-sm md:text-base">
                During the visit, a dental professional cleans your teeth, removes plaque buildup, 
                and examines your gums and teeth. X-rays may be taken if required to detect hidden issues.
              </p>
            </section>

            {/* HOW IT HELPS */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                How It Helps
              </h3>
              <p className=" leading-relaxed text-sm md:text-base">
                Regular cleanings keep your smile healthy, prevent tooth decay, and help maintain fresh breath. 
                These visits are essential for long-term oral health.
              </p>
            </section>

            {/* CTA */}
            <div className="pt-4">
              <button
                className="inline-flex items-center justify-center gap-2
                bg-accent hover:bg-secondary
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
       <section className="bg-white mx-auto max-w-7xl rounded-[26px] px-6 py-12 md:px-12 mt-4 md:mt-6">
      
      {/* Heading */}
      <h2
        className="text-2xl md:text-4xl font-bold mb-8 text-accent eveleth"
        style={{ fontFamily: "'Eveleth', serif" }}
      >
        Frequently Asked Questions
      </h2>

      {/* Accordion */}
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b border-[#D4C5A0]"
          >
            <AccordionTrigger
              className="
                text-left
                text-sm md:text-base
                font-semibold
                uppercase
                tracking-wide
                text-accent
                hover:no-underline
                py-4
              "
            >
              {faq.question}
            </AccordionTrigger>

            <AccordionContent className="text-accent text-sm md:text-base leading-relaxed pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
    </div>
  );
}
