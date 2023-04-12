class CreateWordConnections < ActiveRecord::Migration[7.0]
  def change
    create_table :word_connections, id: :uuid do |t|
      t.references :negative_word, null: false, foreign_key: true, type: :uuid
      t.references :positive_word, null: false, foreign_key: true, type: :uuid
      t.integer :order

      t.timestamps
    end
  end
end
