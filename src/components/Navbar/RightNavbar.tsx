"use client";
import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import CountryLayout from "../Layout/CountryLayout";
import SearchBarLayout from "../Layout/SearchBarLayout";
import AccountLayout from "../Layout/AccountLayout";
import ProfileLayout from "../Layout/ProfileLayout";
import ContactForm from "../Contact/Contact";
import { VscAccount } from "react-icons/vsc";

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
        <div className="flex justify-end lg:hidden items-center">
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
          <button className="ml-4">
            {/* Replace with your hamburger icon */}
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
});

RightNavbar.displayName = "RightNavbar";

export default RightNavbar;
