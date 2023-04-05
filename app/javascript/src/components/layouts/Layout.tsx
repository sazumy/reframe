import React from 'react'

import { Header } from '@/src/components/organisms/Header/Header'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="triangle_wrap">
        <div className="triangle_right" />
        <div className="triangle_left" />
      </div>

      <Header />

      {children}
    </>
  )
}
