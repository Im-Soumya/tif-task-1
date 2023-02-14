import Head from "next/head";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Food Truck</title>
        <meta
          name="description"
          content="Task 1 of The Internet Folks assessment for React intern"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/truck.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
