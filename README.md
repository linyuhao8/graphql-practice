# GraphQL Book Management App (Express + Apollo Server + Next.js App Router)

## Overview

This is a **GraphQL-based Book Management Application** built with **Express.js**, **Apollo Server**, and **Next.js (App Router)**. The project allows users to **view, add, update, and delete books** using GraphQL API with an in-memory database.

## Features

- **GraphQL API** for CRUD operations (Create, Read, Update, Delete)
- **Next.js (App Router)** as the frontend framework
- **Apollo Client** for GraphQL data fetching
- **Express.js with Apollo Server** as the backend GraphQL server
- **CORS support** for cross-origin requests
- **In-memory data storage** (mock database for testing)

## Tech Stack

### Backend

- **Node.js** with **Express.js**
- **GraphQL** with **Apollo Server**
- **CORS Middleware** for API security
- **GraphQL Playground** for API testing

### Frontend

- **Next.js (App Router)**
- **Apollo Client** for GraphQL queries & mutations
- **React Components** for UI

## Installation

### 1. Clone the Repository

```sh
git clone https://github.com/your-repo/graphql-book-management.git
cd graphql-book-management
```

### 2. Install Dependencies

#### Backend

```sh
cd server
npm install
```

#### Frontend

```sh
cd client
npm install
```

### 3. Run the Backend Server

```sh
cd server
node server.js
```

The GraphQL API will be available at: **http://localhost:4000/graphql**

### 4. Run the Frontend (Next.js)

```sh
cd client
npm run dev
```

The frontend will be available at: **http://localhost:3000**

## GraphQL API

### Queries

Go to [apollographql](http://localhost:4000/graphql)

#### Fetch All Books

```graphql
query GetBooks {
  books {
    id
    title
    author
  }
}
```

#### Fetch a Book by ID

```graphql
query GetBook($id: ID!) {
  book(id: $id) {
    id
    title
    author
  }
}
```

### Mutations

#### Add a New Book

```graphql
mutation AddBook($title: String!, $author: String!) {
  addBook(title: $title, author: $author) {
    id
    title
    author
  }
}
```

#### Update a Book

```graphql
mutation UpdateBook($id: ID!, $title: String, $author: String) {
  updateBook(id: $id, title: $title, author: $author) {
    id
    title
    author
  }
}
```

#### Delete a Book

```graphql
mutation DeleteBook($id: ID!) {
  deleteBook(id: $id) {
    id
  }
}
```

## Project Structure

```
/graphql-book-management
│── server               # Backend API (Express + Apollo Server)
│   ├── data.js          # Mock database
│   ├── schema.js        # GraphQL schema
│   ├── server.js        # Express server setup
│   └── package.json     # Dependencies & scripts
│
│── client               # Frontend (Next.js App Router)
│   ├── src/app          # Next.js App Router structure
│   │   ├── page.js      # Home page
│   ├── package.json     # Dependencies & scripts
│
└── README.md            # Project documentation
```
