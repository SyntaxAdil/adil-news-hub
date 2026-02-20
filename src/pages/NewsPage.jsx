import React, { useState } from "react";
import { useNews } from "../context/News";
import NewsCart from "./../components/NewsCart";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NewsPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const {
    posts,

    isNextDisable,
    isPrevDisable,
    totalPages,
    isLoading,
    currentPage,
    handleIncreaseSkip,
    handleDecreaseSkip,
  } = useNews();

  const handleSearch = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const filterPosts=posts.filter(i=>i.title.toLowerCase().includes(searchInput.toLocaleLowerCase()));
  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col items-center gap-5">
            <span className="loading loading-spinner loading-lg text-primary"></span>
            <h2 className="text-xl font-bold text-primary animate-pulse">
              Fetching Latest News...
            </h2>
          </div>
        </div>
      )}

      <section className="max-w-6xl mx-auto py-10 px-4">
        <Link
          to="/"
          className="fixed bottom-12 z-10 right-0  hover:underline flex items-center gap-1 btn btn-primary btn-soft"
        >
          <Home size={16} />
        </Link>
        <h1 className="text-primary font-bold text-3xl text-center underline">
          News & Events
        </h1>
        <div className="flex items-center justify-center">
          <label className="input outline-0  w-1/2 mt-10 ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={handleSearch}
              type="search"
              required
              placeholder="Search News..."
              className=""
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  my-8 gap-10">
          {filterPosts.map((item) => (
            <div key={item.id}>
              <NewsCart item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* 📄 Pagination */}
      <div className="join flex justify-center mt-10 mb-16">
        <button
          disabled={isPrevDisable}
          className="join-item btn"
          onClick={handleDecreaseSkip}
        >
          «
        </button>

        <button className="join-item btn btn-active">
          {`Page ${currentPage} / ${totalPages}`}
        </button>

        <button
          disabled={isNextDisable}
          className="join-item btn disabled:bg-red-300"
          onClick={handleIncreaseSkip}
        >
          »
        </button>
      </div>
    </>
  );
};

export default NewsPage;
