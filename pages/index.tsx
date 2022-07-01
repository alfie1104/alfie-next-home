import type {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import React from "react";
import Container from "../components/container";
import Footer from "../components/footer";
import { getExperiences } from "../util/api";
import Experiences from "./experiences";

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/works");
  };

  return (
    <>
      <Container>
        <div className="flex items-center justify-center w-[80vw] p-5 mb-5 rounded-md text-custom-white-light-200 bg-custom-white-veryDark">
          <h1 className="font-extrabold text-7xl">Welcome to my home</h1>
        </div>
        <Experiences expList={props.expList} />
        <button
          onClick={handleClickBtn}
          className="w-36 h-16 rounded-md font-semibold text-xl leading-8 my-3 transition-all shadow-sm text-custom-black-light bg-custom-green-light  hover:bg-custom-green-dark hover:text-custom-white-light"
        >
          My Works
        </button>
        <div className="mb-10"></div>
      </Container>
    </>
  );
};

export default Home;

export async function getStaticProps(context: GetStaticPropsContext) {
  const expList = await getExperiences();
  return {
    props: {
      expList,
    },
  };
}
