class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :score, :percentage, :order_by_name, :order_by_score, :order_by_percentage
  
end
