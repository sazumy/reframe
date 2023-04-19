import React from 'react'
import { useLocation } from 'react-router-dom'

import { NegativeWord } from '@/graphql/generated'
import { Input } from '@/src/components/atoms'

export function Diagnose() {
  const location = useLocation()
  const selectedKeywords = location.state as NegativeWord[]
  console.log(location)
  console.log(selectedKeywords)
  return (
    <>
      <h1>診断結果</h1>
      <div className="diagnose__title">
        <h2>
          タイトル：
          <Input value="2022-04-20_逆性格診断" />
        </h2>
      </div>
      <div>
        {selectedKeywords.map((keyword) => {
          return keyword.content
        })}
      </div>
    </>
  )
}
