import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Container from "../components/Container";
import "./Categories.css";

const Categories: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Categories</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Main Categories</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Container name="Categories" />
      </IonContent>
    </IonPage>
  );
};

export default Categories;
