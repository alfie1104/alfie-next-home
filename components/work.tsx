import {
  faCaretRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Title: React.FC<{ children: any }> = ({ children }) => (
  <div className="flex items-center gap-2 mb-2">
    <Link href="/works">
      <span className="text-2xl font-medium cursor-pointer hover:text-custom-green-light transition-colors">
        Works
      </span>
    </Link>
    <FontAwesomeIcon icon={faCaretRight} size="2x" className="ml-3" />
    <span className="text-2xl text-black font-medium bg-blue-400 py-2 px-5 ml-5 rounded-md">
      {children}
    </span>
  </div>
);

export const Paragraph: React.FC<{ children: any; className?: string }> = ({
  children,
  className,
}) => (
  <p
    className={`font-medium text-custom-green-light my-3 text-xl ${
      className ?? ""
    }`}
  >
    {children}
  </p>
);

export const List: React.FC<{ children: any; className?: string }> = ({
  children,
  className,
}) => <ul className={` mt-5 ${className ?? ""}`}>{children}</ul>;

export const ListItem: React.FC<{ children: any; className?: string }> = ({
  children,
  className,
}) => <li className={` mb-2 text-lg ${className ?? ""}`}>{children}</li>;

export const ItemName: React.FC<{ children: any }> = ({ children }) => (
  <span className="mr-5 bg-custom-green-light text-green-800 py-0.5 rounded-md font-bold inline-block w-20 text-center">
    {children}
  </span>
);

export const ItemContent: React.FC<{ children: any }> = ({ children }) => (
  <span className="font-semibold">{children}</span>
);

export const WorkImage = ({
  src,
  alt,
  width,
  height,
  onClick,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  onClick?: (e: React.MouseEvent) => void;
}) => (
  <Image
    src={src}
    alt={alt}
    className={`rounded-lg ${onClick ? "cursor-pointer" : ""}`}
    layout="responsive"
    width={width ?? 400}
    height={height ?? 400}
    onClick={onClick}
  />
);
