class Message < ApplicationRecord
  belongs_to :user
  belongs_to :chatroom

  validates :content, presence: true


  def broadcast_message
    ChatroomsChannel.broadcast_to(self.chatroom, {
      messages: self,
      chatroom: self.chatroom,
      user: self.user,
    })
  end
end
