import React, { ButtonHTMLAttributes, FC } from 'react';

type ButtonProps = {
    className?:string
}

const Button: FC<ButtonProps & ButtonHTMLAttributes<any>> = ({
  className,
  children
}) => (
  <button className={`${className} `}>
      {children}
  </button>
)

export default Button;
