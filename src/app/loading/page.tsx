'use client'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

type LoadingScreenProps = {
  onComplete: () => void;
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const circleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Set initial states for circle and content
    gsap.set(circleRef.current, { scale: 0, autoAlpha: 0 });
    gsap.set(contentRef.current, { autoAlpha: 0 });

    // Scale in the circle with content fade-in
    gsap.to(circleRef.current, {
      scale: 1,
      autoAlpha: 1,
      duration: 1.5,
      ease: "power2.out",
      onComplete: () => {
        // Reveal content after circle scales in
        gsap.to(contentRef.current, { autoAlpha: 1, duration: 0.5 });
      },
    });

    // Continuous rotation for the circle
    const rotateAnimation = gsap.to(circleRef.current, {
      rotation: 360,
      duration: 1,
      ease: "linear",
      repeat: -1,
    });

    // Scale out the circle after 5 seconds and hide content
    gsap.to(circleRef.current, {
      scale: 2.0,
      autoAlpha: 0,
      duration: 1,
      delay: 5,
      onComplete: () => {
        rotateAnimation.kill(); // Stop the rotation
        onComplete();           // Trigger the completion function
      },
    });
  }, [onComplete]);

  return (
    <div style={{ backgroundColor: 'white', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div
        ref={circleRef}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '8px solid transparent',
          borderTopColor: 'hsl(322, 100%, 66%)',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          ref={contentRef}
          style={{
            color: 'black',
            fontSize: '16px',
            opacity: 0, // Start with content hidden
          }}
        >
          Huddle...
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;