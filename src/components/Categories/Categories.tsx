import React from "react";
import {
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";

export const Categories = (props: { listOfCategories: any }) => {
  return (
    // Get only categories with count > 0 (which have related posts)
    <IonList>
      {props.listOfCategories
        .filter((category: { count: number }) => category.count > 0)
        .map(
          (
            cat: { name: string; count: number, id: number},
            index: string | number | null | undefined
          ) => (
            <IonItem href={"/home/"+(cat.id)} key={index}>
              <IonIcon icon={chevronForwardOutline} />
              <IonLabel style={{ paddingLeft: "20px" }}>
                <h2>{cat.name.replace("&amp;", "&")}</h2>
                <p>{cat.count} posts</p>
              </IonLabel>
            </IonItem>
          )
        )}
    </IonList>
  );
};
