import React from 'react'
import { Link } from 'react-router-dom'

export const DropDownMenu: React.VFC = () => {
  return (
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
  )
}
