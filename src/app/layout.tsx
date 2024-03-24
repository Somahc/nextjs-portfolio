import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import Container from "@/app/_components/container";
import { Providers } from "@/app/_components/providers";
import ThemeSwitch from "@/app/_components/ThemeSwitch";
import "./globals.css";
import Link from "next/link";
import "zenn-content-css";
import { Noto_Sans_JP } from "next/font/google";
import { PiButterflyFill } from "react-icons/pi";
import Favicon from "../public/favicon/profile_pic.png";
import HomePic from "../public/home_pic.jpg";

const notoSansJp = Noto_Sans_JP({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Somahcのブログ`,
  description: `Somahcのブログです。エンジニア志望の学生が学んだことや興味を持ったことを書いています。`,
  openGraph: {
    // images: [HOME_OG_IMAGE_URL],
    description: `Somahcのブログです。エンジニア志望の学生が学んだことや興味を持ったことを書いています。`,
    images: [{ url: HomePic.src }],
  },
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      {/* <script src="https://embed.zenn.studio/js/listen-embed-event.js"></script> */}
      <head>
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        /> */}

        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>


      <body className={notoSansJp.className}>
        <Providers>
          <Container>
            <header className="text-gray-600 body-font">
              <div className="container mx-auto flex flex-wrap py-5 md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-0">
                  <span className="dark:text-white text-xl font-bold">Somahc</span>
                </Link>
                <nav className="mr-auto ml-4 py-1 pl-4 border-l border-gray-400	flex flex-wrap items-center text-base justify-center">
                  <Link href="/about" className="mr-5 hover:text-gray-300">About</Link>
                  <Link href="/posts" className="mr-5 hover:text-gray-300">Blogs</Link>
                </nav>
                <ThemeSwitch />
              </div>
            </header>

            <div className="min-h-svh">{children}</div>
            {/* <Footer /> */}
            <footer className="text-gray-600 body-font">
              <div className="">
                <div className="container mx-auto py-4 flex flex-wrap flex-row">
                  <p className="text-gray-500 text-sm sm:text-left">© 2024 Somahc
                  </p>
                  <span className="inline-flex ml-auto mt-0 justify-center sm:justify-start">
                    <div className="ml-3 text-gray-500">
                      <a href="https://bsky.app/profile/s1greni.bsky.social"><PiButterflyFill size={20} color={'#696969'} /></a>
                    </div>
                  </span>
                </div>
              </div>
            </footer>
          </Container>
        </Providers>
      </body>
    </html>
  );
}
