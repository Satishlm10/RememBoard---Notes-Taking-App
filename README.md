# RememBoard---Notes-Taking-App

## Engineering Decisions

- **Frontend:**
  - **Next.js** was chosen for the frontend because it is built on top of the React library, making it easy to use and scalable. Next.js also offers server-side rendering and API routes, which fits well with the app's needs.
  
- **Backend:**
  - **Express.js** was chosen for the backend due to its simplicity and minimalistic approach, allowing for fast development of APIs. Reusable UI components were built to maintain consistency and reduce redundancy in the app.
  
- **Authentication:**
  - Simple email and password authentication was implemented using **JWT (JSON Web Tokens)**. This method offers a stateless approach to authentication, which allows the frontend to handle user sessions without storing session data on the server, reducing the server’s load.
  
- **Notes Management:**
  - The notes are created, displayed, updated, and deleted on the same page to maintain simplicity. 
  - **Search functionality** was added to the notes page, allowing users to search notes by title, content, and category, making it easier to find specific notes.

## Database

- **Sequelize ORM** was used to interact with the database. This ORM allows for easy data modeling and integrates well with PostgreSQL. It also helps in managing relationships and migrations between entities.

## Authentication

- **JWT (JSON Web Tokens)** was used for authentication and authorization. This stateless authentication method allows the frontend to manage user sessions without needing server-side storage, which reduces the server load.

## State Management

- **React’s useState and useEffect hooks** were used to manage the application’s state within components.
- For **global state management**, the **React Context API** was utilized to share state across components without the need for third-party libraries like Redux.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Satishlm10/RememBoard---Notes-Taking-App.git
2. Create a .env file inside the backend folder with the following content:
   ```bash
    DATABASE_URL=your_db_url
    JWT_SECRET=your_jwt_secret
    PORT=5000
   
4. Create a .env.local file inside the frontend folder with the following content:
   ```bash
    NEXT_PUBLIC_API_URL=http://localhost:5000/api
   
6. Navigate to the frontend folder and run:
    ```bash
    cd frontend
    npm run dev
   
8. Navigate to the backend folder and run:
   ```bash
    cd backend
    npm run dev
   
10. After both servers are running:
    - Access the frontend at: http://localhost:3000
    - Access the backend API at: http://localhost:5000
   
## Assumptions
  - It is assumed that the notes data follows a one-to-many relationship, where each user can have multiple notes. Each note can also have multiple categories, and users can update or     delete their notes.
  - The categories are assumed to be predefined strings (e.g., Work, Personal, Health) and are stored as part of the note. There is no dynamic category creation in this implementation.
  - The project assumes a basic user model, where users can perform CRUD operations on their own notes. There is no complex role management or permissions system implemented beyond       basic user authentication.

## Screenshots
![LandingPage](https://github.com/user-attachments/assets/72c20c25-f948-4bf9-94d3-6f48a4000c25)

![registerpage](https://github.com/user-attachments/assets/9b3ca750-1208-40e6-8d5d-9dff31143c59)

![loginpage](https://github.com/user-attachments/assets/08f58d5b-9197-40dc-b5d3-c389ecfa1143)

![Homepage](https://github.com/user-attachments/assets/9dc91134-057a-4544-b387-fd37bbbc4042)

![NotesPage](https://github.com/user-attachments/assets/1cfd99db-2116-4432-8c7c-99e69c33317b)



