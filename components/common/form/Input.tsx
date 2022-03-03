import React, { FC, InputHTMLAttributes } from "react";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  placeholder,
  children,
  name,
  className,
  onChange,
}) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      className={`rounded-md px-4 py-4 bg-bgGray w-3/4 ${className} mb-4`}
      onChange={onChange}
    >
      {children}
    </input>
  );
};

export default Input;
