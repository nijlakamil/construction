import React, { useEffect, useRef, useState } from "react";
import "./Owners.css";

const ownersData = [
  {
    id: 1,
    name: "Mark Wilson",
    title: "Founder & CEO",
    saying: `"Innovation distinguishes between a leader and a follower."`,
    image: "/images/owner1.png",
  },
  {
    id: 2,
    name: "Alice Johnson",
    title: "Chief Architect",
    saying: `"Design is not just what it looks like, but how it works."`,
    image: "/images/owner2.jpg",
  },
  {
    id: 3,
    name: "Sophia Lee",
    title: "Operations Head",
    saying: `"Excellence is a continuous process, not an accident."`,
    image: "/images/owner3.jpg",
  },
];

function Owners() {
  const containerRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState({});

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".owner-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({
              ...prev,
              [entry.target.dataset.id]: true,
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const animationClasses = ["animate-slideInLeft", "animate-slideInUp", "animate-slideInRight"];

  return (
    <div className="owners-container" ref={containerRef}>
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/video.mp4"
      />
      <h2 className="owners-heading">Meet Our Team</h2>
      <div className="owners-wrapper">
        {ownersData.map((owner, index) => (
          <div
            key={owner.id}
            data-id={owner.id}
            className={`owner-card ${visibleCards[owner.id] ? animationClasses[index % animationClasses.length] : ""}`}
          >
            <img src={owner.image} alt={owner.name} className="owner-image" />
            <h3 className="owner-name">{owner.name}</h3>
            <p className="owner-title">{owner.title}</p>
            <blockquote className="owner-saying">{owner.saying}</blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Owners;
