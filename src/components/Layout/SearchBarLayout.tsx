import React, { useRef, useEffect, useState, FC } from "react";
import { TfiSearch } from "react-icons/tfi";
import { IoClose } from "react-icons/io5"; // Import the close icon

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
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchBar = () => {
    setIsFlagOpen(false);
    setProfileOpen(false);
    setAccountOpen(false);
    setOpenSearch(!openSearch);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setOpenSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchValue("");
  };

  return (
    <div ref={searchRef} className="relative flex justify-center text-left">
      <div className="flex items-center justify-center space-x-4">
        <TfiSearch
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
        <div className="absolute -ml-[49rem] mr-36 max-w-screen-2xl flex justify-start items-start top-10 w-[98vw] mx-auto">
          <div className="bg-white w-full h-[60vh] p-4 rounded-xl shadow-lg">
            <form className="flex justify-start w-1/2 items-center mx-auto space-x-1">
              <div className="relative w-full border-gray-300">
                <input
                  type="text"  
                  id="search-dropdown"
                  value={searchValue}
                  onChange={handleInputChange}
                  className="block p-2.5 w-full z-20 text-sm bg-gray-100 rounded-3xl border-slate-100 font-montserrat pr-10 focus:outline-none focus:ring-2 focus:ring-transparent"
                  placeholder="Search Product Name..."
                  required
                />
                {searchValue ? (
                  <IoClose
                    onClick={handleClearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer text-18"
                  />
                ) : (
                  <TfiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer text-18" />
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBarLayout;
