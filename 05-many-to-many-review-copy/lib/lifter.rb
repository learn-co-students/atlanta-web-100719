class Lifter
  attr_reader :name, :lift_total
  @@all = []

  def initialize(name, lift_total)
    @name = name
    @lift_total = lift_total
    @@all << self
  end

  def self.all
    @@all
  end

  #Get a list of all the memberships that a specific lifter has
  def memberships
    Membership.all.select do |membership|
      membership.lifter == self
    end
  end

  #Get a list of all the gyms that a specific lifter has memberships to
  def gyms
    memberships.map do |membership|
      membership.gym
    end
  end

  def self.average_lift_total
    #Get the average lift total of all lifters

    # get a list of all the totals
    array_of_lifts= Lifter.all.map do |lifter|
      lifter.lift_total
    end
    # add them all up
    the_lift_total = array_of_lifts.inject do |sum, n|
      sum + n
    end
    # binding.pry
    # divide by how many (#length)
    the_lift_total/array_of_lifts.length


  end



end
