class Training < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :date, presence: true
  validates :time, presence: true
  validates :user_id, presence: true
  validates :min, presence: true
  validates :max, presence: true

  belongs_to :user
end
