import Document, { Html, Head, Main, NextScript } from 'next/document'
import BLOG from '@/blog.config'
import CJK from '@/lib/cjk'
class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang={BLOG.lang}>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fcc309" />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          <meta name="theme-color" content="#ffffff"></meta>
          <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="/feed"></link>
          {BLOG.appearance === 'auto'
            ? (
            <>
            <meta name="theme-color" content={BLOG.lightBackground} media="(prefers-color-scheme: light)"/>
            <meta name="theme-color" content={BLOG.darkBackground} media="(prefers-color-scheme: dark)"/>
            </>
              )
            : (
            <meta name="theme-color" content={BLOG.appearance === 'dark' ? BLOG.darkBackground : BLOG.lightBackground} />
              )
          }
        </Head>
        <body className="bg-day dark:bg-night">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
