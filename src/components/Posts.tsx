import React, { useEffect, useState } from "react";
import {
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonGrid,
} from "@ionic/react";

export default function Posts() {
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        "https://blog.mozilla.org/wp-json/wp/v2/posts"
      );
      if (!response.ok) {
        // oops! something went wrong
        return;
      }

      const posts = await response.json();
      setPosts(posts);
    }

    loadPosts();
  }, []);
  return (
    <IonGrid>
      {posts.map((post, index) => (
        <IonGrid key={index}>
          <IonCard mode="ios">
            <IonCardContent class="ion-text-start">
              <IonCardTitle color="primary" mode="ios">
                {post.title.rendered}
              </IonCardTitle>
              <div
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </IonCardContent>
          </IonCard>
        </IonGrid>
      ))}
    </IonGrid>
  );
}
