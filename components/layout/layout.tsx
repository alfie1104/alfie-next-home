import { Fragment } from "react";
import Navbar from "./main-navigation";

interface IProps {
  children: any;
}

const Layout: React.FC<IProps> = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
