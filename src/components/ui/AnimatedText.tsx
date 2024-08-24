import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AnimatedText.module.css';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;

    if (container) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(
        container.querySelector(`.${styles.block}`),
        { width: '0%' },
        {
          width: '100%',
          duration: 2,
          ease: 'cubic-bezier(0.74, 0.06, 0.4, 0.92)',
          onComplete: () => {
            gsap.to(container.querySelector('.heading'), {
              opacity: 1,
              duration: 2,
              delay: 0.4,
            });
          },
        }
      );
    }

    return () => {
      if (container) {
        ScrollTrigger.getById(container.id)?.kill();
      }
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.box}>
        <div className={styles.title}>
          <span className={styles.block}></span>
          <h1 className='heading'>
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
