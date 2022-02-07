import React, { BaseHTMLAttributes, FC } from "react";

interface NavLinkProps {
  filled: Boolean;
}

const NavLink: FC<BaseHTMLAttributes<any> & NavLinkProps> = ({
  filled,
  children,
  className,
}) => {
  return (
    <span
      className={
        filled
          ? `text-blue px-6 py-2 bg-white rounded-xl font-semibold mx-3 ${className}`
          : `text-white ${className} mx-3`
      }
    >
      {children}
    </span>
  );
};

export default NavLink;
