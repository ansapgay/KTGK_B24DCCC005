import PostForm from "../components/PostForm";
import { useParams, useNavigate } from "react-router-dom";
import type { Post } from "../types";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (post: Post) => {
    console.log("Cập nhật bài viết:", post);
    navigate(`/posts/${id}`);
  };

  return <PostForm onSubmit={handleSubmit} />;
};

export default Edit;

