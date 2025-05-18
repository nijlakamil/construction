import React, { useEffect, useState, useRef } from 'react';
import './StatsCounter.css';

const useCountUp = (target, duration = 2000, start) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return; // don't start counting if start is false

    let startCount = 0;
    const increment = target / (duration / 50);

    const timer = setInterval(() => {
      startCount += increment;
      if (startCount >= target) {
        startCount = target;
        clearInterval(timer);
      }
      setCount(Math.floor(startCount));
    }, 50);

    return () => clearInterval(timer);
  }, [target, duration, start]);

  return count;
};

const StatsCounter = () => {
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  const projectsWorking = 8;
  const satisfiedClients = 120;
  const projectsCompleted = 75;

  const workingCount = useCountUp(projectsWorking, 2000, startCount);
  const clientsCount = useCountUp(satisfiedClients, 2000, startCount);
  const completedCount = useCountUp(projectsCompleted, 2000, startCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <div className="stats-container" ref={statsRef}>
      <h2 className="stats-title">Our Achievements</h2>
      <div className="stats-grid">
        <div className="stats-card">
          <div className="stats-number">{workingCount}+</div>
          <div className="stats-label">Projects Working On</div>
        </div>
        <div className="stats-card">
          <div className="stats-number">{clientsCount}+</div>
          <div className="stats-label">Satisfied Clients</div>
        </div>
        <div className="stats-card">
          <div className="stats-number">{completedCount}+</div>
          <div className="stats-label">Projects Completed</div>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
