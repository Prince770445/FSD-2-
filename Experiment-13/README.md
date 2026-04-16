# Flask MySQL Students CRUD API

##  Experiment Details

This project implements a **backend server using Python Flask** that provides **CRUD (Create, Read, Update, Delete) APIs** for managing student records.

Student data is stored in a **MySQL database** inside a table named **students**.

---

#  Features

- Flask REST API
- MySQL Database Integration
- CRUD Operations:
  - Create Student
  - Read Students
  - Update Student
  - Delete Student
- Input Validation using Marshmallow
- SQLAlchemy ORM
- Error Handling
- JSON API Responses
- Environment Variable Support (.env)

---

#  Technologies Used

- Python
- Flask
- Flask-SQLAlchemy
- Marshmallow
- MySQL
- PyMySQL
- python-dotenv
- Gunicorn (for deployment)

---

| Method     | Endpoint         | Description          |
| ---------- | ---------------- | -------------------- |
| **GET**    | `/`              | Check API status     
| **POST**   | `/students`      | Create a new student |
| **GET**    | `/students`      | Get all students     
| **GET**    | `/students/<id>` | Get student by ID    |
| **PUT**    | `/students/<id>` | Update student       |
| **DELETE** | `/students/<id>` | Delete student       |

