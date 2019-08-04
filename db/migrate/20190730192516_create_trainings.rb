class CreateTrainings < ActiveRecord::Migration[5.2]
  def change
    create_table :trainings do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :date, null: false
      t.string :time, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :min, null: false
      t.integer :max, null: false

      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end
