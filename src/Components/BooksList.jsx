import React, { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";
import { Rings } from "react-loader-spinner";
import axios from "axios";

function BooksList() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchBooks = async () => {
      await axios
        .get("https://gutendex.com/books")
        .then((res) => {
          let data = res.data;
          setbooks(data.results);
          setloading(false);
          console.log(data.results);
        })
        .catch(console.error);
    };
    fetchBooks();
  }, []);

  const [books, setbooks] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const articlePerPage = 9;
  const pagesVisited = pageNumber * articlePerPage;

  const displayarticle = books
    .slice(pagesVisited, pagesVisited + articlePerPage)
    .map((book) => {
      return (
        <div
          key={book.id}
          className="flex flex-col justify-center mx-auto mb-3 "
        >
          <img
            className=" w-[250px] h-[300px] mx-auto lg:mx-0"
            src={book.formats[`image/jpeg`]}
            alt=""
          />
          <div className="mx-5 lg:mx-0">
            <h1 className="font-bold my-3 ">{book.title}</h1>
            {book.authors.map((author) => {
              return <p className="text-[#D0C7C0]">{author.name}</p>;
            })}
          </div>
        </div>
      );
    });
  const pageCount = Math?.ceil(books?.length / articlePerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className="flex justify-between mb-6 mx-3 lg:mx-0">
        <h1 className="font-bold text-2xl">Popular Now</h1>
        <p className="text-[#D0C7C0] text-xl cursor-pointer">View All</p>
      </div>

      {loading ? (
        <div className="my-5 flex justify-center">
          <Rings
            height="80"
            width="80"
            radius="9"
            color="#0B0754"
            ariaLabel="three-dots-loading"
            wrapperClass
            wrapperStyle
          />
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-6 mx-auto ">
          {displayarticle}
        </div>
      )}

      <div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="bg-[#92B5F9] flex my-8 text-xl w-fit rounded-lg h-[40px] justify-center md:mx-auto mx-auto items-center px-3"
          previousLinkClassName="px-3"
          nextLinkClassName="px-3"
          disabledClassName="text-[#0B0754]"
          activeClassName="text-[#FA7167]"
          pageClassName=" px-2 lg:px-4 md:px-4 "
        />
      </div>
    </div>
  );
}

export default BooksList;
