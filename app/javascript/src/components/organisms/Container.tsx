import React from 'react'

import { ProductTitle } from '@/src/components/molecules/Headings/ProductTitle'
import { ThreeCats } from '@/src/components/molecules/Illustrations/ThreeCats'

export const Container: React.FC = ({ children }) => {
  return (
    <div className="container-sm">
      <ProductTitle />

      {children}
      <ThreeCats />
    </div>
  )
}
