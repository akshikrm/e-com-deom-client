import type { Metadata } from "next";
import localFont from "next/font/local";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import { Container, ThemeProvider } from "@mui/material";
import theme from "@/theme";
import DatePickerProvider from "@/components/date-picker-provider";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistMono.variable}>
        <AppRouterCacheProvider>
          <DatePickerProvider>
            <ThemeProvider theme={theme}>
              <Container maxWidth="lg">{children}</Container>
            </ThemeProvider>
          </DatePickerProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
