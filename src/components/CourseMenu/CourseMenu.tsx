"use client";
import { ArrowRightDoubleIcon, MinusIcon, PlusIcon, TickIcon } from "@/assets";
import { COURSE_CONTENT } from "@/constants/constants";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { MutableRefObject, useEffect, useRef, useState } from "react";

const completed = 32;

const CourseMenu = () => {
  const [activeAccordions, setActiveAccordions] = useState<string[]>([
    "المجموعة الأولى",
  ]);

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(true);
  const [menuWidth, setMenuWidth] = useState(425);
  const controls: AnimationControls = useAnimation();
  const menuRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.visualViewport?.width !== undefined) {
        setIsMenuVisible(window.visualViewport?.width > 1024);
        setIsMobile(window.visualViewport?.width < 1024);
        if (window.visualViewport?.width < 1024) {
          setMenuWidth(window.visualViewport?.width);
        }
      }
    };

    handleResize();
  }, []);

  useEffect(() => {
    if (isMenuVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isMenuVisible, controls]);

  const menuVariants = {
    hidden: { x: "100%", width: 0 },
    visible: {
      x: 0,
      width: menuWidth,
    },
  };

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflowX = isMenuVisible ? "hidden" : "auto";
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowX = isMenuVisible
        ? "hidden"
        : "auto";
    }
  }, [isMenuVisible, isMobile]);

  const toggleAccordion = (key: string) => {
    setActiveAccordions((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="course menu"
        className={`text-[25px] bg-white w-[40px] h-[40px] centered-child rounded-[10px] shadow-navbar mt-[30px] absolute left-0 ${
          isMenuVisible
            ? isMobile
              ? "translate-x-0"
              : "translate-x-[-50%]"
            : "translate-x-[-100%]"
        } z-[1]`}
        onClick={() => setIsMenuVisible((prev) => !prev)}
      >
        <ArrowRightDoubleIcon color="#777" width={20} height={20} />
      </button>
      <motion.div
        ref={menuRef}
        variants={menuVariants}
        animate={controls}
        className="sticky h-max w-[425px] bg-white shadow-navbar overflow-hidden"
      >
        <div>
          <div className="ps-[38px] pe-[44.5px] py-[25px] shadow-navbar">
            <p className="text-[18px] font-extrabold">
              منهج الدورة{" "}
              <span className="text-[#777] font-normal text-[16px]">
                ( {completed.toLocaleString("ar")} ٪ مكتمل )
              </span>
            </p>
            <div className="h-[10px] w-full rounded-full bg-[#E0E0E0] my-[10px]">
              <motion.div
                className="h-[10px] bg-primary-dark rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${completed}%` }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </div>
          </div>
          <div className="accordions">
            {Object.entries(COURSE_CONTENT).map(([key, value]) => {
              const completed = value.content.filter((item) => item.completed);
              return (
                <div className="accordion-container" key={key}>
                  <div
                    className="accordion-header py-[26px] flex justify-between border-b-[1px] border-b-[#0000001A] ps-[39px] pe-[22px] items-center hover:cursor-pointer select-none"
                    onClick={() => toggleAccordion(key)}
                  >
                    <p className="text-[16px] font-extrabold text-[#777]">
                      {key}{" "}
                      <span className="text-[16px] font-normal">
                        ({completed.length}/{value.content.length})
                      </span>
                    </p>
                    {activeAccordions.includes(key) ? (
                      <MinusIcon />
                    ) : (
                      <PlusIcon />
                    )}
                  </div>

                  <motion.div
                    className={`accordion-body flex flex-col px-[20px] bg-[#f6f6f6]`}
                    initial={{ height: "0", overflow: "hidden" }}
                    animate={
                      activeAccordions.includes(key)
                        ? { height: "auto" }
                        : { height: "0" }
                    }
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    {value.content.map((item) => (
                      <div
                        className="ps-[20px] pe-[20px] flex py-[17px] text-[#777] rounded-[10px] transition-colors hover:bg-[#ededed] hover:cursor-pointer"
                        key={item.title}
                      >
                        <div className="flex items-center gap-[14px] flex-1">
                          <TickIcon
                            color={item.completed ? "#AF161F" : "#9E9DA4"}
                            width={20}
                            height={20}
                            className="flex-shrink-0"
                          />
                          <p className={`text-[17px] font-normal line-clamp-1`}>
                            {item.title}
                          </p>
                        </div>
                        <div>
                          <p className="text-[17px] font-normal line-clamp-1">
                            {item.duration}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseMenu;
