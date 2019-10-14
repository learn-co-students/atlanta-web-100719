class Tree

  attr_reader :type
  attr_accessor :height

  def initialize(height, type)
    @height = height
    @type = type
  end


  def nests
    Nest.all.select do |nest|
      nest.tree == self
    end
  end

  def squirrels
    nests.map do |nest|
      # binding.pry
      nest.squirrel
    end
  end

  def squirrels_over_30
    squirrels.select do |squirrel|
      #look through squirrels if their age is over 30
      squirrel.age > 30
    end
  end

end # end Tree




# t2.my_nests
