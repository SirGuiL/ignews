import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {
      id: 1,
      name: "Jane Doe",
    },
    {
      id: 2,
      name: "Jane Foster",
    },
    {
      id: 3,
      name: "Jane do Tarzan",
    },
  ];

  return response.json(users);
};
