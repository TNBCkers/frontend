import React, { FC, useState } from "react";
import Logo from "../../common/Logo";
import Bars from "./Bars";
import NavMenu from "./NavMenu";
import HorizontalNavBar from "./HorizontalNavBar";

const Navbar: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={`flex items-center justify-between md:justify-start`}>
      <Logo height={30} width={200} white />
      <Bars onClick={setShowMenu} />
      <HorizontalNavBar
        className={"hidden md:flex md:justify-between md:items-center w-full"}
      />
      {showMenu && <NavMenu />}
    </div>
  );
};

export default Navbar;
