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

ActiveRecord::Schema.define(version: 2020_10_28_025529) do

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

  create_table "recipe_garnishes", force: :cascade do |t|
    t.integer "recipe_id"
    t.integer "garnish_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "recipe_ingredients", force: :cascade do |t|
    t.integer "recipe_id"
    t.integer "ingredient_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "recipe_liqueurs", force: :cascade do |t|
    t.integer "recipe_id"
    t.integer "liqueur_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "recipe_liquors", force: :cascade do |t|
    t.integer "recipe_id"
    t.integer "liquor_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "recipe_mixers", force: :cascade do |t|
    t.integer "recipe_id"
    t.integer "mixer_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "recipes", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "timing"
    t.text "preparation"
    t.string "iba_category"
    t.string "flavor"
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
    t.text "liquors_array"
    t.text "liqueurs_array"
    t.text "mixers_array"
    t.text "garnishes_array"
    t.boolean "correct?"
    t.text "all_ingredients"
    t.text "correct_ingredients"
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

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.float "score"
    t.float "percentage"
    t.string "difficulty"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
