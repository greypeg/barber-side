import { type AppType } from "next/app";
import { api } from "y/utils/api";
import "y/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "y/providers/theme/theme.provider";
import { Layout } from "y/layout/page-layout";


const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ClerkProvider >
  );
};

export default api.withTRPC(MyApp);
