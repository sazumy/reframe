import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// import { useCurrentUser } from '@/src/hooks/currentUser'
import {
  NegativeWordSearchParams,
  useNegativeWordSearchResultsLazyQuery,
} from '@/graphql/generated'
import { Input } from '@/src/components/atoms'
import { KeywordBox } from '@/src/components/molecules/Keywords/KeywordBox'

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
    }, 700)
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

      <div className="flex justify-end">
        <a href="/users/sign_in" className="text-white">
          サインイン
        </a>
      </div>

      <div className="container-sm">
        <section className="product-title">
          <h1 className="product-title__text">
            <span className="top-balloon">逆!</span>性格診断
          </h1>
        </section>

        <section className="form__keyword-search">
          <h2>あなたはどんな性格？</h2>
          <Input
            placeholder="おとなしい、真面目、つまらない etc..."
            onChange={(e) => handleChange(e)}
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

        <section className="illustrations">
          <ul className="illustrations__list">
            <li className="illustrations__list--item">
              <img src="/illust-cat-01.svg" alt="猫のイラスト" />
            </li>
            <li className="illustrations__list--item">
              <img src="/illust-cat-02.svg" alt="猫のイラスト" />
            </li>
            <li className="illustrations__list--item">
              <img src="/illust-cat-03.svg" alt="猫のイラスト" />
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
