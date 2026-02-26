from flask import Flask
from routes.student_routes import student_bp

def create_app():
    app = Flask(__name__)

    # Home route (IMPORTANT)
    @app.route("/")
    def home():
        return {"message": "Backend Server is running"}

    # Register Blueprints
    app.register_blueprint(student_bp)

    return app