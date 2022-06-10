import React from "react";
import styled from "styled-components";
import { IExperience } from "../db/data.type";

const ExpContainer = styled.div`
  margin-top: 1.25rem /* 20px */;
  margin-bottom: 1.25rem /* 20px */;
`;

const ExpTitle = styled.h2`
  margin-bottom: 0.75rem /* 12px */;
  font-weight: 500;
  font-size: 1rem /* 16px */;
  line-height: 1.5rem /* 24px */;
  color: ${(props) => props.theme.green.dark};
`;

const ExpList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem /* 8px */;
`;

const ExpListItem = styled.li``;

const ExpItemName = styled.span`
  margin-right: 1.25em;
`;

const ExpItemContent = styled.span`
  max-width: 50vw;
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
