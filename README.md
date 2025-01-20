# FullStack Project - Contact Agenda

The Contact Agenda project is a FullStack project that provides user management, contacts, authentication, and interaction with a PostgreSQL database. The Back-End was developed in TypeScript/JavaScript using the Express framework, while the Front-End is built with React and TypeScript using Vite.

## Figma

You can view the project design on Figma [CLICK HERE](https://www.figma.com/file/zWNHZTOPqTqZny6OaF8SG0/Agenda-de-Contatos?type=design&node-id=0%3A1&mode=design&t=0rl7sjE3LVl3As6G-1).

## Index

- [Installation/Test Instructions](#installationtest-instructions)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Test in Insomnia](#test-in-insomnia)
- [Technologies Used](#technologies-used)
  - [Backend](#backend-1)
  - [Frontend](#frontend-1)
- [Frontend Features](#frontend-features)
- [Frontend Pages](#frontend-pages)
- [Routes](#routes)
  - [Authentication](#authentication)
    - [Login](#login)
  - [Users](#users)
    - [Create User](#create-user)
    - [List Users](#list-users)
    - [Get User](#get-user)
    - [Update User](#update-user)
    - [Remove User](#remove-user)
  - [Contacts](#contacts)
    - [Create Contact](#create-contact)
    - [List Contacts](#list-contacts)
    - [Update Contact](#update-contact)
    - [Remove Contact](#remove-contact)
- [Author](#author)
- [Contributing](#contributing)

## Installation/Test Instructions

### Backend

1. Clone the repository.
2. Open the VSCode terminal with <strong>" CTRL + J "</strong> and navigate to the `Back-End_Project` folder with the commands `cd Desafio-Fullstack_JhonnatanDouglas/` and then `cd Back-End_Project/`.
3. Run the command `npm install` to install the dependencies.
4. Configure the `.env` file according to the example `.env.example`.
5. Run the database migrations by typing `npm run typeorm migration:run -- -d src/data-source` in the terminal.
6. Start the server with `npm run dev`. It will run at `http://localhost:${PORT}/`.

### Frontend

1. Now that the server is running in the terminal, open a new terminal using the VSCode shortcut <strong>" CTRL + SHIFT + ` "</strong> or go to <strong>Terminal > New Terminal</strong>.
2. With this new terminal open, go to the `Front-End_Project` folder with the commands `cd Desafio-Fullstack_JhonnatanDouglas/` and then `cd Front-End_Project/`.
3. Run the command `npm install` to install the dependencies.
4. After that, run the command `npm run dev`.
5. Access the provided address (e.g., "http://localhost:5173/") in your browser.

## Technologies Used

### Backend

- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://expressjs.com/)
- [express-async-errors](https://www.npmjs.com/package/express-async-errors)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [pg](https://www.npmjs.com/package/pg)
- [pg-format](https://www.npmjs.com/package/pg-format)
- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
- [typeorm](https://typeorm.io/)
- [zod](https://www.npmjs.com/package/zod)

### Frontend

- [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)
- [@types/react-modal](https://www.npmjs.com/package/@types/react-modal)
- [axios](https://www.npmjs.com/package/axios)
- [react](https://reactjs.org/)
- [react-dom](https://reactjs.org/docs/react-dom.html)
- [react-hook-form](https://react-hook-form.com/)
- [react-modal](https://www.npmjs.com/package/react-modal)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [react-to-pdf](https://www.npmjs.com/package/react-to-pdf)
- [react-toastify](https://www.npmjs.com/package/react-toastify)
- [zod](https://www.npmjs.com/package/zod)

## Frontend Features

- **Authentication:**

  - Create an account or log in to access the system.
  - Change profile information such as name, phone, and password.
  - Delete your account if necessary.

- **Contact Management:**

  - Add new contacts with name and phone number.
  - View a list of contacts with details such as name, phone number, and creation date.

- **PDF:**
  - View details in the contact list in PDF format.
  - Download the PDF associated with the contact list.

## Frontend Pages

1. **Login Page:**

   - **Route:** http://localhost:3000`/`
   - **Description:** Main route that directs users to the login page.

2. **Registration Page:**

   - **Route:** http://localhost:3000`/register`
   - **Description:** Route for registering new users.

3. **User Page (Dashboard):**

   - **Route:** http://localhost:3000`/dashboard`
   - **Description:** Protected route, accessible only to logged-in users. Displays the user's contact list.

4. **PDF View and Download Page:**
   - **Route:** http://localhost:3000`/pdf/download`

- **Description:** Protected route, requires login. Allows viewing and downloading PDFs associated with the user's contact list.

## Routes

### Authentication

#### Login

- **Route:** `POST /login`
  - **Request Body:**
    ```json
    {
      "email": "email@example.com",
      "password": "password123"
    }
    ```
  - **Response Body:**
    ```json
    {
      "token": "token",
      "user": {
        "id": "uuid",
        "name": "user",
        "email": "email@example.com",
        "telephone": "11988887777",
        "register_date": "2023-11-20T21:00:44.182Z"
      }
    }
    ```

### Users

#### Create User

Auth: `Bearer Token Not Required`

- **Route:** `POST /users`
  - **Request Body:**
    ```json
    {
      "name": "User Name",
      "email": "email@example.com",
      "password": "password123",
      "telephone": "123456789"
    }
    ```
  - **Response Body:**
    ```json
    {
      "id": "uuid",
      "name": "User Name",
      "email": "email@example.com",
      "telephone": "123456789",
      "register_date": "2023-11-20T00:00:00.000Z"
    }
    ```

#### List Users

Auth: `Bearer Token Required`

- **Route:** `GET /users`
  - **Response Body:**
    ```json
    [
      {
        "id": "uuid",
        "name": "User Name",
        "email": "email@example.com",
        "telephone": "123456789",
        "register_date": "2023-11-20T00:00:00.000Z"
      }
      // ... other users
    ]
    ```

#### Get a User

Auth: `Bearer Token Required`

- **Route:** `GET /users/configs`
  - **Response Body:**
    ```json
    {
      "id": "uuid",
      "name": "User Name",
      "email": "email@example.com",
      "telephone": "123456789",
      "register_date": "2023-11-20T00:00:00.000Z"
    }
    ```

#### Update a User

Auth: `Bearer Token Required`

- **Route:** `PATCH /users/configs`
  - **Request Body:**
    ```json
    {
      "name": "New User Name",
      "email": "newemail@example.com",
      "password": "newpassword123",
      "telephone": "987654321"
    }
    ```
  - **Response Body:**
    ```json
    {
      "id": "uuid",
      "name": "New User Name",
      "email": "newemail@example.com",
      "telephone": "987654321",
      "register_date": "2023-11-20T00:00:00.000Z"
    }
    ```

#### Remove a User

Auth: `Bearer Token Required`

- **Route:** `DELETE /users/configs`
  - No response body.

### Contacts

#### Create Contact

Auth: `Bearer Token Required`

- **Route:** `POST /contacts`
  - **Request Body:**
    ```json
    {
      "name": "Contact Name",
      "telephone": "987654321"
    }
    ```
  - **Response Body:**
    ```json
    {
      "id": "uuid",
      "name": "Contact Name",
      "telephone": "987654321",
      "register_date": "2023-11-20T00:00:00.000Z"
    }
    ```

#### List Contacts

Auth: `Bearer Token Required`

- **Route:** `GET /contacts`

  - **Response Body:**

    ```json
    [
      {
        "id": "uuid",
        "name": "Contact Name",
        "telephone": "987654321",
        "register_date": "2023-11-20T00:00:00.000Z"
      }
      // ... other contacts
    ]
    ```

#### Update Contact

Auth: `Bearer Token Required`

- **Route:** `PATCH /contacts/:id`
  - **Request Body:**
    ```json
    {
      "name": "Updated Contact Name",
      "telephone": "123456789"
    }
    ```
  - **Response Body:**
    ```json
    {
      "id": "uuid",
      "name": "Updated Contact Name",
      "telephone": "123456789",
      "register_date": "2023-11-20T00:00:00.000Z"
    }
    ```

#### Remove Contact

Auth: `Bearer Token Required`

- **Route:** `DELETE /contacts/:contactId`
  - No response body.

## Author

- **Name:** Jhonnatan Douglas
- **Portfolio:** [https://portfolio-jhonnatandev.vercel.app/](https://portfolio-jhonnatandev.vercel.app/)
- **Github:** [JhonnatanDouglas](https://github.com/JhonnatanDouglas)
- **E-mail:** [jhonnatanaraujodev@gmail.com](mailto:jhonnatanaraujodev@gmail.com)

## Contributing

Contributions are always welcome! Please feel free to submit issues or pull requests. If you want to contribute to this project, make sure to follow the guidelines in the project's issue tracker.
