# frozen_string_literal: true

# == Schema Information
#
# Table name: negative_words
#
#  id         :uuid             not null, primary key
#  content    :string           not null
#  kana       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Types::Objects::NegativeWordType < Types::BaseObject
  field :id, ID, null: false
  field :content, String, null: false
  field :kana, String, null: false
  field :positive_words,
        Types::Objects::PositiveWordType.connection_type,
        null: false
  field :created_at, GraphQL::Types::ISO8601DateTime, null: false
  field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
end
