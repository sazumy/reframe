import React from 'react'

import { ProductTitle } from '@/src/components/molecules/Headings/ProductTitle'
import { ThreeCats } from '@/src/components/molecules/Illustrations/ThreeCats'

export const Container: React.FC = ({ children }) => {
  return (
    <div className="container-sm flex flex-col justify-between h-full">
      <ProductTitle />

      {children}
      <ThreeCats />
    </div>
  )
}
