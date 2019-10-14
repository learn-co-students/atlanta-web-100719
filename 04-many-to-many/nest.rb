class Nest

  attr_accessor :squirrel, :tree

  @@all = []
  def initialize(squirrel, tree)
    @squirrel = squirrel
    @tree = tree
    @@all << self
  end

  def self.all
    @@all
  end


end # end Nest

# see a list of all the nests
