import NavBar from './components/navBar/NavBar'
import { AuthProvider } from '@/utils/authContext'
import { ToastContainer } from "react-toastify";

import './global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <AuthProvider >
        {children}
         <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <NavBar />
      </AuthProvider>
      </body>
    </html>
  )
}