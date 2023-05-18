import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href="/images/144x144.png"
        />
        <meta name="description" content="h3poteto's profile page" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
