import React from "react";
import { useContext } from "react";
import { AuthContext, STATUS } from "../../contexts/AuthContext";

const Nav = () => {
  const { status } = useContext(AuthContext);
  if (status !== STATUS.LOGGED) return <></>;

  return <div>Navbar</div>;
};

export default Nav;
