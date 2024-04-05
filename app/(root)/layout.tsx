import StreamVideoProvider from "@/providers/streamClientProvider";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider>
        </main>
    );
};

export default RootLayout;