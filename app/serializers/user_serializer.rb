class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :password_digest
  has_many :bios
end
