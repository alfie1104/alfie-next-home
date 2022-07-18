import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {
  motion,
  useAnimation,
  useViewportScroll,
  Variants,
} from "framer-motion";

const linkList = [
  { title: "Home", path: "/" },
  { title: "Works", path: "/works" },
];

const logoPath = "/images/alfie_logo.svg";

const Item: React.FC<{
  children: any;
  current?: boolean;
  classProps: string;
}> = ({ children, current, classProps }) => (
  <li
    className={`${
      current ? "text-custom-blue-light" : "text-custom-white-light"
    } transition-colors hover:text-custom-blue-dark after:block after:border-b-[3px] after:border-custom-blue-light after:transition-transform ${
      current ? "after:scale-x-100" : "after:scale-x-0"
    } hover:after:border-b-[3px] hover:after:border-custom-blue-dark hover:after:scale-x-100 ${classProps}`}
  >
    {children}
  </li>
);

const navVariants: Variants = {
  top: {
    backgroundColor: "rgba(51,51,51,0.5)",
  },
  scroll: {
    backgroundColor: "rgba(51,51,51,0)",
  },
};

const NavItem = ({
  title,
  path,
  current,
  classProps,
}: {
  title: string;
  path: string;
  current: boolean;
  classProps?: string;
}) => {
  return (
    <Item
      current={current}
      classProps={`mx-4 ${classProps ? `${classProps}` : ""}`}
    >
      <Link
        href={path}
        className={`mx-2 text-base font-medium ${
          classProps ? `${classProps}` : ""
        } ${current ? "text-custom-blue-light" : ""}`}
      >
        {title}
      </Link>
    </Item>
  );
};

const MainNavigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isActivated, setIsActivated] = useState(true);
  const navAnimation = useAnimation();
  const { pathname } = useRouter();
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() >= 80) {
        setIsActivated(false);
        navAnimation.start("scroll");
      } else {
        setIsActivated(true);
        navAnimation.start("top");
      }
    });
  }, []);

  return (
    <motion.nav
      className={`w-full flex flex-row md:justify-center justify-between items-center p-2 mb-5 sticky top-0 z-20 transition-all`}
      variants={navVariants}
      initial={"top"}
      animate={navAnimation}
    >
      <div className="md:ml-14 ml-8 mr-auto justify-center items-center">
        <Link href="/">
          <div
            className={`${
              isActivated ? "" : "hidden"
            } w-20 md:w-32 -rotate-6 hover:rotate-0 cursor-pointer transition-all`}
          >
            <Image
              src={logoPath}
              alt="logo"
              width={128}
              height={80}
              layout="responsive"
              className="rounded-2xl"
            />
          </div>
        </Link>
      </div>
      <ul
        className={`text-white md:flex hidden list-none flex-row justify-between items-center flex-initial ${
          isActivated ? "" : "mt-7"
        }`}
      >
        {linkList.map((item) => (
          <NavItem
            {...item}
            key={item.title}
            current={pathname === item.path}
          />
        ))}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            className="text-white md:hidden cursor-pointer z-20"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 max-w-[70vw] min-w[30vw] h-screen shadow-2xl md:hidden
          flex flex-col justify-start items-end rounded-md text-white bg-slate-700 bg-opacity-80 animate-slide-in
          py-20"
          >
            {linkList.map((item) => (
              <NavItem
                {...item}
                key={item.title}
                classProps={"my-3 text-lg"}
                current={pathname === item.path}
              />
            ))}
          </ul>
        )}
      </div>
    </motion.nav>
  );
};

export default MainNavigation;
