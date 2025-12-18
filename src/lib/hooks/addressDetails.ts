import { Phone, Mail, MapPin } from 'lucide-react';

export const contactDetails = {
  address: "2115 Rt 33, Hamilton, NJ 08690",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.3924037399147!2d-74.64843352452702!3d40.2225766674341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c15f08cb1732f7%3A0xeddd0750c9f8b12d!2s2115%20NJ-33%2C%20Hamilton%20Township%2C%20NJ%2008690%2C%20USA!5e0!3m2!1sen!2sin!4v1765869983657!5m2!1sen!2sin",
  phone: "+1 (609) 422-4700",
  email: "hamilton@mountbrushmore.dental",
};

export const contactInfo = [
  {
    icon: MapPin,
    text: contactDetails.address,
  },
  {
    icon: Phone,
    text: contactDetails.phone,
  },
  {
    icon: Mail,
    text: contactDetails.email,
  },
];
