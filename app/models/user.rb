class User < ApplicationRecord
  validates :name, presence: true

  def self.order_by_percentage
    User.order(percentage: :desc)
  end

  def self.order_by_score
    User.order(score: :desc)
  end

  def self.order_by_name
    User.order(:name)
  end

end
