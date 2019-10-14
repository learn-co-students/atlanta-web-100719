# You don't need to require any of the files in lib or pry.
# We've done it for you here.
require_relative '../config/environment.rb'

# test code goes here

# seed data

yaboi = Lifter.new("Me", 1000)
dj = Lifter.new("dee jay", 750)
kuran= Lifter.new("KK", 1001)


gym1 = Gym.new("golds")
gym2 = Gym.new("24 hours in atl")
gym3 = Gym.new("crossfit")
# gym4 = Gym.new("24 hours in nyc")

membership1 = Membership.new(20, gym1, yaboi)

membership2 = Membership.new(24, gym2,dj)
membership3 = Membership.new(240, gym3,yaboi)

binding.pry

puts "Gains!"
