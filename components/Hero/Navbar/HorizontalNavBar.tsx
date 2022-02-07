import { FC } from "react";
import NavLink from "./NavLink";

interface NavProps {
  className: string;
}

const HorizontalNavBar = ({ className }: NavProps) => {
  return (
    <div className={`${className}`}>
      <div>
        <NavLink filled={false}>How It Works</NavLink>
        <NavLink filled={false}>Browse Jobs</NavLink>
      </div>
      <div>
        <NavLink filled={false}>Sign In</NavLink>
        <NavLink filled={true}>Sign Up</NavLink>
      </div>
    </div>
  );
};

export default HorizontalNavBar;
