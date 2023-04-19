import Edit from '@material-ui/icons/Edit'
import ExpandLess from '@material-ui/icons/ExpandLess'
import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import { NegativeWord } from '@/graphql/generated'
import { Input } from '@/src/components/atoms'

export function Diagnose() {
  const location = useLocation()
  const history = useHistory()
  const selectedKeywords = location.state as NegativeWord[]

  const handleAgainBtnClick = () => {
    history.push('/')
  }

  const handleSaveBtnClick = () => {
    console.log('結果を保存')
  }

  return (
    <>
      <h1>診断結果</h1>
      <div className="diagnose__top-content">
        <h2 className="diagnose__top-content--title">
          タイトル：
          <Input value="2022-04-20_逆性格診断" />
        </h2>
        <Edit className="diagnose__top-content--button" />
      </div>

      <div className="diagnose__content">
        {selectedKeywords.map((keyword) => {
          return (
            <div className="rephrasing">
              <div className="rephrasing__content">
                <h3 className="rephrasing__content--title">
                  あなたは
                  <span className="negative-word">{keyword.content}</span>
                  のですね。
                </h3>
                <div className="rephrasing__content--text">
                  それはもしかしたら、
                  <br />
                  <span className="positive-word">ポジティブな言葉</span>ことの
                  <br />
                  証拠なのかもしれません。
                </div>
              </div>

              <div className="rephrasing__content">
                <h3 className="rephrasing__content--title">
                  <span className="negative-word">{keyword.content}</span>
                  人は...
                </h3>
                <div className="rephrasing__content--text">
                  事前に考えてから行動するので、行き当たりばったりで実行することはなく、何事も慎重に進めていくことができます。そのため、失敗も少ないです。
                </div>
              </div>

              <div className="rephrasing__footer">
                <div className="rephrasing__footer--button">
                  <ExpandLess />
                  <p>閉じる</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="diagnose__bottom-content">
        <div className="your-keywords">
          <h2>あなたへのキーワード</h2>
          <ul className="keywords__list">
            <li className="keywords__list--item">キーワード</li>
            <li className="keywords__list--item">キーワード</li>
            <li className="keywords__list--item">キーワード</li>
            <li className="keywords__list--item">キーワード</li>
            {/* {positiveWords &&
              positiveWords?.map((word: Word | null) => {
                if (!word) return
                return (
                  <li
                    className="keywords__list--item"
                    onClick={() => handleClick(word)}
                    key={word.id}
                  >
                    {word.content}
                  </li>
                )
              })} */}
          </ul>
        </div>
        <div className="buttons">
          <button
            className="btn btn-secondary btn-lg mr-4"
            onClick={() => handleAgainBtnClick()}
          >
            もう一度診断
          </button>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => handleSaveBtnClick()}
          >
            結果を保存
          </button>
        </div>
      </div>
    </>
  )
}
