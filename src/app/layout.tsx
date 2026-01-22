import NavBar from '@/components/navBar/NavBar'
import './global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}
      <NavBar />
      </body>
    </html>
  )
}