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
FactoryBot.define do
  factory :positive_word do
    rentai { "MyString" }
    feature { "MyString" }
  end
end
