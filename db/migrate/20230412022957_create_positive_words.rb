class CreatePositiveWords < ActiveRecord::Migration[7.0]
  def change
    create_table :positive_words, id: :uuid do |t|
      t.string :rentai
      t.text :feature

      t.timestamps
    end
  end
end
