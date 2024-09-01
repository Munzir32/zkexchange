import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";

// export const metadata = getMetadata({
//   title: "Scaffold-ETH 2 App",
//   description: "Built with 🏗 Scaffold-ETH 2",
// });

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    // <html suppressHydrationWarning>
    // <body className=" bg-black" style={headerStyle}>
    <ThemeProvider enableSystem>
      <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
    </ThemeProvider>
    // </body>
    // </html>
  );
};

export default Layout;