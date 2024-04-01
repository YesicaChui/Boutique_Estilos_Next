import React, { ReactNode } from 'react'

export const metadata = {
  title: "Estilos-Admin",
  description: "Seccion de administracion de la pagina",
};

interface adminLayoutProps{
  children:ReactNode
}
const adminLayout = (props:adminLayoutProps) => {
  const {children}=props
  return (
    <>{children}</>
  )
}

export default adminLayout