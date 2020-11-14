import React from "react";
import { IonButton } from "@ionic/react";

export const NextButton = (props: {page:number, totPages: number, nextPage:any}) => {

  return (
    <p className="ion-padding-start ion-padding-end">
      <IonButton
        style={props.page < props.totPages ? {} : { display: "none" }}
        onClick={() => props.nextPage()}
        expand="block"
        fill="outline"
      >
        Next
      </IonButton>
    </p>
  );
}
