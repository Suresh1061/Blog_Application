# Blog Application

## Overview
Developed a full-featured blog application using React, Redux, and React Router, featuring secure user authentication and authorization with React Hook Form, image uploads, a rich text editor for creating, updating, and deleting blog posts, and a responsive home page that displays all user-created content in an organized manner.

## Features
- **User Authentication**: Secure registration and login functionality using email and password.
- **Blog Creation**: Users can create new blog posts with text and images.
- **Rich Text Editor**: A built-in text editor allows users to format and edit their blog content before publishing.
- **Blog Management**: Users can update or delete their existing blog posts.
- **Responsive Design**: The home page displays all the blogs created by the user in an organized manner.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Suresh1061/Blog_Application.git
    cd blog-app
    ```

2. Install the dependencies:
    ```bash
    pnpm install
    ```

3. Start the development server:
    ```bash
    pnpm run dev
    ```

## File Structure
- `App.jsx`: Main application component that sets up routing.
- `index.css`: Global styles for the application.
- `store/store.js`: Redux store configuration.
- `pages/`: Contains all the page components like Home, Login, Signup, AllPosts, AddPost, EditPost, and Post.
- `components/`: Reusable components like `AuthLayout` for managing authentication states.

## Usage

- **Sign Up**: Create a new account using your name, email, and password.
- **Log In**: Access your account by logging in with your registered email and password.
- **Create a Blog**: Add a new blog post with a title, image, and rich text content.
- **Manage Blogs**: View all your created blogs on the home page, and update or delete any blog as needed.

## Technologies
- **React**
- **React DOM**
- **React Router DOM**
- **Redux Toolkit**
- **React Hook Form**:
- **TinyMCE React**
- **Appwrite**
- **React Icons**
- **HTML React Parser**