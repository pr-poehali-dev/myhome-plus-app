CREATE TABLE activity_log (
    id SERIAL PRIMARY KEY,
    apartment_id INTEGER,
    action_type VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    action_time TIMESTAMP
);

CREATE TABLE polls (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    poll_status VARCHAR(20),
    total_votes INTEGER,
    votes_for INTEGER,
    votes_against INTEGER,
    created_time TIMESTAMP,
    closed_time TIMESTAMP
);

CREATE TABLE poll_votes (
    id SERIAL PRIMARY KEY,
    poll_id INTEGER,
    apartment_id INTEGER,
    vote VARCHAR(10) NOT NULL,
    voted_time TIMESTAMP
);

CREATE TABLE chat_messages (
    id SERIAL PRIMARY KEY,
    apartment_id INTEGER,
    user_name VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    message_time TIMESTAMP,
    removed_time TIMESTAMP
);

CREATE TABLE cameras (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    stream_url TEXT,
    camera_status VARCHAR(20),
    added_time TIMESTAMP
);