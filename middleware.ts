import { authMiddleware, AuthMiddlewareParams } from '@clerk/nextjs/server';
import { NextApiRequest } from 'next';

const protectedRoutes = [
    '/',
    '/upcoming',
    '/meeting(.*)',
    '/previous',
    '/recordings',
    '/personal-room',
];

export default authMiddleware((auth: AuthMiddlewareParams | undefined, req: NextApiRequest) => {
    if (auth) {
        const { protect } = auth();
        if (protectedRoutes.some(route => req.url?.startsWith(route))) {
            protect();
        }
    }
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
