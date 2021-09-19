import React, { useState } from "react"
import "../css/main.css"
import Footer from "./Footer"
import Logo from "./Logo"
import Navbar from "./Navbar"
import Sidebar from "./SideBar"

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <main>
      <Logo />
      <Navbar toggleOpen={toggleOpen} />
      <Sidebar open={open} toggleOpen={toggleOpen} />

      {children}

      <Footer />
    </main>
  )
}

export default Layout
