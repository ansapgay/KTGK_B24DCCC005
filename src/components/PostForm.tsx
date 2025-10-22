import { useState } from "react";
import type { Post } from "../types";

interface Props {
  onSubmit: (post: Post) => void;
  initialData?: Post;
}

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-xl mx-auto">
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Tiêu đề" className="border p-2" />
      <input name="author" value={formData.author} onChange={handleChange} placeholder="Tác giả" className="border p-2" />
      <input name="thumbnail" value={formData.thumbnail} onChange={handleChange} placeholder="URL ảnh" className="border p-2" />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Mô tả ngắn" className="border p-2" />
      <textarea name="content" value={formData.content} onChange={handleChange} placeholder="Nội dung" className="border p-2" />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded">Lưu bài viết</button>
    </form>
  );
};

export default PostForm;
