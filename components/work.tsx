import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";

export const Title: React.FC<{ children: any }> = ({ children }) => (
  <div className="flex items-center gap-2 mb-2">
    <Link href="/works">
      <span className="text-lg font-medium">Works</span>
    </Link>
    <FontAwesomeIcon icon={faChevronRight} size="2x" />
    <span className="text-lg text-black font-medium bg-blue-400 py-2 px-1 rounded-md">
      {children}
    </span>
  </div>
);

export const List = styled.ul``;

export const ListItem = styled.li``;

export const ItemName: React.FC<{ children: any }> = ({ children }) => (
  <span className="mr-2">{children}</span>
);

export const ItemContent: React.FC<{ children: any }> = ({ children }) => (
  <span>{children}</span>
);

export const WorkImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    src={src}
    alt={alt}
    className={"mb-4 rounded-lg"}
    layout="responsive"
    width={400}
    height={400}
  />
);

export const Paragraph = styled.p`
  text-align: justify;
  text-indent: 1em;
  ${tw`
    border-2
    font-medium
  `}
  color : ${(props) => props.theme.green.light};
`;
