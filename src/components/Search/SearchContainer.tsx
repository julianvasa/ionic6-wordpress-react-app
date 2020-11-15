import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Posts } from "../Home/Posts";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

export default function PostsContainer() {
  let { searchStr } = useParams<any>();
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totPages, setTotPages] = useState<number>(1);
  const [title, setTitle] = useState<string>("Recent posts");
  const baseUrl = "https://blog.playstation.com/wp-json/wp/v2";

  useEffect(() => {
    async function loadPosts() {
      var url = baseUrl + "/posts?status=publish&page=" + page;

      if(searchStr !== undefined && searchStr !== ""){
        url = url + "&search=" + searchStr; 
        setTitle(searchStr);
      }
      const response = await fetch(url);
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
    loadPosts();
  }, [page, searchStr]);

  // Update page with the value of the page of the NextButton
  // this will also update trigger the useEffect which will render 10 more posts
  function handleClickNextPage(newPage: number) {
    setPage(newPage);
  }

  async function getCategoryName(id: number) {
    var url = baseUrl + "/categories/" + id;
    
    const response = await fetch(url);
    if (!response.ok) {
      // Not a 200 response! return...
      return;
    }
    // Get the info of the current category
    const category = await response.json();
    // Set current category name
    setTitle(category.name);
  }
  return (
    <IonPage>
      <IonHeader translucent={true} >
        <IonToolbar>
          <IonTitle>Results for: {title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Posts
          listOfPosts={posts}
          totPages={totPages}
          handleClickNextPage={handleClickNextPage}
        />
      </IonContent>
    </IonPage>
  );
}
