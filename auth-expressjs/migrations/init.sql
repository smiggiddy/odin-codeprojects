CREATE TABLE IF NOT EXISTS users (
	id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
	username VARCHAR ( 255 ),
	password VARCHAR (255)
);

CREATE TABLE IF NOT EXISTS federated_credentials (
	user_id INTEGER NOT NULL,
	provider TEXT NOT NULL,
	subject TEXT NOT NULL,
	PRIMARY KEY (provider, subject)
);


