import React, { createContext, useEffect, useState } from "react";

import axios from "axios";

const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchBooks = async () => {
      await axios
        .get("https://gutendex.com/books")
        .then((res) => {
          let data = res.data;
          setbooks(data.results);
          setloading(false);
        })
        .catch(console.error);
    };
    fetchBooks();
  }, []);

  const [books, setbooks] = useState([]);

  return (
    <BooksContext.Provider
      value={{
        books,
        setbooks,
        loading,
        setloading,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export default BooksContext;
