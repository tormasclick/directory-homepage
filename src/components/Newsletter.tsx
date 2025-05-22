'use client';

import Image from 'next/image';

const Newsletter: React.FC = () => {
  // Debug: Log the image path to verify it's being accessed
  console.log('Newsletter Image Path:', '/images/subscribe/subscribe-img.png');

  return (
    <section className="w-full py-12">
      <div className="container mx-auto newsletter-container">
        {/* Left Section */}
        <div className="flex flex-col justify-center gap-6 newsletter-left lg:rounded-l-[32px]">
          {/* Heading */}
          <h2 className="text-center lg:text-left newsletter-heading">
            Stay <span className="newsletter-heading-highlight">informed</span> with Tymira
          </h2>
          {/* Subheading */}
          <p className="text-center lg:text-left newsletter-subheading">
            Join our newsletter to stay up to date on features and releases.
          </p>
          {/* Text Box */}
          <div className="newsletter-input-container">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-[#000] newsletter-input"
            />
            <button className="newsletter-button">
              Subscribe
            </button>
          </div>
          {/* Privacy Note */}
          <p className="text-center lg:text-left newsletter-privacy">
            By subscribing you agree to with our{' '}
            <a href="/privacy-policy" className="newsletter-privacy-link">
              Privacy Policy
            </a>
            <br /> and provide consent to receive updates from our
            <br /> company.
          </p>
        </div>
        {/* Right Section */}
        <div className="newsletter-right hidden lg:block">
          <Image
            src="/images/subscribe/subscribe-img.png"
            alt="Newsletter subscription"
            fill
            className="newsletter-image"
            priority // Optional: Load the image eagerly
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;