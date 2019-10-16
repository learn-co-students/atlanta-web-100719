# Intro to ORM- ORMs and Ruby

## SWBATs (Students Will Be Able To- I'll often say 'SWAABAATS')

Today we're going to learn about bridging the gap between a database language (SQL) and Ruby, using ORM (Object Relational Mapping).



### Define Object Relational Mapper/Mapping (ORM)

#### Let's Review

Before we dive into understanding ORMs, let's revisit this morning's lecture: 

--> What is a relational database? 

A database that shares the relationships between data in a set of tables. 

--> What is CRUD in SQL? 

Create, Read, Update, and Destroy

Cool, we got this. From here, let's build on this. 



#### What's an ORM? 

ORM: Object Relational Mapper

Object- something that has state (data) and behavior- an instance of a class
Relational- something that defines (or the act of defining) some relation between two entities 
Mapper/Mapping- aligning rows in the database to objects in an OOP language

--> In object-oriented Ruby, we create classes and methods to manipulate Ruby OBJECTS. With an ORM, we manipulate objects without the need for SQL queries. 

WHAAAAAT? Let's dive deeper. 




### Distinguish between ORM and SQL

--> Knowledge Check

What is SQL? Structured Query Language that allows you to create, read, update, or delete data in a database. 



--> How do we handle relationships in SQL? 


#### Consider the relationships between books and authors.

Let's create a table of Books and Authors where each book has a single author. Books should have a title.


FIRST- what's this called? 

--> one to many relationship 
--> this table thingy below is a schema


books

id  |   title
1   |    'Sula'
2   |    'I Know Why the Caged Bird Sings'
3   |    'The Bluest Eye'
4   |    'Beloved'

authors

id |    name                 |   books_id     | books_id2      | books_id3
1  |     'Toni Morrison'     |   1            |   3            | 4
2  |     'Maya Angelou'      |   2            |   nil?         | nada?


Does this look cool? Why or why not?

--> NAH. It's not scalable if authors had more books. 

How would I write a SQL query when I wanted to see all of the books that Toni Morrison wrote? 

```sql
SELECT * FROM books WHERE author.id = 1; 
```

What would this return? 

--> A HOT MESS OF ERRORS. 


What did we learn about the Single Source of Truth Principle? 

--> Alluding to having a single source for Ruby (and other OOP) objects to refer to. (Google for textbook definition- will come up a lot in engineering!)



##### THE RIGHT WAY

books

id  |   title                                   |   author_id    
1   |    'Sula'                                 |       1        
2   |    'I Know Why the Caged Bird Sings'      |       2        
3   |    'The Bluest Eye'                       |       1        
4   |    'Beloved'                              |       1        

authors

id |    name                 
1  |     'Toni Morrison'     
2  |     'Maya Angelou'      


So, understanding that we need to really hone in on relationships and getting those RIGHT, remember that the BELONGS TO is what has the foriegn key. 

"Each of these books have a single author. These books BELONG TO the following authors." 


What type of relationship is this? 

--> one to many

Who has the foriegn key? 

--> authors (but I want you to look into that logic)


----------

##### Here's another type of relationship to explore: 

Books and Authors where each book can have one or MULTIPLE authors. Books should have a title and authors should have a name.

What type of relationship is this?

--> many to many



books

id  |   title                                   |   author_id    
1   |    'Sula'                                 |       1        
2   |    'I Know Why the Caged Bird Sings'      |       2        
3   |    'The Bluest Eye'                       |       1        
4   |    'Beloved'                              |       1        

authors

id |    name                 
1  |     'Toni Morrison'     
2  |     'Maya Angelou'


books_authors

id  |   books_id  |   authors_id
1       1               1
2       2               2   
3       3               1
4       4               1



##### SQL Knowledge Check

Write the SQL to find all books written by Toni Morrison given her name.

```sql

SELECT * FROM books
JOIN books_authors
ON books.id = books_authors.books_id
JOIN authors
ON authors.id = books_authors.authors_id
WHERE 
authors.name = "Toni Morrison"; 
```

----------

### Demonstrate that ORMs are the pattern connecting scripting languages and databases

So, ORM and SQL. How would we do SQL CRUD operations in Ruby? Let's think about the 4 ways we interact with data from SQL. 

Create: 

SQL: INSERT INTO books (title, author_id) VALUES ('Cool Book', 1)
RUBY: Book.new('Cool Book', 1)

Read: 

SQL: SELECT * FROM books;
RUBY: book.all

-----
We're going to stop here for this lecture and pick up into practical ways of using ORM to affect Ruby Models. Study your labs to be ready for a refresher than dive into Active Record! **AIRHORN**

MAIN TAKEAWAYS FOR TODAY: 

- SQL is a relational database that deals with how tables with data that relates to each other. 
- We can see Ruby-esque relationships (one to many, many to many) when joining tables in SQL. 
- Ruby augments objects, and ORM helps to map tables in our database to a Ruby class (models), with instances as rows

-----
### (FINISHING OUR SWBAT FROM YESTERDAY) Demonstrate that ORMs are the pattern connecting scripting languages and databases
Update: 

SQL: 
RUBY:

Destroy: 

SQL: 
RUBY:


------

#### ORM Patterns 

### Explain how the sqlite gem works as a driver or wrapper around SQL

### Implement HEREDOCs to be saved in variables to be executed by SQL driver

### Perform persistent CRUD actions on two separate models
