class ChatroomChannel < ApplicationCable::Channel
    rescue_from 'MyError', with: :deliver_error_message

    def subscribed

    end

    def unsubscribed

    end

    def received

    end


    private

    def deliver_error_message(e)
        broadcast_to(...)
    end
end