import React from 'react'

export const MainContent: React.FC = ({ children }) => {
  return (
    <div className="container-sm flex flex-col justify-between h-full">
      {children}
    </div>
  )
}
