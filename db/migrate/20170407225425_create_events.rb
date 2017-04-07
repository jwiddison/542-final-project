class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :date
      t.string :date
      t.datetime :start
      t.datetime :end
      t.string :title
      t.string :description
      t.string :string

      t.timestamps
    end
  end
end
