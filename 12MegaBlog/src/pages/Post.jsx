import React from "react";
import service from "../appwrite/config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Button } from "../components/index";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((postData) => {
        if (postData) {
          setPost(postData);
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (!status) return;
      service.deleteFile(post.featuredImage);
      navigate("/");
    });
  };

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  return post ? (
    <div className="w-full py-8">
      <Container>
        {/* Featured image */}
        <div className="relative mb-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <img
            src={service.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="w-full max-h-[420px] object-contain"
          />

          {isAuthor && (
            <div className="absolute top-4 right-4 flex gap-2">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>

        {/* Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-800">
            {post.title}
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : null;
}

export default Post;
