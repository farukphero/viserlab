"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Card,
  CardBody,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { FaStar } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";

const Cards = ({ cards }) => {
  // pagination

  const [limit, setLimit] = useState(9);
  const [currentPage, setCurrentPage] = useState(
    Number(sessionStorage.getItem("product")) || 1
  );
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  useEffect(() => {
    sessionStorage.setItem("product", currentPage.toString());
  }, [currentPage]);

  useEffect(() => {
    const storedPage = Number(sessionStorage.getItem("product")) || 1;
    setCurrentPage(storedPage);
    setMaxPageNumberLimit(
      Math.ceil(storedPage / pageNumberLimit) * pageNumberLimit
    );
    setMinPageNumberLimit(
      Math.ceil(storedPage / pageNumberLimit - 1) * pageNumberLimit
    );
  }, [pageNumberLimit]);

  const handleClick = (e) => {
    const pageNumber = Number(e.target.id);
    setCurrentPage(pageNumber);
    sessionStorage.setItem("product", pageNumber.toString());
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(cards?.length / limit); i++) {
    pages.push(i);
  }

  const renderPagesNumber = pages?.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={
            currentPage === number
              ? "bg-green-500 text-white px-3 rounded cursor-pointer"
              : "cursor-pointer text-black border border-green-500 px-3 rounded"
          }
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const lastIndex = currentPage * limit;
  const startIndex = lastIndex - limit;

  let currentItems;
  if (Array.isArray(cards)) {
    currentItems = cards.slice(startIndex, lastIndex);
  } else {
    currentItems = [];
  }

  const renderData = (cards) => {
    return (
      <div className="my-10 lg:w-[85%] lg:mx-auto mx-5">
        <div className="mb-8 lg:flex justify-between">
          <h1 className="text-2xl font-semibold mb-4 lg:mb-0">Digital Items</h1>
          <div className="lg:flex gap-x-5">
            <div className="lg:flex items-center gap-x-1 relative">
              <h2 className=" whitespace-nowrap text-sm text-gray-600 mb-1 lg:mb-0">
                Search Product
              </h2>
              <Input label="Search Product" className=" outline-none pr-7" />

              <button>
                <IoIosSearch className="absolute top-8 lg:top-[10px] text-gray-400 right-1 h-6 w-6" />
              </button>
            </div>
            <div className="lg:flex items-center gap-x-1 relative mt-2 lg:mt-0">
              <h2 className="text-sm text-gray-600 mb-1 lg:mb-0 whitespace-nowrap">
                Sort by
              </h2>
              <Select color="black" label="Sort by">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {cards.map((card) => (
            <Link key={card.price} href={`/product/${card.title}`}>
              <Card>
                <Image
                  src={card.image}
                  alt="card-image"
                  className="rounded-t-md"
                />

                <CardBody>
                  <Typography
                    color="blue-gray"
                    className="mb-2 text-sm font-bold"
                  >
                    {card.title}
                  </Typography>
                  <div className="flex justify-between">
                    <Typography className="flex gap-x-1 text-[#FDB63A] mt-[6px]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </Typography>
                    <button className="border px-2 py-[3px] rounded hover:bg-[#0088FF] hover:text-white font-medium duration-700 ease-in-out">
                      live preview
                    </button>
                  </div>
                  <div className="border-b-2 py-2"></div>
                  <div className="mt-2 flex justify-between mb-0 pb-0">
                    <div className="flex items-center gap-x-3 ">
                      <card.icon className="h-8 w-8 mt-1 bg-red-400/30 text-red-400 p-2 rounded" />
                      <h1 className="text-red-400 text-sm font-medium">
                        {card.course}
                      </h1>
                    </div>
                    <div className=" font-bold">$ {card.price}</div>
                  </div>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  const handlePrevious = () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    sessionStorage.setItem("product", newPage.toString());

    if (newPage % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const handleNext = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    sessionStorage.setItem("product", newPage.toString());

    if (newPage > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages?.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li
        onClick={() => handleClick({ target: { id: maxPageNumberLimit + 1 } })}
        className="cursor-pointer text-black pl-1"
      >
        &hellip;
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (currentPage > pageNumberLimit) {
    pageDecrementBtn = (
      <li
        onClick={() => handleClick({ target: { id: minPageNumberLimit } })}
        className="cursor-pointer text-black pr-1"
      >
        &hellip;
      </li>
    );
  }

  return (
    <section>
      {renderData(currentItems)}
      <ul
        className={
          minPageNumberLimit < 5
            ? "flex justify-center gap-2 md:gap-4 pb-5 mt-6"
            : "flex justify-center gap-[5px] md:gap-2 pb-5 mt-6"
        }
      >
        <button
          onClick={handlePrevious}
          disabled={currentPage === pages[0] ? true : false}
          className={
            currentPage === pages[0] ? "text-gray-200" : "text-gray-600"
          }
        >
          Previous
        </button>
        <span className={minPageNumberLimit < 5 ? "hidden" : "inline"}>
          {pageDecrementBtn}
        </span>
        {renderPagesNumber}
        {pageIncrementBtn}
        <button
          onClick={handleNext}
          disabled={currentPage === pages[pages?.length - 1] ? true : false}
          className={
            currentPage === pages[pages?.length - 1]
              ? "text-gray-300"
              : "text-gray-700 pl-1"
          }
        >
          Next
        </button>
      </ul>
    </section>
  );
};

export default Cards;
