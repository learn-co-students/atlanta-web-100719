class Player

  attr_reader :j_num, :name, :height, :team
  attr_accessor :pos, :injury
  # def team
  #   @team
  # end

  @@all = []

  def initialize(j_num, name, height, pos, team, injury=false)
    @j_num = j_num
    @name = name
    @height = height
    @pos = pos
    @team = team
    @injury = injury
    @@all << self
  end

  def self.all
    @@all
  end



end # end player class

# binding.pry
