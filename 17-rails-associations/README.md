## Rails Associations

### SWBATs

- [ ] Refresher on has_many & belongs_to
- [ ] Use Rails form helper methods that create an associated object
- [ ] Implement dependent: :destroy in order to destroy associated objects to normalize database

### Deliverables

- Create a new application
- Generate models & Establish associations
- Create a form using the DIY method
- Make it work the rails way


### Code Snippet

```rb
  <%= form_for(@post) do |f| %>

    <%= f.label :title %>
    <%= f.text_field :title %>

    <%= f.label :content %>
    <%= f.text_field :content %>

    <%= f.label :user %>
    <%= f.collection_select(:user_id, User.all, :id, :name) %>

    <%= f.submit %>
  <% end %>
```
