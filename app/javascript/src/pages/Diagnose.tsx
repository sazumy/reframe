import React from 'react'

import { LayoutFog } from '@/src/components/layouts/LayoutFog'
import { Header } from '@/src/components/organisms/Header/Header'
import { MainContent } from '@/src/components/organisms/MainContent'
import { Result } from '@/src/components/organisms/Result'

export function Diagnose() {
  return (
    <LayoutFog>
      <Header />
      <MainContent>
        <Result />
      </MainContent>
    </LayoutFog>
  )
}
