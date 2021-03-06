class SessionsController < ApplicationController
  def new
    redirect_to homepage_path
  end
  
  def create
    user = User.authenticate(params[:session][:email], params[:session][:password])
    
    if user.nil?
      flash.now[:error] = "Invalid email/password combination."
      #render 'new'
      #redirect_to homepage_path
      render 'pages/homepage'
    else
      sign_in user
      redirect_to user
    end
  end
  
  def destroy
    sign_out
    redirect_to root_path
  end

end
