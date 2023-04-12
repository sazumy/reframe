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
require 'rails_helper'

RSpec.describe PositiveWord, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
