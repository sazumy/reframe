import { PositiveWord, useParaphraseQuery } from '@/graphql/generated'
import { Word } from '@/src/components/molecules/Keywords/KeywordBox'

type Props = {
  negativeWords: Word[]
}

export const generateYourKeywords = ({
  negativeWords,
}: Props): (
  | Pick<PositiveWord, 'id' | 'rentai' | 'feature'>
  | undefined
  | null
)[] => {
  const positiveWordNodesArray = negativeWords.map((negativeWord) => {
    const { data } = useParaphraseQuery({
      variables: {
        negativeWordId: negativeWord.id,
      },
    })

    return data?.negativeWord?.positiveWords?.nodes
  })

  const positiveWordNodes = positiveWordNodesArray.flat().filter(Boolean)

  return positiveWordNodes
}
