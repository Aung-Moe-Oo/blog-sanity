import SanityBlockContent from "@sanity/block-content-to-react";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../client.js";

const Single = () => {
  const [singlePost, setSinglePost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
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
      .then((data) => {
        return setSinglePost(data[0]);
      })
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [slug]);
  return (
    <section className="p-5 xl:max-w-6xl xl:mx-auto">
      {isLoading ? (
        <h1 className="text-xl font-semibold py-1">Loading...</h1>
      ) : (
        <>
          <h1 className="font-bold text-2xl md:text-4xl text-center my-5 md:my-10 tracking-widest">
            {singlePost.title}
          </h1>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
              className="md:h-96 rounded"
            />
          )}
          <p className="text-xl my-4">By David</p>

          <div className="text-xl my-4">
            <SanityBlockContent
              blocks={singlePost.body}
              projectId={"bhr4aqk9"}
              dataset={"production"}
            ></SanityBlockContent>
          </div>

          <button className="py-2 px-6 rounded shadow text-white bg-black uppercase hover:bg-transparent hover:text-black border-2 border-black transition-all duration-500">
            <Link to={`/blog`}>Read More Articles</Link>
          </button>
        </>
      )}
    </section>
  );
};

export default Single;
