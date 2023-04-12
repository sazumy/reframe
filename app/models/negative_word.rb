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
class NegativeWord < ApplicationRecord
  has_many :word_connections
  has_many :positive_words, through: :word_connections

  def self.ransackable_attributes(auth_object = nil)
    %w[kana content]
  end
end
