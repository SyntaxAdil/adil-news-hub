import React from "react";
import { ThumbsUp, ThumbsDown, Eye, Tag } from "lucide-react";

const FullNewsCart = ({ item }) => {
  return (
    <div className="card bg-base-100 shadow-lg  hover:shadow-2xl  transition duration-300 min-h-[300px] flex flex-col">
      <div className="card-body flex flex-col justify-between">
        
        <h2 className="card-title text-primary text-xl md:text-2xl font-bold">
          {item.title}
        </h2>

        
        <p className="text-gray-400 mt-2 text-sm md:text-base line-clamp-5">
          {item.body}
        </p>

        
        {item.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="badge badge-outline badge-primary text-xs md:text-sm"
              >
                <Tag className="w-3 h-3 inline mr-1" /> {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center mt-4 text-sm md:text-base text-gray-500">
          
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" /> {item.views || 0} Views
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition duration-200">
              <ThumbsUp className="w-4 h-4" /> {item.reactions?.likes || 0}
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-red-500 transition duration-200">
              <ThumbsDown className="w-4 h-4" /> {item.reactions?.dislikes || 0}
            </div>
          </div>
        </div>

        
        <div className="mt-3 text-gray-400 text-xs md:text-sm italic">
          Posted by User ID: {item.userId}
        </div>
      </div>
    </div>
  );
};

export default FullNewsCart;
