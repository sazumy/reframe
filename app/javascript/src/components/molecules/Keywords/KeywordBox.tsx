import React, { useEffect } from 'react'

import {
  NegativeWordSearchParams,
  useNegativeWordSearchResultsLazyQuery,
} from '@/graphql/generated'

type Word = {
  id: string
  content: string
  kana: string
} | null

export const KeywordBox: React.VFC<{ q?: NegativeWordSearchParams }> = ({
  q,
}) => {
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

  if (error) return <></>
  if (loading) return <>ローディング中...</>

  const negativeWords = data?.negativeWordSearchResults?.nodes

  return (
    <div className="keywords">
      <ul className="keywords__list">
        {negativeWords &&
          negativeWords.map((word: Word) => {
            if (!word) return
            return (
              <li className="keywords__list--item" key={word.id}>
                {word.content}
              </li>
            )
          })}
      </ul>
    </div>
  )
}
