import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IExperience } from "../data.type";

const ExpContainer = styled.div`
  ${tw`
    my-5
  `}
`;

const ExpTitle = styled.h2`
  ${tw`
        mb-3 
        font-medium 
        text-base
    `}
  color:${(props) => props.theme.green.dark}
`;

const ExpList = styled.ul`
  ${tw`
        flex
        flex-col
        gap-2
    `}
`;

const ExpListItem = styled.li``;

const ExpItemName = styled.span`
  margin-right: 1.25em;
`;

const ExpItemContent = styled.span`
  ${tw`
        max-w-[50vw]
    `}
`;

export const Experience: React.FC<IExperience> = ({ id, items, title }) => {
  return (
    <ExpContainer>
      <ExpTitle>{title}</ExpTitle>
      <ExpList>
        {items.map((item) => (
          <ExpListItem
            key={item.name}
            className={item.name === "설명" ? "flex items-center" : ""}
          >
            <ExpItemName>{item.name}</ExpItemName>
            <ExpItemContent>{item.content}</ExpItemContent>
          </ExpListItem>
        ))}
      </ExpList>
    </ExpContainer>
  );
};
