# Student Registration Server

A simple Node.js/Express server for user registration with in-memory storage.

## Setup

```cmd
npm install
npm start
```

Server runs on `http://localhost:3000` (or 3001 if port 3000 is busy).

## API Endpoints

### POST /register

Register a new user with username and password.

**Request Body (JSON):**

```json
{
  "username": "testuser",
  "password": "testpass"
}
```

**Success Response (201):**

```json
{
  "success": true,
  "message": "User registered successfully",
  "user": { "username": "testuser" }
}
```

### GET /users

View all registered users (for testing).

## How to Send Data

### Option 1: Using curl (Command Line)

```cmd
curl -X POST http://localhost:3000/register -H "Content-Type: application/json" -d "{\"username\":\"testuser\",\"password\":\"testpass\"}"
```

### Option 2: Using PowerShell

```powershell
Invoke-RestMethod -Uri http://localhost:3000/register -Method POST -ContentType "application/json" -Body '{"username":"testuser","password":"testpass"}'
```

### Option 3: Using Postman/Thunder Client

1. **Method**: `POST`
2. **URL**: `http://localhost:3000/register`
3. **Headers**:
   - `Content-Type: application/json`
4. **Body** (raw JSON):

```json
{
  "username": "testuser",
  "password": "testpass"
}
```

### Option 4: Using JavaScript fetch

```javascript
fetch("http://localhost:3000/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "testuser",
    password: "testpass",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

## Important Notes

- Always include `Content-Type: application/json` header
- Send data as JSON in the request body
- Username must be unique (duplicate usernames will return 409 error)
- Both username and password are required (missing fields return 400 error)
