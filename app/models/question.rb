class Question < ApplicationRecord
  validates :name, :answer, presence: true
  validates :name, :answer, uniqueness: true
end
