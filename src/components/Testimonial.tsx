'use client';

import Image from 'next/image';
import { useRef } from 'react';

interface TestimonialCard {
  id: number;
  content: string;
  name: string;
}

const testimonials: TestimonialCard[] = [
  {
    id: 1,
    content:
      'As a first-time user, I was amazed at how easy it was to search and book a doctor who accepted my insurance. AskTymira even answered my initial concerns before I went!',
    name: 'Sarah Johnson',
  },
  {
    id: 2,
    content:
      'I used AskTymira on WhatsApp, described my symptoms, and was directed to the right specialist. Booking the appointment took less than 5 minutes.',
    name: 'Sarah Johnson',
  },
  {
    id: 3,
    content:
      'Even from a smaller town, I found a dermatologist in Kigali who offers telemedicine. Tymira made the whole process feel smooth and safe.',
    name: 'Sarah Johnson',
  },
];

const Testimonial: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-6 sm:px-8">
        {/* Heading */}
        <h2 className="testimonial-heading">
          See what our users are saying
        </h2>
        {/* Subheading */}
        <p className="testimonial-subheading mt-4 max-w-[900px]">
          Real stories from patients and providers across Africa who’ve used
          Tymira to make healthcare simpler, faster, and more trustworthy.
        </p>
        {/* Cards */}
        <div
          ref={scrollRef}
          className="mt-8 flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col w-[380px] p-6 border border-[#DEDEDE] bg-[#FFF] rounded-[12px] gap-[10px] flex-shrink-0 snap-center"
            >
              {/* Stars */}
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/images/testimonial/star.svg"
                    alt="Star"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                ))}
              </div>
              {/* Content */}
              <p className="testimonial-content">
                {testimonial.content}
              </p>
              {/* Name */}
              <span className="testimonial-name">
                {testimonial.name}
              </span>
            </div>
          ))}
        </div>
        {/* Scroll Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button onClick={scrollLeft} className="w-[56px] h-[56px]">
            <Image
              src="/images/testimonial/left.svg"
              alt="Scroll Left"
              width={56}
              height={56}
              className="object-contain"
            />
          </button>
          <button onClick={scrollRight} className="w-[56px] h-[56px]">
            <Image
              src="/images/testimonial/right.svg"
              alt="Scroll Right"
              width={56}
              height={56}
              className="object-contain"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;