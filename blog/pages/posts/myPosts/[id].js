import React from "react";
import axios from "axios";
import Image from "next/image";
import MarkdownIt from "markdown-it";

export default function PostPage({ post }) {
  const md = new MarkdownIt({
    html: true
  });
  let BACKEND = process.env.BACKEND_STRAPI;
  console.log(BACKEND);
  const htmlContent = md.render(post.attributes.content);
  return (
    <div className="blog_post"> 
            <div>
        <Image
          src={
            "http://localhost:1337"+post?.attributes?.Image?.data?.attributes?.formats?.large?.url ?? ""
          }
          alt="My Image"
          width={1125}
          height={650}
          className="card__image"
          priority
        />

        {/* {post.attributes.Image ? (
          <Image
            src={
              "http://localhost:1337" +
              post.attributes.Image.data.attributes.formats.small.url
            }
            alt="My Image"
            width={100}
            height={100}
          />
        ) : (
          <p>No image available</p>
        )} */}
      </div>

      <div className="">
        <h1 className="blogs_title">{post.attributes.Title}</h1>
        <p className="blogs_description">{post.attributes.content}</p>
      </div>
      <section dangerouslySetInnerHTML={{ __html: htmlContent }}></section>
    </div>
  );
}

export async function getStaticProps({ params }) {
  // http://localhost:1337/api/posts?populate=Image
  const response = await axios.get(
    `http://localhost:1337/api/posts/${params.id}?populate=Image`
  );
  // console.log("id is", response.data.data);
  return {
    props: {
      post: response.data.data,
    },
  };
}

export async function getStaticPaths() {
  const response = await axios.get(
    "http://localhost:1337/api/posts?populate=Image"
  );

  const paths = response.data.data.map((post) => {
    return { params: { id: post.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}
