require 'factory_bot'

FactoryBot.define do
  factory :user do
    first_name { 'Lionel' }
    last_name { 'Messi' }
    username { 'Leo10' }
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

end
