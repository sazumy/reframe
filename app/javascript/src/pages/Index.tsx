import React from 'react'
// import { Link } from 'react-router-dom'

// import { useCurrentUser } from '@/src/hooks/currentUser'

import { LayoutTriangle } from '@/src/components/layouts/LayoutTriangle'
import { ProductTitle } from '@/src/components/molecules/Headings/ProductTitle'
import { ThreeCats } from '@/src/components/molecules/Illustrations/ThreeCats'
import { Header } from '@/src/components/organisms/Header/Header'
import { MainContent } from '@/src/components/organisms/MainContent'
import { WordSearch } from '@/src/components/organisms/WordSearch'

export function Index() {
  // const { currentUser, loading } = useCurrentUser()

  return (
    <LayoutTriangle>
      <Header />
      <MainContent>
        <ProductTitle />
        <WordSearch />
        <ThreeCats />
      </MainContent>
    </LayoutTriangle>
  )
}
