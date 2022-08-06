CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(100) NOT NULL,
	"status" BOOLEAN DEFAULT false
	);
	
INSERT INTO tasks (task)
VALUES ('task1'), ('task2'), ('task3');