import React from 'react'

export const LayoutTriangle: React.FC = ({ children }) => {
  return (
    <>
      <div className="triangle_wrap">
        <div className="triangle_right" />
        <div className="triangle_left" />
      </div>

      {children}
    </>
  )
}
