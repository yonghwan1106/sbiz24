import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import koKR from 'antd/locale/ko_KR';
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "경선칠기 컨설팅 제안서 - 천년의 기술, 백년의 브랜드로",
  description: "경선칠기 AI·데이터 활용 점포경영 혁신 전략 컨설팅 제안서",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKR.variable}>
        <AntdRegistry>
          <ConfigProvider
            locale={koKR}
            theme={{
              token: {
                colorPrimary: '#8B4513',
                borderRadius: 8,
                fontFamily: 'var(--font-noto-sans-kr)',
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
