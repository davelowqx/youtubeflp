import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>YoutubeFlp</title>
        <meta name="description" content="mirror youtube videos" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" sizes="144x144" />
      </Head>
      <main>
        <h1>Horizontally flip online videos</h1>
        <p>Simply change the url from youtube to youtubeflp</p>
      </main>
    </>
  );
}
