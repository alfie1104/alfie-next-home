import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Container from "../components/container";
import Experiences from "./experiences";

const Button = styled.button`
  width: 9rem /* 144px */;
  height: 4rem /* 64px */;

  border-radius: 0.375rem /* 6px */;

  font-weight: 600;

  font-size: 1.5rem /* 24px */;
  line-height: 2rem /* 32px */;

  margin-top: 0.75rem /* 12px */;
  margin-bottom: 0.75rem /* 12px */;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  color: ${(props) => props.theme.black.light};
  background-color: ${(props) => props.theme.green.light};
  &:hover {
    background-color: ${(props) => props.theme.green.dark};
    color: ${(props) => props.theme.white.light};
  }
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  padding: 1.25rem /* 20px */;
  margin-bottom: 1.25rem /* 20px */;
  border-radius: 0.375rem /* 6px */;

  color: ${(props) => props.theme.white.light};
  background-color: ${(props) => props.theme.white.veryDark};
`;

const Home: NextPage = () => {
  const router = useRouter();

  const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/works");
  };

  return (
    <>
      <Container>
        <ImageBox>
          <h1 className="font-extrabold text-7xl">Welcome to my home</h1>
        </ImageBox>
        {/*<Experiences />*/}
        <Button onClick={handleClickBtn}>My Works</Button>
        <div className="mb-10"></div>
      </Container>
    </>
  );
};

export default Home;
