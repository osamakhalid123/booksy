import { BrowserRouter, Route, Routes } from "react-router-dom";

import Banner from "./Components/Banner";
import BookDetails from "./Components/BookDetails";
import BooksList from "./Components/BooksList";
import { BooksProvider } from "./Context_Api/Context";
import NavBar from "./Components/NavBar";
import React from "react";

function App() {
  return (
    <BooksProvider>
      <BrowserRouter>
        <>
          <div className="lg:w-[80%] md:w-[80%] m-auto">
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Banner />
                    <BooksList />
                  </>
                }
              />
            </Routes>
          </div>
          <Routes>
            <Route path="/:BookId" element={<BookDetails />} />
          </Routes>
        </>
      </BrowserRouter>
    </BooksProvider>
  );
}

export default App;
