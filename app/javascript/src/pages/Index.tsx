import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// import { useCurrentUser } from '@/src/hooks/currentUser'
import {
  NegativeWordSearchParams,
  useNegativeWordSearchResultsLazyQuery,
} from '@/graphql/generated'
import { Input } from '@/src/components/atoms'
import { ThreeCats } from '@/src/components/molecules/Illustrations/ThreeCats'
import { ProductTitle } from '@/src/components/molecules/Headings/ProductTitle'
import { KeywordBox } from '@/src/components/molecules/Keywords/KeywordBox'
import { Header } from '@/src/components/organisms/Header/Header'

export function Index() {
  // const { currentUser, loading } = useCurrentUser()

  const [q, setQ] = useState<NegativeWordSearchParams | undefined>(undefined)

  const [getResults, { data, error, loading }] =
    useNegativeWordSearchResultsLazyQuery({
      variables: { q },
      fetchPolicy: 'cache-and-network',
    })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const keyword = event.target.value

    if (!keyword) return

    setTimeout(() => {
      setQ({ kana: keyword, content: keyword })
    }, 1000)
  }

  useEffect(() => {
    getResults({
      variables: { q },
    })
  }, [q])

  if (error) return <></>
  if (loading) return <>ローディング中...</>
  const negativeWords = data?.negativeWordSearchResults?.nodes

  return (
    <>
      <div className="triangle_wrap">
        <div className="triangle_right" />
        <div className="triangle_left" />
      </div>

      <Header />

      <div className="container-sm">
        <ProductTitle />

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
              <li className="keywords__list--item delete-btn">タグA</li>
              <li className="keywords__list--item delete-btn">タグA</li>
              <li className="keywords__list--item delete-btn">タグA</li>
            </ul>
          </div>
        </section>

        <section className="suggested-keywords mb-8">
          <h2>候補の単語</h2>
          {negativeWords && <KeywordBox words={negativeWords} />}
        </section>

        <section className="submit-button">
          <button className="btn btn-primary btn-lg">診断する</button>
        </section>

        <ThreeCats />
      </div>
    </>
  )
}
