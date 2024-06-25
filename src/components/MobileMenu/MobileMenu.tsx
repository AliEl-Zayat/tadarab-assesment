"use client";
import { AccountIcon } from "@/assets";
import MenuDots from "@/assets/icons/MenuDots";
import MoonIcon from "@/assets/icons/MoonIcon";
import { NAVBAR_HEIGHT } from "@/constants/contants";
import {
  AnimatePresence,
  AnimationControls,
  motion,
  useAnimation,
} from "framer-motion";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import NavLinks from "../NavLinks";

const MobileMenu: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const controls: AnimationControls = useAnimation();
  const menuRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    if (isMenuVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isMenuVisible, controls]);

  useEffect(() => {
    if (isMenuVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuVisible]);

  const handleClickOutside: EventListener = (event: Event) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };

  return (
    <>
      <div className="flex justify-center px-4 md:hidden">
        <button
          className="hover:opacity-50"
          onClick={() => setIsMenuVisible((prev) => !prev)}
          aria-label="Menu Toggle"
          data-cy="menu-toggle"
          title="Menu Toggle"
        >
          <MenuDots />
        </button>
      </div>
      <AnimatePresence>
        {isMenuVisible && (
          <div className="fixed inset-0 z-40">
            <motion.div
              className="fixed inset-0 bg-black/50"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuVisible(false)}
            />
            <motion.div
              ref={menuRef}
              className="fixed left-0 top-0 bottom-0 right-24 bg-white px-8 shadow-sideBar flex flex-col md:hidden"
              initial="hidden"
              animate={controls}
              variants={menuVariants}
              transition={{ type: "tween", duration: 0.3 }}
              style={{
                paddingTop: NAVBAR_HEIGHT,
              }}
            >
              <NavLinks isRow={false} />
              <div className="flex flex-col flex-1 justify-end items-center pb-12">
                <div className="flex gap-[16px] items-center mt-14">
                  <div
                    className="w-[32px] h-[32px] bg-[#0E0B1D] rounded-full grid centered-child"
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundColor: "#0E0B1D",
                      borderRadius: "100%",
                      display: "grid",
                      placeItems: "center",
                      padding: "10px",
                    }}
                  >
                    <MoonIcon color="#fff" />
                  </div>
                  <div className="w-[32px] h-[32px] rounded-full grid centered-child">
                    <AccountIcon />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
