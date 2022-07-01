import { motion } from "framer-motion";
import Head from "next/head";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const Article: React.FC<{
  title?: string;
  children: any;
  description?: string;
}> = ({ children, title, description }) => (
  <>
    {title && (
      <Head>
        <title>{title} | Alfie</title>
        {description && <meta name="description" content={description} />}
      </Head>
    )}

    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <>{children}</>
    </motion.article>
  </>
);

export default Article;
