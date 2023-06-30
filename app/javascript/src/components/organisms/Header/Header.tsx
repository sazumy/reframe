import React from 'react'
import { Link } from 'react-router-dom'
import { Person } from '@material-ui/icons'

import { UserItemFragment } from '@/graphql/generated'
import { useCurrentUser } from '@/src/hooks/currentUser'

type HeaderProps = {
  pattern?: string
}

export const HeaderContent: React.VFC<
  {
    currentUser: UserItemFragment
  } & HeaderProps
> = ({ currentUser, pattern = 'text-white' }) => {
  return (
    <>
      {currentUser && (
        <div className={`dropdown ${pattern}`}>
          <div className="dropdown__header">
            <span className="link">{currentUser.email}</span>
            <span className="icon">
              <Person />
            </span>
          </div>
          <ul className="dropdown__menu">
            <li className="">
              <Link to="/users/mypage" className="">
                マイページ
              </Link>
            </li>
            <li>
              <a href="/users/sign_out" data-method="delete" className="">
                サインアウト
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export const Header: React.VFC<HeaderProps> = ({ pattern = 'text-white' }) => {
  const { currentUser } = useCurrentUser()
  if (currentUser == null) {
    return (
      <div className={`flex justify-end ${pattern}`}>
        <a href="/users/sign_in" className="sign-in">
          サインイン
        </a>
      </div>
    )
  }

  return <HeaderContent currentUser={currentUser} pattern={pattern} />
}
