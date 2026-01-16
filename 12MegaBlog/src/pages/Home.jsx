import React from "react";
import { Container, PostCard } from "../components/index";
import service from "../appwrite/config";
import { useState, useEffect } from "react";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service.getPosts().then((response) => {
      if (response) {
        setPosts(response.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-12">
        <Container>
          <div className="flex justify-center">
            <h1 className="text-lg font-medium text-slate-600 text-center">
              Login to read posts
            </h1>
          </div>
        </Container>
      </div>
    );
  }

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

export default Home;
