# frozen_string_literal: true

module Types
  class Objects::WordConnectionType < Types::BaseObject
    field :id, ID, null: false
    field :negative_word_id, Types::UuidType, null: false
    field :positive_word_id, Types::UuidType, null: false
    field :order, Integer
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
