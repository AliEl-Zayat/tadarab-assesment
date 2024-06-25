import { NAVBAR_LINKS } from "@/constants/contants";
import { NavLink } from "..";

type TNavLinks = {
  isRow?: boolean;
};

const NavLinks = ({ isRow = true }: TNavLinks) => {
  const rowContainerStyles = `flex gap-[40px] h-full items-center me-[40px]`;
  const colContainerStyles = `flex flex-col gap-[40px]`;

  return (
    <ul className={isRow ? rowContainerStyles : colContainerStyles}>
      {NAVBAR_LINKS.map((link) => (
        <li key={link.id} className={isRow ? "h-full" : ""}>
          <NavLink isRow={isRow} {...link} />
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
