class User < ApplicationRecord
    has_secure_password
    has_many :messages, dependent: :destroy
    has_many :chatrooms, through: :messages
    has_one :bio, dependent: :destroy

    validates :name, presence: true
    validates :username, presence: true
    validates :password, presence: true
    # validates :bio, uniqueness: true
end
