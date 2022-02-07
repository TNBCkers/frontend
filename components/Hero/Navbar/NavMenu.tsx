import NavLink from "./NavLink";

const linkClass =
  "mx-2 py-5 rounded-md w-11/12 self-center text-center hover:bg-slate-200 hover:text-gray";

const NavMenu = () => {
  return (
    <div
      className="
        flex flex-col absolute left-[50%] translate-x-[-50%] top-[70px] bg-slate-400 w-[95vw] rounded-lg py-12 items-center justify-between
        md:hidden
    "
    >
      <NavLink filled={false} className={linkClass}>
        How It Works
      </NavLink>
      <NavLink filled={false} className={linkClass}>
        Browse Jobs
      </NavLink>
      <NavLink filled={false} className={linkClass}>
        Sign In
      </NavLink>
      <NavLink filled={false} className={linkClass}>
        Sign Up
      </NavLink>
    </div>
  );
};

export default NavMenu;
