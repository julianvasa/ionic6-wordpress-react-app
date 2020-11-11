import React, { useEffect, useState } from "react";
import { IonCard, IonCardTitle, IonCardContent, IonGrid } from "@ionic/react";
import { SanitizeHTML } from "./Sanitize";
import { NextButton } from "./NextButton";

export default function Posts() {
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totPages, setTotPages] = useState<number>(1);

  useEffect(() => {
    async function loadPosts(page: number) {
      const response = await fetch(
        "https://blog.mozilla.org/wp-json/wp/v2/posts?page=" + page
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
    // call loadPosts on component Posts render
    loadPosts(page);
  }, [page]);

  // Update page with the value of the page of the NextButton
  // this will also update trigger the useEffect which will render 10 more posts
  function getPageFromNextButton(newPage: number) {
    setPage(newPage);
  }
  

  return (
    <IonGrid>
      {posts.map((post, index) => (
        <IonGrid key={index}>
          <IonCard mode="ios">
            <IonCardContent class="ion-text-start">
              <IonCardTitle color="primary" mode="ios">
                {post.title.rendered}
              </IonCardTitle>
              <SanitizeHTML
                html={post.content.rendered.substring(0, 400) + "..."}
              />
            </IonCardContent>
          </IonCard>
        </IonGrid>
      ))}
      <NextButton totPages={totPages} onChange={getPageFromNextButton} />
    </IonGrid>
  );
}
