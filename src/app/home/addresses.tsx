"use client";
import React, { useState, useEffect } from 'react';
import { apiService, Location } from '@/lib/apiService';
import { useWorkingHours } from '@/lib/hooks/useWorkingHours';
import { contactDetails } from '@/lib/hooks/addressDetails';
import { extractMapUrl } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import BookingModal from '../booking/bookingScreen';
import './addresses.css';

export default function LocationTabs() {
    const [locations, setLocations] = useState<Location[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const data = await apiService.getLocations();
                setLocations(data);
                if (data.length > 0) {
                    setSelectedLocation(data[0]);
                }
            } catch (error) {
                console.error("Failed to fetch locations", error);
            }
        };

        fetchLocations();
    }, []);

    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const { workingHours, loading, getCurrentStatus } = useWorkingHours(selectedLocation?.id);

    return (
        <div className="location-tabs-container">
            <div className="location-tabs">
                {locations.map((location) => (
                    <button
                        key={location.id}
                        className={`location-tab ${selectedLocation?.id === location.id ? 'active' : ''}`}
                        onClick={() => setSelectedLocation(location)}
                    >
                        {location.name}
                    </button>
                ))}
            </div>
            {selectedLocation && (
                <div className="location-content">
                    <div className="location-info">
                        <h2>{selectedLocation.name}</h2>
                        <p>{selectedLocation.address}, {selectedLocation.city}, {selectedLocation.state} {selectedLocation.zipcode}</p>
                        <div className="working-hours">
                            <h3>Working Hours</h3>
                            {loading ? (
                                <p>Loading...</p>
                            ) : (
                                <ul>
                                    {workingHours.map((hour, index) => (
                                        <li key={index}>
                                            <span>{hour.day}</span>
                                            <span>{hour.time}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <p className="current-status">{getCurrentStatus()}</p>
                        </div>
                        <div className="contact-info">
                            <h3>Contact</h3>
                            <p>Phone: {contactDetails.phone}</p>
                            <p>Email: {contactDetails.email}</p>
                        </div>
                        <div className="location-buttons">
                            <Button onClick={() => setIsBookingOpen(true)}>
                                Book Appointment
                            </Button>
                            <Button asChild variant="outline">
                                <Link href={`https://www.google.com/maps/dir/?api=1&destination=${selectedLocation.address}`}>Get Directions</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="location-map">
                        {selectedLocation.mapUrl && (
                            <iframe
                                src={extractMapUrl(selectedLocation.mapUrl)}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        )}
                    </div>
                </div>
            )}
            <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
        </div>
    );
}
