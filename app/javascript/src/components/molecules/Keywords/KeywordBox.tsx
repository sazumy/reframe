import React from 'react'

type Word = {
  id: string
  content: string
  kana: string
} | null

export const KeywordBox: React.VFC<{ words: Word[] }> = ({ words }) => {
  return (
    <div className="keywords">
      <ul className="keywords__list">
        {words.map((word: Word) => {
          if (!word) return
          return <li className="keywords__list--item">{word.content}</li>
        })}
      </ul>
    </div>
  )
}
