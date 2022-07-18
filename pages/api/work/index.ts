import { NextApiRequest, NextApiResponse } from "next";
import { getWorks } from "../../../util/api";
import { IResult, IWork } from "../../../util/data.type";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResult<IWork[]>>
) {
  try {
    const { ok, error, result } = await getWorks();
    if (ok) {
      res.status(201).json({ ok: true, result });
      return;
    } else {
      res.status(500).json({ ok: false, error });
      return;
    }
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ ok: false, error: "DB Error : Could not fetch works" });
  }
}
