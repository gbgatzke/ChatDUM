class MessageBroadcastFastSerializer
  include JSONAPI::Serializer
  attributes :id, :content, :created_at
  has_one :user
  has_one :chatroom
end
