import { FC } from "react";
import AuthLink from "./AuthLink";
import NavLink from "./NavLink";

interface NavProps {
  className: string;
}

const HorizontalNavBar: FC<NavProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div>
        <NavLink filled={false}>How It Works</NavLink>
        <NavLink filled={false}>Browse Jobs</NavLink>
      </div>
      <div className="flex w-max justify-end">
        <NavLink filled={false} className={""}>
          Sign In
        </NavLink>
        <AuthLink className={""} filled={true}>
          Sign Up
        </AuthLink>
      </div>
    </div>
  );
};

export default HorizontalNavBar;
