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
Dir.glob("#{Rails.root}/db/fixtures/csv/negative_words.csv") do |f|
  CSV
    .read(f, headers: true)
    .each do |row|
      NegativeWord.seed do |s|
        s.id = row[2]
        s.content = row[0]
        s.kana = row[1]
      end
    end
end
