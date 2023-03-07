# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'
10.times do
    name = Faker::Name.name
    User.create(username: "#{name}", name: "#{name}", password: "1234")
end
puts "seeded users"
5.times do
    user1 = User.all.sample
    user2 = User.all.sample
    c1 = Chatroom.create(room_name: Faker::Team.name)
    Message.create(content: Faker::Quote.yoda, user_id: user1.id, chatroom_id: c1.id)
    Message.create(content: Faker::Quote.yoda, user_id: user2.id, chatroom_id: c1.id)
    Message.create(content: Faker::Quote.yoda, user_id: user2.id, chatroom_id: c1.id)
    Message.create(content: Faker::Quote.yoda, user_id: user2.id, chatroom_id: c1.id)
    Message.create(content: Faker::Quote.yoda, user_id: user1.id, chatroom_id: c1.id)
    Message.create(content: Faker::Quote.yoda, user_id: user2.id, chatroom_id: c1.id)
end
puts "Seeded chatroom / messages"
b1 = Bio.create(content: Faker::Company.bs, image: "image", user_id: User.all[1].id)
b1 = Bio.create(content: Faker::Company.bs, image: "image", user_id: User.all[2].id)
b1 = Bio.create(content: Faker::Company.bs, image: "image", user_id: User.all[3].id)
b1 = Bio.create(content: Faker::Company.bs, image: "image", user_id: User.all[4].id)
b1 = Bio.create(content: Faker::Company.bs, image: "image", user_id: User.all[5].id)
b1 = Bio.create(content: Faker::Company.bs, image: "image", user_id: User.all[6].id)
b1 = Bio.create(content: Faker::Company.bs, image: "image", user_id: User.all[7].id)
b1 = Bio.create(content: Faker::Company.bs, image: "image", user_id: User.all[8].id)
b1 = Bio.create(content: Faker::Company.bs, image: "image", user_id: User.all[9].id)
b1 = Bio.create(content: Faker::Company.bs, image: "image", user_id: User.all[0].id)

puts "done!"


