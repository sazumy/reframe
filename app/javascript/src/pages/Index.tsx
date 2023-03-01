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

        <div className="container-sm">
          <section className="product-title">
            <h1 className="product-title__text">
              <span className="top-balloon">逆!</span>性格診断
            </h1>
          </section>

          <section className="form__keyword-search">
            <h2>あなたはどんな性格？</h2>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="おとなしい、真面目、つまらない etc..."
            />
          </section>

          <section className="selected-keywords">
            <h2>選んだ単語</h2>
            <div className="keywords">
              <ul className="keywords__list">
                <li className="keywords__list--item delete-btn">タグA</li>
                <li className="keywords__list--item delete-btn">タグA</li>
                <li className="keywords__list--item delete-btn">タグA</li>
              </ul>
            </div>
          </section>

          <section className="suggested-keywords mb-8">
            <h2>候補の単語</h2>
            <div className="keywords">
              <ul className="keywords__list">
                <li className="keywords__list--item">適当な長い単語のタグ</li>
                <li className="keywords__list--item">適当なタグ</li>
                <li className="keywords__list--item">適当な長い単語のタグ</li>
                <li className="keywords__list--item">適当なタグ</li>
                <li className="keywords__list--item">適当な長い単語のタグ</li>
                <li className="keywords__list--item">適当なタグ</li>
                <li className="keywords__list--item">適当な長い単語のタグ</li>
                <li className="keywords__list--item">適当なタグ</li>
                <li className="keywords__list--item">適当な長い単語のタグ</li>
                <li className="keywords__list--item">適当なタグ</li>
                <li className="keywords__list--item">適当な長い単語のタグ</li>
                <li className="keywords__list--item">適当なタグ</li>
                <li className="keywords__list--item">適当な長い単語のタグ</li>
                <li className="keywords__list--item">適当なタグ</li>
                <li className="keywords__list--item">適当な長い単語のタグ</li>
                <li className="keywords__list--item">適当なタグ</li>
                <li className="keywords__list--item">適当な長い単語のタグ</li>
                <li className="keywords__list--item">適当なタグ</li>
                <li className="keywords__list--item">適当な長い単語のタグ</li>
                <li className="keywords__list--item">適当なタグ</li>
                <li className="keywords__list--item">適当な長い単語のタグ</li>
                <li className="keywords__list--item">適当なタグ</li>
                <li className="keywords__list--item">適当な長い単語のタグ</li>
                <li className="keywords__list--item">適当なタグ</li>
                <li className="keywords__list--item">適当な長い単語のタグ</li>
                <li className="keywords__list--item">適当なタグ</li>
              </ul>
            </div>
          </section>

          <section className="submit-button">
            <button className="btn btn-primary btn-lg">診断する</button>
          </section>

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
