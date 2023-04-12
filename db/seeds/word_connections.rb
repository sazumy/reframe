require 'csv'

CSV.foreach(
  File.join(Rails.root, 'db', 'seeds', 'csv', 'word_connections.csv'),
  headers: true,
) do |row|
  WordConnection.create!(
    negative_word_id: row[1],
    positive_word_id: row[3],
    order: row[4],
    id: row[5],
  )
end
