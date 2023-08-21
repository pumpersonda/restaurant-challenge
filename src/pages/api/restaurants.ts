// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v3/businesses/search?` +
      new URLSearchParams({
        term: "restaurants",
        location: "San Jose, CA95127",
        offset: req.query.offset as string,
        limit: "15",
        categories: req.query.categories as string,
      }),
    {
      headers: {
        Authorization: `Bearer ${process.env.KEY}`,
      },
    }
  ).then((response) => response.json());

  res.json(data); // Send the response
}
