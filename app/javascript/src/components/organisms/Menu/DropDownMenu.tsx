import React from 'react'
import { Link } from 'react-router-dom'

export const DropDownMenu: React.VFC = () => {
  return (
    <ul className="dropdown__menu">
      <li className="dropdown__menu--list">
        <Link to="/users/mypage" className="link">
          マイページ
        </Link>
      </li>
      <li className="dropdown__menu--list">
        <a href="/users/sign_out" data-method="delete" className="link">
          サインアウト
        </a>
      </li>
    </ul>
  )
}
