import * as React from 'react'
import { NavBar } from '..'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative bg-white-smoke">
      <NavBar />

      {children}
    </div>
  )
}

export default Layout
