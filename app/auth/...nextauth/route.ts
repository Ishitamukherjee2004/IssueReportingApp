import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Example: Fetch user from database
        const user = { id: "1", name: "John Doe", email: credentials?.email };

        if (user) return user;
        return null;
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET, // Ensure this is set in .env
});

export { handler as GET, handler as POST };
