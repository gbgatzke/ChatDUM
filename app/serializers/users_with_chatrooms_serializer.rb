class UsersWithChatroomsSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :unique_rooms
  has_one :bio

  def unique_rooms
    object.chatrooms.uniq
  end
end
