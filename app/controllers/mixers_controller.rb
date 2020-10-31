class MixersController < ApplicationController
  def index
    mixers = Mixer.all
    render json: MixerSerializer.new(mixers)
  end

  def show
    mixer = Mixer.find_by(id: params[:id])
    options = {
      include: [:recipes]
    }
    render json: MixerSerializer.new(mixer, options)
  end

end
