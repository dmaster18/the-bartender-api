# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_27_012311) do

  create_table "bars", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "garnishes", force: :cascade do |t|
    t.string "name"
    t.string "garnish_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ingedients", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "liqueurs", force: :cascade do |t|
    t.string "name"
    t.string "liqueur_type"
    t.string "description"
    t.string "origin"
    t.string "flavor"
    t.string "abv"
    t.string "color"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "liquor_stores", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "liquors", force: :cascade do |t|
    t.string "name"
    t.string "liquor_type"
    t.string "description"
    t.string "origin"
    t.string "flavor"
    t.string "abv"
    t.string "color"
    t.string "ingredients"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "mixers", force: :cascade do |t|
    t.string "name"
    t.string "mixer_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "questions", force: :cascade do |t|
    t.integer "quiz_id"
    t.string "name"
    t.string "content"
    t.string "answer"
    t.boolean "correct?"
    t.string "difficulty"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "quizzes", force: :cascade do |t|
    t.integer "score"
    t.string "category"
    t.string "length"
    t.string "difficulty"
    t.boolean "shared?"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "recipe_ingredients", force: :cascade do |t|
    t.integer "recipe_id"
    t.integer "ingredient_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "recipes", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "flavor"
    t.string "instructions"
    t.string "ingredient_string"
    t.float "servings"
    t.integer "time"
    t.string "type"
    t.string "style"
    t.string "origin"
    t.string "complexity"
    t.boolean "shared?"
    t.integer "general_ranking"
    t.integer "user_ranking"
    t.string "source"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id"
    t.integer "recipe_id"
    t.string "name"
    t.string "description"
    t.integer "rating"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "stores", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "type"
    t.string "street"
    t.string "city"
    t.string "state"
    t.string "zip_code"
    t.integer "review_score"
    t.string "comment"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_recipes", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "username_confirmation"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password"
    t.string "password_confirmation"
    t.integer "uid"
    t.string "zip_code"
    t.boolean "password_required"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
