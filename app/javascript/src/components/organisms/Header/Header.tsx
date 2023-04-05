import React from 'react'

export const Header: React.FC = () => {
  return (
    <div className="flex justify-end">
      <a href="/users/sign_in" className="text-white">
        サインイン
      </a>
    </div>
  )
}
