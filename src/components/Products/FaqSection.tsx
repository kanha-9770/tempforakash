import { useEffect, useState, useRef } from 'react';
import { FaQuestionCircle, FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./style.css";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
    {
        question: 'Is it possible to use renewable paper?',
        answer: 'Yes, renewable paper can be used for the cups.',
      },
      {
        question: 'Can the surface be printed and embossed?',
        answer: 'Yes, the surface can be both printed and embossed.',
      },
      {
        question: 'What is the main paper material for the cup?',
        answer: 'The main paper material used is high-quality cardboard.',
      },
      {
        question: 'Is it possible to use renewable paper?',
        answer: 'Yes, renewable paper can be used for the cups.',
      },
      {
        question: 'Can the surface be printed and embossed?',
        answer: 'Yes, the surface can be both printed and embossed.',
      },
      {
        question: 'What is the main paper material for the cup?',
        answer: 'The main paper material used is high-quality cardboard.',
      },
  // Add more FAQs as needed
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (faqListRef.current) {
      gsap.to(faqListRef.current, {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: faqListRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }
  }, []);

  const handleFaqClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 p-6 max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden">
      <div
        ref={faqListRef}
        className="faq-list w-full lg:w-1/3 max-h-80 overflow-y-auto pr-4"
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => handleFaqClick(index)}
            className={`cursor-pointer p-4 mb-4 flex items-center justify-between rounded-lg transition-transform transform ${
              activeIndex === index
                ? 'bg-red-100 text-red-600 scale-105'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            <span>{faq.question}</span>
            {activeIndex === index ? (
              <FaArrowRight className="text-red-600" />
            ) : (
              <FaQuestionCircle className="text-gray-400" />
            )}
          </div>
        ))}
      </div>
      <div className="w-full lg:w-2/3 p-4 bg-white rounded-lg">
        {activeIndex !== null && (
          <p className="text-gray-700 text-lg">{faqs[activeIndex].answer}</p>
        )}
      </div>
    </div>
  );
};

export default FaqSection;
