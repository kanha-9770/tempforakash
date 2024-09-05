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
      className={`w-full  max-w-screen-2xl  justify-start  relative top-0`}
    >
      <div className="flex items-center justify-start h-14">
        <span
          onMouseEnter={handleMouseLeave}
          className="w-[60%] h-10   z-30 hidden lg:flex items-center gap-1 text-black"
        >
          <div className=" flex-row bg-[#f2f2f2] gap-2 px-2 rounded-3xl">
            <CountryLayout />
          </div>
          <div className="px-1 flex flex-row items-center justify-start gap-1">
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
                className="text-base cursor-pointer"
              />
              {visibilityState.accountOpen && (
                <div ref={accountRef}>
                  <AccountLayout />
                </div>
              )}
            </div>
          </div>
        </span>
        <div className="relative flex justify-center  w-[40%]">
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
            // setOpenSearch={(value) =>
            //   setVisibilityState((prev) => ({ ...prev, openSearch: value }))
            // }
            // setProfileOpen={(value) =>
            //   setVisibilityState((prev) => ({ ...prev, profileOpen: value }))
            // }
            // setAccountOpen={(value) =>
            //   setVisibilityState((prev) => ({ ...prev, accountOpen: value }))
            // }
          />
        </div>
      </div>
    </div>
  );
});

RightNavbar.displayName = "RightNavbar";

export default RightNavbar;
