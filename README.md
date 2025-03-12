# GraphQL Book Management

這是一個基於 **GraphQL + Express + Apollo Server + Next.js** 的書籍管理應用程式，提供 **新增、刪除、更新、查詢** ，書籍的功能，可以直接使用 CRUD 無需連接資料庫。

## 🚀 功能

✅ 查詢所有書籍 (Read)
✅ 新增書籍 (Create)
✅ 刪除書籍 (Delete)
✅ 更新書籍 (Update)

## 🛠 技術棧

- **後端**: Node.js, Express, Apollo Server, GraphQL
- **前端**: Next.js, React, Apollo Client

---

## 📌 安裝與執行

### 1️⃣ **克隆專案**

```sh
  git clone https://github.com/your-repo/graphql-book-management.git
  cd graphql-book-management
```

### 2️⃣ **安裝後端依賴** (Server)

```sh
  cd server
  npm install
```

### 3️⃣ **啟動 GraphQL 伺服器**

```sh
  node server.js
```

> 預設 GraphQL 伺服器運行在 `http://localhost:4000/graphql`

### 4️⃣ **安裝前端依賴** (Client)

```sh
  cd ../client
  npm install
```

### 5️⃣ **啟動 Next.js 前端**

```sh
  npm run dev
```

> 預設前端運行在 `http://localhost:3000`

---

## 📜 GraphQL API 定義

### **查詢所有書籍**

```graphql
query GetBooks {
  books {
    id
    title
    author
  }
}
```

### **新增書籍**

```graphql
mutation AddBook($title: String!, $author: String!) {
  addBook(title: $title, author: $author) {
    id
    title
    author
  }
}
```

### **刪除書籍**

```graphql
mutation DeleteBook($id: ID!) {
  deleteBook(id: $id) {
    id
    title
  }
}
```

### **更新書籍**

```graphql
mutation UpdateBook($id: ID!, $title: String, $author: String) {
  updateBook(id: $id, title: $title, author: $author) {
    id
    title
    author
  }
}
```

---

## 📂 專案目錄結構

```
/graphql-book-management
 ├── server               # 後端目錄 (GraphQL API)
 │   ├── server.js        # Express 伺服器
 │   ├── schema.js        # GraphQL Schema (定義 Query & Mutation)
 │   └── package.json     # 伺服器依賴
 │
 ├── client               # 前端目錄 (Next.js)
 │   ├── pages/index.js   # 前端主頁
 │   ├── package.json     # 前端依賴
 │   └── ...
```
