'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

const specialtiesData = [
  {
    id: 1,
    picture: '/images/Specialties/pic1.png',
    title: 'General Practice',
    narration: 'Your first stop for everyday health concerns and preventive care.',
  },
  {
    id: 2,
    picture: '/images/Specialties/pic2.png',
    title: 'Pediatrics',
    narration: 'Gentle, expert care for your child’s health at every stage.',
  },
  {
    id: 3,
    picture: '/images/Specialties/pic1.png',
    title: 'General Practice2',
    narration: 'Your first stop for everyday health concerns and preventive care.',
  },
  {
    id: 4,
    picture: '/images/Specialties/pic2.png',
    title: 'Pediatrics2',
    narration: 'Gentle, expert care for your child’s health at every stage.',
  },
];

const Specialties: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handlePrev = (): void => {
    setCurrentIndex((prev) => (prev === 0 ? specialtiesData.length - 1 : prev - 1));
    scrollRef.current?.scrollBy({ left: -389, behavior: 'smooth' });
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev === specialtiesData.length - 1 ? 0 : prev + 1));
    scrollRef.current?.scrollBy({ left: 389, behavior: 'smooth' });
  };

  return (
    <section className="flex-shrink-0 bg-[#FAFAFA] w-full max-w-[1272px] specialties-container mx-auto">
      <div className="container mx-auto p-6 flex flex-col sm:flex-row items-start sm:p-8">
        {/* Left Section */}
        <div className="w-full sm:w-2/5 flex flex-col justify-start">
          <h2 className="text-[32px] sm:text-[38px] font-semibold leading-[48px] sm:leading-[57px] text-[#10106D] font-campton">
            Explore our<br />
            <span className="text-[#5E59FC]">Specialties</span>
          </h2>
          <p className="mt-2 text-[16px] sm:text-[18px] font-normal leading-[26px] sm:leading-[29.016px] tracking-[-0.36px] text-black font-campton">
            Discover care tailored to your needs from<br />verified health professionals.
          </p>
          <button className="mt-6 self-start px-6 py-4 text-[16px] sm:text-[17px] font-semibold text-[#5E59FC] border border-solid border-[#10106D] rounded-lg flex justify-center items-center font-chillax">
            View All Our Specialties
          </button>
        </div>

        {/* Right Section (Scrollable Cards) */}
        <div className="w-full sm:w-3/5 flex flex-col mt-6 sm:mt-0">
          <div className="relative">
            <div ref={scrollRef} className="flex overflow-x-auto scroll-smooth gap-4 pb-4 hide-scrollbar">
              {specialtiesData.map((specialty) => (
                <div
                  key={specialty.id}
                  className="flex-shrink-0 specialty-card w-full sm:w-[389px] h-[417px] bg-white rounded-[16px] border border-[#DEDEDE] flex flex-col items-end gap-8 p-[24px_26px]"
                >
                  <div className="specialty-image-container h-[183px] flex justify-center items-center flex-shrink-0 self-stretch rounded-lg">
                    <Image
                      src={specialty.picture}
                      alt={specialty.title}
                      width={106}
                      height={106}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[22px] sm:text-[24px] font-medium leading-[32px] sm:leading-[36px] tracking-[-0.48px] text-[#10106D] font-campton self-start">
                    {specialty.title}
                  </h3>
                  <p className="text-[16px] sm:text-[18px] font-normal leading-[26px] sm:leading-[29.016px] tracking-[-0.36px] text-black font-campton self-start">
                    {specialty.narration}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <button onClick={handlePrev} className="p-2 rounded-full hover:bg-gray-200" aria-label="Previous specialty">
                <Image src="/images/professional-left-icon.svg" alt="Previous" width={35} height={35} />
              </button>
              <button onClick={handleNext} className="p-2 rounded-full hover:bg-gray-200" aria-label="Next specialty">
                <Image src="/images/professional-right-icon.svg" alt="Next" width={35} height={35} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;