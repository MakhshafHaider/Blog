import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import HomeLatestPosts from "../components/HomeLatestPosts";
import axios from "axios";
import HomeHeader from "@/components/HomeHeader";
import About from "@/components/About";
import Navbar from "@/components/Navbar";

// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <>
      <HomeHeader />
      <HomeLatestPosts posts={posts} />
      <About />
    </>
  );
}

export async function getServerSideProps() {
  // const response = await axios.get("http://localhost:1337/api/posts");
  const response = await axios.get(
    "http://localhost:1337/api/posts?populate=Image"
  );

  // console.log(response.data.data);
  return {
    props: {
      posts: response.data.data,
    },
  };
}
