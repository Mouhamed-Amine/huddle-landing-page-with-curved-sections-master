'use client'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Define props type fors the LoadingScreen component
type LoadingScreenProps = {
  onComplete: () => void; // Expecting a function with no parameters and void return
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onComplete, // Call onComplete when the animation ends
    });

    // Set initial states for circle and content
    gsap.set(circleRef.current, { scale: 0, autoAlpha: 0 });
    gsap.set(contentRef.current, { autoAlpha: 0 });

    // Timeline for scaling in circle and content fade-in
    tl.to(circleRef.current, {
      scale: 1,
      autoAlpha: 1,
      duration: 1.5,
      ease: "power2.out",
    })
      .to(contentRef.current, { autoAlpha: 1, duration: 0.5 }, "-=0.5")
      .to(circleRef.current, {
        rotation: 360,
        duration: 1,
        ease: "linear",
        repeat: -1,
      })
      .to(circleRef.current, {
        scale: 2.0,
        autoAlpha: 0,
        duration: 1,
        delay: 5,
        onComplete: () => {
          tl.kill(); // Stop the timeline
        },
      });

    // Clean up animations on component unmount
    return () => {
      tl.kill();
      gsap.killTweensOf([circleRef.current, contentRef.current]);
    };
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
