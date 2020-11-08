import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Container from "../components/Container";
import "./Recent.css";

const Recent: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recent posts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Recent posts</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Container name="Recent posts" />
      </IonContent>
    </IonPage>
  );
};

export default Recent;
