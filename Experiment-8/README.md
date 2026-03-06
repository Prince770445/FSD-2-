Aim : To develop RESTful APIs using Flask and perform CRUD operations on student data using in-memory storage.

Theory : A RESTful API is a way for applications to communicate using HTTP methods like GET, POST, PUT, and DELETE.

Flask is a lightweight Python web framework that helps us build web servers and APIs easily.

In this experiment:
We created a backend server using Flask.
We implemented CRUD operations:
Create
Read
Update
Delete

Data is stored temporarily in a Python list (in-memory).
We organized routes using Flask Blueprints.
APIs were tested using Postman.
The project was deployed on Render using Gunicorn.
Blueprints in Flask help organize related routes into separate files, making the project clean and modular.

Tools & Technologies Used
Python
Flask
Gunicorn
Postman
Render (Deployment Platform)

API Endpoints
Method	Endpoint	Description
GET	/	Check server status
POST	/students	Create new student
GET	/students	Get all students
GET	/students/<id>	Get student by ID
PUT	/students/<id>	Update student
DELETE	/students/<id>	Delete student

How It Works
When a POST request is sent, a new student object is created and stored in a list.
GET returns student data.
PUT updates existing student details.
DELETE removes the student from the list.
Each student is assigned a unique ID.

Since data is stored in memory, it resets when the server restarts.

Testing

All API endpoints were tested using Postman.
Requests were sent with JSON data, and responses were verified using status codes like:
200 (Success)
201 (Created)
404 (Not Found)
400 (Bad Request)

How to Run Locally
Create virtual environment:
python -m venv vir-env
Activate environment:
vir-env\Scripts\activate
Install dependencies:
pip install -r requirements.txt

Run the server:
python run.py
Server runs at:

http://127.0.0.1:5000

Deployment
The project was deployed on Render.
Build Command:
pip install -r requirements.txt

Start Command:
gunicorn run:app
Gunicorn is used as a production server instead of Flask’s development server.

Make a shorter submission version

Or make a slightly more professional version for GitHub impression

Or add your deployed Render link properly formatted 😌
