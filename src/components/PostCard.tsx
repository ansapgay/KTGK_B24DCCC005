import { Link } from "react-router-dom";
import "./PostCard.css";
import type { Post } from "../types";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <div className="post-card">
      <img src={post.thumbnail} alt={post.title} />
      <h3>{post.title}</h3>
      <p className="meta">{post.author} - {post.date}</p>
      <p className="excerpt">{post.description.slice(0, 100)}...</p>
      <Link to={`/posts/${post.id}`} className="read-more">Đọc thêm</Link>
    </div>
  );
};

export default PostCard;
