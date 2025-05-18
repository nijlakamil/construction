import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Banners.css";

const Banners = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3, // Adjust this to trigger earlier/later
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div className="video-banner-wrapper">
      {/* Background video */}
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        src="/video.mp4"
        type="video/mp4"
      />

      {/* Tagline with scroll animation */}
      <motion.div
        ref={ref} // attach ref here
        className="banner-tagline"
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          hidden: { opacity: 0, y: 50 },
        }}
      >
        <h1>BuildRight Solutions</h1>
        <p>Crafting Future-Ready Spaces with Precision and Passion</p>
      </motion.div>

      {/* Banner images */}
      <div className="banner-wrapper">
         
  {/* New overlay */}
  <div className="banner-overlay"></div>
  
        <div className="banner-track">
          {["building1", "building2", "building3", "building4", "building5", "building6"].map((img, index) => (
            <img key={index} src={`/images/${img}.jpg`} alt={`Building ${index + 1}`} className="banner-img" />
          ))}
          {/* Duplicates for infinite scroll effect */}
          {["building1", "building2", "building3", "building4", "building5", "building6"].map((img, index) => (
            <img key={`dup-${index}`} src={`/images/${img}.jpg`} alt={`Building ${index + 1}`} className="banner-img" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banners;
