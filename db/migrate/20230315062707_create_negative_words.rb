class CreateNegativeWords < ActiveRecord::Migration[7.0]
  def change
    create_table :negative_words, id: :uuid do |t|

      t.timestamps
    end
  end
end
