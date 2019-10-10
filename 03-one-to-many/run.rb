require_relative "./tools/player"
require_relative "./team"
require 'pry'


# Teams

theknicks = Team.new("orange and blue", "nyc", "pants", "The Knickerbockers")
celtics = Team.new("green &&  white", "boston", "leprachaun", "Da celtics")
bulls = Team.new("red and black", "chicago", "bulls", "The Bulls")

# Players

#
# Player.team
# ewing.team

ewing = Player.new(33, "Ewing", 100, 5, theknicks)
Player.new(20, "Houston", 90, 2, theknicks)
Player.new(10, "oakley", 92, 4, theknicks)
Player.new(3, "starbury", 75, 1, theknicks)


Player.new(3, "l bird", 751, 3, celtics)
Player.new(3, "walton", 73, 5, celtics)
Player.new(3, "k garnet", 84, 5, celtics)



# All teams
  # Scope
    # klass
  #   def self.all_the_teams
  #     #code
  #   end
  # # name
  # Team.all
  #
  # logic
    #whenever a team is made save (store) in something

# all players

  #scope is Klass
  # self.all
  #     #whenever a player is made save (store) in something

# player knows what team they play for
  # scope instance





 # team check which players is healthy
  # instance
  # name
  # celtics.healthy_players
  # logic?
  # go through the celtic players and check if healthy is true



 # team check how many player postion 1 or 2 they have
 # scope
 # instance
 # bulls.guards
 #
 # def player_guard
 #   #code
 # end

 # logic
  # go through MY PLAYERS
  # check if their pos are 1 OR 2



# tallest player alive
  # klass Player
  # Player.tallest_player
  # go through all the players *FIND*
    # player.height is the biggest

# team find a player by name
  # instance
  # celtics.find_player_by_name(player_name)
  # *find*


binding.pry


celtics.healthy_players
knicks.healthy_players
bulls.healthy_players
