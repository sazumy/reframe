import { ExpandLess } from '@material-ui/icons'
import React from 'react'
// NOTE: Wordタイプ、ここにあって良いのだろうか...?
import { Word } from '@/src/components/molecules/Keywords/KeywordBox'
import { useParaphraseQuery } from '@/graphql/generated'

type Props = {
  keyword: Word
}

export const CardParaphrase: React.FC<Props> = ({ keyword }) => {
  const { data, error, loading } = useParaphraseQuery({
    variables: {
      negativeWordId: keyword.id,
    },
  })
  const positiveWords = data?.negativeWord?.positiveWords.nodes
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

      <div className="rephrasing__content">
        <h3 className="rephrasing__content--title">
          <span className="negative-word">{keyword.content}</span>
          人は...
        </h3>
        {positiveWords?.map((positiveWord) => {
          return (
            <div className="rephrasing__content--text" key={positiveWord?.id}>
              {positiveWord?.feature}
            </div>
          )
        })}
      </div>

      <div className="rephrasing__footer">
        <div className="rephrasing__footer--button">
          <ExpandLess />
          <p>閉じる</p>
        </div>
      </div>
    </div>
  )
}
