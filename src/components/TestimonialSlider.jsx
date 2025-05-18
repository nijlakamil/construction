import React, { useState } from "react";
import QuoteIcon from "./QuoteIcon"; // You can replace with any icon you like
import "./TestimonialSlider.css";

const testimonials = [
  {
    company: "Pisor Fence Division Inc",
    name: "Jeremiah Wright",
    text: "I am satisfied with the products and services provided by Dodge.",
  },
  {
    company: "Simpson Strong-Tie Company, Inc.",
    name: "Joseph Landeira",
    text: "Dodge is a great tool for tracking real projects and getting important information about those projects.",
  },
  {
    company: "Another Company",
    name: "Jane Doe",
    text: "A very positive experience. Highly recommended!",
  },
  {
    company: "Global Tech Solutions",
    name: "Alice Smith",
    text: "Exceptional support and great value for the price.",
  },
  {
    company: "InnovateX",
    name: "Michael Johnson",
    text: "The dashboard is intuitive and easy to use for our entire team.",
  },
  {
    company: "Bright Future Inc.",
    name: "Rachel Lee",
    text: "Improved our workflow efficiency dramatically.",
  },
  {
    company: "Creative Minds",
    name: "David Kim",
    text: "The customer service team was very helpful and responsive.",
  },
  {
    company: "EcoWorks",
    name: "Samantha Green",
    text: "Sustainability-focused and effective — highly recommend!",
  },
  {
    company: "FastTrack Logistics",
    name: "Chris Walker",
    text: "Reliable tools that keep our projects on track.",
  },
  {
    company: "HealthPlus",
    name: "Natalie Young",
    text: "Our team loves using this platform daily.",
  },
  {
    company: "EduGrow",
    name: "Peter Brown",
    text: "Makes learning management much simpler for our educators.",
  },
  {
    company: "NextGen Apps",
    name: "Olivia White",
    text: "The best investment we made this year for project tracking.",
  },
  {
    company: "Star Media",
    name: "Ethan Davis",
    text: "Our content pipeline is smooth thanks to this tool.",
  },
  {
    company: "SafeNet",
    name: "Linda Martinez",
    text: "Security features are top-notch and very reassuring.",
  },
  {
    company: "Urban Design Co.",
    name: "Mark Wilson",
    text: "Intuitive design and fantastic results.",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonial-slider-inspired">
      <h2 className="slider-heading-inspired">Testimonials</h2>

      <div className="testimonial-box-inspired">
        <QuoteIcon className="quote-icon-inspired" />
        <p className="testimonial-text-inspired">
          {testimonials[currentIndex].text}
        </p>
        <p className="company-name-inspired">{testimonials[currentIndex].company}</p>
        <p className="client-name-inspired">{testimonials[currentIndex].name}</p>
      </div>

      <div className="arrow-buttons-inspired">
        <button className="arrow-button" onClick={goToPrevious} aria-label="Previous testimonial">
          &#8592;
        </button>
        <button className="arrow-button" onClick={goToNext} aria-label="Next testimonial">
          &#8594;
        </button>
      </div>
    </div>
  );
}
