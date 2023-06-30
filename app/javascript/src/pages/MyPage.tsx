import React from 'react'

import { LayoutFog } from '@/src/components/layouts/LayoutFog'
import { Header } from '@/src/components/organisms/Header/Header'
import { MainContent } from '@/src/components/organisms/MainContent'

export function MyPage() {
  console.log('loaded')
  return (
    <LayoutFog>
      <Header pattern="header blue" />
      <MainContent>マイページの内容がここに入ります</MainContent>
    </LayoutFog>
  )
}
