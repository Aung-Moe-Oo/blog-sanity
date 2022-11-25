import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../client.js";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
      title,
      slug,
      body,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);
  return (
    <>
      <section className="px-5 2xl:max-w-7xl 2xl:mx-auto">
        <h1 className="font-bold text-4xl md:text-5xl text-center my-5 md:my-10 tracking-widest">
          Blog Page
        </h1>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
          {posts.map((post) => (
            <article key={post.slug.current}>
              <img src={post.mainImage.asset.url} alt={post.title} />
              <h4 className="text-xl font-semibold py-1">{post.title}</h4>
              <div className="mt-5 mb-10">
                <Link
                  to={`/blog/${post.slug.current}`}
                  className="py-2 px-6 rounded shadow text-white bg-black uppercase hover:bg-transparent hover:text-black border-2 border-black transition-all duration-500"
                >
                  Read Full Article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
