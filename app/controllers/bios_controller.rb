class BiosController < ApplicationController

  # GET /bios
  def index
    bios = Bio.all

    render json: bios
  end

  # GET /bios/1
  def show
    render json: bio
  end

  # POST /bios
  def create
    bio = Bio.new(bio_params)

    if bio.save
      render json: bio, status: :created, location: bio
    else
      render json: bio.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bios/1
  def update
    if bio.update(bio_params)
      render json: bio
    else
      render json: bio.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bios/1
  def destroy
    bio.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bio
      bio = Bio.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bio_params
      params.require(:bio).permit(:content, :user_id)
    end
end
