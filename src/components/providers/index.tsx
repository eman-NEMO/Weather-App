'use client'
import { SessionProvider } from "next-auth/react";
import ReactQueryProvider from "./components/react-query-provider";
import { ThemeProvider } from "./components/theme-provider";
// import { SessionProvider } from "next-auth";
type ProvidersProps = {
  children: React.ReactNode;
};
export default function Providers({ children }: ProvidersProps) {
  return (
    // Add Next auth and next intel provider and delete this comment eng Ehab
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SessionProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
