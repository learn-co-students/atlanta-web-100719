u1 = User.create(username:'Dan',bio:'This is great!!!',email:'dan@bitterapp.com',location:'Atlanta')
u2 = User.create(username:'Clark',bio:'This is super great!!!',email:'clark@bitterapp.com',location:'Everywhere')
u3 = User.create(username:'Kuran',bio:'This sucks',email:'kuran@bitterapp.com',location:'Here')

p1 = Rant.create(content: 'The first rant. I dont like it', user_id: u2.id)
p2 = Rant.create(content: 'The second rant. I probably dont like it', user_id: u3.id)
p3 = Rant.create(content: 'The second rant. I like it', user_id: u1.id)
