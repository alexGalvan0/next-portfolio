import './globals.css'
import Head from 'next/head'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode

}) {
  return (
    <>
      <html lang="en">
        <Head>
          <title>Alex Galvan</title>
        </Head>
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body>

          {children}

        </body>
      </html>
    </>
  )
}
