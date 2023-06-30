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
        <div className={`dropdown ${pattern}`}>
          <div className="dropdown__header" onClick={() => handleVisibility()}>
            <span className="link">{currentUser.email}</span>
            <span className="icon">
              <Person />
            </span>
          </div>
          {visibility && <DropDownMenu />}
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
