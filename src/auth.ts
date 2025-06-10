import { createClient } from "@supabase/supabase-js";
import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
);
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials) return null;

        const { email, password } = credentials;
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        // console.log(data ,"gjdk");
        if (error) {
          // console.log(data)
          // console.log(error)
          throw new Error(error.message);
        }
        if (data.user) {
          console.log(data.user, "now");
          console.log(data.session, "seesion");
          return { id: data.user.id, token: data.session.access_token, user: data.user };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.token = user.token;

        // token.token=user.token
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user.token = token.token;
        session.user.id = token.id;
      }
      // console.log(session)
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
