import { Outlet } from "react-router-dom"
import { Footer } from "../pages/shared/Footer"
import { Navbar } from "../pages/shared/Navbar"


export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
