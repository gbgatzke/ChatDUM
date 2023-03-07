class User < ApplicationRecord
    has_secure_password
    has_many :messages
    has_many :chatrooms, through: :messages
    has_one :bio

    validates :name, presence: true
    validates :username, presence: true
    validates :password, presence: true
    # validates :bio, uniqueness: true
end
