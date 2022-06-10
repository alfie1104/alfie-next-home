import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (min-width: 768px) {
    justify-content: center;
  }

  justify-content: flex-start;
  align-items: center;
  height: 10vh;
  margin-top: auto;
  padding-left: 2.5rem /* 40px */;
  padding-right: 2.5rem /* 40px */;

  color: ${(props) => props.theme.white.light};
  background-color: ${(props) => props.theme.black.veryDark};
`;
const Footer = () => {
  return (
    <Container>
      <p className="mr-5">
        <a href="https://github.com/alfie1104" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="lg" className="mr-2" />
          Github
        </a>
      </p>
    </Container>
  );
};

export default Footer;
