import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import Container from "@/app/_components/container";
import { Providers } from "@/app/_components/providers";
import ThemeSwitch from "@/app/_components/ThemeSwitch";
import "./globals.css";
import Link from "next/link";
import "zenn-content-css";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJp = Noto_Sans_JP({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Next.js Blog Example with ${CMS_NAME}`,
  description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
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
        <link
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
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>


      <body className={notoSansJp.className}>
        <Providers>
          <Container>
            <header className="text-gray-600 body-font">
              <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                  <span className="dark:text-white text-xl">Somahc</span>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                  <Link href="/about" className="mr-5 hover:text-gray-300">About</Link>
                  <Link href="/posts" className="mr-5 hover:text-gray-300">Blog</Link>
                </nav>
                <ThemeSwitch />
              </div>
            </header>

            <div className="">{children}</div>
            {/* <Footer /> */}
            <footer className="text-gray-600 body-font">
              <div className="">
                <div className="container mx-auto py-4 flex flex-wrap flex-col sm:flex-row">
                  <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 Somahc
                  </p>
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <a className="ml-3 text-gray-500">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
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
