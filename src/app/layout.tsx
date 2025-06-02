import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Movie Explorer',
  description: 'Browse trending movies',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  )
}
