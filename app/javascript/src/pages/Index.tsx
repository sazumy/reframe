import React from 'react'
// import { Link } from 'react-router-dom'

// import { useCurrentUser } from '@/src/hooks/currentUser'

import { LayoutTriangle } from '@/src/components/layouts/LayoutTriangle'
import { Container } from '@/src/components/organisms/Container'
import { WordSearch } from '@/src/components/organisms/WordSearch'

export function Index() {
  // const { currentUser, loading } = useCurrentUser()

  return (
    <LayoutTriangle>
      <Container>
        <WordSearch />
      </Container>
    </LayoutTriangle>
  )
}
