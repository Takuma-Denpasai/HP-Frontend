'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

export const Slideshow: React.FC = () => {

    const images: string[] = [ "/next.svg", "/vercel.svg" ]

    const [ currentImageIndex, setCurrentImageIndex ] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    })

    return (
        <div className="fixed top-0 left-0 w-full h-screen z-[-1]">
            {images.map((image: string, index: number) => (
                <Image
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    fill
                    className={`absolute transition duration-500 ease-linear brightness-50 blur-sm ${
                        index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ objectFit: 'contain' }}
                />
            ))}
        </div>
    );
};