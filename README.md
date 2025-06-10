# GoREST Public API CRUD Operations Demo

A simple web-based project to demonstrate CRUD (Create, Read, Update, Delete) operations using JavaScript `fetch()` API and the GoREST public API.

---

## 📑 Features

- **POST Request** — Create a new user by sending user details in JSON format.
- **GET Request** — Retrieve a list of users from the API.
- **PUT Request** — Update a specific user's details by providing their ID.
- **DELETE Request** — Delete a user from the API by specifying their ID.

---

## 🚀 Technologies Used

- HTML5
- CSS3 (Bootstrap for styling)
- JavaScript (Fetch API)
- GoREST Public API (https://gorest.co.in/public-api)

---

## 📷 Screenshots

### 📤 POST Request
Creates a new user with fields: `name`, `email`, `gender`, and `status`.
![POST Screenshot](screenshots/post.png)

### 📥 GET Request
Fetches and displays a list of users.
![GET Screenshot](screenshots/get.png)

### ✏️ PUT Request
Updates an existing user's details by user ID.
![PUT Screenshot](screenshots/put.png)

### ❌ DELETE Request
Deletes a user by user ID.
![![image](https://github.com/user-attachments/assets/c5a0f71b-072b-4f65-abab-c88c13b8409e)
](screenshots/delete.png)

---

## 📖 How to Run

1. Clone or download this repository.
2. Open `index.html` in a browser.
3. Enter JSON request data (for POST/PUT) in the textarea.
4. Provide User ID in the input field (for PUT/DELETE).
5. Click the respective button to make an API request.
6. View the response status and data on the webpage.

---

## 📝 Example Request Body (for POST/PUT)

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "gender": "male",
  "status": "active"
}
