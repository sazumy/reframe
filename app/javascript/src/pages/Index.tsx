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
        <a href="/users/sign_in" className="text-zinc-50">
          Sign in
        </a>
      </>
    )
  return (
    <>
      <p>ログイン時のコンテンツがここに表示されます</p>
      {/* <Link to="/chat">Go to chat</Link> */}
    </>
  )
}
