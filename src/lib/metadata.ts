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
    title: "Preventive Dentistry - Mt. Brushmore Dental",
    description: "Professional dental cleanings, exams, and preventive care to maintain your oral health.",
    keywords: ["preventive dentistry", "dental cleanings", "dental exams"],
  },
  restorativeDentistry: {
    title: "Restorative Dentistry - Mt. Brushmore Dental",
    description: "Restore your smile with our restorative dental treatments including fillings, crowns, and bridges.",
    keywords: ["restorative dentistry", "dental fillings", "crowns", "bridges"],
  },
  orthodontics: {
    title: "Orthodontics - Mt. Brushmore Dental",
    description: "Straighten your smile with our comprehensive orthodontic treatments and solutions.",
    keywords: ["orthodontics", "braces", "teeth straightening"],
  },
  sedationDentistry: {
    title: "Sedation Dentistry - Mt. Brushmore Dental",
    description: "Comfortable dental care with sedation options for anxious patients.",
    keywords: ["sedation dentistry", "dental anxiety", "comfortable dentistry"],
  },
  emergencyDentistry: {
    title: "Emergency Dentistry - Mt. Brushmore Dental",
    description: "24/7 emergency dental services for urgent dental problems.",
    keywords: ["emergency dentistry", "urgent dental care", "dental emergency"],
  },
  dentalCleanings: {
    title: "Dental Cleanings & Exams - Mt. Brushmore Dental",
    description: "Professional dental cleanings and thorough exams to keep your teeth healthy.",
    keywords: ["dental cleaning", "dental exams", "teeth cleaning"],
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
  dentalFinancing: {
    title: "Dental Financing - Mt. Brushmore Dental",
    description: "Flexible financing options to make dental care affordable.",
    keywords: ["dental financing", "payment plans", "affordable dentistry"],
  },
  firstVisit: {
    title: "Your First Visit - Mt. Brushmore Dental",
    description: "Learn what to expect during your first visit to Mt. Brushmore Dental.",
    keywords: ["first dental visit", "new patient", "dental appointment"],
  },
  patientForms: {
    title: "Patient Forms - Mt. Brushmore Dental",
    description: "Download and complete patient forms before your appointment.",
    keywords: ["patient forms", "dental forms"],
  },
  location: {
    title: "Location & Contact - Mt. Brushmore Dental",
    description: "Visit us at our convenient locations. Hours, directions, and contact information.",
    keywords: ["dental office", "location", "contact", "address"],
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
