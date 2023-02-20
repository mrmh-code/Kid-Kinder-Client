import React, { useEffect, useState } from "react";
import Blogs from "../Blogs/Blogs";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://marketing-tix-server.onrender.com/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>

      <div
        className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
        style={{ margin: "0 4%" }}
      >


        {blogs == false ? (
          <div style={{ margin: "10rem auto" }}>
            <p>Loading.....</p>
            <div className="spinner-border p-4" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          blogs?.map((blog) => <Blogs key={blog.id} blog={blog} />)
        )}

        
      </div>
    </div>
  );
};

export default Blog;
