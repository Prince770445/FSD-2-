# CI/CD Pipeline for Flask Backend Deployment

## Objective

This experiment demonstrates how to implement a CI/CD pipeline
for deploying a Flask backend application using Docker and
GitHub Actions.

---

## Tools Used

- Python
- Flask
- Pytest
- Docker
- GitHub Actions

---

## Project Structure

project/
│
├── app.py
├── test_app.py
├── requirements.txt
├── Dockerfile
├── .github/workflows/ci_cd.yml
├── README.md

---

## Steps Performed

### Step 1: Create Flask Backend

A simple Flask backend was created.


### Step 3: Create Docker Image

Dockerfile was created to containerize the backend.

Command:

docker build -t flask-backend .

---

### Step 4: Run Docker Container

Command:

docker run -d -p 5000:5000 flask-backend

---

### Step 5: Setup GitHub Actions

CI/CD pipeline created using GitHub Actions.

Pipeline includes:

- Install dependencies
- Run tests
- Build Docker image
- Deploy container

---

## Output

- Backend successfully containerized
- CI/CD pipeline executed automatically
- Docker container deployed

---

## Conclusion

This experiment demonstrates how CI/CD pipelines automate
testing and deployment processes, ensuring reliable and
efficient application delivery.