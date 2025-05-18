import React, { useEffect, useRef, useState } from "react";
import "./Aboutus.css";

function Aboutus() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // animate only once
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="about-container" ref={containerRef}>
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/video.mp4"
      />
      <div className="content-wrapper">
        <div className={`text-section ${isVisible ? "animate" : ""}`}>
          <h2 className="heading">Welcome to BuildRight Solutions</h2>
          <p className="paragraph">
            At BuildRight Solutions, we pride ourselves on delivering top-tier
            construction projects with innovation, precision, and integrity.
            Our experienced team combines cutting-edge technology with
            sustainable practices to build the future, today.
          </p>
          <p className="paragraph">
            From residential to commercial developments, our commitment to
            quality and client satisfaction sets us apart. We believe every
            structure we build is a testament to our passion and
            professionalism.
          </p>
        </div>
        <div className={`image-section ${isVisible ? "animate" : ""}`}>
          <img
            src="/images/business.jpg"
            alt="Construction site"
            className="animated-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
