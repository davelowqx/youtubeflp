import "../styles/globals.css";
import Head from "next/head";

const url = "youtubeflp.com";
const title = "Flip Youtube Videos | YoutubeFLP"
const description = `Flip YouTube videos by changing the URL from "youtube.com" to "youtubeFLP.com"`;
const keywords = "Youtube, Videos, Flip, Mirror, Watch";
const image = "/thumbnail.png";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no"
        />

        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="image" content={image} />

        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1920" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        <link rel="canonical" href={url} />
        <link rel="shortlink" href={url} />

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <html lang="en" dir="ltr" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        ></link>

      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
