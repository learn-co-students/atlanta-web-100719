require 'pry'

class BankAccount


  attr_reader :num
  attr_accessor :name, :balance

  @@the_accounts = []

  def initialize(num, name, balance)
    @num = num
    @name = name
    @balance = balance
    @@the_accounts << self
  end

  def BankAccount.all_accounts
    @@the_accounts
  end

  # def BankAccount.all_the_accounts
  #   #code
  # end
  #

  def deposit(mo_money)

    @balance += mo_money
  end

  def withdrawal(mo_problems)
    if (mo_problems <= @balance)
      @balance -= mo_problems
    else
      puts "ya broke and im sorry thats gonna cost you"
      @balance -= 34
    end

  end




end # end class



bank1 = BankAccount.new(123, "Clark", 200)
bank2 = BankAccount.new(213, "jav", 201)
bank1.deposit(10000000)
bank2.deposit(10000000)

BankAccount.all_accounts

binding.pry
