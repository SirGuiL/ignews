import { query as q } from "faunadb";

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { fauna } from "../../../services/fauna";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          scope: "read:user",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, credentials }) {
      const { email } = user;
      
      // try {
      //   await fauna.query(q.Create(q.Collection("user"), {  }));
      // } catch (err) {
      //   console.log(err);
      // }

      console.log(email);

      return true
    },
  },
});
