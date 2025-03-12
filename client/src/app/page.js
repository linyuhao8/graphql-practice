"use client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  useMutation,
} from "@apollo/client";

// 設置 Apollo Client
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

// 定義 GraphQL 查詢
const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author
    }
  }
`;

// 定義 GraphQL 變更
const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      id
      title
      author
    }
  }
`;
// 刪除書籍
const DELETE_BOOK = gql`
  mutation DeleteBook($id: ID!) {
    deleteBook(id: $id) {
      id
      title
    }
  }
`;

// 更新書籍
const UPDATE_BOOK = gql`
  mutation UpdateBook($id: ID!, $title: String, $author: String) {
    updateBook(id: $id, title: $title, author: $author) {
      id
      title
      author
    }
  }
`;
// 書籍列表組件
const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [deleteBook] = useMutation(DELETE_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });

  if (loading) return <p>loading...</p>;
  if (error) return <p>error 😢</p>;

  return (
    <div className="mt-10">
      <h2>Books List</h2>
      <ul>
        {data.books.map((book) => (
          <li key={book.id}>
            {book.id} - {book.title} - {book.author}
            <button onClick={() => deleteBook({ variables: { id: book.id } })}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
// 新增書籍表單
const AddBook = () => {
  const [addBook] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });

  let titleInput, authorInput;

  return (
    <div className="input-btn">
      <h2>Add Book</h2>
      <div>
        <input ref={(node) => (titleInput = node)} placeholder="book name" />
        <input ref={(node) => (authorInput = node)} placeholder="author" />
      </div>

      <button
        onClick={() => {
          addBook({
            variables: { title: titleInput.value, author: authorInput.value },
          });
          titleInput.value = "";
          authorInput.value = "";
        }}
      >
        Add
      </button>
    </div>
  );
};
// 更新書籍表單
const UpdateBook = () => {
  const [updateBook] = useMutation(UPDATE_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });

  let idInput, titleInput, authorInput;

  return (
    <div className="input-btn">
      <h2>Update Book</h2>
      <div>
        <input ref={(node) => (idInput = node)} placeholder="ID" />
        <input ref={(node) => (titleInput = node)} placeholder="book name" />
        <input ref={(node) => (authorInput = node)} placeholder="author" />
      </div>
      <button
        onClick={() =>
          updateBook({
            variables: {
              id: idInput.value,
              title: titleInput.value || undefined,
              author: authorInput.value || undefined,
            },
          })
        }
      >
        update
      </button>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <ApolloProvider client={client}>
        <h1>GraphQL book management</h1>
        <AddBook />
        <UpdateBook />
        <BookList />
      </ApolloProvider>
    </>
  );
}
