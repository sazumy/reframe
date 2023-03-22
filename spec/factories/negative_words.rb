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
FactoryBot.define do
  factory :negative_word do
    
  end
end
