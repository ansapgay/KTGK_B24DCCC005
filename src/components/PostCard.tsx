import { Link } from "react-router-dom";
import type { Post } from "../types";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg p-3">
      <img src={post.thumbnail} alt={post.title} className="rounded-md mb-2" />
      <h3 className="font-semibold text-lg">{post.title}</h3>
      <p className="text-sm text-gray-500">
        {post.author} - {post.date}
      </p>
      <p className="text-gray-700 mt-2">
        {post.description.slice(0, 100)}...
      </p>
      <Link
        to={`/posts/${post.id}`}
        className="text-blue-500 font-semibold mt-2 inline-block"
      >
        Đọc thêm
      </Link>
    </div>
  );
};

export default PostCard;
