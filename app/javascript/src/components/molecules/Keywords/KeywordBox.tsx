import React, { useEffect } from 'react'

import {
  NegativeWordSearchParams,
  useNegativeWordSearchResultsLazyQuery,
} from '@/graphql/generated'

export type Word = {
  id: string
  content: string
  kana: string
}

export const KeywordBox: React.VFC<{
  q?: NegativeWordSearchParams
  selectedKeywords: Word[]
  setSelectedKeywords: React.Dispatch<React.SetStateAction<Word[]>>
}> = ({ q, selectedKeywords, setSelectedKeywords }) => {
  const [getResults, { data, error, loading }] =
    useNegativeWordSearchResultsLazyQuery({
      variables: { q },
      fetchPolicy: 'cache-and-network',
    })

  useEffect(() => {
    getResults({
      variables: { q },
    })
  }, [q])

  const handleClick = (word: Word) => {
    if (!selectedKeywords.includes(word)) {
      setSelectedKeywords([...selectedKeywords, word])
    }
  }

  if (error) return <></>
  if (loading) return <>ローディング中...</>

  const negativeWords = data?.negativeWordSearchResults?.nodes

  return (
    <div className="keywords">
      <ul className="keywords__list">
        {negativeWords &&
          negativeWords?.map((word: Word | null) => {
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
          })}
      </ul>
    </div>
  )
}
