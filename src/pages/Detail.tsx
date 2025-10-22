import { useParams, Link } from "react-router-dom";
import PostDetail from "../components/PostDetail";
import { Post } from "../types";

// Dữ liệu tạm thời (thường sau này sẽ lấy từ API hoặc context)
const samplePosts: Post[] = [
  {
    id: 1,
    title: "Lập trình React cơ bản",
    author: "Nguyễn An",
    date: "2025-10-01",
    thumbnail: "https://picsum.photos/200",
    description: "Học cách tạo component và props trong React...",
    content:
      "React là thư viện phổ biến giúp xây dựng giao diện người dùng. Bài viết này giới thiệu component, props, và cách chia nhỏ UI trong React.",
  },
  {
    id: 2,
    title: "TypeScript cho người mới bắt đầu",
    author: "Bình An",
    date: "2025-10-10",
    thumbnail: "https://picsum.photos/201",
    description: "Giới thiệu về TypeScript và cách kết hợp với React...",
    content:
      "TypeScript giúp tăng tính an toàn khi code JavaScript bằng cách thêm kiểu dữ liệu. Kết hợp React + TS giúp phát hiện lỗi sớm hơn và dễ bảo trì.",
  },
];

const Detail = () => {
  const { id } = useParams();
  const post = samplePosts.find((p) => p.id === Number(id));

  if (!post) {
    return <p className="text-center text-red-500">Không tìm thấy bài viết.</p>;
  }

  return (
    <div className="p-4">
      <PostDetail post={post} />
      <div className="text-center mt-4">
        <Link
          to={`/posts/edit/${post.id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sửa bài viết
        </Link>
      </div>
    </div>
  );
};

export default Detail;
