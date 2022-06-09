import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.footer`
  ${tw`
    w-full
    flex
    flex-row
    md:justify-center
    justify-start
    items-center
    h-[10vh]
    mt-auto
    px-10
  `}
  color : ${(props) => props.theme.white.light};
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
