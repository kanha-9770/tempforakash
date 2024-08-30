"use client";
import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import CountryLayout from "../Layout/CountryLayout";
import SearchBarLayout from "../Layout/SearchBarLayout";
import AccountLayout from "../Layout/AccountLayout";
import ProfileLayout from "../Layout/ProfileLayout";
import ContactForm from "../Contact/Contact";
import { VscAccount } from "react-icons/vsc";
import { TfiSearch } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";

const RightNavbar: React.FC = memo(() => {
  const [menuState, setMenuState] = useState({
    open: false,
    hoveredItem: null as string | null,
    heading: "",
  });

  const [visibilityState, setVisibilityState] = useState({
    isFlagOpen: false,
    profileOpen: false,
    openSearch: false,
    accountOpen: false,
    isContactFormVisible: false,
  });

  const [isVisible, setIsVisible] = useState(true);
  const accountRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = useCallback(() => {
    setMenuState((prev) => ({ ...prev, open: !prev.open }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMenuState({ ...menuState, hoveredItem: null, heading: "" });
    setIsVisible(true);
  }, [menuState]);

  const handleAccount = useCallback(() => {
    setVisibilityState((prev) => ({
      ...prev,
      isFlagOpen: false,
      profileOpen: false,
      openSearch: false,
      accountOpen: !prev.accountOpen,
    }));
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      accountRef.current &&
      !accountRef.current.contains(event.target as Node)
    ) {
      setVisibilityState((prev) => ({ ...prev, accountOpen: false }));
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    const { isFlagOpen, openSearch, profileOpen, accountOpen } =
      visibilityState;
    setIsVisible(!(isFlagOpen || openSearch || profileOpen || accountOpen));
  }, [visibilityState]);
  const searchRef = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState<string>("");

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
    <div
      className={`w-full  max-w-screen-2xl  justify-end lg:justify-center relative top-0 ${
        menuState.hoveredItem ? "rounded-t-lg" : "rounded-lg"
      }`}
    >
      <div className="flex items-center gap-2 justify-end lg:justify-center h-14">
        <span
          onMouseEnter={handleMouseLeave}
          className="w-full h-10 z-30 hidden lg:flex items-center gap-3 text-black"
        >
          <div className="bg-white  flex-row gap-3 px-2 rounded-3xl">
            <CountryLayout />
          </div>
          <SearchBarLayout
            setIsFlagOpen={(value) =>
              setVisibilityState((prev) => ({ ...prev, isFlagOpen: value }))
            }
            openSearch={visibilityState.openSearch}
            setOpenSearch={(value) =>
              setVisibilityState((prev) => ({ ...prev, openSearch: value }))
            }
            setProfileOpen={(value) =>
              setVisibilityState((prev) => ({ ...prev, profileOpen: value }))
            }
            setAccountOpen={(value) =>
              setVisibilityState((prev) => ({ ...prev, accountOpen: value }))
            }
          />
          <ProfileLayout
            profileOpen={visibilityState.profileOpen}
            setIsFlagOpen={(value) =>
              setVisibilityState((prev) => ({ ...prev, isFlagOpen: value }))
            }
            setOpenSearch={(value) =>
              setVisibilityState((prev) => ({ ...prev, openSearch: value }))
            }
            setProfileOpen={(value) =>
              setVisibilityState((prev) => ({ ...prev, profileOpen: value }))
            }
            setAccountOpen={(value) =>
              setVisibilityState((prev) => ({ ...prev, accountOpen: value }))
            }
          />
          <div className="relative">
            <VscAccount
              onClick={handleAccount}
              className="text-18 cursor-pointer"
            />
            {visibilityState.accountOpen && (
              <div ref={accountRef}>
                <AccountLayout />
              </div>
            )}
          </div>
          <div className="ml-auto mr-10">
            <ContactForm
              isContactFormVisible={visibilityState.isContactFormVisible}
              setContactFormVisible={(value) =>
                setVisibilityState((prev) => ({
                  ...prev,
                  isContactFormVisible: value,
                }))
              }
              isVisible={isVisible}
              setIsFlagOpen={(value) =>
                setVisibilityState((prev) => ({ ...prev, isFlagOpen: value }))
              }
              setOpenSearch={(value) =>
                setVisibilityState((prev) => ({ ...prev, openSearch: value }))
              }
              setProfileOpen={(value) =>
                setVisibilityState((prev) => ({ ...prev, profileOpen: value }))
              }
              setAccountOpen={(value) =>
                setVisibilityState((prev) => ({ ...prev, accountOpen: value }))
              }
            />
          </div>
        </span>
        <div className="relative -mt-6 h-full flex flex-col w-full  lg:hidden">
          <div className="relative max-w-screen-2xl p-1 flex w-full mx-auto">
            <div className="justify-center items-center w-full rounded-xl">
              <form className="flex justify-start  ">
                <div className="relative w-full border-gray-300">
                  <input
                    type="text"
                    id="search-dropdown"
                    value={searchValue}
                    onChange={handleInputChange}
                    className="block p-[0.6rem] w-full z-20 text-sm bg-gray-100 rounded-3xl border-slate-100 font-montserrat pr-10 focus:outline-none focus:ring-2 focus:ring-transparent"
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
          <div className="flex felx-row items-center gap-2 border-t-[1px] border-b-[1px] justify-end w-full p-2">
            <div className="relative ">
              <CountryLayout />
            </div>
            <div className="relative ">
              <VscAccount
                onClick={handleAccount}
                className="text-xl cursor-pointer"
              />
            </div>
          </div>
        </div>
        {/* mobile view ends here */}
      </div>
    </div>
  );
});

RightNavbar.displayName = "RightNavbar";

export default RightNavbar;
