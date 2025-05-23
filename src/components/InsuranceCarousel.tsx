'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

const baseLogos: string[] = [
  '/images/insurance/Britam.svg',
  '/images/insurance/Pacis.svg',
  '/images/insurance/UAP.svg',
  '/images/insurance/AAR.svg',
  '/images/insurance/Jubilee.svg',
];
const insuranceLogos: string[] = [...baseLogos, ...baseLogos, ...baseLogos];

const InsuranceCarousel: React.FC = () => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = (): void => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 2000);
    }
  };

  const handleNext = (): void => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 2000);
    }
  };

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-6 sm:px-8">
        <h2 className="insurance-title">
          <span className="text-black">In network</span>{' '}
          <span className="text-[#5E59FC]">Insurance plans</span>
        </h2>

        <div
          className="relative mt-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={handlePrev}
            className="hidden sm:flex absolute left-[-16px] top-1/2 transform -translate-y-1/2 w-12 h-12 p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none z-30"
            aria-label="Previous slide"
          >
            <Image
              src="/images/left-icon.svg"
              alt="Previous"
              width={35}
              height={35}
              className="flex-shrink-0"
              onError={() => console.error('Failed to load left-icon.svg')}
            />
          </button>

          <div className="overflow-hidden px-20 sm:px-0 sm:w-[70%] mx-auto">
            <div
              ref={carouselRef}
              className={`flex ${isPaused ? '' : 'insurance-carousel'} hide-scrollbar`}
              style={{ scrollBehavior: 'smooth' }}
            >
              {insuranceLogos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 flex justify-center items-center px-4 h-[100px]">
                  <Image
                    src={logo}
                    alt={`Insurance Logo ${index + 1}`}
                    width={0}
                    height={50}
                    className="object-contain max-h-[50px] sm:max-h-[100px] w-auto"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="hidden sm:flex absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-12 h-12 p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none z-30"
            aria-label="Next slide"
          >
            <Image
              src="/images/right-icon.svg"
              alt="Next"
              width={35}
              height={35}
              className="flex-shrink-0"
              onError={() => console.error('Failed to load right-icon.svg')}
            />
          </button>

          <div className="carousel-dots">
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceCarousel;