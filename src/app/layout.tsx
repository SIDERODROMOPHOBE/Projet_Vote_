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
      <body>


      <h1 className='underline'>Tesst Tailwind</h1>

      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
