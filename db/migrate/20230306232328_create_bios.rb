class CreateBios < ActiveRecord::Migration[7.0]
  def change
    create_table :bios do |t|
      t.string :content
      t.string :image
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
