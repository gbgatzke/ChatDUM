class UsersController < ApplicationController
skip_before_action :authorize, only: :create

  def index
    @users = User.all
    render json: @users
  end

  def show
    user = User.find_by(id: session[:user_id])
    render json: user, serializer: UsersWithChatroomsSerializer
  end

  def update
    user = User.find(params[:id])
    user.update(user_params)
    render json: user, status: :ok
  end

  def profile
    user = User.find(params[:id])
    render json: user
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user
  end

  def destroy
    user = User.find_by(id: session[:user_id])
    user.destroy
    head :no_content
  end

  def show_user_chatrooms
    user = User.find_by(id: session[:user_id])
    render json: user.chatrooms
  end

  private

    def user_params
      params.permit(:username, :name, :password, :password_confirmation)
    end
end
