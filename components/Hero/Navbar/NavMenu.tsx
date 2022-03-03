import { FC } from "react";
import AuthLink from "./AuthLink";
import NavLink from "./NavLink";

const linkClass =
  "text-black mx-2 py-5 rounded-md w-11/12 self-center text-center hover:bg-slate-200 hover:text-primary";

const NavMenu: FC = () => {
  return (
    <div
      className="
        flex flex-col absolute left-[50%] translate-x-[-50%] top-[70px] shadow-lg bg-white w-[95vw] rounded-lg py-8 items-center justify-between
        md:hidden
    "
    >
      <NavLink filled={false} className={linkClass}>
        How It Works
      </NavLink>
      <NavLink filled={false} className={linkClass}>
        Browse Jobs
      </NavLink>
      <AuthLink className={linkClass}>Sign Up</AuthLink>
    </div>
  );
};

export default NavMenu;
