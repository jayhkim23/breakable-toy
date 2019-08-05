class TrainingSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :date, :time, :city, :state, :min, :max, :user_id

end
