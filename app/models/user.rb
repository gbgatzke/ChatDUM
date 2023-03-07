class User < ApplicationRecord
    has_secure_password
    has_many :chatrooms, through: :messages
    has_many :bios

    validates :name, presence: true
    validates :username, presence: true
    validates :password, presence: true
    validates :bio, uniqueness: true
end
