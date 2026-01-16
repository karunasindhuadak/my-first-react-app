import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div
        className="
          w-full
          bg-white
          border border-slate-200
          rounded-xl
          p-4
          transition-shadow duration-200
          hover:shadow-md
        "
      >
        {featuredImage && (
          <div className="w-full mb-3 overflow-hidden rounded-lg">
            <img
              src={service.getFilePreview(featuredImage)}
              alt={title}
              className="w-full h-48 object-cover"
            />
          </div>
        )}

        <h2 className="text-base font-semibold text-slate-800 line-clamp-2">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
