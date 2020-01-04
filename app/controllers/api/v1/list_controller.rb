class API::V1::ListController < ApplicationController

	def new
		@list = List.new
	end

	def index
		@lists = List.all
		if @lists.blank?
			render status: 400, json: {error: "Something went wrong!"}
		else
			render status: 200, json: @lists
		end
	end

	def create
		@list = List.save(list_params)
		if @list.save
			render status: 200, json: @list
		else
			render status: 400, json: {error: "Something went wrong!"}
		end
	end

	def show
		@list = List.find(params[:id])
		render json: @list
	end

	def edit
		@list = List.find(params[:id])
		render json: @list
	end

	def update
		@list = List.find(params[:id])
		@list.update_attributes(list_params)
		redirect_to list_path
	end

	def destroy
		@list = List.destroy(params[:id])
	end

	private

	def list_params
		params.require(:list).permit(:name)
	end

end
