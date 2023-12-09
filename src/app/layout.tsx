
import { Providers } from './providers'
import "Styles/globals.css";

export const metadata = {
  title: 'wagmi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className='awa'>
        <div>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}
