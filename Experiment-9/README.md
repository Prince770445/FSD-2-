-- Aim

To design and implement a Flask backend that demonstrates multiple authentication techniques and understand how APIs are secured using different authorization strategies.

-- Theory

Authentication is the process of verifying the identity of a user before allowing access to protected resources.
This project covers three widely used authentication methods:

1️⃣ Basic Authentication

Uses username and password sent in request headers.

Credentials are encoded in Base64 format.

Simple but not secure for production without HTTPS.

2️⃣ Token Authentication (Custom)

After login, the server generates a simple token.

Client sends token in headers for future requests.

Demonstrates the concept of stateless authentication.

3️⃣ JWT Authentication (Industry Standard)

Uses JSON Web Tokens (JWT).

Tokens contain encrypted user identity.

Secure, scalable and widely used in modern applications.


 -- Tech Stack

Python

Flask

Flask-JWT-Extended

Postman (for testing)

Project Structure
project/
│── app.py
│── README.md

-- Learning Outcomes

1. After completing this experiment, students will be able to:

2. Understand authentication vs authorization

3. Build REST APIs using Flask

4. Implement Basic Auth, Token Auth and JWT Auth

5. Secure API endpoints

6. Test APIs using Postman

7. Understand stateless authentication concepts