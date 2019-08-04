# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

if Rails.env.development?

  user1 = User.create(
  first_name: "Lionel",
  last_name: "Messi",
  username: "Leo10",
  email: "messi@barcelona.com",
  password: "password"
)

  training1 = Training.create!(
  title: "Focusing on agility drills",
  description: "Interested in gathering to do a set of agility drills",
  date: "08/15/19",
  time: "6:00pm",
  city: "Medford",
  state: "MA",
  min: 2,
  max: 8,
  user: user1
)

  training2 = Training.create!(
  title: "Dribbling",
  description: "Interested in meeting up to do dribbling drills",
  date: "08/23/19",
  time: "8:00pm",
  city: "Boston",
  state: "MA",
  min: 4,
  max: 10,
  user: user1
)
end
