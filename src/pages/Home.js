import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Gamification from '../components/Gamification/Gamification';
import FocusFlow from '../components/FocusFlow/FocusFlow';
import Screenshots from '../components/Screenshots/Screenshots';
import Benefits from '../components/Benefits/Benefits';
import Download from '../components/Download/Download';

const Home = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('fade-in-visible');
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section, .hero');
    sections.forEach((s) => {
      s.classList.add('fade-in');
      observer.observe(s);
    });
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <Gamification />
      <FocusFlow />
      <Screenshots />
      <Benefits />
      <Download />
    </>
  );
};

export default Home;
