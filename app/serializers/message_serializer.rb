class MessageSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :content, :created_at
  has_one :user
  has_one :chatroom
end
