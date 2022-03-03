import React, { BaseHTMLAttributes, FC } from "react";

export interface NavLinkProps {
  filled?: Boolean;
}

const NavLink: FC<BaseHTMLAttributes<any> & NavLinkProps> = ({
  filled,
  children,
  className,
  onClick,
}) => {
  return (
    <button
      className={
        filled
          ? `text-blue px-6 py-2 bg-white rounded-xl font-semibold mx-3 hover:cursor-pointer ${className}`
          : `text-white ${className} mx-3 hover:cursor-pointer`
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NavLink;
