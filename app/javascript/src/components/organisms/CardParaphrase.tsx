import { ExpandLess, ExpandMore } from '@material-ui/icons'
import React, { useState } from 'react'

// NOTE: Wordタイプ、ここにあって良いのだろうか...?
import { useParaphraseQuery } from '@/graphql/generated'
import { Word } from '@/src/components/molecules/Keywords/KeywordBox'

type Props = {
  keyword: Word
}

export const CardParaphrase: React.FC<Props> = ({ keyword }) => {
  const { data, error, loading } = useParaphraseQuery({
    variables: {
      negativeWordId: keyword.id,
    },
  })
  const [showFeature, setShowFeature] = useState<boolean>(false)
  const positiveWords = data?.negativeWord?.positiveWords.nodes

  const handleExpandMoreButtonClick = () => {
    setShowFeature(true)
  }
  const handleExpandLessButtonClick = () => {
    setShowFeature(false)
  }

  // TODO: エラーとローディング中の表現追加
  if (error) return <>エラーが発生しています</>
  if (loading) return <>ローディング中...</>

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
          {positiveWords?.map((positiveWord) => {
            return (
              <span className="positive-word" key={positiveWord?.id}>
                {positiveWord?.rentai}
              </span>
            )
          })}
          ことの
          <br />
          証拠なのかもしれません。
        </div>
      </div>

      {!showFeature && (
        <div
          className="rephrasing__expand-btn"
          onClick={() => handleExpandMoreButtonClick()}
        >
          <p>
            {keyword.content}人の
            <br />
            良いところをもっと見る
          </p>
          <ExpandMore />
        </div>
      )}

      {showFeature && (
        <>
          <div className="rephrasing__content">
            <h3 className="rephrasing__content--title">
              <span className="negative-word">{keyword.content}</span>
              人は...
            </h3>
            {positiveWords?.map((positiveWord) => {
              return (
                <div
                  className="rephrasing__content--text"
                  key={positiveWord?.id}
                >
                  {positiveWord?.feature}
                </div>
              )
            })}
          </div>

          <div
            className="rephrasing__expand-btn"
            onClick={() => handleExpandLessButtonClick()}
          >
            <ExpandLess />
            <p>閉じる</p>
          </div>
        </>
      )}
    </div>
  )
}
