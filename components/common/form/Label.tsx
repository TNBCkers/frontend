import React, { FC, LabelHTMLAttributes } from "react";

const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({
  htmlFor,
  children,
  className,
}) => {
  return (
    <label htmlFor={htmlFor} className={`px-4 py-2 ${className}`}>
      {children}
    </label>
  );
};

export default Label;
