import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div>
      <div className="flex flex-row justify-around lg:justify-between my-5 items-center">
        <Link to="/">
          <h1 className="font-bold text-3xl cursor-pointer">Booksy</h1>
        </Link>

        <form className="relative ">
          <input
            className=" placeholder:absolute placeholder:left-[5px] relative border rounded border-none bg-[#F5F7F8] py-1 px-[20px] lg:px-[120px] my:px-[120px] md:py-2 lg:py-2  "
            placeholder="Search by author"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute bottom-[30%] right-0 px-3"
          />
        </form>
        <div className="hidden  lg:flex md:flex flex-row items-center w-[100px] justify-around ">
          <FontAwesomeIcon className="text-xl" icon={faHeart} />
          <p className="bg-[#0B0754] cursor-pointer rounded-[50%] px-[8px] py-[1px] text-center text-white text-xl items-center">
            O
          </p>
          <p className="text-xl">EN</p>
        </div>
      </div>
      <div className="  flex justify-center my-5 items-center">
        <div>
          <ul className="text-[#bec0c2] flex flex-row my-5 ">
            <Link to="/">
              <li className="list">Home</li>
            </Link>
            <li className="list">Bestseller</li>
            <li className="list">Category</li>
            <li className="list">Find a store</li>
            <li className="list">Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
