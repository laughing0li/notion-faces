import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <link href="/fonts/Quicksand.tff" as="font" crossOrigin="anonymous" />
                    {/* Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=G-064L7CLPEG`}
                    />
                    <script
                        async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3671095188342075"
                        crossOrigin="anonymous"
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                     window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-064L7CLPEG');
          `,
                        }}
                    />
                </Head>
                <body className="font-bold">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document
