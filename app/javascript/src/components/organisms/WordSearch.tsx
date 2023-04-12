import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { NegativeWordSearchParams } from '@/graphql/generated'
import { Input } from '@/src/components/atoms'
import {
  KeywordBox,
  Word,
} from '@/src/components/molecules/Keywords/KeywordBox'

export const WordSearch: React.FC = ({ children }) => {
  const [q, setQ] = useState<NegativeWordSearchParams | undefined>(undefined)
  const [selectedKeywords, setSelectedKeywords] = useState<Word[]>([])
  const history = useHistory()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const keyword = event.target.value

    if (!keyword) return

    setTimeout(() => {
      setQ({ kana: keyword, content: keyword })
    }, 700)
  }

  const handleDeleteBtnClick = (clickedWord: Word) => {
    if (selectedKeywords.includes(clickedWord)) {
      const newKeywords = selectedKeywords.filter((keyword) => {
        return keyword !== clickedWord
      })
      setSelectedKeywords([...newKeywords])
    }
  }

  const handleSubmit = () => {
    history.push('/diagnose')
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
              selectedKeywords.map((word) => {
                return (
                  <li className="keywords__list--item" key={word.id}>
                    {word.content}
                    <span
                      className="delete-btn"
                      onClick={() => handleDeleteBtnClick(word)}
                    />
                  </li>
                )
              })}
          </ul>
        </div>
      </section>

      <section className="suggested-keywords mb-8">
        <h2>候補の単語</h2>
        <KeywordBox
          q={q}
          selectedKeywords={selectedKeywords}
          setSelectedKeywords={setSelectedKeywords}
        />
      </section>

      <section className="submit-button">
        <button
          className="btn btn-primary btn-lg"
          onClick={() => handleSubmit()}
        >
          診断する
        </button>
      </section>
    </div>
  )
}
