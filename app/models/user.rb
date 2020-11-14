class User < ApplicationRecord
  before_save :order_by_percentage, :order_by_score, :order_by_name

  def order_by_percentage
    User.order(percentage: :desc)
  end

  def order_by_score
    User.order(score: :desc)
  end

  def order_by_name
    User.order(:name)
  end

end
