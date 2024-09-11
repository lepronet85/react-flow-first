import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactFlowProvider } from "@xyflow/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fan - Battle",
  description: "Defiez vos amis dans des combats de fan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactFlowProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </ReactFlowProvider>
      </body>
    </html>
  );
}
