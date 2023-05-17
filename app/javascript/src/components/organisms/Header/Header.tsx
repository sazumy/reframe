import React from 'react'
import { Link } from 'react-router-dom'

import { UserItemFragment } from '@/graphql/generated'
import { useCurrentUser } from '@/src/hooks/currentUser'

export const HeaderContent: React.VFC<{
  currentUser: UserItemFragment
}> = ({ currentUser }) => {
  return (
    <>
      {currentUser && (
        <ul className="flex items-center justify-end p-6 bg-teal-500">
          <li className="mr-6">
            <Link to="#" className="text-white hover:text-yellow-800">
              {currentUser.email}
            </Link>
          </li>
          <li>
            <a
              href="/users/sign_out"
              data-method="delete"
              className="text-white"
            >
              サインアウト
            </a>
          </li>
        </ul>
      )}
    </>
  )
}

export const Header: React.VFC = () => {
  const { currentUser } = useCurrentUser()
  if (currentUser == null) {
    return (
      <div className="flex justify-end">
        <a href="/users/sign_in" className="sign-in">
          サインイン
        </a>
      </div>
    )
  }

  return <HeaderContent currentUser={currentUser} />
}
