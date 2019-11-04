class User < ApplicationRecord
  has_many :rants, dependent: :destroy

  validates :username, { presence: true, uniqueness: true }
  validates :bio, :email, :location, presence: true

end
