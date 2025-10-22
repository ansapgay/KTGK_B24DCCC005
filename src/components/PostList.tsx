import { useState } from "react";
import type { Post } from "../types";
import PostCard from "./PostCard";
import "./PostList.css";

const PostList = () => {
  const [posts] = useState<Post[]>([
    {
      id: 1,
      title: "Lập trình React cơ bản",
      author: "Nguyễn An",
      date: "2025-10-01",
      thumbnail: "https://picsum.photos/200",
      description: "Học cách tạo component và props trong React...",
      content: "Nội dung chi tiết bài viết về React..."
    },
    {
      id: 2,
      title: "TypeScript cho người mới bắt đầu",
      author: "Bình An",
      date: "2025-10-10",
      thumbnail: "https://picsum.photos/201",
      description: "Giới thiệu về TypeScript và cách kết hợp với React...",
      content: "Nội dung chi tiết bài viết TypeScript..."
    },
  ]);

  return (
  <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
