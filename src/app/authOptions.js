import dbConnect, { collectionsNames } from "@/lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {

 providers: [
  CredentialsProvider({
   name: "Credentials",

   credentials: {
    username: { label: "Username", type: "text" },
    password: { label: "Password", type: "password" },
   },

   async authorize(credentials) {

    const { username, password } = credentials;

    const user = await dbConnect(collectionsNames.TEST_USER)
      .findOne({ username });

    if (!user) return null;

    if (password !== user.password) return null;

    return {
      id: user._id.toString(),
      email: user.email,
      role: user.role,
      username: user.username
    };
   },
  }),
 ],

 callbacks: {

  async jwt({ token, user }) {
   if (user) {
    token.role = user.role;
   }
   return token;
  },

  async session({ session, token }) {
   session.user.role = token.role;
   return session;
  },

 }

};