# Here's some practice with using 
# inheritance in Ruby. We're going to add 
# some meal methods that inherit from the Chef class 
# but are special to each chef. Use this as an 
# example of how to use inheritance in your projects!

class Chef 
    def make_a_salad
        puts "I'm making a salad!"
    end

    def make_some_eggs
        puts "Eggs, on the way!"
    end

    def make_mashed_potatoes
        puts "Mashed potatoes, coming right up!"
    end

    def make_a_sandwich
        puts "Sandwich- want hots with that?"
    end

    def make_a_pie
        puts "Apple pie is my specialty!"
    end
end


# For the specialized chefs, let's create dishes that 
# they can provide in addition to the general meals 
# that all chefs can cook. We'll override some 
# original methods from the Chef class for use 
# in our special chef classes. 


class SouthernChef < Chef
    def make_a_pie
        puts "Making my specialty, Sweet Potato Pie!"
    end
end

class VeganChef < Chef
    def make_some_eggs
        puts "Eggs without eggs, WHATTTTT!"
    end
end

# Can we link all three classes here? Look deeper!

class SouthernVeganChef < SouthernChef


    def make_a_vegan_pie
        puts "Sweet Potato Pie, NO EGGS THO!"
    end

end


# Ok, let's initialize and call some of the methods 
# we created to see them in action! 

chef = Chef.new()
chef.make_a_pie
chef.make_some_eggs


southern_chef = SouthernChef.new()
southern_chef.make_a_pie


vegan_chef = VeganChef.new()
vegan_chef.make_some_eggs

southernvegan_chef = SouthernVeganChef.new()
southernvegan_chef.make_a_pie
southernvegan_chef.make_a_vegan_pie


