// Define the interface for the Machine object
export interface Machine {
    id: number;
    title: string;
    description: string;
    mainImage: string;
  }
  
  // Array of machine data
  export const machines: Machine[] = [
    {
      id: 1,
      title: 'NS-3000',
      description: 'A paper cup machine is a specialized piece of equipment designed to produce disposable paper cups. These cups are widely used for beverages such as coffee, tea, and soft drinks. The machine automates the entire process, ensuring efficient and consistent production..',
      mainImage: '/assets/about/machine1.png',
    },
    {
      id: 2,
      title: 'NS-4000',
      description: 'This machine is designed to produce paper bowls and is widely used in the food packaging industry.These cups are widely used for beverages such as coffee, tea, and soft drinks. The machine automates the entire process, ensuring efficient and consistent production..',
      mainImage: '/assets/about/machine4.png',
    },
    {
      id: 3,
      title: 'NS-5000',
      description: 'A high-speed machine capable of producing large quantities of paper cups with superior quality.These cups are widely used for beverages such as coffee, tea, and soft drinks. The machine automates the entire process, ensuring efficient and consistent production..',
      mainImage: '/assets/about/machine3.png',
    },
    {
      id: 4,
      title: 'NS-6000',
      description: 'This advanced machine is designed for the production of eco-friendly paper cups with precision.These cups are widely used for beverages such as coffee, tea, and soft drinks. The machine automates the entire process, ensuring efficient and consistent production..',
      mainImage: '/assets/about/machine4.png',
    },
    {
      id: 5,
      title: 'NS-7000',
      description: 'An innovative machine for creating multi-layered paper cups, perfect for hot beverages.These cups are widely used for beverages such as coffee, tea, and soft drinks. The machine automates the entire process, ensuring efficient and consistent production..',
      mainImage:'/assets/about/machine1.png',
    },
    {
      id: 6,
      title: 'NS-8000',
      description: 'A state-of-the-art machine designed for high-efficiency production of customized paper cups.These cups are widely used for beverages such as coffee, tea, and soft drinks. The machine automates the entire process, ensuring efficient and consistent production..',
      mainImage: '/assets/about/machine6.png',
    },
  ];
  