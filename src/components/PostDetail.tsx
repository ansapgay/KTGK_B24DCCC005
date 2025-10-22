import type { Post } from "../types";
import "./PostDetail.css";

interface Props {
  post: Post;
}

const PostDetail = ({ post }: Props) => {
  return (
    <div className="post-detail">
      <img src={post.thumbnail} alt={post.title} />
      <h2>{post.title}</h2>
      <p className="meta">Tác giả: {post.author} • Ngày đăng: {post.date}</p>
      <p className="description">{post.description}</p>
      <div className="content">{post.content}</div>
    </div>
  );
};

export default PostDetail;
