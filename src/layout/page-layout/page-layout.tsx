import React, { PropsWithChildren } from "react";
import { Footer } from "y/components/footer";
import { Navbar } from "y/components/navbar";

export const Layout: React.FC<any> = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Navbar />
            <div className="flex flex-col items-center justify-center py-18">
                <div className="container flex flex-col items-center justify-center gap-12 px-8 py-6 ">
                    <div>{children}</div>
                </div>
            </div>
            <Footer />
        </div>
    );
};