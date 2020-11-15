import React from "react";
import {
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonCardHeader,
  IonDatetime,
} from "@ionic/react";
import { SanitizeHTML } from "../Sanitize";
import { NextButtonContainer } from "./NextButtonContainer";
import Thumbnail from "../Thumbnail";

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
            featured_media: any;
            id: number;
            date: any;
          },
          index: string | number | null | undefined
        ) => (
          <IonGrid key={index}>
            <IonCard href={"/post/" + post.id}>
              <Thumbnail mediaId={post.featured_media} />
              <IonCardHeader>
                <IonCardTitle>
                  {post.title.rendered.replace("&#8217;", "'")}
                </IonCardTitle>
                  <IonDatetime
                    displayFormat="MMM DD, YYYY HH:mm"
                    value={post.date}
                  ></IonDatetime>
              </IonCardHeader>
              <IonCardContent class="ion-text-start">
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
