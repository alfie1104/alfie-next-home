import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="w-full flex md:justify-center justify-start items-center h-[10vh] mt-auto px-10 text-custom-white-light bg-custom-black-veryDark">
      <p className="mr-5">
        <a href="https://github.com/alfie1104" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="lg" className="mr-2" />
          Github
        </a>
      </p>
    </footer>
  );
};

export default Footer;
