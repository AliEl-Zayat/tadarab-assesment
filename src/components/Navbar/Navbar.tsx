import { AccountIcon } from "@/assets";
import MenuDots from "@/assets/icons/MenuDots";
import MoonIcon from "@/assets/icons/MoonIcon";
import { NAVBAR_HEIGHT } from "@/constants/contants";
import { MobileMenu, NavbarBrand } from "..";
import NavLinks from "../NavLinks";

const Navbar = () => {
  return (
    <nav
      style={{
        height: `${NAVBAR_HEIGHT}px`,
      }}
      className={`shadow-navbar flex-1 flex justify-end sticky top-0 right-0 left-0 z-10 bg-white`}
    >
      <div className={`container flex justify-between`}>
        <NavbarBrand />
        <div className="flex">
          <MobileMenu />
          <div className="hidden md:flex">
            <NavLinks />
            <MenuDots />
            <div className="flex gap-[16px] items-center ms-[21px]">
              <div
                className="w-[44px] h-[44px] bg-[#0E0B1D] rounded-full grid centered-child"
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
              <div className="w-[44px] h-[44px] rounded-full grid centered-child">
                <AccountIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
