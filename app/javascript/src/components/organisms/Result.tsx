import Edit from '@material-ui/icons/Edit'
import dayjs from 'dayjs'
import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import { NegativeWord } from '@/graphql/generated'
import { Input } from '@/src/components/atoms'
import { CardParaphrase } from '@/src/components/organisms/CardParaphrase'
import { generateYourKeywords } from '@/src/hooks/generateYourKeywords'
import { debounce } from 'lodash'

export const Result: React.FC = ({ children }) => {
  const location = useLocation()
  const history = useHistory()

  const selectedKeywords = location.state as NegativeWord[]
  const [diagnoseTitle, setDiagnoseTitle] = useState<string>('')
  const [showInputForm, setShowInputForm] = useState<boolean>(false)
  const [enableEditButton, setEnableEditButton] = useState<boolean>(true)
  const handleAgainBtnClick = () => {
    history.push('/')
  }

  const handleSaveBtnClick = () => {
    console.log('結果を保存')
  }

  const makeInputFormEditable = () => {
    setShowInputForm(true)
    setEnableEditButton(false)
  }

  const DEBOUNCE_TIME_MS = 300
  // 参考：　https://softwaremill.com/debounce-on-inputs-in-react/
  const handleDiagnoseTitleChange = useMemo(
    () =>
      debounce((title: string) => {
        // TODO: 変更されたよという知らせが欲しい。また、実際にstateが変わるのはフォーカスが離れた時なのでメソッド名変えたい
        setDiagnoseTitle(title)
        setShowInputForm(false)
        setEnableEditButton(true)
      }, DEBOUNCE_TIME_MS),
    []
  )

  const yourKeywords = generateYourKeywords({
    negativeWords: selectedKeywords,
  })

  useEffect(() => {
    // NOTE: システムのタイムゾーンになっている可能性あり。余裕があれば確かめる
    const now = new Date().toDateString()
    const today = dayjs(now).format('YYYY-MM-DD')
    const defaultTitle = today + '_逆性格診断'
    setDiagnoseTitle(defaultTitle)
  }, [])

  return (
    <>
      <div className="diagnose__top-content container-sm">
        <h1>診断結果</h1>
        <div className="diagnose__top-content--form">
          <h2 className="title">
            タイトル：
            {showInputForm ? (
              <Input
                className="mr-2"
                defaultValue={diagnoseTitle}
                onBlur={(event) =>
                  handleDiagnoseTitleChange(event.target.value)
                }
              />
            ) : (
              <p className="title for-display" onClick={makeInputFormEditable}>
                {diagnoseTitle}
              </p>
            )}
          </h2>
          <Edit
            className={enableEditButton ? 'button' : 'button disabled'}
            onClick={() => makeInputFormEditable()}
          />
        </div>
      </div>

      <div className="diagnose__content">
        {selectedKeywords.map((keyword) => {
          return <CardParaphrase keyword={keyword} key={keyword.id} />
        })}
      </div>

      <div className="diagnose__bottom-content">
        <div className="your-keywords">
          <h2>あなたへのキーワード</h2>
          <ul className="keywords__list">
            {yourKeywords.map((word) => {
              if (!word) return
              return (
                <li className="keywords__list--item" key={word.id}>
                  {word.rentai}
                </li>
              )
            })}
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
