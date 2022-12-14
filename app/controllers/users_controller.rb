class UsersController < ApplicationController
    # skip_before_action :authorized_user, only: [:create]
  
    # GET /users
    def index
      users = User.all
  
      render json: users
    end
  
   
  
    # LOGIN
    def login
      user = User.find_by(username: params[:username]).try(:authenticate, params[:password])
  
      if user 
        token = generate_token(user.id)
        
        render json: {user: user, token: token}
      else
        render json: { message: 'wrong'}
      end
       render json: user
    end
  
    # get profile
    def me
      token = request.headers['token']
      user_id =   decode_token(token)
      user = User.find(user_id)
      render json: user
    end
  
    # POST /users
    def create
      user = User.create(username: params[:username], password: params[:password])
      token = generate_token(user.id)
      render json: user
    end
  
    # PATCH/PUT /users/1
    def update
      if @user.update(user_params)
        render json: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /users/1
    def destroy
      @user.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_user
        @user = User.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def user_params
        params.require(:user).permit(:username, :password_digest)
      end
  end
  