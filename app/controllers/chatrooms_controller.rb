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
