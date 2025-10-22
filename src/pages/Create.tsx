import PostForm from "../components/PostForm";
import { useNavigate } from "react-router-dom";
import { Post } from "../types";

const Create = () => {
  const navigate = useNavigate();
  const handleSubmit = (post: Post) => {
    console.log("Bài viết mới:", post);
    navigate("/");
  };
  return <PostForm onSubmit={handleSubmit} />;
};

export default Create;
