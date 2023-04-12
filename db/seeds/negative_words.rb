require 'csv'

CSV.foreach(
  File.join(Rails.root, 'db', 'seeds', 'csv', 'negative_words.csv'),
  headers: true,
) { |row| NegativeWord.create!(content: row[0], kana: row[1], id: row[2]) }
