CREATE TABLE IF NOT EXISTS users (
	user_id INTEGER PRIMARY KEY ASC,
	username VARCHAR(50) UNIQUE NOT NULL,
	password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS user_profile_info (
	user_info_id INTEGER PRIMARY KEY ASC,
	email VARCHAR(50),
	user_id INTEGER REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS messages (
	message_id INTEGER PRIMARY KEY ASC,
	message TEXT,
	media VARCHAR(100),
	date NUMBER,
	user_id INTEGER REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS likes (
	likes_id INTEGER PRIMARY KEY ASC,
	message_id INTEGER REFERENCES messages(message_id),
	user_id INTEGER REFERENCES users(user_id),
	liked_at NUMBER
);



INSERT OR IGNORE INTO users (username, password)
VALUES ("jim", "$2a$10$Bmjre5WSpSSAi.nWBfLZFOlhQhbIAoY/MM7ikJz3Ho9tqeXCExaB6"),
	("demo", "$2a$10$Vo.XmsVQVx9gGojRIdewpOap5SnhrgZ21/Im5IxhH3PC4FycM5uwC");

INSERT OR REPLACE INTO messages (message_id, message, media, date, user_id)
VALUES
  (1, "When life gives you lemons, make lemonade.", NULL, strftime('%s', 'now'), 1),
  (2, "Rome wasn’t built in a day – take your time.", NULL, strftime('%s', 'now'), 1),
  (3, "The grass is always greener on the other side.", NULL, strftime('%s', 'now'), 1),
  (4, "If it ain’t broke, don’t fix it.", NULL, strftime('%s', 'now'), 1),
  (5, "You can’t have your cake and eat it too.", NULL, strftime('%s', 'now'), 1),
  (6, "Better late than never.", NULL, strftime('%s', 'now'), 1),
  (7, "What doesn’t kill you makes you stronger.", NULL, strftime('%s', 'now'), 1),
  (8, "Every cloud has a silver lining.", NULL, strftime('%s', 'now'), 1),
  (9, "Don’t bite the hand that feeds you.", NULL, strftime('%s', 'now'), 1),
  (10, "Absence makes the heart grow fonder.", NULL, strftime('%s', 'now'), 1),
  (11, "Always trust your gut feeling – it’s usually right.", NULL, strftime('%s', 'now'), 2),
  (12, "Money can’t buy happiness, but it sure helps.", NULL, strftime('%s', 'now'), 2),
  (13, "Everything happens for a reason.", NULL, strftime('%s', 'now'), 2),
  (14, "Don’t go to bed angry – resolve conflicts before sleeping.", NULL, strftime('%s', 'now'), 2),
  (15, "The early bird catches the worm.", NULL, strftime('%s', 'now'), 2),
  (16, "You only live once – make the most of it.", NULL, strftime('%s', 'now'), 2),
  (17, "Hard work pays off in the end.", NULL, strftime('%s', 'now'), 2),
  (18, "Family is everything – cherish them.", NULL, strftime('%s', 'now'), 2),
  (19, "Don’t put off until tomorrow what you can do today.", NULL, strftime('%s', 'now'), 2),
  (20, "A smile costs nothing but gives so much.", NULL, strftime('%s', 'now'), 2),
  (21, "You can’t please everyone – focus on yourself.", NULL, strftime('%s', 'now'), 2),
  (22, "Health is wealth – take care of your body.", NULL, strftime('%s', 'now'), 2),
  (23, "Patience is a virtue – good things take time.", NULL, strftime('%s', 'now'), 2),
  (24, "Don’t judge a book by its cover.", NULL, strftime('%s', 'now'), 2),
  (25, "Actions speak louder than words.", NULL, strftime('%s', 'now'), 2),
  (26, "Learn from your mistakes – they make you wiser.", NULL, strftime('%s', 'now'), 2),
  (27, "Kindness costs nothing but means everything.", NULL, strftime('%s', 'now'), 2),
  (28, "Life is short – eat the cake.", NULL, strftime('%s', 'now'), 2),
  (29, "Comparison is the thief of joy – focus on your journey.", NULL, strftime('%s', 'now'), 2),
  (30, "The best things in life are free.", NULL, strftime('%s', 'now'), 2);

-- ALTER TABLE likes
-- ADD COLUMN user_id INTEGER REFERENCES users(user_id);

-- ALTER TABLE likes 
-- ADD COLUMN liked_at NUMBER;

-- ALTER TABLE likes DROP COLUMN sum_likes;
