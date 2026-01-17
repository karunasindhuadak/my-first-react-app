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
          rounded-lg
          p-4
          transition
          duration-200
          hover:shadow-sm
          hover:border-slate-300
        "
      >
        {featuredImage && (
          <div className="w-full mb-3 rounded-md overflow-hidden bg-slate-50">
            <img
              src={service.getFilePreview(featuredImage)}
              alt={title}
              className="w-full h-48 object-contain"
            />
          </div>
        )}

        <h2 className="text-sm font-medium text-slate-800 leading-snug line-clamp-2">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
