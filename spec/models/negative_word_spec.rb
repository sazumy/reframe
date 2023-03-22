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
require 'rails_helper'

RSpec.describe NegativeWord, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
