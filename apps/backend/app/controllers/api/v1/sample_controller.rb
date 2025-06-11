class Api::V1::SampleController < ApplicationController
  def index
    render json: { 
      message: "Hello World from Rails API Sample!",
      timestamp: Time.current.iso8601,
      status: "success"
    }
  end
end