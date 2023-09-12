import { Person } from '@material-ui/icons'
import React, { useState } from 'react'

import { UserItemFragment } from '@/graphql/generated'
import { DropDownMenu } from '@/src/components/organisms/Menu/DropDownMenu'
import { useCurrentUser } from '@/src/hooks/currentUser'

type HeaderProps = {
  pattern?: string
}

export const HeaderContent: React.VFC<
  {
    currentUser: UserItemFragment
  } & HeaderProps
> = ({ currentUser, pattern = 'text-white' }) => {
  const [visibility, setVisibility] = useState<boolean>(false)
  const handleVisibility = () => {
    setVisibility(!visibility)
  }

  return (
    <>
      {currentUser && (
        <div className={`header ${pattern}`}>
          <div className="dropdown" onClick={() => handleVisibility()}>
            <span className="dropdown__icon">
              <Person />
            </span>
            <span className="dropdown__link">{currentUser.email}</span>
            {visibility && <DropDownMenu />}
          </div>
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
        {/* TODO: マイページ機能を実装するときにコメントアウトを外す */}
        {/* <a href="/users/sign_in" className="sign-in">
          サインイン
        </a> */}
      </div>
    )
  }

  return <HeaderContent currentUser={currentUser} pattern={pattern} />
}
