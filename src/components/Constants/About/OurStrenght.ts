interface StrengthParagraph {
    title: string;
    content: string;
  }
  
  interface StrengthImage {
    src: string;
    alt: string;
  }
  
  export const strengthsContent = {
    paragraphs: [
      {
        title: 'Innovative Technology',
        content: 'We leverage cutting-edge technology to design and manufacture advanced paper cup machines, ensuring high efficiency and precision in production.'
      },
      {
        title: 'Quality Assurance',
        content: 'Our quality control processes guarantee that every machine we produce meets the highest industry standards, delivering reliable and consistent performance.'
      },
      {
        title: 'Customer-Centric Approach',
        content: 'We prioritize our customers needs by offering personalized solutions and exceptional after-sales support, fostering long-term partnerships.'
      },
      {
        title: 'Sustainability Commitment',
        content: 'Dedicated to environmental responsibility, we focus on producing eco-friendly machines that help businesses reduce their carbon footprint and promote sustainability.'
      }
    ],
    images: [
      { src: '/assets/about/image1.png', alt: 'Image 1' },
      { src: '/assets/about/image2.png', alt: 'Image 2' },
      { src: '/assets/about/image3.png', alt: 'Image 3' },
      { src: '/assets/about/image4.png', alt: 'Image 4' }
    ],
    icons: [
      '/assets/about/human.svg',
      '/assets/about/quality.svg',
      '/assets/about/culture.svg',
      '/assets/about/sustainable.svg'
    ]
  };
  