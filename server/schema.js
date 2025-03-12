const { gql } = require("apollo-server-express");
const { books } = require("./data");
// 模擬的資料庫

// 定義 GraphQL Schema
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book] # 查詢所有書籍
    book(id: ID!): Book # 查詢單本書籍
  }

  type Mutation {
    addBook(title: String!, author: String!): Book # 新增書籍
    updateBook(id: ID!, title: String, author: String): Book # 更新書籍
    deleteBook(id: ID!): Book # 刪除書籍
  }
`;

// 定義 Resolvers
const resolvers = {
  Query: {
    books: () => books, // 回傳所有書籍
    book: (_, { id }) => books.find((book) => book.id === id), // 根據 ID 查詢書籍
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const newBook = { id: String(books.length + 1), title, author };
      books.push(newBook);
      return newBook;
    },
    updateBook: (_, { id, title, author }) => {
      const bookIndex = books.findIndex((book) => book.id === id);
      if (bookIndex === -1) return null;
      if (title) books[bookIndex].title = title;
      if (author) books[bookIndex].author = author;
      return books[bookIndex];
    },
    deleteBook: (_, { id }) => {
      const bookIndex = books.findIndex((book) => book.id === id);
      if (bookIndex === -1) return null;
      const deletedBook = books[bookIndex];
      books.splice(bookIndex, 1);
      return deletedBook;
    },
  },
};

// 建立 Schema

module.exports = { typeDefs, resolvers };
