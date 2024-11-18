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
                    await axios.post('http://localhost:3000/auth/login', {
                        email,
                        password,
                    });

                    return  { id: '123213', name:'rwqr', email: 'rwr23r' };
                } catch (error) {
                    console.error('Error during authorization:');
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token;
            return session;
        },
    },
    pages: {
        signIn: '/auth/login',
    },
});

export { handler as GET, handler as POST };
