How to start
--
docker-compose up -d 

Init database
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

```sql
INSERT INTO users (name, email)
VALUES
('Jane Smith', 'janesmith@example.com'),
('Alice Johnson', 'alicej@example.com'),
('Bob Brown', 'bobbrown@example.com');
```

```sql
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    user_id INT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
---
Structure
```
.
├── README.md
├── app
│   ├── api
│   │   └── users
│   │       └── route.ts
│   └── page.tsx
├── db
│   ├── index.ts
│   └── schema.ts
├── docker-compose.yml
└── .env
```
