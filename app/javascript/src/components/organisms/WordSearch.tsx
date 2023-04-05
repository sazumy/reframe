import React, { useState } from 'react'

import { NegativeWordSearchParams } from '@/graphql/generated'
import { Input } from '@/src/components/atoms'
import { KeywordBox } from '@/src/components/molecules/Keywords/KeywordBox'
export const WordSearch: React.FC = ({ children }) => {
  const [q, setQ] = useState<NegativeWordSearchParams | undefined>(undefined)
  const [selectedKeywords, setSelectedKeywords] = useState([
    'あああ',
    'いいい',
    'ううう',
  ])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const keyword = event.target.value

    if (!keyword) return

    setTimeout(() => {
      setQ({ kana: keyword, content: keyword })
    }, 700)
  }

  return (
    <div className="main-content">
      <section className="form__keyword-search">
        <h2>あなたはどんな性格？</h2>
        <Input
          placeholder="おとなしい、真面目、つまらない etc..."
          onChange={(e) => handleChange(e)}
          value={q?.content ?? ''}
        />
      </section>

      <section className="selected-keywords">
        <h2>選んだ単語</h2>
        <div className="keywords">
          <ul className="keywords__list">
            {selectedKeywords &&
              selectedKeywords.map((keyword) => {
                return (
                  <li className="keywords__list--item delete-btn" key={keyword}>
                    {keyword}
                  </li>
                )
              })}
          </ul>
        </div>
      </section>

      <section className="suggested-keywords mb-8">
        <h2>候補の単語</h2>
        <KeywordBox q={q} />
      </section>

      <section className="submit-button">
        <button className="btn btn-primary btn-lg">診断する</button>
      </section>
    </div>
  )
}
