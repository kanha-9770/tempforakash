import PaperCup from "../../../../public/assets/Blogs/PaperCup.jpeg";
import { FaBookmark } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";

export const Page1Data = {
  title: "Latest Blogs",
    "products": [
      {
        "image": PaperCup,
        "description": "Use paper cups it can be recycled."
      },
      {
        "image": PaperCup,
        "description": "Premium paper cups for hot beverages."
      },
      {
        "image": PaperCup,
        "description": "Eco-friendly disposable paper cups."
      },
      {
        "image": PaperCup,
        "description": "Eco-friendly disposable paper cups."
      }
    ]  
};

export const Page2Data = {
  bussiness: 'Bussiness',
  environment: 'Environment',
  popular: 'Popular',
  announcements: 'Announcements',
  latest: 'Latest',
  bookmarks: 'Bookmarks',
  bookmarksIcon: <FaBookmark />,
};

export const Page3Data = {
  popularComparisions: 'Popular Comparisions',
  latestNews: 'Latest News',
  top10daily: 'Top 10 Daily',
  announcements: 'Announcements',
  popularNow: 'Popular Now',
  video: '/assets/Blogs/Video.mp4', 
  videoTitle: 'How You Can Start A Business for Paper Cup',
  videoDescription: '"The advent of paper cups is increasingly replacing plastic cups"',
  bookmarkedIcon: <FaBookmark />,
  bookmarked: 'Bookmarked',
};

export const Page4Data = {
  searchIcon: <GrSearch />,
  search: 'Search...',
  tech: 'Tech',
  reviews: 'Reviews',
  science: 'Science',
  entertainment: 'Entertainment',
  ai: 'AI',
  machines: 'Machines',
  videos: 'Videos',
};