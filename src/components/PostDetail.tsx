import type { Post } from "../types";

interface Props {
  post: Post;
}

const PostDetail = ({ post }: Props) => {
  return (
    <div className="max-w-3xl mx-auto border rounded-lg shadow p-6">
      <img
        src={post.thumbnail}
        alt={post.title}
        className="w-full rounded-lg mb-4"
      />
      <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-500 mb-4">
        Tác giả: {post.author} • Ngày đăng: {post.date}
      </p>
      <p className="text-lg text-gray-700 mb-4">{post.description}</p>
      <div className="text-gray-800 leading-relaxed whitespace-pre-line">
        {post.content}
      </div>
    </div>
  );
};

export default PostDetail;
