import React from 'react'
import { useLocation } from 'react-router-dom'

import { NegativeWord } from '@/graphql/generated'

export function Diagnose() {
  const location = useLocation()
  const selectedKeywords = location.state as NegativeWord[]
  console.log(location)
  console.log(selectedKeywords)
  return (
    <>
      <div>診断ページの内容がここに入ります</div>
      <div>選んだ単語：</div>
      <div>
        {selectedKeywords.map((keyword) => {
          return keyword.content
        })}
      </div>
    </>
  )
}
