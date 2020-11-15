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
      <IonHeader translucent={true} >
        <IonToolbar>
          <IonTitle>Categories</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <CategoriesContainer />
      </IonContent>
    </IonPage>
  );
};

export default Categories;
