'use client';

import Image from 'next/image';

const WhyChooseTymira: React.FC = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row why-choose-tymira">
      {/* Left Side */}
      <div className="why-choose-tymira-left w-full lg:w-1/2 flex flex-col items-start py-[90px] px-[120px] gap-[10px] bg-[#10106D] border-b border-white lg:border-b-0">
        <h2 className="why-choose-tymira-title font-campton">
          Why Patients Choose Tymira
        </h2>
        <p className="why-choose-tymira-subtitle font-campton">
          Tymira is the go to for all your healthcare questions.
        </p>
        <div className="w-full mt-6 flex flex-col gap-4">
          {[
            'Trusted verified provider network.',
            'Multi-language, multi-country support.',
            'AI-assisted health navigation.',
            'Simple and secure booking process.',
          ].map((feature, index) => (
            <div key={index} className="w-full">
              <h3 className="why-choose-tymira-feature font-chillax pl-4">
                {feature}
              </h3>
              <hr className="w-full border-t border-[#FFF] mt-4" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="why-choose-tymira-right w-full lg:w-1/2 relative">
        <Image
          src="/images/why-tymira/Illustrations/why-right-img.svg"
          alt="Why Choose Tymira"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          onError={() =>
            console.error(
              'Failed to load why-right-img.svg in WhyChooseTymira'
            )
          }
        />
      </div>
    </section>
  );
};

export default WhyChooseTymira;