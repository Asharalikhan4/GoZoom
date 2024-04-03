import { authMiddleware } from "@clerk/nextjs";

const protectedRoutes = {
    matcher: ([
        '/',
        '/upcoming',
        '/meeting(.*)',
        '/previous',
        '/recordings',
        '/personal-room',
    ])
};

export default authMiddleware((auth, req) => {
    if(protectedRoutes(req)) auth().protect();
});

export const config = {
    matcher: [
        "/((?!.+\\.[\\w]+$|_next).*)",
        "/(api|trpc)(.*)"
    ]
};