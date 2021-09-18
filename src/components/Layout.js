import React from "react"
import "../css/main.css"
import Footer from "./Footer"
import Logo from "./Logo"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <main>
      <Logo />
      <Navbar />

      {children}

      <Footer />
    </main>
  )
}

export default Layout
