import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({  
	providers: [
  GoogleProvider({
      clientId: process.env.GOOGLE_CLI_ID || '', 
      clientSecret: process.env.GOOGLE_CLI_SEC || ''
	  }),
	],
});

export { handler as GET, handler as POST };