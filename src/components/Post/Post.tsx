import React from "react";
import {
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonCardHeader,
} from "@ionic/react";
import { SanitizeHTML } from "../Sanitize";
import Thumbnail from "../Thumbnail";

export const Post = (props: { post: any }) => {
  var title = "";
  var content = "";
  if (props.post.title !== undefined) {
    title = props.post.title.rendered.replace("&#8217;", "'");
    content = props.post.content.rendered.replace("&#8217;", "'");
  }
  return (
    <IonCard>
      <Thumbnail mediaId={props.post.featured_media} />
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent class="ion-text-start">
        <SanitizeHTML html={content} />
      </IonCardContent>
    </IonCard>
  );
};
