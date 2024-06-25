"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement } from "react";
import styles from "./styles.module.scss";

const { container } = styles;

type Props = {
  title: string;
  href: string;
  icon: ReactElement;
  isRow: boolean;
};

const NavLink = ({ title, href, icon, isRow }: Props) => {
  const activeLink = usePathname() === href;

  const Icon = React.cloneElement(icon as ReactElement, {
    ...icon.props,
    className: "w-[20px] h-[20px]",
    color: activeLink ? "#AF151F" : "#bbbabf",
  });

  return (
    <Link
      href={href}
      className={`flex items-center gap-[8px] relative h-full ${container}`}
    >
      {Icon}
      <p
        className={`text-[15px] font-bold text-black ${
          activeLink ? "text-primary-dark" : ""
        } hover:text-primary-light transition-colors`}
      >
        {title}
      </p>
      {activeLink && !isRow && (
        <span
          style={{
            backgroundColor: activeLink ? "#AF151F" : "#bbbabf",
            width: "12px",
            height: "32px",
            borderRadius: "10px 0 0 10px",
            position: "absolute",
            right: -32,
          }}
        />
      )}
      {activeLink && isRow && (
        <span
          style={{
            backgroundColor: activeLink ? "#AF151F" : "#bbbabf",
            width: "100%",
            height: "4px",
            borderRadius: "10px 10px 0 0",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
      )}
    </Link>
  );
};

export default NavLink;
