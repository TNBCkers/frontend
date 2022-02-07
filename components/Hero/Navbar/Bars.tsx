import { Dispatch, FC, SetStateAction } from "react";
import { FaBars } from "react-icons/fa";

const Bars = ({ onClick }: any) => (
  <div
    className="
    text-white text-lg cursor-pointer
      md:hidden
    "
  >
    <a onClick={() => onClick((state: boolean) => onClick(!state))}>
      <FaBars />
    </a>
  </div>
);

export default Bars;
