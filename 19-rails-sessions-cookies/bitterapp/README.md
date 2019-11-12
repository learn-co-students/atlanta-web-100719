Login

- Migration that tracks passwords
- Route
  - '/login': GET, POST
- Controller
- View

# Process

- Models

  - User:
    has_many :rants
    - username
    - bio
    - email
    - location

  - Rant:
    belongs_to :user
    - content
    - user_id

- Migrations
  - Test it
- Controller
  - Route
- Views
