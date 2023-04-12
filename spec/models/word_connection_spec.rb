# == Schema Information
#
# Table name: word_connections
#
#  id               :uuid             not null, primary key
#  order            :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  negative_word_id :uuid             not null
#  positive_word_id :uuid             not null
#
# Indexes
#
#  index_word_connections_on_negative_word_id  (negative_word_id)
#  index_word_connections_on_positive_word_id  (positive_word_id)
#
# Foreign Keys
#
#  fk_rails_...  (negative_word_id => negative_words.id)
#  fk_rails_...  (positive_word_id => positive_words.id)
#
require 'rails_helper'

RSpec.describe WordConnection, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
