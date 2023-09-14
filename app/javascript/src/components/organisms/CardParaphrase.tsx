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
      <div className="descriptions">
        <div className="summary">
          <h3 className="title">
            あなたは
            <span className="negative-word">{keyword.content}</span>
            のですね。
          </h3>
          <div className="text">
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

        {/* 「もっと見る」をクリックすると見える部分 */}
        <div className={`hidden-content ${showFeature && 'active'}`}>
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
      </div>

      <div className="expand-btn" onClick={() => handleExpandMoreButtonClick()}>
        {/* 最初から見える部分 */}
        <p className={`expand-btn__text ${!showFeature && 'active'}`}>
          {keyword.content}人の
          <br />
          良いところをもっと見る
        </p>
        {/* 「もっと見る」をクリックすると見える部分 */}
        <p className={`expand-btn__text ${showFeature && 'active'}`}>閉じる</p>
        <ExpandMore className={`expand-btn__icon ${showFeature && 'rotate'}`} />
      </div>
    </div>
  )
}
