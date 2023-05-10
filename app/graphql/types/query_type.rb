module Types
  class QueryType < Types::BaseObject
    field :current_user, Types::Objects::UserType, null: true

    def current_user
      context[:current_user]
    end

    field :negative_word, Types::Objects::NegativeWordType, null: true do
      argument :id, ID, required: true
    end

    def negative_word(id:)
      Loaders::RecordLoader.for(NegativeWord).load(id)
    end

    field :negative_words,
          Types::Objects::NegativeWordType.connection_type,
          null: false

    def negative_words(page: nil, items: nil)
      PositiveWord.order(kana: :asc)
    end

    field :negative_word_search_results,
          resolver: Resolvers::NegativeWordSearchResultsResolver do
      description 'ネガティブな単語一覧、およびその検索結果'
    end

    field :user, Types::Objects::UserType, null: true do
      argument :id, ID, required: true
    end

    def user(id:)
      Loaders::RecordLoader.for(User).load(id)
    end

    field :users, Types::Objects::UserType.connection_type, null: false

    def users(page: nil, items: nil)
      User.all
    end
  end
end
