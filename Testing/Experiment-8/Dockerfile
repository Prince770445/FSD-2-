# Using Python 3.10 as per your experiment requirements
FROM python:3.10-slim

# Set environment variables to ensure output is sent straight to logs
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Install system dependencies if needed
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend source code
COPY . .

# Expose the port your Python app runs on (usually 5000 or 8000)
EXPOSE 5000

# Run the application
# IMPORTANT: Ensure run.py is configured to listen on 0.0.0.0
CMD ["python", "run.py"]