import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Iv23liGIiyde7TpUPtaz",
      clientSecret: "14bdbe5b496c92ce618d95b6d38d87fbdc7db041",
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session?.user?.name
        .split(" ")
        .join("")
        .toLocalLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
  secret: "default_secret_key",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
