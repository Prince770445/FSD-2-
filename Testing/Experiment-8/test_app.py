import pytest
from app import app, students  # Import your Flask app and data list

@pytest.fixture
def client():
    """Configures the app for testing."""
    app.config['TESTING'] = True
    with app.test_client() as client:
        # Clear the database before each test to ensure isolation
        students.clear()
        yield client

# ✅ Test 1: Home Route
def test_home(client):
    response = client.get('/')
    assert response.status_code == 200
    assert response.get_json() == {"message": "Backend Server is running"}

# ✅ Test 2: Create Student (Success)
def test_create_student(client):
    payload = {"name": "Prince"}
    response = client.post('/students', json=payload)
    
    assert response.status_code == 201
    data = response.get_json()
    assert data["name"] == "Prince"
    assert "id" in data

# ✅ Test 3: Create Student (Error - Missing Name)
def test_create_student_error(client):
    payload = {} # Missing name
    response = client.post('/students', json=payload)
    
    assert response.status_code == 400
    assert response.get_json() == {"error": "Name is required"}

# ✅ Test 4: Get All Students
def test_get_students(client):
    # Add one student first
    client.post('/students', json={"name": "Alice"})
    
    response = client.get('/students')
    assert response.status_code == 200
    assert len(response.get_json()) == 1

# ✅ Test 5: Update Student
def test_update_student(client):
    # Create
    create_res = client.post('/students', json={"name": "Old Name"})
    student_id = create_res.get_json()["id"]
    
    # Update
    response = client.put(f'/students/{student_id}', json={"name": "New Name"})
    assert response.status_code == 200
    assert response.get_json()["name"] == "New Name"

# ✅ Test 6: Delete Student
def test_delete_student(client):
    # Create
    create_res = client.post('/students', json={"name": "To Delete"})
    student_id = create_res.get_json()["id"]
    
    # Delete
    response = client.delete(f'/students/{student_id}')
    assert response.status_code == 200
    assert response.get_json() == {"message": "Student deleted"}