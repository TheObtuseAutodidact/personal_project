class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :long
      t.string :lat
      t.integer :calls

      t.timestamps null: false
    end
  end
end
