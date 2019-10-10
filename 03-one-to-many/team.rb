class Team

  attr_reader :colors, :location, :mascot, :name

  @@all = []

  def initialize(colors, location, mascot, name)
    @colors = colors
    @location = location
    @mascot = mascot
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end



  def my_players
    Player.all.select do | player |
      # check of THOSE players that are MINE
      player.team == self
    end
  end

  def healthy_players
    # get all my players
    my_players.select do |player|
      # IF they are "healthy"
      player.injury == false
    end
  end

  def guards
    # go through MY PLAYERS
    my_players.select do |player|
      # check if their pos are 1 OR 2
      # binding.pry
      (player.pos == 1) || (player.pos == 2)
    end
  end


end # end Team class

# bulls.guards

# binding.pry

#
