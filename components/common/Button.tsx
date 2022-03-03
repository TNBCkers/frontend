import React, { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = {
  className?: string;
};

const Button: FC<ButtonProps & ButtonHTMLAttributes<any>> = ({
  className,
  children,
  onClick,
}) => (
  <button className={`${className} `} onClick={onClick}>
    {children}
  </button>
);

export default Button;
