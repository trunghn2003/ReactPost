import { useEffect, useState } from "react";

export default function Posts() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://7fgpgz-8080.csb.app/api/posts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPost(data);
      });
  }, []);
  console.log(post);
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      {post.length > 0 && (
        <>
          {post.map((item, index) => (
            <li key={index}>
              <a href="#">{item.slug} </a>
            </li>
          ))}
        </>
      )}
    </div>
  );
}
