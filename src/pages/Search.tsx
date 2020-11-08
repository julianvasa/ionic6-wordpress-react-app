import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Container from "../components/Container";
import "./Search.css";

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Search posts 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Container name="Search" />
      </IonContent>
    </IonPage>
  );
};

export default Search;
