import React from 'react'
// import { Link } from 'react-router-dom'

// import { useCurrentUser } from '@/src/hooks/currentUser'

import { Layout } from '@/src/components/layouts/Layout'
import { Container } from '@/src/components/organisms/Container'
import { WordSearch } from '@/src/components/organisms/WordSearch'

export function Index() {
  // const { currentUser, loading } = useCurrentUser()

  return (
    <Layout>
      <Container>
        <WordSearch />
      </Container>
    </Layout>
  )
}
