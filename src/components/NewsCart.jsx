import React from "react";
import { ThumbsUp,ThumbsDown,Eye } from 'lucide-react';
import { Link } from "react-router-dom";

const NewsCart = ({item}) => {
  return (
    <Link to={`/news/${item.id}`}  className="card bg-base-100  shadow-sm hover:border-primary border border-base-100 duration-150 min-h-100">
      <div className="card-body mt-5">
        <h2 className="card-title text-primary">{item.title}</h2>
        <p>{item.body}</p>
        <div className="flex justify-between mt-3">
          <div className="flex items-center gap-2 "> <Eye/> {item.views}</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-md hover:text-blue-500">
              <ThumbsUp className=" cursor-pointer duration-200" /> {item.reactions.likes}
            </div>
            <div className="flex items-center gap-1 text-md hover:text-red-500">
              <ThumbsDown className="  cursor-pointer duration-200"  /> {item.reactions.dislikes}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCart;
