import React, {FC} from 'react';
import Image from 'next/image';

interface LogoProps {
    width: number,
    height: number,
    className?: string,
    white: boolean
}

const Logo: FC<LogoProps> = ({width, height, className, white}) => {

    const style = white ? "/assets/images/logo-white.svg" : "/assets/images/logo.svg"

    return (
        <Image
         src={style}
         alt="logo"
         width={width}
         height={height}
         className={className}
        />
    )
}

export default Logo
