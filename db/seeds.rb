# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

table_names = %i[negative_words positive_words word_connections users]

table_names.each do |table_name|
  load(File.join(Rails.root, 'db', 'seeds', "#{table_name}.rb"))
  puts "#{table_name} seeded..."
end
