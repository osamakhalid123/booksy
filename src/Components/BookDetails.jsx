import React, { useContext } from "react";

import BooksContext from "../Context_Api/Context";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { books } = useContext(BooksContext);
  const { BookId } = useParams();
  const thisBook = books.find((book) => {
    return book.id == BookId;
  });
  return (
    <div
      key={thisBook.id}
      className="flex flex-col md:flex-row md:justify-center  mt-[100px]"
    >
      <div className="mx-auto md:mr-0 md:ml-4 flex justify-center md:justify-start ">
        <img
          className=" w-[300px] h-[350px]"
          src={thisBook.formats[`image/jpeg`]}
          alt=""
        />
      </div>

      <div className=" flex flex-col text-center md:mr-4 md:w-[550px] md:text-start mx-auto md:ml-[40px] ">
        <h1 className="font-bold my-3 text-2xl ">{thisBook.title}</h1>
        {thisBook.authors.map((author) => {
          return <p className="text-[#D0C7C0] my-3"> by {author.name}</p>;
        })}
        <div className="color-red-500 space-y-2">
          <p> lang:{thisBook.languages}</p>
          <p>Number Of Downloads: {thisBook.download_count}</p>
          <p>Category: {thisBook.bookshelves}</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
