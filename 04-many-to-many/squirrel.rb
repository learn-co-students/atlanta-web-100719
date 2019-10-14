class Squirrel

  attr_reader :name
  attr_accessor :age

  def initialize(name, age)
    @name = name
    @age = age
  end


  def my_nests
    # s1.my_nests✅
    Nest.all.select do |nest|
      # selecting from all the nests if that PARTICULAR nest's squirrel is me
      nest.squirrel == self
    end
  end

  def my_trees
    # look through all my nests
    my_nests.map do |nest|
      # return the trees in that nest
      nest.tree.type
    end
    # binding.pry
  end


  def make_new_nest(tree)
    Nest.new(self, tree)
  end

end # end Squirrel


# s1.make_new_nest(t2)
