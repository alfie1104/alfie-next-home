import { useEffect } from "react";
import { Experience } from "../components/experience";
import { expList } from "../db/data";

const Experiences = () => {
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
