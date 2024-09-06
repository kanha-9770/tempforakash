// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// interface AnimatedTextProps {
//   text: string;
//   className?: string; // Optional prop for custom text classes
//   blockClassName?: string; // Optional prop for custom block classes (background color, etc.)
// }

// const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className, blockClassName }) => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;

//     if (!container) return;

//     const handleAnimation = () => {
//       if (container) {
//         const tl = gsap.timeline();

//         // Animate the block sliding over the text
//         tl.fromTo(
//           container.querySelector('.block'),
//           { width: '0%' },
//           {
//             width: '100%',
//             duration: 1.5,
//             ease: 'cubic-bezier(0.74, 0.06, 0.4, 0.92)',
//           }
//         ).to(container.querySelector('.block'), {
//           width: '0%',
//           left: '100%',
//           duration: 0.5,
//           ease: 'power2.out',
//         });
//       }
//     };

//     // IntersectionObserver to detect when the element enters the viewport
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             handleAnimation();
//             observer.unobserve(container); // Unobserve after animation starts
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     observer.observe(container);

//     return () => {
//       observer.unobserve(container); // Clean up
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="relative flex flex-col justify-center w-auto">
//       <div className="relative flex items-center justify-center w-full h-auto">
//         {/* The animated block with customizable background class */}
//         <span className={`block absolute h-full ${blockClassName ? blockClassName : 'bg-white'}`}></span>
//         {/* The heading text with customizable class */}
//         <h1 className={`${className ? className : 'text-base font-regular'}`}>
//           {text}
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default AnimatedText;
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface AnimatedTextProps {
  text: string;
  className?: string; // Optional prop for custom text classes
  blockClassName?: string; // Optional prop for custom block classes (background color, etc.)
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className, blockClassName }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleAnimation = () => {
      const block = container.querySelector('.block');

      if (block) {
        // Reset the block's initial state
        gsap.set(block, { width: '0%', left: '0%' });

        const tl = gsap.timeline();

        // Animate the block sliding over the text at a faster speed
        tl.fromTo(
          block,
          { width: '0%' },
          {
            width: '100%',
            duration: 0.4, // Faster duration
            ease: 'cubic-bezier(0.74, 0.06, 0.4, 0.92)',
          }
        ).to(block, {
          width: '0%',
          left: '100%',
          duration: 0.3, // Faster duration
          ease: 'power2.out',
        });
      }
    };

    // IntersectionObserver to detect when the element enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleAnimation(); // Trigger animation each time element enters the viewport
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    observer.observe(container);

    // Clean up on component unmount
    return () => {
      observer.disconnect(); // Ensure observer is disconnected when component unmounts
    };
  }, []);

  return (
    <div ref={containerRef} className="relative flex flex-col justify-center w-auto">
      <div className="relative flex items-center justify-center w-full h-auto">
        {/* The animated block with customizable background class */}
        <span className={`block absolute ${blockClassName ? blockClassName : 'bg-white h-full'}`}></span>
        {/* The heading text with customizable class */}
        <h1 className={`${className ? className : 'text-base font-regular'}`}>
          {text}
        </h1>
      </div>
    </div>
  );
};

export default AnimatedText;
