import React, { useState, useEffect, useRef } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "What services does Build Right Solutions offer?",
    answer: "We provide residential and commercial construction, renovation, interior finishing, and project management services."
  },
  {
    question: "Are your services licensed and insured?",
    answer: "Yes, all our services are fully licensed and insured to ensure safety and compliance with regulations."
  },
  {
    question: "Do you offer free consultations or estimates?",
    answer: "Absolutely! We provide no-cost consultations and free estimates for all types of projects."
  },
  {
    question: "How long does a typical construction project take?",
    answer: "Timelines vary by project size, but we prioritize efficiency and timely delivery with full transparency."
  },
  {
    question: "Can I make changes once construction has started?",
    answer: "Yes, we accommodate changes during the project with clear communication and updated planning."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve multiple regions including metropolitan and suburban areas. Contact us to check availability in your location."
  },
  {
    question: "Do you handle permits and inspections?",
    answer: "Yes, we manage all necessary permits, paperwork, and inspections throughout the project lifecycle."
  },
  {
    question: "Do you use sustainable or eco-friendly materials?",
    answer: "We prioritize environmentally responsible materials and methods when requested or feasible."
  },
  {
    question: "What safety measures are taken during construction?",
    answer: "We follow strict safety protocols, ensuring both worker and site safety throughout the project."
  },
  {
    question: "What is your payment schedule like?",
    answer: "Our payment terms are project-dependent, usually involving a deposit, progress payments, and a final payment upon completion."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const titleRef = useRef(null);
  const fullTitle = "Frequently Asked Questions";
  const [typedTitle, setTypedTitle] = useState('');

  // Typewriter effect triggered when title is scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && typedTitle.length === 0) {
          let index = 0;
          const type = () => {
            if (index < fullTitle.length) {
              setTypedTitle((prev) => prev + fullTitle.charAt(index));
              index++;
              setTimeout(type, 100);
            }
          };
          type();
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, [typedTitle.length, fullTitle]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title" ref={titleRef}>{typedTitle}</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <svg
                className={`faq-icon ${openIndex === index ? 'rotate' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
