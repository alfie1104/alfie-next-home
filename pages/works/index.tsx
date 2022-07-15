import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Article from "../../components/article";
import { WorkImage } from "../../components/work";
import { getWorks } from "../../util/api";

function WorksPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  return (
    <>
      <Article title="Works" description="Works">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-4xl mb-14 font-bold bg-custom-green-light py-2 w-[70%] rounded-lg text-green-800 px-10">
            My Works
          </h1>
          <div className="grid grid-cols-2 gap-10 w-[60%]">
            {props.workList.map((work) => (
              <div
                key={work.id}
                className={"flex flex-col items-center justify-center"}
              >
                {work.workImages && work.workImages.length > 0 && (
                  <div className="hover:-translate-y-5 hover:scale-[1.1] transition-all w-full">
                    <WorkImage
                      src={work.workImages[0].uri}
                      alt={work.workImages[0].description ?? work.title}
                      onClick={(e) => {
                        router.push(`/works/${work.id}`);
                      }}
                    />
                  </div>
                )}
                <Link href={`/works/${work.id}`}>
                  <span className="text-lg font-semibold cursor-pointer hover:text-custom-green-light">
                    {work.title}
                  </span>
                </Link>
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
