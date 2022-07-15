import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { Experience } from "../components/experience";
import { getExperiences } from "../util/api";

const Experiences = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { expList } = props;
  return (
    <div className="mt-7 mb-4">
      <h1 className="mb-5 text-2xl font-semibold">Experience</h1>
      <div>
        {expList && expList.map((exp) => <Experience key={exp.id} {...exp} />)}
      </div>
    </div>
  );
};

export default Experiences;

export async function getStaticProps(context: GetStaticPropsContext) {
  const { ok, error, result } = await getExperiences();

  return {
    props: {
      expList: result ?? [],
    },
  };
}
