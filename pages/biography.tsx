import { NextPage } from "next";
import Head from "next/head";
import Container from "../components/container";

const BiographyPage: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>Biography | Alfie</title>
        <meta name="description" content="Biography" />
      </Head>
      <Container>
        <h1>My Biography</h1>
      </Container>
    </>
  );
};

export default BiographyPage;
