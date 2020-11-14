import React, { useEffect, useState } from "react";
import {Posts} from "./Posts";

export default function PostsContainer() {
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totPages, setTotPages] = useState<number>(1);

  useEffect(() => {
    async function loadPosts(page: number) {
      const response = await fetch(
        "https://blog.playstation.com/wp-json/wp/v2/posts?page=" + page
      );
      if (!response.ok) {
        // Not a 200 response! return...
        return;
      }
      // Get total number of pages from the WP response headers
      const totalPages = await response.headers.get("x-wp-totalpages");
      // Get the next 10 posts
      const posts = await response.json();
      // Modify state variable posts
      setPosts(posts);
      // Modify state variable totPages
      setTotPages(Number(totalPages));
    }
    // call loadPosts when component PostsContainer renders
    loadPosts(page);
  }, [page]);

  // Update page with the value of the page of the NextButton
  // this will also update trigger the useEffect which will render 10 more posts
  function handleClickNextPage(newPage: number) {
    setPage(newPage);
  }
  

  return (
    <Posts listOfPosts={posts} totPages = {totPages} handleClickNextPage={handleClickNextPage}/>
  );
}
