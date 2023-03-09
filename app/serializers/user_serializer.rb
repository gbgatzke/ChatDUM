class UserSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :username, :name
  has_one :bio
  # attribute :chatrooms do |user|
  #   user.chatrooms.uniq
  # end
end
