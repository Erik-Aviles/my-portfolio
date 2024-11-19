import React from 'react'

const Layout = ({ children, className = '' }) => {
  return (
    <main
      className={`w-full flex items-center bg-light dark:bg-dark text-dark dark:text-light  ${className}`}
    >
      {children}
    </main>
  )
}

export default Layout
