import { Fragment } from "react";
import Footer from "../footer";
import Navbar from "./main-navigation";

interface IProps {
  children: any;
}

const Layout: React.FC<IProps> = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
