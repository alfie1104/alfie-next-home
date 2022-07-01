import { NextPage } from "next";
import Article from "../components/article";
import Container from "../components/container";

const BiographyPage: NextPage = ({}) => {
  return (
    <>
      <Article title="Biography" description="Biography">
        <Container>
          <h1>My Biography</h1>
        </Container>
      </Article>
    </>
  );
};

export default BiographyPage;
