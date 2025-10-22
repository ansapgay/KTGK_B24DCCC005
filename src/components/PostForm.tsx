import { useState } from "react";
import type { Post } from "../types";

interface Props {
  onSubmit: (post: Post) => void;
  initialData?: Post;
}

import "./PostForm.css";

const PostForm = ({ onSubmit, initialData }: Props) => {
  const [formData, setFormData] = useState<Post>(
    initialData || {
      id: Date.now(),
      title: "",
      author: "",
      date: new Date().toISOString().slice(0, 10),
      thumbnail: "",
      description: "",
      content: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Tiêu đề" />
      <input name="author" value={formData.author} onChange={handleChange} placeholder="Tác giả" />
      <input name="thumbnail" value={formData.thumbnail} onChange={handleChange} placeholder="URL ảnh" />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Mô tả ngắn" />
      <textarea name="content" value={formData.content} onChange={handleChange} placeholder="Nội dung" />
      <button type="submit">Lưu bài viết</button>
    </form>
  );
};

export default PostForm;
