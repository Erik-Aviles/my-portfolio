import { useState, useEffect, createContext } from 'react'

export const ActionsContext = createContext()

export const ActionsProvider = ({ children }) => {
  const [navbar, setNavbar] = useState(false)

  const changeNavbar = () => {
    setNavbar(!navbar)
    localStorage.setItem('navbar', !navbar)
  }

  useEffect(() => {
    setNavbar(JSON.parse(localStorage.getItem('navbar')) || false)
  }, [])

  return (
    <ActionsContext.Provider
      value={{
        setNavbar,
        changeNavbar,
        navbar
      }}
    >
      {children}
    </ActionsContext.Provider>
  )
}
