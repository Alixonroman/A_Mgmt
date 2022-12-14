class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }
    validates :username, presence: true
    validates :password, presence: true
    has_many :reviews
    has_many :apartments
    
end
