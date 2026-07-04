-- CREATE DATABASE IF NOT EXISTS public_grievance_db;
-- USE public_grievance_db;

-- -- USERS
-- CREATE TABLE IF NOT EXISTS users (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   user_id VARCHAR(120) NOT NULL UNIQUE,
--   first_name VARCHAR(60) NOT NULL,
--   last_name VARCHAR(60) NOT NULL,
--   mobile VARCHAR(13) NOT NULL UNIQUE,
--   gmail VARCHAR(120) NULL,
--   password_hash VARCHAR(255) NOT NULL,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- ADMINS
-- CREATE TABLE IF NOT EXISTS admins (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   admin_id VARCHAR(120) NOT NULL UNIQUE,
--   password_hash VARCHAR(255) NOT NULL,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- COMPLAINTS
-- CREATE TABLE IF NOT EXISTS complaints (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   ticket_no VARCHAR(30) NOT NULL UNIQUE,
--   user_id VARCHAR(120) NOT NULL,

--   name VARCHAR(120) NOT NULL,
--   state VARCHAR(80) NOT NULL,
--   city VARCHAR(80) NOT NULL,
--   area VARCHAR(120) NOT NULL,
--   category VARCHAR(80) NOT NULL,
--   complaint TEXT NOT NULL,

--   status ENUM('Pending','In Progress','Resolved') DEFAULT 'Pending',

--   created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--   updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

--   INDEX idx_complaints_user (user_id),
--   INDEX idx_complaints_status (status),

--   CONSTRAINT fk_complaints_user
--     FOREIGN KEY (user_id) REFERENCES users(user_id)
--     ON DELETE CASCADE ON UPDATE CASCADE
-- );

-- -- Seed Admins (TEMP plain text; backend supports both plain and bcrypt)
-- INSERT IGNORE INTO admins (admin_id, password_hash)
-- VALUES
-- ('saffan.admin@pgms.in', '123456'),
-- ('jeofrin.admin@pgms.in', '789456');

CREATE DATABASE IF NOT EXISTS public_grievance_db;
USE public_grievance_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(120) NOT NULL UNIQUE,
  first_name VARCHAR(60) NOT NULL,
  last_name VARCHAR(60) NOT NULL,
  mobile VARCHAR(13) NOT NULL UNIQUE,
  gmail VARCHAR(120) NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  admin_id VARCHAR(120) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS complaints (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ticket_no VARCHAR(30) NOT NULL UNIQUE,
  user_id VARCHAR(120) NOT NULL,

  name VARCHAR(120) NOT NULL,
  state VARCHAR(80) NOT NULL,
  city VARCHAR(80) NOT NULL,
  area VARCHAR(120) NOT NULL,
  category VARCHAR(80) NOT NULL,
  complaint TEXT NOT NULL,

  status ENUM('Pending','In Progress','Resolved') DEFAULT 'Pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  INDEX idx_complaints_user (user_id),
  CONSTRAINT fk_complaints_user FOREIGN KEY (user_id)
    REFERENCES users(user_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

INSERT IGNORE INTO admins (admin_id, password_hash)
VALUES
('saffan.admin@pgms.in', '123456'),
('jeofrin.admin@pgms.in', '789456');
