---
title: Basic SQL Commands
description: A guide in my new Starlight docs site.
---

## SQL Practice Commands
- commands
```
CREATE DATABASE temp1;
```
```
create database temp1;
```
```
CREATE DATABASE college;
```
- Delete database
```
DROP DATABASE temp1;
```
```
DROP DATABASE temp2;
```

- Use database
```
USE college;
```

- Create first table
```
CREATE DATABASE college;
USE college;

CREATE TABLE student (
id INT PRIMARY KEY,
name VARCHAR(50),
age INT NOT NULL
);
```
```
INSERT INTO student VALUES(1, "AMAN", 26);
// INSERT INTO student VALUES(1, "SHRADDHA", 24); // gives error because both have same id
INSERT INTO student VALUES(2, "SHRADDHA", 24); // gives error because both have same id
```
```
SELECT * FROM student;
```

```
CREATE DATABASE IF NOT EXISTS college;
```
```
DROP DATABASE IF NOT company;
```
```
SHOW DATABASES;
```
```
SHOW TABLES;
```
```
DROP TABLE student;
```
```
CREATE TABLE student (
	rollno INT PRIMARY KEY,
    name VARCHAR(50)
);
```
```
INSERT INTO student
(rollno, name)
VALUES
(101, "karan"),
(102, "arjun"),
(103, "ram");
```
- Used fo store single colums data
```
INSERT INTO student VALUES(104, "shyam");
```
```
SELECT * FROM student;
```

- Practice Question
```
CREATE DATABASE xyz_company;

USE xyz_company;

CREATE TABLE employee(
id INT PRIMARY KEY,
name VARCHAR(50),
salary INT
);

INSERT INTO employee
(id, name, salary)
VALUES
(1, "adam", 25000),
(2, "bob", 30000),
(3, "casey", 40000);

SELECT * FROM employee;
```
- Constraints
```
CREATE TABLE temp1(
id INT UNIQUE
);

INSERT INTO temp1 VALUES(101);
INSERT INTO temp1 VALUES(101);
```

- Primary KEY
```
CREATE TABLE temp1(
id INT,
name VARCHAR(50),
aget INT,
city VARCHAR(20),
PRIMARY KEY (id, name)
);
```

- DEFAULT VALUES
```
CREATE TABLE emp(
	id INT,
    salary INT DEFAULT 25000
);

INSERT INTO emp (id) VALUES(101);
```
```
CREATE TABLE student (
	rollno INT PRIMARY KEY,
    name VARCHAR(50),
    marks INT NOT NULL,
    grade VARCHAR(1),
    city VARCHAR(20)
);

INSERT INTO student
(rollno, name, marks, grade, city)
VALUES
(101, "anil", 78, "C", "Pune"),
(102, "bhumika", 93, "A", "Mumbai"),
(103, "chetan", 95, "B", "Mumbai"),
(104, "dhruv", 96, "A", "Delhi"),
(105, "emanuel", 12, "F", "Delhi"),
(106, "Farrah", 82, "B", "Delhi");

```

```
SELECT DISTINCT city FROM student;
SELECT * FROM student WHERE marks > 80;
SELECT * FROM student WHERE city = "Mumbai";
SELECT * FROM student WHERE marks > 80 AND city = "Mumbai";
SELECT * FROM student WHERE marks + 10  > 100;
SELECT * FROM student WHERE marks > 90 AND city="Mumbai";
SELECT * FROM student WHERE marks > 90 OR city="Mumbai";
SELECT * FROM student WHERE marks BETWEEN 80 AND 90;
SELECT * FROM student WHERE city IN ("Delhi", "Mumbai", "Gurgaon");
SELECT * FROM student WHERE city NOT IN ("Delhi", "Mumbai", "Gurgaon");
SELECT * FROM student LIMIT 3;
SELECT * FROM student WHERE marks > 75 LIMIT 3;
```

```
SELECT * FROM student ORDER BY city ASC;
SELECT * FROM student ORDER BY marks ASC;
SELECT * FROM student ORDER BY marks DESC LIMIT 3;
```
- Aggregate
```
SELECT MAX(marks) FROM student;
SELECT MIN(marks) FROM student;
SELECT AVG(marks) FROM student;
SELECT COUNT(rollno) FROM student;
```

- Group BY
```
SELECT city FROM student GROUP BY city;
SELECT city, name, COUNT(rollno) FROM student GROUP BY city, name;
```

- Practice Question- 1
```
SELECT city, avg (marks) FROM student GROUP BY city ORDER BY avg (marks) DESC;
```
- Practice Question- 2
```
SELECT mode, count(customers) FROM payment GROUP BY mode;
```
- Count
```
SELECT grade, count(rollno) FROM student GROUP BY grade ORDER BY grade;
```

