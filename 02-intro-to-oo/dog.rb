require 'pry'
class Dogg

  attr_accessor :name

  # attr_reader :name
  # attr_writer :name

  # def name=(new_name)
  #   @name = new_name
  # end
  # def name
  #   @name
  # end

  def initialize(name, age, breed)
    @name = name
    @age = age
  end


  def age
    @age
  end

end # end Dogg class

dog1 = Dogg.new('billy', 20)
dog2 = Dogg.new('scruff mcgruff', 20)
dog3 = Dogg.new('clifford', 20)
# PAUSE THE EXECUTION OF MY CODE HERE
binding.pry
