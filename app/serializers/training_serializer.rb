class TrainingSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :date, :time, :min, :max
end
