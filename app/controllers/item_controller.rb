class ItemController < ApplicationController

	def create
		@item = Item.save(item_params)
		if @item.save
			render status: 200, json: @item
		else
			render status: 400, json: {error: "Something went wrong! Please try again!"}
		end
	end

	def new
		@item = Item.new
	end

	def show
		@item = Item.find(params[:id])
		render json: @item
	end

	def edit
		@item = Item.find(params[:id])
		render json: @item
	end

	def update
		@item = Item.find(params[:id])
		@item.update_attributes(item_params)
		redirect_to list_path
	end

	def destroy
		@item = Item.destroy(params[:id])
	end

	private

	def item_params
		params.require(:item).permit(:name, :quantity, :list_id, :active)
	end

end
