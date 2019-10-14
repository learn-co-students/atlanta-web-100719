require_relative './tree'
require_relative './squirrel'
require_relative './nest'
require 'pry'

# Squirrel should see ALL of their nests

  # scope
    # instance

  # name
    # my_nests
  # logic
    # s1.my_nests
    # selecting from all the nests if that PARTICULAR nest's squirrel is me

s1 = Squirrel.new("alvin", 3)
s2 = Squirrel.new("theo", 1)
s3 = Squirrel.new("simon", 2)

t1 = Tree.new(100, "oak")
t2 = Tree.new(10, "apple")
t3 = Tree.new(1, "bonzai")

n1 = Nest.new(s1, t1)
n2 = Nest.new(s1, t2)
n3 = Nest.new(s1, t3)
n4 = Nest.new(s2, t1)
n5 = Nest.new(s2, t3)

binding.pry
# Squirrel see all the Trees

 # scope
  #inst
 # name
  # my_trees
 # logic
  # look through all my nests
  # return the trees in that nest
