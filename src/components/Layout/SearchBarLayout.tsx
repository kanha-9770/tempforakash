import React, { useRef, useEffect, FC } from "react";
import { ImSearch } from "react-icons/im";
import { TfiSearch } from "react-icons/tfi";

interface SearchBarLayoutProps {
  setIsFlagOpen: (isOpen: boolean) => void;
  openSearch: boolean;
  setOpenSearch: (isOpen: boolean) => void;
  setProfileOpen: (isOpen: boolean) => void;
  setAccountOpen: (isOpen: boolean) => void;
}

const SearchBarLayout: FC<SearchBarLayoutProps> = ({
  setIsFlagOpen,
  openSearch,
  setOpenSearch,
  setProfileOpen,
  setAccountOpen,
}) => {
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearchBar = () => {
    setIsFlagOpen(false);
    setProfileOpen(false);
    setAccountOpen(false);
    setOpenSearch(!openSearch);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setOpenSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={searchRef}
      className="relative  flex justify-center text-left"
    >
      <div className="flex items-center justify-center space-x-4">
        < TfiSearch
          onClick={handleSearchBar}
          className="font-montserrat text-18 cursor-pointer"
        />
      </div>
      {openSearch && (
        <div className="mt-7">
          <div className="w-4 h-4 left-1 absolute z-50 mt-1 bg-white rotate-45"></div>
        </div>
      )}
      {openSearch && (
        <div className="absolute -ml-[47rem] mr-28 max-w-screen-2xl flex justify-start items-start  top-10 w-[98vw] mx-auto">
          <div className="bg-white w-full h-[60vh] p-4 rounded-xl shadow-lg">
            <form className="flex justify-start w-1/2 items-center mx-auto space-x-1">
              
              <div className="relative w-full border-gray-300">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm bg-gray-100 rounded-r-lg border-slate-100 font-montserrat placeholder-black"
                  placeholder="Search Product Name..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-[#483d78] rounded-r-lg border border-gray-300 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M19 19l-4-4m0-7a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z" />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </form>
            <div className="mt-4 px-12 w-full border-t border-gray-200"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBarLayout;
