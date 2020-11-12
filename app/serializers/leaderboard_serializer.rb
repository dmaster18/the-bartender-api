class UsersSerializer
  include FastJsonapi::ObjectSerializer
  has_many :users


end
