import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const Article: React.FC<{ title: string }> = ({ children, title }) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: "easeInOut" }}
    style={{ position: "relative" }}
  >
    <>
      {title && (
        <Helmet>
          <title>{title} | Alfie</title>
        </Helmet>
      )}
      {children}
    </>
  </motion.article>
);

export default Article;