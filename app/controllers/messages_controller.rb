class MessagesController < ApplicationController
  wrap_parameters format: []
  # GET /messages
  def index
    messages = Message.all
    render json: messages
  end

  #GET /messages/1
  def show
    render json: message
  end

  # POST /messages
  def create
    message = Message.create!(message_params)
    chatroom = message.chatroom
    message.broadcast_message
    # ChatroomsChannel.broadcast_to(chatroom, {
    #   messages: message,
    #   chatroom: chatroom,
    #   user: message.user,
    # })
    # broadcast chatroom
    render json: message, status: :ok
  end

  # PATCH/PUT /messages/1
  def update
    message = Message.find(params[:id])
    message.update(message_params)
    chatroom = message.chatroom
    broadcast chatroom
    render json: message
  end

  # DELETE /messages/1
  def destroy
    message = Message.find(params[:id])
    if message.destroy
      chatroom = message.chatroom
      # broadcast chatroom
    end
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_message
    #   message = Message.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def message_params
      params.permit(:user_id, :chatroom_id, :content)
    end

    def broadcast chatroom 
      ChatroomsChannel.broadcast_to(chatroom, {
        chatroom: chatroom,
        users: chatroom.users,
        messages: chatroom.messages,
      })
    end
end

