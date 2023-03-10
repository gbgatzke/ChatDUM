class ChatroomsController < ApplicationController

  # GET /chatrooms
  def index
    chatrooms = Chatroom.all
    render json: chatrooms
  end

  # GET /chatrooms/1
  def show
    chatroom = Chatroom.find(params[:id])
    render json: chatroom, status: :ok
  end

  # POST /chatrooms
  def create
    chatroom = Chatroom.new(chatroom_params)

    if chatroom.save
      render json: chatroom, status: :created, location: chatroom
    else
      render json: chatroom.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /chatrooms/1
  def update
    if chatroom.update(chatroom_params)
      render json: chatroom
    else
      render json: chatroom.errors, status: :unprocessable_entity
    end
  end

  # DELETE /chatrooms/1
  def destroy
    chatroom.destroy
  end

  def show_messages
    chatroom = Chatroom.find(params[:id])
    messages = chatroom.messages
    render json: messages, status: :ok
  end

  def new_chatroom
    chatroom = Chatroom.create(room_name: params[:room_name])
    user1 = Message.create(content: "LETS CHAT!", user_id: params[:send_id], chatroom_id: chatroom.id)
    user2 = Message.create(content: "fine.", user_id: params[:receive_id], chatroom_id: chatroom.id)
  
    render json: chatroom, status: :created
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_chatroom
      @chatroom = Chatroom.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def chatroom_params
      params.permit(:room_name)
    end
end
