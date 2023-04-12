# == Schema Information
#
# Table name: positive_words
#
#  id         :uuid             not null, primary key
#  feature    :text
#  rentai     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class PositiveWord < ApplicationRecord
  has_many :word_connections
  has_many :negative_words, through: :word_connections
end
