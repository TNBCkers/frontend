import React, { FC, TextareaHTMLAttributes } from "react";

const TextArea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  children,
  className,
  name,
  maxLength,
  placeholder,
  onChange,
}) => {
  return (
    <textarea
      name={name}
      maxLength={maxLength}
      className={`px-4 py-4 bg-bgGray rounded-md w-3/4 ${className}`}
      placeholder={placeholder}
      onChange={onChange}
    >
      {children}
    </textarea>
  );
};

export default TextArea;
