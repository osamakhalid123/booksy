import { BooksContext, BooksProvider } from "./Context_Api/Context";
import React, { createContext, useContext, useEffect, useState } from "react";

import Banner from "./Components/Banner";
import BooksList from "./Components/BooksList";
import NavBar from "./Components/NavBar";
import axios from "axios";

// export const BooksContext = createContext();
function App() {
  // const [loading, setloading] = useState(true);
  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     await axios
  //       .get("https://gutendex.com/books")
  //       .then((res) => {
  //         let data = res.data;
  //         setbooks(data.results);
  //         setloading(false);
  //         console.log(data.results);
  //       })
  //       .catch(console.error);
  //   };
  //   fetchBooks();
  // }, []);

  // const [books, setbooks] = useState([]);
  return (
    <BooksProvider>
      <div className="lg:w-[80%] md:w-[80%] m-auto">
        <NavBar />
        <Banner />
        <BooksList />
      </div>
    </BooksProvider>
  );
}

export default App;