- Having
```
SELECT city, count(rollno) FROM student GROUP BY city HAVING MAX(marks) > 90;
```
- Order of Clauses
```
SELECT city FROM student WHERE grade="A" GROUP BY city HAVING MAX(marks) > 90 ORDER BY city DESC;
```

- closee Safe Mode
```
SET SQL_SAFE_UPDATES = 0;
```

- UPDATE
```
UPDATE student SET grade = "O" WHERE grade = "A";
```
```
UPDATE student SET marks = 82 WHERE rollno = 105;
```
```
UPDATE student SET grade = "B" WHERE marks BETWEEN 80 AND 90;
```
```
UPDATE student SET marks = marks + 1;
```

- DELETE
```
DELETE FROM student WHERE marks < 33;
```

- Foreign Key
```
CREATE TABLE dept (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE teacher (
    id INT PRIMARY KEY,
    name VARCHAR(50)
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES dept(id)
);

```

- cascade foreign key
```
CREATE TABLE teacher (
    id INT PRIMARY KEY,
    name VARCHAR(50)
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES dept(id),
    ON UPDATE CASCADE,
    ON DELETE CASCADE
);

INSERT INTO dept VALUES 
(101, "english"),
(102, "IT");

INSERT INTO teacher VALUES 
(101, "Adam", 101),
(102, "Eve", 102);

UPDATE dept SET id = 103 WHERE ID = 102;
```

#### Table Related queries
- Alter
```
ALTER TABLE student ADD COLUMN age INT;
```
- Delete Column
```
ALTER TABLE student DROP COLUMN age;
```
- Practice queries
```
ALTER TABLE student ADD COLUMN age INT NOT NULL DEFAULT 19;
```
```
ALTER TABLE student MODIFY COLUMN age VARCHAR(50);

INSERT INTO student
(rollno, name, marks, age)
 VALUES 
(107, "Gargi", 68, 100);
```

- Change
```
ALTER TABLE student CHANGE age stu_age INT;
```
- Delete
```
ALTER TABLE student DROP COLUMN stu_age;
```
- Rename
```
ALTER TABLE student RENAME TO stu;
```

- Delete Table Data
```
TRUNCATE TABLE student;
```

- Practice Question
```
ALTER TABLE student CHANGE name full_name VARCHAR(50);
DELETE FROM student WHERE marks < 80; 
ALTER TABLE student DROP COLUMN grade;
```

### Joins

```
CREATE DATABASE college;
USE college;

CREATE TABLE student (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO student (id, name)
VALUES
(101, "adam"),
(101, "bob"),
(101, "cessy");

CREATE TABLE course (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO course (id, name)
VALUES
(102, "english"),
(105, "math"),
(103, "science"),
(107, "computer science");

```

- Inner Join
```
SELECT * FROM student INNER JOIN course ON student.id = course.id;
```

- Alias
```
SELECT * FROM student as s INNER JOIN course as c ON s.id = c.id;
```

- Left Join
```
SELECT * FROM student as s LEFT JOIN course as c ON s.id = c.id;
```

- Right Join
```
SELECT * FROM student as s RIGHT JOIN course as c ON s.id = c.id;
```
- Full Join
```
SELECT * FROM student as s LEFT JOIN course as c ON s.id = c.id
UNION
SELECT * FROM student as s RIGHT JOIN course as c ON s.id = c.id;
```
- Left Exclusive Join
```
SELECT * FROM student as s LEFT JOIN course as c ON s.id = c.id WHERE c.id IS NULL;
```
- Right Exclusive Join
```
SELECT * FROM student as s RIGHT JOIN course as c ON s.id = c.id WHERE s.id IS NULL;
```

### Self Join
```
CREATE TABLE employee (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    manager_id INT
);

INSERT INTO employee (id, name, manager_id)
VALUES
(101, "adam", 103),
(102, "bob", 104),
(103, "cessy", null),
(104, "donald", 103);

SELECT a.name as manager_name, b.name FROM employee as a JOIN employee as b ON a.id = b.manager_id;

```

- Union
```
SELECT name FROM employee
UNION
SELECT name FROM employee
```
```
SELECT name FROM employee
UNION ALL
SELECT name FROM employee
```

##### Sub Queries
- Example: 1
```
SELECT name, marks
FROM student
WHERE marks > (SELECT AVG(marks) FROM student);
```
- Example: 2
```
SELECT name, marks
FROM student
WHERE rollno IN (SELECT rollno FROM student WHERE rollno % 2 = 0);
```
- Example: FROM
```
SELECT MAX(marks)
FROM (SELECT * FROM student WHERE city = "Delhi") AS temp;
```
- Example: SELECT
```
SELECT (SELECT MAX(marks) FROM student), name FROM student;
```

##### View
```
CREATE VIEW view1 AS
SELECT rollno, name, marks FROM student;

SELECT * FROM view1;
```
```
SELECT * FROM view1 WHERE marks > 90;
```
```
DROP VIEW view1;
```
