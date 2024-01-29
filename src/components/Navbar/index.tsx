import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface NavLinkProps extends PropsWithChildren, LinkProps {
  active?: boolean;
  outline?: boolean;
}

const NavLink = ({ outline, active, ...props }: NavLinkProps) => {
  return (
    <Link
      {...props}
      className={twMerge(
        active
          ? "text-white bg-black dark:text-black dark:bg-white"
          : outline && "outline outline-black dark:outline-white",

        "font-syne text-base font-normal px-6 py-2 rounded-3xl justify-center items-center transition-colors duration-300 delay-75 hover:bg-gray-200 dark:hover:text-black"
      )}
    />
  );
};

export function Navbar() {
  return (
    <nav className="shadow">
      <div className="container mx-auto flex py-5 px-3 lg:px-20 justify-between items-center">
        <img src="" alt="" />

        <div className="hidden md:flex gap-5">
          <NavLink href={""} active>
            Home
          </NavLink>
          <NavLink href={""}>About</NavLink>
          <NavLink href={""}>Projects</NavLink>
          <NavLink href={""}>Contact</NavLink>
        </div>

        <NavLink href={""} outline>
          Hire Me
        </NavLink>
      </div>
    </nav>
  );
}
