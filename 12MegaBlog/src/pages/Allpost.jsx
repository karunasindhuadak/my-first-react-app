import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components/index";
import service from "../appwrite/config";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service.getPosts().then((response) => {
      if (response) {
        setPosts(response.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {posts.map((post) => (
            <div key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
