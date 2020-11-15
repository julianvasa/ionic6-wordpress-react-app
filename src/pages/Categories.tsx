import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Categories.css";
import CategoriesContainer from "../components/Categories/CategoriesContainer";

const Categories: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent={true} mode="ios">
        <IonToolbar>
          <IonTitle>Categories</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Categories</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CategoriesContainer />
      </IonContent>
    </IonPage>
  );
};

export default Categories;
