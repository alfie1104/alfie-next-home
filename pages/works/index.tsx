import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import Article from "../../components/article";
import { WorkImage } from "../../components/work";
import { getWorks } from "../../util/api";
import { IWork } from "../../util/data.type";

function WorksPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Article title="Works" description="Works">
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
      </Article>
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
