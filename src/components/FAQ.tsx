'use client';

import Image from 'next/image';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is Tymira Health Directory?',
    answer:
      'Tymira Health Directory is a digital platform powered by Tymira360 that helps patients across Africa discover and book appointments with verified healthcare providers. It allows users to search for care based on specialty, location, insurance, or symptoms. The platform is supported by AskTymira, an AI assistant that offers brief symptom checks, recommends the right specialists, and assists with appointment booking—available both on the web and WhatsApp.',
  },
  {
    question: 'How does AskTymira work?',
    answer:
      'AskTymira is an AI-powered assistant that guides users through healthcare navigation. You can interact via the web or WhatsApp by describing symptoms or needs. It analyzes your input, suggests appropriate specialists, and helps book appointments with verified providers, ensuring a seamless experience.',
  },
  {
    question: 'Can I find doctors based on my insurance provider?',
    answer:
      'Yes, Tymira Health Directory allows you to filter healthcare providers by insurance provider. Simply select your insurance plan during the search, and the platform will display doctors and clinics that accept it, making it easy to find in-network care.',
  },
  {
    question: 'Is AskTymira available in my country?',
    answer:
      'AskTymira is currently available in multiple African countries, including Kenya, Nigeria, and Rwanda, with plans to expand further. Check the platform or contact support to confirm availability in your country.',
  },
];

const FAQ: React.FC = () => {
  const [openStates, setOpenStates] = useState<boolean[]>(Array(faqs.length).fill(false));

  const toggleAccordion = (index: number) => {
    setOpenStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <section className="w-full py-12 bg-[#F2F6FC]">
      <div className="container mx-auto px-6 sm:px-8">
        {/* Heading */}
        <h2 className="faq-heading">
          Frequently Asked Questions
        </h2>
        {/* Accordions */}
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-accordion-${openStates[index] ? 'open' : 'closed'}`}
            >
              {/* Question */}
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => toggleAccordion(index)}
              >
                <span className="faq-question">
                  {faq.question}
                </span>
                <Image
                  src={openStates[index] ? '/images/faq/up.svg' : '/images/faq/down.svg'}
                  alt={openStates[index] ? 'Collapse' : 'Expand'}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </button>
              {/* Answer */}
              {openStates[index] && (
                <div className="p-4 pt-0">
                  <p className="faq-answer">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;