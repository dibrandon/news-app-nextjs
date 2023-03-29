import '@/styles/globals.css'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return <>
        <Head>
        <title>News Appi</title>
        <meta name="description" content="News App from Api" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header> News App</header>

  <Component {...pageProps} />


  </>
}
