import React, { useState, useEffect } from 'react';
import one from '../assets/pexels-mikael-blomkvist-6483579.jpg';
import two from '../assets/pexels-n-voitkevich-8939806.jpg';
import three from '../assets/pexels-karolina-grabowska-5632371.jpg';
import four from '../assets/pexels-n-voitkevich-8939569.jpg';
import five from '../assets/pexels-shvetsa-12679949.jpg';
import six from '../assets/pexels-sora-shimazaki-5926462.jpg';
import seven from '../assets/pexels-karolina-grabowska-5650023.jpg';



export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [one, two, three, four,five , six ,seven]; // Add more images if needed

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 2 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [images.length]);

    return (
        <div className="relative w-full h-[400px]">
            {/* Carousel Images */}
            <div className="w-full h-full overflow-hidden rounded-lg">
                <div
                    className="flex transition-transform duration-1000"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="flex-shrink-0 w-full h-full">
                            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
