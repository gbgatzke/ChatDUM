class ChatroomsChannel < ApplicationCable::Channel
    rescue_from 'MyError', with: :deliver_error_message

    def subscribed
        stop_all_streams
        chatroom = Chatroom.find(params[:room])
        stream_for chatroom
    end

    def unsubscribed
        stop_all_streams
    end

    def received(data)
        ActionCable.server.broadcast(chatroom, { chatroom: chatroom, users: chatroom.users, messages: chatroom.messages })
    end

å
    private

    def deliver_error_message(e)
        broadcast_to(...)
    end
end