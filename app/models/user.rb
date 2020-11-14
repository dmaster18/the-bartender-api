class User < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true

  serialize :order_by_percentage, Array
  serialize :order_by_score, Array
  serialize :order_by_name, Array

  after_save :order_by_percentage, :order_by_score, :order_by_name

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
