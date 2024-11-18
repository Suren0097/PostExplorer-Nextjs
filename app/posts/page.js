"use client";

import { useEffect, useState } from "react";

export default function Items() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/data/posts.json")
      .then((response) => response.json())
      .then((data) => setPosts(data)) // Fetch only the first 10 posts
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold mb-4 pl-4">Posts</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <li key={post.id} className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
