"use client";

import { AppProps } from "next/app";
import { ReactNode } from "react";

type Props = AppProps & {
    text: string
    children: ReactNode
};

export default function Layout({ children }: Props) {

    return (
        <body id="body" className={`w-screen h-screen bg-white flex flex-col`}>
            {children}
        </body>
    );
}

