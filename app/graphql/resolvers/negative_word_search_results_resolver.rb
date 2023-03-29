# frozen_string_literal: true

module Resolvers
  class NegativeWordSearchResultsResolver < GraphQL::Schema::Resolver
    type Types::Objects::NegativeWordType.connection_type, null: true

    argument :q, Types::Inputs::NegativeWordSearchParams, required: false

    def resolve(q: nil)
      negative_words = NegativeWord.order(kana: :asc)

      if q.present?
        negative_words.ransack(kana_cont: q[:kana], content_cont: q[:content])
          .result
      else
        negative_words
      end
    end
  end
end
