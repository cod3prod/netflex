import type { Metadata } from "next";
import "@/styles/index.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "NETFLEX - 최고의 영화와 TV 프로그램",
  description: "최신 인기 시리즈와 영화를 무제한으로 시청하세요.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
