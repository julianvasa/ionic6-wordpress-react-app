import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "./Post";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

export default function PostContainer() {
  let { postid } = useParams<any>();
  const [post, setPost] = useState<any>({});
  const [postName, setPostName] = useState<string>("");
  const baseUrl = "https://blog.playstation.com/wp-json/wp/v2/posts/";

  useEffect(() => {
    async function loadPost() {
      var url = baseUrl;
      if (postid !== undefined) {
        url = url + postid;
      }
      const response = await fetch(url);
      if (!response.ok) {
        // Not a 200 response! return...
        return;
      }
      // Get the details of the post with id postid
      const currentPost = await response.json();
      // Modify state variable post
      setPost(currentPost);
      setPostName(currentPost.title.rendered.replace("&#8217;", "'"));
    }
    loadPost();
  }, [postid]);

  return ( 
    <IonPage>
      <IonHeader translucent={true} >
        <IonToolbar>
          <IonTitle>{postName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{postName}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Post post={post} />
      </IonContent>
    </IonPage>
  );
}
