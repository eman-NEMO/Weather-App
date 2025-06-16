
import ReactQueryProvider from "./components/react-query-provider";
import { ThemeProvider } from "./components/theme-provider";
// import { SessionProvider } from "next-auth";
type ProvidersProps = {
  children: React.ReactNode;
};
export default function Providers({ children }: ProvidersProps) {
  return (
    // Add Next auth and next intel provider 
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
     
      <ReactQueryProvider>{children}</ReactQueryProvider>
    
    </ThemeProvider>
  );
}
