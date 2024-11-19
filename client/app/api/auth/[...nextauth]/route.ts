import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from 'next-auth';
import axios from "axios";

const handler = NextAuth({
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            id: 'credentials',
            credentials: {
                username: { label: 'Email', type: 'email', placeholder: 'test@example.com' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials: any) {
                const email = credentials?.email;
                const password = credentials?.password;

                try {
                    const res: any = await axios.post('http://api:3000/auth/login', {
                        email,
                        password,
                    })

                    return  { email, name: 'test', id: '22'};
                } catch (error) {
                    console.log(error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            if (user && account?.provider === 'credentials') {
                console.log('ttt');
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token;
            return session;
        },
        async signIn({ account }) {
            if (account?.provider === 'credentials') {
                return true;
            }
            return false;
        },
    },
    pages: {
        signIn: '/auth/login',
    },
    secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };
