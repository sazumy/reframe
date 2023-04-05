import React from 'react'

export const ThreeCats: React.FC = () => {
  return (
    <section className="illustrations">
      <ul className="illustrations__list">
        <li className="illustrations__list--item">
          <img src="/illust-cat-01.svg" alt="猫のイラスト" />
        </li>
        <li className="illustrations__list--item">
          <img src="/illust-cat-02.svg" alt="猫のイラスト" />
        </li>
        <li className="illustrations__list--item">
          <img src="/illust-cat-03.svg" alt="猫のイラスト" />
        </li>
      </ul>
    </section>
  )
}
