class ChatroomSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :room_name
  has_many :messages
  has_many :users

  # def users
  #   self.users.uniq
  # end
end
