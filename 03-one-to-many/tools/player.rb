

class Player

  attr_reader :j_num, :name, :height
  attr_accessor :pos, :injury

  def initialize(j_num, name, height, pos, team, injury=false)
    @j_num = j_num
    @name = name
    @height = height
    @pos = pos
    @team = team
    @injury = injury
  end



end # end player class

# binding.pry
