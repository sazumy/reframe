import { ApolloProvider } from '@apollo/client'
import * as Sentry from '@sentry/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Routes } from './config/Routes'

import { apolloClient } from '@/graphql/apollo'

function FallbackComponent() {
  return <div>An error has occurred</div>
}

export const App: React.FC = () => {
  return (
    <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ApolloProvider>
    </Sentry.ErrorBoundary>
  )
}
