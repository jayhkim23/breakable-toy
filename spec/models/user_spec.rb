require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) { User.new(first_name: "Lionel", last_name: "Messi", username: "Leo10", email: "Messi@barcelona.com", password: "password") }

  describe "first_name" do
  it "should return the user's first name" do
    expect(user.first_name).to eq("Lionel")
    end
  end

  describe "last_name" do
  it "should return the user's last name" do
    expect(user.last_name).to eq("Messi")
    end
  end

  describe "username" do
  it "should return the user's username" do
    expect(user.username).to eq("Leo10")
    end
  end

  describe "email" do
  it "should return the user's email" do
    expect(user.email).to eq("Messi@barcelona.com")
    end
  end

  describe "password" do
  it "should return the user's password" do
    expect(user.password.length).to be >= 6
    end
  end
end
