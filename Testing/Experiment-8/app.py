from flask import Flask, request, jsonify

app = Flask(__name__)

# Temporary database
students = []
next_id = 1

# ✅ Fixes test_home
# Test expects JSON {"message": "Backend Server is running"}
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Backend Server is running"}), 200

# ✅ Fixes test_create_student & test_create_student_error
# Test expects an 'id' and 'name' in the response
@app.route("/students", methods=["POST"])
def add_student():
    global next_id
    data = request.get_json()

    # If payload is empty or name is missing, return 400
    if not data or "name" not in data:
        return jsonify({"error": "Name is required"}), 400

    new_student = {
        "id": next_id,
        "name": data["name"]
    }
    students.append(new_student)
    next_id += 1
    
    return jsonify(new_student), 201

# ✅ Fixes test_get_students
# Test expects status 200 and a list
@app.route("/students", methods=["GET"])
def get_all_students():
    return jsonify(students), 200

# ✅ Fixes test_update_student
# Test expects to find student by ID and update name
@app.route("/students/<int:student_id>", methods=["PUT"])
def update_student(student_id):
    data = request.get_json()
    for student in students:
        if student["id"] == student_id:
            student["name"] = data.get("name", student["name"])
            return jsonify(student), 200
            
    return jsonify({"error": "Student not found"}), 404

# ✅ Fixes test_delete_student
@app.route("/students/<int:student_id>", methods=["DELETE"])
def delete_student(student_id):
    for student in students:
        if student["id"] == student_id:
            students.remove(student)
            return jsonify({"message": "Student deleted"}), 200
            
    return jsonify({"error": "Student not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)