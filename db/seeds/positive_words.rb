require 'csv'

CSV.foreach(
  File.join(Rails.root, 'db', 'seeds', 'csv', 'positive_words.csv'),
  headers: true,
) { |row| PositiveWord.create!(rentai: row[0], feature: row[1], id: row[2]) }
