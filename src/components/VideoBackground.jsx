import React, { useEffect, useRef } from "react";
import "./VideoBackground.css";

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10; // range -5 to 5
      const y = (e.clientY / innerHeight - 0.5) * 10;

      if (videoRef.current) {
        videoRef.current.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
      }
    };

    const resetTransform = () => {
      if (videoRef.current) {
        videoRef.current.style.transform = `scale(1.05) translate(0, 0)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", resetTransform);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", resetTransform);
    };
  }, []);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        src="/videos/video.mp4"
        type="video/mp4"
      />
      <div className="overlay-text">
        <h1>Welcome to BuildRight Solutions</h1>
        <p>Building Right Ideas Into Reality.</p>
         <button className="overlay-button">Explore Services</button>
      </div>
     
    </div>
  );
};

export default VideoBackground;
