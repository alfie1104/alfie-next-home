import React from "react";
import { IExperience } from "../util/data.type";

const ExpContainer: React.FC<{ children: any }> = ({ children }) => (
  <div className="my-5">{children}</div>
);

const ExpTitle: React.FC<{ children: any }> = ({ children }) => (
  <h2 className="mb-3 font-medium text-base leading-6 text-custom-green-dark">
    {children}
  </h2>
);

const ExpList: React.FC<{ children: any }> = ({ children }) => (
  <ul className="flex flex-col gap-2">{children}</ul>
);

const ExpListItem: React.FC<{ children: any; name: string }> = ({
  children,
  name,
}) => (
  <li className={`${name === "설명" ? "flex items-center" : ""}`}>
    {children}
  </li>
);

const ExpItemName: React.FC<{ children: any }> = ({ children }) => (
  <span className="mr-5">{children}</span>
);

const ExpItemContent: React.FC<{ children: any }> = ({ children }) => (
  <span className="max-w-[50vw]">{children}</span>
);

export const Experience: React.FC<IExperience> = ({ id, items, title }) => {
  return (
    <ExpContainer>
      <ExpTitle>{title}</ExpTitle>
      <ExpList>
        {items?.map((item) => (
          <ExpListItem key={item.name} name={item.name}>
            <ExpItemName>{item.name}</ExpItemName>
            <ExpItemContent>{item.content}</ExpItemContent>
          </ExpListItem>
        ))}
      </ExpList>
    </ExpContainer>
  );
};
