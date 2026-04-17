-- PostgreSQL Table Creation Script

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Optional: Initial test data (password is 'password123' encrypted via BCrypt)
-- INSERT INTO students (name, email, password) VALUES ('John Doe', 'john@example.com', '$2a$10$wR6f.kXf9N.yNqO.y8.uUu7YpYpYpYpYpYpYpYpYpYpYpYpYpYpYp');
