class ChatroomSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :id, :room_name, :users
  has_many :messages
  # has_many :users

  def users
    self.users.uniq
  end
end
