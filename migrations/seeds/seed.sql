INSERT INTO groups (name, description) VALUES 
('Admin', 'Administrative group with full system access'),
('Supply Chain Manager', 'Manages the supply chain operations'),
('Warehouse Operator', 'Responsible for warehouse operations and stock control'),
('Procurement Officer', 'Handles purchasing and procurement of goods and services'),
('Logistics Coordinator', 'Coordinates transportation and logistics operations');

INSERT INTO users (id, email, first_name, last_name, created_at, updated_at, is_verified) VALUES
('user_001', 'user_01@gmail.com','John', 'Doe',  NOW(), NOW(), TRUE),
('user_002', 'user_02@gmail.com','Jane', 'Smith', NOW(), NOW(), FALSE),
('user_003', 'user_03@gmail.com','Alice', 'Johnson', NOW(), NOW(), TRUE),
('user_004', 'user_04@gmail.com','Bob', 'Brown', NOW(), NOW(), FALSE),
('user_005', 'user_05@gmail.com','Charlie', 'Davis', NOW(), NOW(), TRUE);
