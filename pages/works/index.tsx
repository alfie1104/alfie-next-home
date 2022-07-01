import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { WorkImage } from "../../components/work";
import { getWorks } from "../../util/api";
import { IWork } from "../../util/data.type";

function WorksPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Works | Alfie</title>
        <meta name="description" content="Works" />
      </Head>
      <div className="flex flex-col items-center">
        <h1>My Works</h1>
        {props.workList.map((work) => (
          <div key={work.id}>
            {work.workImage && (
              <WorkImage src={work.workImage} alt={work.alt ?? work.title} />
            )}
            <Link href={`/works/${work.id}`}>{work.title}</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default WorksPage;

export async function getStaticProps(context: GetStaticPropsContext) {
  const workList: IWork[] = await getWorks();

  return {
    props: {
      workList,
    },
  };
}
