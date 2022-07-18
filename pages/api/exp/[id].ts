// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getExperienceById } from "../../../util/api";
import { IExperience, IResult } from "../../../util/data.type";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResult<IExperience>>
) {
  const {
    query: { id },
  } = req;

  try {
    const { ok, error, result } = await getExperienceById(id[0]);

    if (ok) {
      res.status(201).json({ ok: true, result });
      return;
    } else {
      res.status(500).json({ ok: false, error });
      return;
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      error: `DB Error : Could not fetch experience with id = ${id}`,
    });
    return;
  }
}
