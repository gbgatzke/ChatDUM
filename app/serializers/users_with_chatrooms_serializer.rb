class UsersWithChatroomsSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :unique_rooms

  def unique_rooms
    object.chatrooms.uniq
  end
end
