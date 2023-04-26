import Edit from '@material-ui/icons/Edit'
import ExpandLess from '@material-ui/icons/ExpandLess'
import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import { NegativeWord } from '@/graphql/generated'
import { Input } from '@/src/components/atoms'
import { CardParaphrase } from '@/src/components/organisms/CardParaphrase'

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
          return <CardParaphrase keyword={keyword} />
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
