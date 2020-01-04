class ListController < ApplicationController

	def new
		@list = List.new

	end

	def index
		@lists = List.all
	end

	def create
		@list = List.save(list_params)
		if @list.save
			flash[:notice] = "Your list was successfully created!"
			redirect_to @list_path(@list.id)
		else
			flash.now.alert = "Something went wrong!  Please try again!"
			render :new
		end
	end

	def show

	end

	def edit

	end

	def update

	end

	def destroy

	end

	private

	def list_params
		params.require(:list).permit(:name)
	end

end
