CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(100) NOT NULL, 
	"status" BOOLEAN DEFAULT false
	);
	
INSERT INTO tasks (task)
VALUES ('task1'), ('task2'), ('task3');

id automatically sets with each task
task must be shorter than 100 characters, cannot be left blank
status boolean to toggle complete/incomplete,
     default false = incomplete

POST will only reqiure the task,
GET will return id, task, and status


