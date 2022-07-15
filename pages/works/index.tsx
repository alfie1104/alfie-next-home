import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import Article from "../../components/article";
import { WorkImage } from "../../components/work";
import { getWorks } from "../../util/api";

function WorksPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Article title="Works" description="Works">
        <div className="flex flex-col items-center">
          <h1>My Works</h1>
          <div className="grid grid-cols-2 gap-10">
            {props.workList.map((work) => (
              <div key={work.id}>
                {work.workImages && work.workImages.length > 0 && (
                  <WorkImage
                    src={work.workImages[0].uri}
                    alt={work.workImages[0].description ?? work.title}
                  />
                )}
                <Link href={`/works/${work.id}`}>{work.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </Article>
    </>
  );
}

export default WorksPage;

export async function getStaticProps(context: GetStaticPropsContext) {
  const { ok, error, result } = await getWorks();

  if (ok && result) {
    return {
      props: {
        workList: result,
      },
    };
  } else {
    return {
      props: {
        workList: [],
      },
    };
  }
}
