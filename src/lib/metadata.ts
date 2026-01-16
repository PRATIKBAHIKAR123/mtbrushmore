import type { Metadata } from "next";

const baseMetadata = {
  domain: "brushmore-dental.com",
  twitter: "@brushmore",
};

export const siteMetadata: Metadata = {
  title: "Pediatric Dentist in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
  description: "Looking for a pediatric dentist in Hamilton, NJ? Mt. Brushmore Pediatric Dentistry provides fun, gentle care for children of all ages - from cleanings and braces to emergencies and sedation. Serving Hamilton Square, Mercerville, Robbinsville, Lawrenceville, West & East Windsor. Book your child’s visit today!",
  keywords: ["dentist", "dental care", "preventive dentistry", "restorative dentistry", "pediatric dentistry"],
  authors: [{ name: "Mt. Brushmore Dental" }],
  creator: "Mt. Brushmore Dental",
  publisher: "Mt. Brushmore Dental",
  metadataBase: new URL(`https://${baseMetadata.domain}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Mt. Brushmore Dental",
    title: "Pediatric Dentist in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Looking for a pediatric dentist in Hamilton, NJ? Mt. Brushmore Pediatric Dentistry provides fun, gentle care for children of all ages - from cleanings and braces to emergencies and sedation. Serving Hamilton Square, Mercerville, Robbinsville, Lawrenceville, West & East Windsor. Book your child’s visit today!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mt. Brushmore Dental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: baseMetadata.twitter,
    creator: baseMetadata.twitter,
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export const pageMetadata = {
  home: {
    title: "Pediatric Dentist in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Looking for a pediatric dentist in Hamilton, NJ? Mt. Brushmore Pediatric Dentistry provides fun, gentle care for children of all ages - from cleanings and braces to emergencies and sedation. Serving Hamilton Square, Mercerville, Robbinsville, Lawrenceville, West & East Windsor. Book your child’s visit today!",
    keywords: ["dentist", "dental care", "dental services", "emergency dentistry"],
  },
  aboutUs: {
    title: "About Our Pediatric Dental Team | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Discover what makes Mt. Brushmore Pediatric Dentistry a trusted choice for families in Hamilton, NJ. From our comforting environment to our child-centered approach, every visit is designed to help kids feel brave, happy, and cared for.",
    keywords: ["about dentist", "dental team", "experienced dentists"],
  },
  team: {
    title: "Our Team - Mt. Brushmore Dental",
    description: "Meet our experienced dental professionals dedicated to your oral health.",
    keywords: ["dentists", "dental professionals", "dental team"],
  },
  doctorProfile: {
    title: "Dr. Manmeet Arora, DDS - Mt. Brushmore Dental",
    description: "Dr. Manmeet Arora is a board-eligible pediatric dentist specializing in children's dental care. Learn more about her background and experience.",
    keywords: ["pediatric dentist", "Dr. Manmeet Arora", "children dentistry"],
  },
  services: {
    title: "Dental Services - Mt. Brushmore Dental",
    description: "Explore our comprehensive range of dental services designed to meet all your oral health needs.",
    keywords: ["dental services", "preventive dentistry", "restorative dentistry", "emergency dentistry"],
  },
  preventiveDentistry: {
    title: "Preventive Dentistry in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Car",
    description: "Gentle preventive pediatric dentistry in Hamilton, NJ helps children build strong, healthy smiles from the start. Mt. Brushmore Pediatric Dentistry provides dental cleanings, fluoride, sealants, and cavity prevention for infants, kids, and teens in Hamilton Square and nearby communities.",
    keywords: ["preventive dentistry", "dental cleanings", "dental exams"],
  },
  restorativeDentistry: {
    title: "Restorative Dentistry in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Pediatric restorative dentistry in Hamilton, NJ helps repair and protect growing teeth with gentle, natural-looking solutions. Mt. Brushmore Pediatric Dentistry restores cavities, chips, and damaged teeth so kids can smile, chew, and grow confidently.",
    keywords: ["restorative dentistry", "dental fillings", "crowns", "bridges"],
  },
  orthodontics: {
    title: "Orthodontics for Kids in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Help your child achieve a confident, healthy smile with pediatric orthodontics in Hamilton, NJ. From braces to clear aligners and early orthodontic evaluations, Mt. Brushmore Pediatric Dentistry offers gentle guidance for growing smiles.",
    keywords: ["orthodontics", "braces", "teeth straightening"],
  },
  sedationDentistry: {
    title: "Sedation Dentistry for Kids in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Comfortable, stress-free dental visits are possible! Our pediatric sedation dentistry in Hamilton, NJ offers safe and calming options - including laughing gas, oral sedation, and IV sedation - to help children relax and feel supported during their dental care.",
    keywords: ["sedation dentistry", "dental anxiety", "comfortable dentistry"],
  },
  emergencyDentistry: {
    title: "Emergency Dentistry for Kids in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Fast, compassionate pediatric emergency dental care in Hamilton, NJ for toothaches, injuries, and urgent dental problems. Same-day relief to protect your child’s smile with gentle, expert care when you need it most.",
    keywords: ["emergency dentistry", "urgent dental care", "dental emergency"],
  },
  treatments: {
    title: "Dental Treatments - Mt. Brushmore Dental",
    description: "Comprehensive dental treatment options to restore and improve your oral health.",
    keywords: ["dental treatments", "dentistry solutions"],
  },
  dentalInsurance: {
    title: "Dental Insurance - Mt. Brushmore Dental",
    description: "Information about accepted dental insurance plans and payment options.",
    keywords: ["dental insurance", "insurance coverage", "dental payment"],
  },
  firstVisit: {
    title: "Your First Visit - Mt. Brushmore Dental",
    description: "Learn what to expect during your first visit to Mt. Brushmore Dental.",
    keywords: ["first dental visit", "new patient", "dental appointment"],
  },
  location: {
    title: "Location & Contact - Mt. Brushmore Dental",
    description: "Visit us at our convenient locations. Hours, directions, and contact information.",
    keywords: ["dental office", "location", "contact", "address"],
  },
  financingHamiltonNJ: {
    title: "Pediatric Dental Financing in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Affordable pediatric dentistry made simple. We offer flexible payment plans and budget-friendly financing options in Hamilton, NJ so families can confidently choose the best dental care for their children - without financial stress. ",
    keywords: ["dental financing", "payment plans", "affordable dentistry"],
  },
  dentalCleanings: {
    title: "Dental Cleanings & Exams in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Gentle pediatric dental cleanings and exams in Hamilton, NJ help keep children’s teeth strong and cavity-free. Mt. Brushmore Pediatric Dentistry provides preventive visits focused on healthy growth, early detection, and confident smiles for kids in Hamilton Square, Mercerville, Robbinsville, Lawrenceville, West Windsor, and East Windsor.",
    keywords: ["dental cleanings", "dental exams", "teeth cleaning"],
  },
  dentalSealants: {
    title: "Dental Sealants in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Protect your child’s back teeth from cavities with gentle, long-lasting dental sealants in Hamilton, NJ. Mt. Brushmore Pediatric Dentistry helps keep growing smiles healthy by preventing decay where brushing can’t always reach.",
    keywords: ["dental sealants", "cavity prevention", "protective coatings"],
  },
  fluorideTreatments: {
    title: "Fluoride Treatments in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Strengthen and protect your child’s enamel with pediatric fluoride treatments in Hamilton, NJ. Mt. Brushmore Pediatric Dentistry offers quick, painless fluoride applications that help prevent cavities and support healthy, confident smiles as kids grow.",
    keywords: ["fluoride treatments", "cavity prevention", "healthy teeth"],
  },
  nutritionalCounseling: {
    title: "Nutritional Counseling for Kids in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Pediatric nutritional counseling in Hamilton, NJ helps kids build healthy eating habits that support strong teeth and growing smiles. Mt. Brushmore Pediatric Dentistry guides families with simple, real-life tips to reduce cavity risks and make smile-friendly choices fun every day.",
    keywords: ["nutrition and oral health", "healthy eating", "dental wellness"],
  },
  oralHygieneEducation: {
    title: "Oral Hygiene Education for Kids in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Help your child build strong brushing and flossing habits with fun, hands-on oral hygiene education in Hamilton, NJ. Mt. Brushmore Pediatric Dentistry teaches kids how to care for their teeth with confidence through encouraging guidance and easy daily routines.",
    keywords: ["oral hygiene", "healthy brushing", "flossing"],
  },
  spaceMaintainers: {
    title: "Space Maintainers in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Pediatric space maintainers in Hamilton, NJ help protect proper spacing when baby teeth are lost early. Mt. Brushmore Pediatric Dentistry gently guides developing smiles to prevent crowding and support healthy alignment as permanent teeth grow in.",
    keywords: ["space maintainers", "orthodontics", "healthy teeth"],
  },
  specialNeedsDentistry: {
    title: "Special Needs Dental Care in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care ",
    description: "Compassionate and personalized special needs dental care in Hamilton, NJ ensures every child feels comfortable, supported, and respected. Mt. Brushmore Pediatric Dentistry tailors appointments to each child’s needs, helping them build confidence and positive dental experiences that last.",
    keywords: ["special needs dentistry", "developmental disabilities", "gentle dental care"],
  },
  xraysDentalImaging: {
    title: "X-Rays & Dental Imaging for Kids in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Safe, fast pediatric dental X-rays in Hamilton, NJ help us monitor your child’s growth and detect concerns early. Mt. Brushmore Pediatric Dentistry uses ultra-low-radiation imaging designed for kids to support healthy development and confident smiles.",
    keywords: ["dental x-rays", "pediatric dental imaging", "low-dose x-rays"],
  },
  bonding: {
    title: "Dental Bonding for Kids in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Fix chips, cracks, and small gaps with gentle pediatric dental bonding in Hamilton, NJ. Mt. Brushmore Pediatric Dentistry restores teeth quickly with natural-looking results that keep little smiles strong and confident.",
    keywords: ["dental bonding", "cosmetic dentistry", "tooth repair"],
  },
  crowns: {
    title: "Dental Crowns for Kids in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Give weakened teeth the strong protection they need with gentle pediatric dental crowns in Hamilton, NJ. Mt. Brushmore Pediatric Dentistry restores comfort and function so kids can chew, smile, and grow with confidence.",
    keywords: ["dental crowns", "pediatric dentistry", "tooth restoration"],
  },
  fillings: {
    title: "Tooth-Colored Dental Fillings for Kids in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Repair cavities gently and beautifully with tooth-colored fillings in Hamilton, NJ. Mt. Brushmore Pediatric Dentistry keeps growing smiles strong and confident using safe, natural-looking restorations made just for kids.",
    keywords: ["dental fillings", "cavity treatment", "tooth repair"],
  },
  decayedToothExtraction: {
    title: "Restoration of Decayed Teeth in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Restore and protect your child’s decayed teeth with gentle pediatric treatment in Hamilton, NJ. Mt. Brushmore Pediatric Dentistry repairs damage early to relieve discomfort, prevent future problems, and keep growing smiles healthy and confident.",
    keywords: ["tooth extraction", "pediatric dentistry", "gentle dental care"],
  },
  toothExtraction: {
    title: "Tooth Extractions for Kids in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Protect your child’s comfort and future smile development with gentle tooth extractions in Hamilton, NJ. Mt. Brushmore Pediatric Dentistry removes damaged or problematic teeth with a calm, caring approach that keeps little ones relaxed and confident.",
    keywords: ["tooth extraction", "pediatric dentistry", "gentle dental care"],
  },
  ivsedation: {
    title: "IV Sedation for Kids in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "IV sedation at Mt. Brushmore Pediatric Dentistry in Hamilton, NJ provides deeply relaxed, safely monitored comfort for children who experience high anxiety or require extensive treatment - ensuring calm, confident dental visits every time.",
    keywords: ["tooth extraction", "pediatric dentistry", "gentle dental care"],
  },
  laughingGas: {
    title: "Laughing Gas for Kids in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Laughing gas helps kids stay calm, comfortable, and worry-free during dental visits. Our pediatric sedation team in Hamilton, NJ uses this gentle and trusted option to create positive experiences and confident smiles.",
    keywords: ["tooth extraction", "pediatric dentistry", "gentle dental care"],
  },
  oralSedation: {
    title: "Oral Sedation for Kids in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Oral sedation provides a deeper sense of calm for children who feel anxious at the dentist. At Mt. Brushmore Pediatric Dentistry in Hamilton, NJ, we use gentle techniques and child-focused care to make every visit comfortable and reassuring.",
    keywords: ["tooth extraction", "pediatric dentistry", "gentle dental care"],
  },
  chippedTooth: {
    title: "Chipped or Broken Tooth Treatment for Kids in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Quick, gentle care for chipped or broken teeth in children. Our pediatric dentist in Hamilton, NJ restores comfort and protects developing smiles with same-day treatment when accidents happen.",
    keywords: ["tooth extraction", "pediatric dentistry", "gentle dental care"],
  },
  dentalAbscess: {
    title: "Pediatric Dental Abscess Treatment in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Fast relief for painful dental abscesses in children. Our emergency pediatric dentist in Hamilton, NJ treats infection quickly to protect your child’s health and comfort.",
    keywords: ["tooth extraction", "pediatric dentistry", "gentle dental care"],
  },
  knockedOutTooth: {
    title: "Knocked-Out Tooth Care for Kids in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Act fast! We provide urgent care for knocked-out baby and permanent teeth in Hamilton, NJ to save smiles and reduce long-term dental risks.",
    keywords: ["tooth extraction", "pediatric dentistry", "gentle dental care"],
  },
  LostFilling: {
    title: "Lost Filling or Crown Repair for Kids in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "If a filling or crown falls out, we provide quick, painless repairs to protect your child’s tooth and restore comfort at our Hamilton, NJ pediatric dental office.",
    keywords: ["tooth extraction", "pediatric dentistry", "gentle dental care"],
  },
  orthodonticEmergency: {
    title: "Orthodontic Emergencies for Kids in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Broken braces or poking wires? We offer fast, friendly solutions for pediatric orthodontic emergencies in Hamilton, NJ to keep treatment on track and smiles stress-free.",
    keywords: ["tooth extraction", "pediatric dentistry", "gentle dental care"],
  },
  softTissueInjury: {
    title: "Soft Tissue Injury Care for Kids in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Cuts, bites, and gum injuries happen. Our pediatric dentist in Hamilton, NJ provides gentle, urgent treatment to stop pain, bleeding, and infection risk.",
    keywords: ["tooth extraction", "pediatric dentistry", "gentle dental care"],
  },
  Toothache: {
    title: "Toothache Relief for Kids in Hamilton, NJ | Mt. Brushmore Pediatric Dentistry | Gentle Kids Dental Care",
    description: "Tooth pain can’t wait - we offer immediate comfort and expert diagnosis for children with toothaches in Hamilton, NJ so they feel better fast.",
    keywords: ["tooth extraction", "pediatric dentistry", "gentle dental care"],
  },
};

/**
 * Helper function to create page metadata
 * @param title - Page title
 * @param description - Page description
 * @param path - Page path for canonical URL
 * @param keywords - Array of keywords
 * @returns Metadata object
 */
export function createMetadata(
  title: string,
  description: string,
  path: string = "/",
  keywords?: string[]
): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
    },
  };
}
