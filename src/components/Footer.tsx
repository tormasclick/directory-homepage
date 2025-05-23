'use client';

import React from 'react'; 
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#10106D] text-white">
      <div className="container mx-auto px-6 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <Image
              src="/images/footer/logo-footer.svg"
              alt="Tymira Health Logo"
              width={258}
              height={52}
              className="mx-auto lg:mx-0 object-contain"
            />
            <h3 className="footer-title">Join our newsletter</h3>
            <div className="relative w-[220px] mx-auto lg:mx-0 h-[43px] rounded-lg border border-[#ADDAFF] bg-white">
              <input
                type="email"
                placeholder="Your email here"
                className="w-full h-full pl-4 pr-12 text-[#000] footer-newsletter-input outline-none"
              />
              <button
                className="absolute right-0 top-0 w-[41px] h-[43px] flex-shrink-0"
                style={{
                  backgroundImage: "url('/images/footer/button.svg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>

          {/* Column 2: For Patients */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <h3 className="footer-title">FOR PATIENTS</h3>
            <ul className="space-y-2">
              <li className="footer-menu-item">Find a Specialist</li>
              <li className="footer-menu-item">Book an Appointment</li>
              <li className="footer-menu-item">Top-Rated Doctors</li>
              <li className="footer-menu-item">Health Checkups & Preventive Care</li>
              <li className="footer-menu-item">Mental Health & Therapy</li>
              <li className="footer-menu-item">Emergency Support</li>
              <li className="footer-menu-item">Patient Resources</li>
              <li className="footer-menu-item">AskTymira (WhatsApp Assistant)</li>
            </ul>
          </div>

          {/* Column 3: For Providers */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <h3 className="footer-title">FOR PROVIDERS</h3>
            <ul className="space-y-2">
              <li className="footer-menu-item">Tymira360 – EMR & Clinic Tools</li>
              <li className="footer-menu-item">List Your Practice</li>
              <li className="footer-menu-item">Directory Onboarding</li>
              <li className="footer-menu-item">Provider Login</li>
              <li className="footer-menu-item">TymiraCredit – Access Financing</li>
              <li className="footer-menu-item">TymiraAI – Smart Diagnostics</li>
              <li className="footer-menu-item">Training & Help Center</li>
              <li className="footer-menu-item">Get Support</li>
            </ul>
          </div>

          {/* Column 4: Top Specialists */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <h3 className="footer-title">TOP SPECIALISTS</h3>
            <ul className="space-y-2">
              <li className="footer-menu-item">Pediatricians</li>
              <li className="footer-menu-item">Gynecologists</li>
              <li className="footer-menu-item">Psychologists & Therapists</li>
              <li className="footer-menu-item">General Physicians</li>
              <li className="footer-menu-item">Cardiologists</li>
              <li className="footer-menu-item">Dentists</li>
              <li className="footer-menu-item">More Specialties →</li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <h3 className="footer-title">COMPANY</h3>
            <ul className="space-y-2">
              <li className="footer-menu-item">About Us</li>
              <li className="footer-menu-item">Leadership</li>
              <li className="footer-menu-item">Careers</li>
              <li className="footer-menu-item">Newsroom</li>
              <li className="footer-menu-item">Press</li>
              <li className="footer-menu-item">Contact Us</li>
              <li className="footer-menu-item">Blog</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="hidden lg:block lg:col-span-1"></div>

          <div className="flex flex-col gap-8 text-center lg:text-left">
            <h3 className="footer-title">PRODUCTS</h3>
            <ul className="space-y-2">
              <li className="footer-menu-item">Tymira360 – Hospital & Practice Suite</li>
              <li className="footer-menu-item">TymiraAccess – Provider Directory</li>
            </ul>
            <div
              className="absolute right-0 top-10 hidden lg:block"
              style={{
                width: '0px',
                height: '101.5px',
                borderRight: '1px solid #FFF',
              }}
            />
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <h3 className="footer-title">LEGAL</h3>
            <ul className="space-y-2">
              <li className="footer-menu-item">Terms of Service</li>
              <li className="footer-menu-item">Privacy Policy</li>
              <li className="footer-menu-item">Security & Compliance</li>
              <li className="footer-menu-item">HIPAA & Data Use</li>
              <li className="footer-menu-item">Cookie Preferences</li>
            </ul>
            <div
              className="absolute right-0 top-10 hidden lg:block"
              style={{
                width: '0px',
                height: '101.5px',
                borderRight: '1px solid #FFF',
              }}
            />
          </div>

          {/* Column 4: Explore Locations */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <h3 className="footer-title">EXPLORE LOCATIONS</h3>
            <ul className="space-y-2">
              <li className="footer-menu-item">All Locations</li>
              <li className="footer-menu-item">Top Hospitals in Kenya</li>
              <li className="footer-menu-item">Specialists in Nairobi</li>
              <li className="footer-menu-item">Telehealth Providers</li>
            </ul>
            <div
              className="absolute right-0 top-10 hidden lg:block"
              style={{
                width: '0px',
                height: '101.5px',
                borderRight: '1px solid #FFF',
              }}
            />
          </div>

          {/* Column 5: Contact Us */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <h3 className="footer-title">CONTACT US</h3>
            <div className="space-y-2">
              <p className="footer-contact-text">Nairobi, Kenya</p>
              <p className="footer-contact-text">Westlands, Nairobi Kenya</p>
              <p className="footer-contact-text">E: info@tymirahealth.com</p>
              <p className="footer-contact-text">P: +254 XXX XXX XXX</p>
            </div>
          </div>
        </div>

        {/* Horizontal HR */}
        <hr
          className="my-8 w-full mx-auto"
          style={{
            border: 'none',
            borderTop: '1px solid #FFF',
          }}
        />

        {/* Social Media Icons (Bottom Right) */}
        <div className="flex justify-center lg:justify-end gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/footer/instagram.svg"
              alt="Instagram"
              width={42}
              height={42}
              className="object-contain"
            />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/footer/x.svg"
              alt="X"
              width={42}
              height={42}
              className="object-contain"
            />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/footer/facebook.svg"
              alt="Facebook"
              width={42}
              height={42}
              className="object-contain"
            />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/footer/linkedin.svg"
              alt="LinkedIn"
              width={42}
              height={42}
              className="object-contain"
            />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/footer/tiktok.svg"
              alt="TikTok"
              width={42}
              height={42}
              className="object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;