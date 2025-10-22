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
    <div className="post-table-wrap">
      <table className="post-table">
        <thead>
          <tr>
            <th>Ảnh</th>
            <th>Tiêu đề</th>
            <th>Tác giả</th>
            <th>Ngày</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="thumb"><img src={post.thumbnail} alt={post.title} /></td>
              <td className="title">{post.title}</td>
              <td className="author">{post.author}</td>
              <td className="date">{post.date}</td>
              <td className="actions">
                <a href={`/posts/${post.id}`}>Xem</a>
                <a href={`/posts/edit/${post.id}`} style={{marginLeft: '0.5rem'}}>Sửa</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
