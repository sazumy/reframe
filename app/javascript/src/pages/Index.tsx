import React from 'react'
import { Link } from 'react-router-dom'

import { useCurrentUser } from '@/src/hooks/currentUser'

export function Index() {
  const { currentUser, loading } = useCurrentUser()
  if (!loading && currentUser == null)
    return (
      <>
        <div className="triangle_wrap">
          <div className="triangle_right" />
          <div className="triangle_left" />
        </div>

        <div className="flex justify-end">
          <a href="/users/sign_in" className="text-white">
            サインイン
          </a>
        </div>

        <div className="container">
          <div className="product-title">
            <h1 className="product-title__text text-blue font-bold text-6xl">
              <span className="top-balloon">逆!</span>性格診断
            </h1>
          </div>
        </div>
      </>
    )
  return (
    <>
      <p>ログイン時のコンテンツがここに表示されます</p>
      {/* <Link to="/chat">Go to chat</Link> */}
    </>
  )
}
