class UsersSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :score, :percentage


end
