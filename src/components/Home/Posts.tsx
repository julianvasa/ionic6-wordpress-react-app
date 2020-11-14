import React from "react";
import { IonCard, IonCardTitle, IonCardContent, IonGrid } from "@ionic/react";
import { SanitizeHTML } from "../Sanitize";
import { NextButtonContainer } from "./NextButtonContainer";
import Thumbnail from "./Thumbnail";

export const Posts = (props: {
  listOfPosts: any;
  totPages: number;
  handleClickNextPage: any;
}) => {
  return (
    <IonGrid>
      {props.listOfPosts.map(
        (
          post: {
            title: { rendered: string };
            excerpt: { rendered: string };
            featured_media:  any;
          },
          index: string | number | null | undefined
        ) => (
          <IonGrid key={index}>
            <IonCard mode="ios">
              <IonCardContent class="ion-text-start">
                <IonCardTitle color="primary" mode="ios">
                  {post.title.rendered.replace("&#8217;", "'")}
                </IonCardTitle>
                <Thumbnail mediaId ={post.featured_media} />
                <SanitizeHTML
                  html={post.excerpt.rendered.replace("&#8217;", "'")}
                />
              </IonCardContent>
            </IonCard>
          </IonGrid>
        )
      )}
      <NextButtonContainer 
        totPages={props.totPages}
        onChange={props.handleClickNextPage}
      />
    </IonGrid>
  );
};
