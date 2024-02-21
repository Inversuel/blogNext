// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dayjs from "dayjs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log(req.body);
    const dataBody = req.body;
    const data = {
      submittedAt: new Date(),
      fields: [
        {
          objectTypeId: "0-1",
          name: "email",
          value: dataBody.email,
        },
        {
          objectTypeId: "0-1",
          name: "firstname",
          value: dataBody.firstName,
        },
        {
          objectTypeId: "0-1",
          name: "lastname",
          value: dataBody.lastName,
        },
        {
          objectTypeId: "0-1",
          name: "phone",
          value: dataBody.mobileNumber,
        },
      ],
    };
    const response = await fetch(
      "https://api.hsforms.com/submissions/v3/integration/submit/144180628/67979c73-55a1-48f2-9102-1743eb8ff808",
      {
        headers: {
          Authorization: `Bearer pat-eu1-d911690f-c728-4635-8dfc-e5d168842757`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    if (response.status == 200) {
      return res.status(200).json({
        message: "Accepted",
        data: data,
      });
    } else if (response.status == 400) {
      return res.status(400).json({
        message: "submission is rejected",
        data: data,
      });
    } else if (response.status == 403) {
      return res.status(403).json({
        message: "portal isn't allowed to post submissions.",
        data: data,
      });
    } else if (response.status == 404) {
      return res.status(404).json({
        message: "the formGuid isn't found",
        data: data,
      });
    } else {
      return res.status(500).json({
        message: "Something went wrong",
        data: data,
      });
    }
  } else {
    res.status(400).json({ message: "Bad request" });
  }
}

// https://api.hsforms.com/submissions/v3/integration/submit/144180628/67979c73-55a1-48f2-9102-1743eb8ff808

//private upps  BlogApp hubspot  pat-eu1-d911690f-c728-4635-8dfc-e5d168842757
//Bearer                         pat-eu1-d911690f-c728-4635-8dfc-e5d168842757

// curl --request GET \
//   --url 'https://api.hubapi.com/crm/v3/objects/contacts?limit=10&archived=false' \
//   --header 'authorization: Bearer YOUR_ACCESS_TOKEN'

// https://app-eu1.hubspot.com/submissions/144180628/form/67979c73-55a1-48f2-9102-1743eb8ff808/submissions
