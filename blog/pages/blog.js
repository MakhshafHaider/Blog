import React from "react";
import axios from "axios";
import Image from "next/image";
import AllBlogs from "../components/AllBlogs";
import Navbar from '@/components/Navbar'

export default function Blog({ posts }) {
  return (
    <div>
      <p className="blog_paragraph">
        Welcome to our blog page! Here, you'll find a collection of articles and
        posts written by our team on a variety of topics related to our
        industry.
      </p>
      <p className="blog_paragraph_2">We believe in sharing our knowledge and expertise with our audience to help them make informed decisions and stay up-to-date with the latest trends and developments. Our blog is one way we do that.</p>
      <AllBlogs posts={posts} />
    </div>
  );
}

export async function getServerSideProps() {
  // const response = await axios.get("http://localhost:1337/api/posts");
  const response = await axios.get(
    "http://localhost:1337/api/posts?populate=Image"
  );
  console.log("posts", response.data.data);
  return {
    props: {
      posts: response.data.data,
    },
  };
}
