import React, { FC } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BsTagFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

interface cardProps {
  thumbnail: string;
  avatar: string;
  name: string;
  title: string;
  category: string;
  price: number;
}

const ServiceCard: FC<cardProps> = ({
  thumbnail,
  avatar,
  name,
  title,
  category,
  price,
}) => (
  <div className="flex flex-col shadow-lg rounded-2xl">
    <Image
      src={thumbnail}
      alt="Thumbnail"
      width={415}
      height={340}
      className={"rounded-t-2xl"}
    />
    <div className="flex flex-col mt-[-40px] px-6 bg-white rounded-b-2xl py-5">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start text-left">
          <Image
            src={avatar}
            alt="Avatar"
            width={52}
            height={52}
            className="rounded-full block"
          />
          <div className="flex my-1">
            {name}
            <FaStar className="ml-2 text-gold" />
            <FaStar className="text-gold" />
            <FaStar className="text-gold" />
            <FaStar className="text-gold" />
            <FaStar className="text-gold" />
          </div>
          <strong className="my-2">{title}</strong>
        </div>
        <div>
          <AiOutlineHeart size={40} className="text-gray" />
        </div>
      </div>
      <hr className="bg-slate-200 h-[2px] text-transparent rounded-2xl my-2" />
      <div className="flex justify-between text-xs mt-2 items-center">
        <BsTagFill size={20} />
        <div>{category}</div>
        <div className="flex bg-lightBlue px-1 py-1 items-center rounded-2xl justify-between">
          <Image
            src={"/assets/icons/tnb.svg"}
            alt="tnbc"
            height={19}
            width={19}
          />
          <div className="px-1">{price}</div>
        </div>
      </div>
    </div>
  </div>
);

export default ServiceCard;
