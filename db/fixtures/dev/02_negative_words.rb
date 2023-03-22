require 'csv'

Dir.glob("#{Rails.root}/db/fixtures/dev/csv/negative_words.csv") do |f|
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
