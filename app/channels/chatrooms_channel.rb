class ChatroomsChannel < ApplicationCable::Channel
    

    def subscribed
        stop_all_streams
        @chatroom = Chatroom.find(params[:room])
        stream_from @chatroom
        puts "I am a subscriber"
    end

    # def received(data)
    #     ChatroomsChannel.broadcast_to(@chatroom, { messages: @chatroom.messages })
    # end

    def unsubscribed
        stop_all_streams
    end

    


end